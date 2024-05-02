import json
import numpy as np
from FlagEmbedding import FlagModel
from qdrant_client import QdrantClient
from qdrant_client.http.models import Batch, VectorParams, Distance
import uuid

# Initialize the Qdrant client
client = QdrantClient(host="localhost", port=6333)

# Create a collection
client.create_collection(
    collection_name="arxiv",
    vectors_config=VectorParams(size=768, distance=Distance.COSINE),
)

# Initialize the embedding model
model = FlagModel('BAAI/bge-base-en-v1.5', 
                  query_instruction_for_retrieval="Represent this sentence for searching relevant passages: ",
                  use_fp16=True)

def generate_uuid_from_fields(json_obj):
    unique_string = f"{json_obj['id']}-{json_obj['title']}-{json_obj['authors']}"
    return uuid.uuid5(uuid.NAMESPACE_DNS, unique_string).hex

def embed_sentences(sentences):
    embeddings = model.encode(sentences)
    return embeddings

def upload_to_qdrant(collection_name, ids, vectors, payloads):
    # Convert payloads to the expected format by Qdrant client
    formatted_payloads = [{str(k): v for k, v in payload.items()} for payload in payloads]

    client.upsert(
        collection_name=collection_name,
        points=Batch(
            ids=ids,
            payloads=formatted_payloads,
            vectors=vectors,
        ),
    )

def process_file(file_path, start_line=0, batch_size=250):
    line_counter = 0 
    with open(file_path, 'r') as file:
        sentences = []
        metadata = []
        ids = []
        for line in file:
            line_counter += 1
            if line_counter < start_line:
                continue

            json_obj = json.loads(line)
            combined_text = f"{json_obj['title']} {json_obj['abstract']} {json_obj['authors']}"
            sentences.append(combined_text)
            metadata.append({k: v for k, v in json_obj.items()})
            ids.append(generate_uuid_from_fields(json_obj))

            if len(sentences) >= batch_size:
                embeddings = embed_sentences(sentences)
                vectors = [embedding.tolist() for embedding in embeddings]
                upload_to_qdrant("arxiv", ids, vectors, metadata)
                sentences = []
                metadata = []
                ids = []

        if sentences:  # Process any remaining items in the last batch
            embeddings = embed_sentences(sentences)
            vectors = [embedding.tolist() for embedding in embeddings]
            upload_to_qdrant("arxiv", ids, vectors, metadata)

# https://www.kaggle.com/datasets/Cornell-University/arxiv/data
file_path = "../data/arxiv-metadata-oai-snapshot.json"
start_line = 0  # Adjust this if you need to resume from a specific line
process_file(file_path, start_line=start_line)
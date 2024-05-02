from FlagEmbedding import FlagModel
from qdrant_client import QdrantClient
import sys
import numpy as np
from qdrant_client.http.models import SearchRequest, Filter, FieldCondition, Range, VectorParams, Distance, SearchParams, RecommendStrategy

default_seed_text = """
How small a thought it takes to fill a whole life!
"""

# Initialize the Qdrant client
client = QdrantClient(host="localhost", port=6333)

# Initialize the embedding model
model = FlagModel('BAAI/bge-base-en-v1.5', 
                  query_instruction_for_retrieval="Represent this sentence for searching relevant passages: ",
                  use_fp16=True)

def embed_text(text=None):
    if text is None:
        text = default_seed_text
    return model.encode([text])[0]

def search_dissimilar_vectors(embedded_text, similarity_cutoff=0.2):
    # Convert the embedded text to a list format
    vector = embedded_text.tolist()

    # Generate random vectors for positive and additional negative examples
    positive_vector = np.random.randn(768).tolist()
    negative_vector_random = np.random.randn(768).tolist()

    # Directly use the raw vectors for positive and negative examples
    # Note: The Qdrant client allows for the use of raw vectors directly
    results = client.recommend(
        collection_name="arxiv",
        positive=[positive_vector],  # Directly using the list of floats
        negative=[vector, negative_vector_random],  # Use raw vectors for negative examples
        strategy=RecommendStrategy.AVERAGE_VECTOR,
        limit=1
    )
    for result in results:
        return f"id: {result.payload['id']}\n title: {result.payload['title']},\n Score: {result.score} \n Abstract: {result.payload['abstract']}\n"


if __name__ == "__main__":
    # Check if a command line argument was provided
    if len(sys.argv) > 1:
        text = sys.argv[1]
    else:
        text = default_seed_text

    # Embed the text
    embedded_text = embed_text(text)

    # Search for dissimilar vectors
    results = search_dissimilar_vectors(embedded_text)

    # Print the results
    for result in results:
        print(f"id: {result.payload['id']}\n title: {result.payload['title']},\n Score: {result.score} \n Abstract: {result.payload['abstract']}\n")

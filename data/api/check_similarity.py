from sentence_transformers import SentenceTransformer, util
import nltk
import sys
nltk.download('punkt')

def calculate_semantic_repetitiveness(text):
    sentences = nltk.sent_tokenize(text)
    model = SentenceTransformer('all-MiniLM-L6-v2')

    embeddings = model.encode(sentences, convert_to_tensor=True)
    total_score = 0
    total_pairs = 0

    for i in range(len(embeddings)):
        for j in range(i + 1, len(embeddings)):
            score = util.pytorch_cos_sim(embeddings[i], embeddings[j]).item()
            total_score += score
            total_pairs += 1

    return total_score / total_pairs if total_pairs else 0

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python check_similarity.py <file_path>")
        sys.exit(1)

    file_path = sys.argv[1]
    with open(file_path, 'r') as file:
        text = file.read()
    repetitiveness = calculate_semantic_repetitiveness(text)
    print(repetitiveness)

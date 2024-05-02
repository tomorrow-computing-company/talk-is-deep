from flask import Flask, request, jsonify
from get_disimilar_abstract import embed_text, search_dissimilar_vectors
from check_similarity import calculate_semantic_repetitiveness

app = Flask(__name__)

@app.route("/search", methods=["POST"])
def search():
    data = request.json
    text = data.get("text")
    embedded_text = embed_text(text)
    results = search_dissimilar_vectors(embedded_text)
    return jsonify(results)

@app.route("/self_similarity", methods=["POST"])
def self_similarity():
    data = request.json
    text = data.get("text")
    if not text:
        return jsonify({"error": "No text provided"}), 400
    try:
        similarity_score = calculate_semantic_repetitiveness(text)
        return jsonify({"self_similarity": similarity_score})
    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
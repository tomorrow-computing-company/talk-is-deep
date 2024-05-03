import axios from "axios";

export const getSelfSimilarityScore = async (text: string, apiUrl?: string) => {
  try {
    const response = await axios.post(
      apiUrl ?? "http://localhost:5000/self_similarity",
      {
        text: text,
      }
    );
    return response.data.self_similarity;
  } catch (error: any) {
    console.error(
      "Error calling Flask server for self similarity:",
      error.message
    );
    throw error;
  }
};

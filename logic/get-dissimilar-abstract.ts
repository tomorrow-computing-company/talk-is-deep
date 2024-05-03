import axios from "axios";

export async function getDissimilarAbstract(lastMessage: string | undefined) {
  try {
    const response = await axios.post("http://localhost:5000/search", {
      text: lastMessage,
    });
    return response.data;
  } catch (error: any) {
    console.error("Error calling Flask server:", error.message);
    throw error;
  }
}

import axios from "axios";

export class vllm {
  private static readonly API_URL = "http://localhost:8000/v1/chat/completions";

  public async getCompletion(
    messages: Array<{ content: string; role: string }>,
    config: {
      model?: string;
      max_tokens?: number;
      temperature?: number;
      stop?: string[];
    } = {}
  ): Promise<any> {
    const data = {
      model: config.model || "hf-models/Meta-Llama-3-8B-Instruct",
      messages: [...messages],
      max_tokens: config.max_tokens || 3072,
      temperature: config.temperature || 0.5,
      stop: config.stop || ["<|im_start|>", "<|im_end|>"],
      stream: false,
    };

    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const makeRequest: any = async (retryCount = 10) => {
      try {
        const response = await axios.post(vllm.API_URL, data, headers);
        console.log(
          response.status,
          ": ",
          response.data.choices[0].message.content.trim()
        );
        // Adjusting to OpenAI's API response structure
        return response.data.choices[0].message.content.trim();
      } catch (error) {
        console.error(error);
        if (retryCount > 0) {
          const delay = Math.pow(2, 10 - retryCount) * 100; // Exponential backoff formula
          console.log(`Retrying after ${delay}ms...`);
          await new Promise((resolve) => setTimeout(resolve, delay));
          return makeRequest(retryCount - 1);
        } else {
          throw new Error("Max retries reached. Request failed.");
        }
      }
    };

    return makeRequest();
  }
}

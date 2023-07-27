import axios from "axios";

const BASE_URL = "https://api.api-ninjas.com/v1/quotes";
const apiKey = "BuKAIu3pb9tWYohPaFDJug==DJ3CX3Th9cFqe4BG";

function fetchQuotes(count = 10) {
  return axios.get(BASE_URL, {
    headers: {
      "X-Api-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
}

export { fetchQuotes };

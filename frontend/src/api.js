// const API_URL = "http://localhost:8000"; // Change if needed
const API_URL = process.env.REACT_APP_API_URL;

export async function sendMessage(message) {
  const res = await fetch(`${API_URL}/query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: message }),
  });

  const data = await res.json();
  return data.answer;
}

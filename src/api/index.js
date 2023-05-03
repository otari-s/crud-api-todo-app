import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

async function deleteDAta(id) {
  const res = await axios.delete(`/api/v1/task/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return res;
}
async function postData(body) {
  const res = await axios.post("/api/v1/task", body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return res;
}
async function getTodos() {
  const res = await axios("/api/v1/task", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return res;
}

export { deleteDAta, postData, getTodos };

import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const baseURL = "/api/v1";

const crudApiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

async function deleteDAta(id) {
  const res = await crudApiClient.delete(`/task/${id}`);
  return res;
}
async function postData(body) {
  const res = await crudApiClient.post("/task", body);
  return res;
}
async function getTodos() {
  const res = await crudApiClient("/task");
  return res;
}

async function getTodo(id) {
  const res = await crudApiClient(`/task/${id}`);
  return res;
}

async function updateTodo(body, id) {
  const res = await crudApiClient.put(`/task/${id}`, body);
  return res;
}

export { deleteDAta, postData, getTodos, getTodo, updateTodo };

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getEmployees = async () => {
  return Promise.resolve([
    { id: "EMP001", name: "Alice", role: "Developer" },
    { id: "EMP002", name: "Bob", role: "Designer" },
  ]);
};

export default api;

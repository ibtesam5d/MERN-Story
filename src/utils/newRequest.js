import axios from "axios";

const getUser = JSON.parse(localStorage.getItem("currentUser"));
const token = getUser?.token;
const newRequest = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  // withCredentials: true,
});

export default newRequest;

import axios from "axios";

const getUser = JSON.parse(localStorage.getItem("currentUser"));
const token = getUser?.token;
const newRequest = axios.create({
  baseURL: "https://story-api.onrender.com/api/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  // withCredentials: true,
});

export default newRequest;

import axios from "axios";

export default axios.create({
  
  // baseURL: "http://localhost:8000/api",
   baseURL: "http://ec2-52-79-243-2.ap-northeast-2.compute.amazonaws.com/:8000/api",
  withCredentials: true,
});

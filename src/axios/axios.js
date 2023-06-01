import Axios from "axios";

export const instance = Axios.create({
  baseURL: "http://localhost:8088/api/",
});

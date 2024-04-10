import Axios from "axios";

export default function useAxios() {
  const axios = Axios.create({
    baseURL: "https://anoopsblog-api.onrender.com",
  });

  return axios;
}

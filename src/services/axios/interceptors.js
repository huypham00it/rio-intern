import axios from "axios";

const authFetch = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers.common["Accept"] = "application/json";
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 404) {
      console.log("NOT FOUND");
    }
    return Promise.reject(error.response.data);
  }
);

export default authFetch;

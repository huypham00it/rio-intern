import axios from "axios";

const authFetch = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers.common["Accept"] = "application/json";
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const token = user.accessToken || "";
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return error;
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
    return error.response;
  }
);

export default authFetch;

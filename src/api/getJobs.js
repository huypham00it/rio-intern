import authFetch from "@/services/axios/interceptors";

const getJobs = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const data = await authFetch.get(`${baseUrl}/jobs`);
  return data;
};

export default getJobs;

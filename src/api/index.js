import axios from "axios";

export const getJobs = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const { data } = await axios.get(`${baseUrl}/jobs`);
  return data;
};

export const getSpotlights = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const { data } = await axios.get(`${baseUrl}/spotlights`);
  return data;
};

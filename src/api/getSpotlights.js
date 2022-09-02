import authFetch from "@/services/axios/interceptors";

const getSpotlights = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const data = await authFetch.get(`${baseUrl}/spotlights`);
  return data;
};

export default getSpotlights;

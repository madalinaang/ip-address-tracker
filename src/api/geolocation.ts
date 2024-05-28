import axios from "axios";

export const fetchGeolocation = async (ip: string) => {
  const response = await axios.get(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IP_GEOLOCATION_API_KEY}&ipAddress=${ip}`
  );
  return response.data;
};

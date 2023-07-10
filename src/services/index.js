import axios from "axios";

const baseUrl = "https://dev-api.fortiusys.com/api";

export const login = async (formData) => {
  return await axios.post(baseUrl + "/login", formData);
};

export const register = async (formData) => {
  return await axios.post(baseUrl + "/register", formData);
};

export const getCompanyLocations = async () => {
  return await axios.get(baseUrl + "/location");
};

export const getBusiness = async () => {
  return await axios.get(baseUrl + "/business");
};

import axios from "axios";

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_STRIPE_APP_KEY}`, 
};

export const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_DEV_URL}${url}`, 
      { headers } 
    );
    return response.data; 
  } catch (error) {
    console.error(error); 
    throw error; 
  }
};

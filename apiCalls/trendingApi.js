import axios from "axios";

export const getCoins = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    return response.data.coins;
  } catch (error) {
    console.error(error);
  }
};

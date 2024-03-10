import axios from "axios";

const baseUrl = `https://api.coingecko.com/api/v3`;

export const getCoins = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/search/trending`
    );
    return response.data.coins;
  } catch (error) {
    console.error(error);
  }
};

export const getCoinInfo = async (id) => {
  try {
    const response = await axios.get(
      `${baseUrl}/simple/price?ids=${id}&vs_currencies=inr%2Cusd&include_24hr_change=true`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getCoinsList = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/coins/list`,{
          params: {
            order: "market_cap_desc",
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
};

export const getOneCoinInfo = async (id) => {
  try {
    const response = await axios.get(
      `${baseUrl}/coins/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

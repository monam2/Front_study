import axios from "axios";

const baseUrl = "https://naras-api.vercel.app";

const fetchCountries = async () => {
  try {
    const response = await axios.get(baseUrl + "/all");
    return response.data;
  } catch (e) {
    //에러 대응 코드
    return [];
  }
};

const fetchSearchResult = async (query) => {
  try {
    const response = await axios.get(baseUrl + `/search?q=${query}`);
    return response.data;
  } catch (e) {
    return [];
  }
};

const fetchCountry = async (code) => {
  try {
    const response = await axios.get(baseUrl + `/code/${code}`);
    return response.data;
  } catch (e) {
    return null;
  }
};

export { fetchCountries, fetchSearchResult, fetchCountry };

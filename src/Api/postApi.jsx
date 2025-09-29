import axios from "axios";

export const getCountryData = () => {
  return axios.get(
    "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags"
  );
};
export const getCountryIndivData = (name) => {
  return axios.get(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,region,population,flags`
  );
};


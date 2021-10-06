import axios from 'axios';

export const makeRequest = async query => {
  const apiURL = 'https://api.github.com';
  const res = await axios.get(apiURL + query);
  return res.data;
};

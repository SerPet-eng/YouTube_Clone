import axios from 'axios';

export const fetchData = async () => {
  const fetchURL = await axios.get('http://localhost:3000/videos');
  const getResponse = await fetchURL.data;
  return getResponse;
};

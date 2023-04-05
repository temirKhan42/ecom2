import axios from 'axios';

async function loadProducts(offset) {
  try {
    console.log('Fetching');
    const response = await axios.get(`https://my-json-server.typicode.com/temirKhan42/my-server/posts?_limit=100&_offset=${offset}`);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};

export default loadProducts;

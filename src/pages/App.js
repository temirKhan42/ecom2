import { useEffect, useState } from 'react';
import loadProducts from '../utils/fetch.js';
import Stack from 'react-bootstrap/Stack';
import sortContext from '../utils/context/index.js';
import NavBar from '../components/navbar.jsx';
import Main from '../components/main.jsx';
import Footer from '../components/footer.jsx';

function BasicExample() {
  const [products, setProducts] = useState([]);
  const [searching, setSearching] = useState('');

  useEffect(() => {
    async function load() {
      const data = await loadProducts(1);
      setProducts(data);
    }

    load();
  }, []);

  const handleSort = (list) => {
    console.log(list);
    setProducts(list);
  }

  return (
    <sortContext.Provider value={{
      searching,
      setSearching,
      products,
      handleSort
    }}>
      <Stack gap={3}>
        <NavBar />
        {products.length > 0 ? <Main /> : null}
        <Footer />
      </Stack>
    </sortContext.Provider>
  );
}

export default BasicExample;

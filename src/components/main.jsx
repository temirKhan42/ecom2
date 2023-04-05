import { useEffect, useState } from 'react';
import useSort from '../utils/hooks';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import Stack from 'react-bootstrap/Stack';
import NavLink from 'react-bootstrap/NavLink'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Rating from './rating';

function Main() {
  const [active, setActive] = useState(1);
  const sort = useSort();
  const [productsPerPage, setProductsPerPage] = useState([]);
  const [products, setProducts] = useState([]);

  const menCloses = [
    { id: 1, title: "Shoes" },
    { id: 2, title: "T-shirts" },
    { id: 3, title: "Shirts" },
    { id: 4, title: "Pants" },
    { id: 5, title: "Shorts" },
    { id: 6, title: "Jackets" },
    { id: 7, title: "Suits" },
    { id: 8, title: "Sweaters" },
    { id: 9, title: "Hoodies" },
    { id: 10, title: "Sweatshirts" },
    { id: 11, title: "Polo shirts" },
    { id: 12, title: "Tank tops" },
    { id: 13, title: "Underwear" },
    { id: 14, title: "Socks" },
    { id: 15, title: "Swimwear" },
    { id: 16, title: "Hats" },
    { id: 17, title: "Belts" },
    { id: 18, title: "Ties" },
    { id: 19, title: "Scarves" },
    { id: 20, title: "Gloves" },
    { id: 21, title: "Sunglasses" },
    { id: 22, title: "Watches" },
    { id: 23, title: "Backpacks" },
    { id: 24, title: "Messenger bags" },
    { id: 25, title: "Wallets" },
    { id: 26, title: "Jewelry" },
    { id: 27, title: "Cufflinks" },
    { id: 28, title: "Pocket squares" },
    { id: 29, title: "Dress socks" },
    { id: 30, title: "Athletic wear" },
  ]

  useEffect(() => {
    const searchingList = sort.products
      .filter((i) => i?.title.toLowerCase().includes(sort.searching.toLowerCase()))
      .sort();
    const list = searchingList.length > 0 ? _.chunk(searchingList, 12) : [[]];
    setProducts(list);
    setProductsPerPage(list[0]);
  }, [sort.searching, sort.products]);

  const handlePagintion = (e, num) => {
    e.preventDefault();
    setActive(num);
    setProductsPerPage(products[num-1]);
  };

  return (
    <Container>
      <Row>
        <Col xs='2'>
          <ul className='list'>
            {menCloses.map((c, index) => {
              return (
                <li key={c?.id} className={c?.id === 1 ? "active" : ""}>
                  <a>{c?.title}</a>
                </li>
              );
            })}
          </ul>
        </Col>
        <Col>
          <Stack gap={3}>
            <Row xs={4} md={3} className="g-4">
              {productsPerPage.map((product, idx) => (
                <Col key={product?.id}>
                  <Card>
                    <NavLink href="#"><Card.Img variant="top" src={"/domino-shoe.jpg"} /></NavLink>
                    <Card.Body>
                      <Card.Title>{product?.title}</Card.Title>
                      <Card.Text>{product?.description}</Card.Text>
                      <h4>{product?.price} {product?.currency}</h4>
                      <div>
                        <Rating rating={product?.rating} />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
              {productsPerPage.length === 0 ? 
                <h5>Nothing was found</h5> : null
              }
            </Row>

            <div>
              <Pagination size="sm">
                {products.map((item, index) => {
                  return (
                    <Pagination.Item 
                      key={index+1} 
                      active={index+1 === active} 
                      onClick={(e) => handlePagintion(e, index+1)}
                    >
                      {index+1}
                    </Pagination.Item>
                  );
                })}
              </Pagination>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import GradeIcon from "@mui/icons-material/Grade";
import "./Products.css";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import { addToBasket } from "../context/AppReducer";
const Products = () => {
  const [products, setProducts] = useState([]);
  const state = useContext(GlobalContext);
  const dispatch = state.dispatch;
  console.log(state);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div className="products">
      <Container fluid>
        <Row>
          {products.map((product) => {
            return (
              <Col lg={4} md={6} sm={12} className="content">
                <div className="my-product" key={product.id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <p className="product-price">
                        <small>$</small>
                        <strong>{product.price}</strong>
                      </p>
                      <p className="rating">
                        <GradeIcon />
                        <GradeIcon />
                        <GradeIcon />
                        <GradeIcon />
                        <GradeIcon />
                      </p>
                    </Card.Body>
                    <Link to="/" className="my-img">
                      <Card.Img src={product.image} />
                    </Link>
                    <Button
                      className="btn-basket"
                      onClick={() => {
                        dispatch(addToBasket(product));
                      }}
                    >
                      Add to Basket
                    </Button>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Products;

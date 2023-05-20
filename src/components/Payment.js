import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import "./Payment.css";
import ProductCheckout from "./ProductCheckout";
import { Container, Row, Col } from "react-bootstrap";

const Payment = () => {
  const { basket, user } = useContext(GlobalContext);

  console.log(user);

  return (
    <div className="payment">
      <section className="nav-payment">
        <h3>
          <Link to="/cart">
            CheckOut (<span className="items">{basket.length} items</span>)
          </Link>
        </h3>
      </section>
      <section className="content">
        <Container fluid>
          <Row className="address-user">
            <Col lg={3} md={4} sm={6} className="left-sec">
              Delivery Address
            </Col>
            <Col lg={9} md={8} sm={6} className="right-sec">
              <p>{user ? `${user.email}` : ""}</p>
              <p>Alexandria,Egypt</p>
            </Col>
          </Row>
          <Row className="items-user">
            <Col lg={3} md={4} sm={6} className="left-sec">
              Review items and delivery
            </Col>
            <Col lg={9} md={8} sm={6} className="right-sec">
              {basket.map((product) => {
                return (
                  <ProductCheckout
                    id={product.id}
                    image={product.image}
                    price={product.price}
                    des={product.description}
                  />
                );
              })}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Payment;

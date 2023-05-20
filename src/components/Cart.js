import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Cart.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ProductCheckout from "./ProductCheckout";
// import Subtotal from "./Subtotal";
import { deleteAll } from "../context/AppReducer";
const Checkout = () => {
  const { user, basket, dispatch } = useContext(GlobalContext);
  console.log(user);
  return (
    <div className="shopping-cart">
      <Container fluid>
        <Row>
          <Col lg={9} md={8} sm={12}>
            <div className="cart-left">
              <Image
                src="img/amazon-advertising-2021.jpg"
                fluid
                className="cart-img"
              />
              <h3 className="cart-title">
                <span className="user">Hello</span> ,
                {user ? `${user.email}` : "sign in"}
              </h3>

              <p className="heading-basket">your shopping Basket</p>

              {basket.length > 0 ? (
                <div>
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
                </div>
              ) : (
                <p className="message">
                  you have no items in your basket, to buy one or more
                  items,click "add to basket".
                </p>
              )}
              {basket.length > 0 ? (
                <button
                  className="delete-all"
                  onClick={() => dispatch(deleteAll())}
                >
                  Delete All
                </button>
              ) : (
                ""
              )}
            </div>
          </Col>
          <Col lg={3} md={4} sm={12}>
            <div className="cart-right">{/* <Subtotal /> */}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;

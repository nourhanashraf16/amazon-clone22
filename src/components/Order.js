import React, { useContext } from "react";
import moment from "moment/moment";
import { Container } from "react-bootstrap";
import ProductCheckout from "./ProductCheckout";
import "./order.css";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  return (
    <div className="order">
      <Container fluid>
        <h1>order</h1>
        <div className="parent-details ">
          <p className="order-time">
            order-time:
            {moment.unix(order.data.created).format("MMMM Do YYYY, h:mm:ss a")}
          </p>
          <p className="order-id">
            <small>{order.id}</small>
          </p>
        </div>
        <div className="products-order">
          {order.data.basket?.map((item) => {
            return (
              <ProductCheckout
                id={item.id}
                image={item.image}
                des={item.description}
                price={item.price}
                hiddenButton
              />
            );
          })}
        </div>
        <div className="total-price">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  total-price:<strong>{value}</strong>
                </p>
              </>
            )}
            decimalScale={2}
            value={order.data.amount * 10}
            displayType="text"
            thousandSeparator={true}
            prefix="$"
          />
        </div>
      </Container>
    </div>
  );
};

export default Order;

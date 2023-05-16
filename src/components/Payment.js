import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import "./Payment.css";
import ProductCheckout from "./ProductCheckout";
import { Container, Row, Col } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";
import { getTotalPrice } from "../context/AppReducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Axios from "./Axios";
import { deleteAll } from "../context/AppReducer";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const Payment = () => {
  const { basket, user, dispatch } = useContext(GlobalContext);
  //1
  const [clientsecret, setClientSecret] = useState();
  const [error, setError] = useState(null);
  //changeعشان فالاول تبقى مضلمة واول ما اعمل
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcseeing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await Axios({
        method: "post",
        url: `/payments/create?total=${getTotalPrice(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
      return response;
    };
    getClientSecret();
  }, [basket]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcseeing(true);
    const payload = await stripe
      .confirmCardPayment(clientsecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        const ref = doc(db, "users", user?.uid, "orders", paymentIntent.id);
        setDoc(ref, {
          //data
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
        setSucceeded(true);
        setError(null);
        setProcseeing(false);
        navigate("/orders", { replace: true });
        dispatch(deleteAll());
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(error ? error.message : "");
  };

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
          <Row className="payment-method">
            <Col lg={3} md={4} sm={6} className="left-sec payment-method">
              Payment Method
            </Col>
            <Col lg={9} md={8} sm={6} className="right-sec">
              <form onSubmit={handleSubmit}>
                <CardElement
                  onChange={handleChange}
                  className="my-card-element"
                />
                <CurrencyFormat
                  renderText={(value) => (
                    <h5 className="order-total">
                      Order Total :<strong>{value}</strong>
                    </h5>
                  )}
                  decimalScale={2}
                  value={getTotalPrice(basket)}
                  displayType="text"
                  thousandSeparator={true}
                  prefix="$"
                />
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="buy-now"
                    disabled={disabled || processing || succeeded}
                  >
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {error ? <div>{error}</div> : ""}
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Payment;

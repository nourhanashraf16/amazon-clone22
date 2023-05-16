import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import Order from "./Order";
import { Container } from "react-bootstrap";
import "./orders.css";

const Orders = () => {
  const { user, basket } = useContext(GlobalContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      const collRef = collection(db, "users", user?.uid, "orders");
      // ده عشان ارتب ال orders
      const orderdRef = query(collRef, orderBy("created", "desc"));
      onSnapshot(orderdRef, (querySnapshot) => {
        return setOrders(
          querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <Container fluid>
        <h2>Your Orders</h2>
        <div className="orders-order">
          {orders.map((order) => {
            return <Order order={order} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Orders;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Signin from "./components/Signin";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { useEffect, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import { auth } from "./firebase";
import { setUser } from "./context/AppReducer";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const state = useContext(GlobalContext);
  const dispatch = state.dispatch;
  const stripePromise = loadStripe(
    "pk_test_51N5svpCWocVVkEk7QYDKYA8lN6btPifjQG5oIIWdc6Q5H5GOGf4wJIpzwgSaV2nnZhCSZ3h2dCXvU6HE7GrrbT9400Ak8hHLEM"
  );

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Header2 />
              <Cart />
              <Footer />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
              <Footer />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

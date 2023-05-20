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

function App() {
  const state = useContext(GlobalContext);
  const dispatch = state.dispatch;
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
              <Payment />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

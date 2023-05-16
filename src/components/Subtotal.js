import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { getTotalPrice } from "../context/AppReducer";
import { useNavigate } from "react-router-dom";
const Subtotal = () => {
  const { basket } = useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items)<strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getTotalPrice(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />

      <input type="checkbox" id="check-cart" className="check-cart" />
      <label for="check-cart"> This order contains a gift</label>

      <div className="parent-proceed-btn">
        <button className="proceed-btn" onClick={() => navigate("/payment")}>
          proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Subtotal;

import React from "react";
import "./Subtotal.css";
import CurrencyForamt from "react-currency-format";
import { useStateValue } from "./StateProvider";

const calculatePrice = (state) => {
  let total = 0;
  for (const price of state.prices) {
    total = total + price;
  }
  return total;
};

function Subtotal() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyForamt
        renderText={(value) => (
          <>
            <p>
              {/* part of the homework */}
              Subtotal ({state.basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={calculatePrice(state)} //part of homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

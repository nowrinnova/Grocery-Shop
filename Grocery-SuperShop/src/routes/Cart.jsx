import React from "react";
import CartItem from "../Components/CartItem";
import CartSummery from "../Components/CartSummery";

function Cart() {
  return (
    <div className="bag-page">
      <div className="bag-item-container">
        <CartItem></CartItem>
      </div>
      <CartSummery></CartSummery>
    </div>
  );
}

export default Cart;

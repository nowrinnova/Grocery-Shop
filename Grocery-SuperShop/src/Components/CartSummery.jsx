import React from "react";

function CartSummery() {
  const bagItem={
    totalMRP:1367,
    discount:20,
    CONVENIENCE_FEE:126,
    totalAmount:1200,

  }
  return (
    <>
      <div class="bag-details-container">
        <div class="price-header">PRICE DETAILS (2 Items) </div>
        <div class="price-item">
          <span class="price-item-tag">Total MRP</span>
          <span class="price-item-value">Rs {bagItem.totalMRP}</span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Discount on MRP</span>
          <span class="price-item-value priceDetail-base-discount">
            -Rs{bagItem.discount}
          </span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Convenience Fee</span>
          <span class="price-item-value">Rs {bagItem.CONVENIENCE_FEE}</span>
        </div>
        <hr />
        <div class="price-footer">
          <span class="price-item-tag">Total Amount</span>
          <span class="price-item-value">Rs {bagItem.totalAmount}</span>
        </div>
      </div>
      <button class="btn-place-order">
        <div class="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
}

export default CartSummery;

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
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS (2 Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">Rs {bagItem.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -Rs{bagItem.discount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">Rs {bagItem.CONVENIENCE_FEE}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">Rs {bagItem.totalAmount}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
}

export default CartSummery;

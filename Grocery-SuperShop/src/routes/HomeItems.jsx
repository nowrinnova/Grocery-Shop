import React from "react";

function HomeItems({item}) {

  return (
    <div className="">
      <div className="card item-container" style={{width: "18rem"}}>
        <img src={item.image} className="item-img" alt="..." />
        <div className="card-body text-center">
          <div className="rating">
            {item.rating.stars} ⭐ {item.rating.count}k
          </div>
          <div className="company-name">{item.company}</div>
          <div className="item-name">{item.item_name}</div>
          <div className="price">
            <span className="current-price">₹ {item.current_price}</span>
            <span className="orginal-price">₹ {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
          </div>
          <button
            className="btn-add-bag"
            // onClick={}
          >
            Add To Bag
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeItems;

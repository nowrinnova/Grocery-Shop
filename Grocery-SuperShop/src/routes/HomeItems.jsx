import React from "react";

function HomeItems() {
  const item=
    
  {
    id: "001",
    image: "images/1.jpg",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.5,
      count: 1400
    }
  }
  return (
    <div>
      <div class="card item-container" style={{width: "18rem"}}>
        <img src={item.image} class="item-img" alt="..." />
        <div class="card-body text-center">
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
            onClick={console.log("command procced")}
          >
            Add To Bag
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeItems;

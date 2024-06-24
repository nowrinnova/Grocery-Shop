import React from "react";
import HomeItems from "./HomeItems";
import { useSelector } from "react-redux";
function Home() {
  const items = useSelector((state) => {
    return state.items;
  });
  console.log(items);
  return (
    <div className="items-container">
      {items.map((item) => (
        <HomeItems key={item.id} item={item}></HomeItems>
      ))}
    </div>
  );
}

export default Home;

import React from "react";
import { useGlobalContext } from "./context";
import BakeryItem from "./BakeryItem";
import BakeryReceipt from "./BakeryReceipt";
import "./main.css";
const Bakery = () => {
  const { items } = useGlobalContext();
  return (
    <div className="bakery-app">
      <div className="bakery-grid">
        {items.map((item) => {
          return <BakeryItem key={item.id} {...item} />;
        })}
      </div>
      <BakeryReceipt />
    </div>
  );
};
export default Bakery;

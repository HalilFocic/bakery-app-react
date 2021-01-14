import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import BakeryItem from "./BakeryItem";
import "./main.css";
const Bakery = () => {
  const { cart } = useGlobalContext();
  return (
    <div className="bakery-app">
      <div className="bakery-grid">
        {cart.map((item) => {
          return <BakeryItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};
export default Bakery;

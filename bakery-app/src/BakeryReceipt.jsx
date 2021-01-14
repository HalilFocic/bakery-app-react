import React from "react";
import { useGlobalContext } from "./context";
import ReceiptItem from "./ReceiptItem";
const BakeryReceipt = () => {
  const { cart } = useGlobalContext();
  return (
    <div className="receipt">
      <div className="receipt__title">Your receipt</div>
      <div className="receipt__items">
        {cart.map((item) => {
          if (item.amount > 0) {
            return <ReceiptItem {...item} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default BakeryReceipt;

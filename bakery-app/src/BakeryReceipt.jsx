import React from "react";
import { useGlobalContext } from "./context";
import ReceiptItem from "./ReceiptItem";
const BakeryReceipt = () => {
  const { cart, total } = useGlobalContext();
  return (
    <div className="receipt">
      <div className="receipt__items">
        <div className="receipt__title">Your receipt</div>
        {cart.map((item) => {
          if (item.amount > 0) {
            return <ReceiptItem {...item} key={item.id} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="receipt__total">
        Total <span>${total}</span>
      </div>
    </div>
  );
};

export default BakeryReceipt;

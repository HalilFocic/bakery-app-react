import React from "react";

const ReceiptItem = ({ title, amount, price }) => {
  return (
    <div className="receipt__items__item">
      <div className="receipt__items__item__title">{title}</div>
      <div className="receipt__items__item__amount">X{amount}</div>
      <div className="receipt__items__item__total">${price * amount}</div>
    </div>
  );
};

export default ReceiptItem;

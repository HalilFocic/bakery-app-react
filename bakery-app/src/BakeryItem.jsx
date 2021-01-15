import React from "react";
import { useGlobalContext } from "./context";

const BakeryItem = ({ id, title, price, img, amount, text }) => {
  const { increaseAmount, decreaseAmount } = useGlobalContext();
  return (
    <article className="bakery-grid__item">
      <img src={img} alt={title} className="bakery-grid__item__image" />
      <div className="bakery-grid__item__title">{title}</div>
      <div className="bakery-grid__item__desc">{text}</div>
      <div className="bakery-grid__item__buttons">
        <button
          className="bakery-grid__item__button"
          onClick={() => decreaseAmount(id)}
        >
          -
        </button>
        <span className="bakery-grid__item__amount">{amount}</span>
        <button
          className="bakery-grid__item__button"
          onClick={() => increaseAmount(id)}
        >
          +
        </button>
        <div className="bakery-grid__item__price">${price * amount}</div>
      </div>
    </article>
  );
};

export default BakeryItem;

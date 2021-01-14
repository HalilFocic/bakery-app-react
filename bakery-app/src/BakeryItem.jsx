import React from "react";

const BakeryItem = ({ id, title, price, img, amount, text }) => {
  return (
    <article className="bakery-grid__item">
      <img src={img} alt={title} className="bakery-grid__item__image" />
      <div className="bakery-grid__item__title">{title}</div>
      <div className="bakery-grid__item__desc">{text}</div>
      <div className="bakery-grid__item__buttons"></div>
    </article>
  );
};

export default BakeryItem;

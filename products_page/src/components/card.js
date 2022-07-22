import React from "react";
import Star from "../images/star.png"

export default function Card(prop) {
  // console.log(prop);
  return (
    <div className="card">
      <div className="product_img_div">
        <img className="product_img" src={prop.image} alt="product_img" />
      </div>
      <span><img src={Star} alt="star"/> {prop.rating.rate}  ({prop.rating.count})</span>
      <p className="product_title">{prop.title}</p>
      <p className="product_price">Rs. {prop.price}</p>
    </div>
  );
}

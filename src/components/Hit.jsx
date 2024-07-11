import React from "react";
import { Link } from "react-router-dom";

const Hit = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div className="col-md-3 special-products-grid text-center" key={index}>
          <Link className="brand-name" to="/one">
            <img src={item.brandSrc} title="name" />
          </Link>
          <Link className="product-here" to="/one">
            <img src={item.imgSrc} title="product-name" />
          </Link>
          <h4>
            <Link to="/one">{item.name}</Link>
          </h4>
          <Link className="product-btn" to="/one">
            <span>109.90$</span>
            <small>GET NOW</small>
            <label> </label>
          </Link>
        </div>
      ))}
    </>
  );
};
export default Hit;

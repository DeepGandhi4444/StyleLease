import React from "react";
import Hit from "../components/Hit";
import { Link } from "react-router-dom";
import { HitItems } from "../data/Products";
const Products = () => {
  return (
    <>
      <div className="content">
     
         <div className="container">
          <div className="special-products">
            <div className="s-products-head">
              <div className="s-products-head-left">
                <h3>
                  SPECIAL <span>PRODUCTS</span>
                </h3>
              </div>
              <div class="s-products-head-right">
                <Link to="/products">
                  <span> </span>view all products
                </Link>
              </div>
              <div class="clearfix"> </div>
              <div class="special-products-grids">
                <Hit items={HitItems} />
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="special-products">
            <div className="s-products-head">
              <div className="s-products-head-left">
                <h3>
                  LATEST <span>PRODUCTS</span>
                </h3>
              </div>
              <div class="s-products-head-right">
                <Link to="/products">
                  <span> </span>view all products
                </Link>
              </div>
              <div class="clearfix"> </div>
              <div class="special-products-grids">
                <Hit items={HitItems} />
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>

        <Link to="#" id="toTop" style={{ display: "block" }}>
          <span id="toTopHover" style={{ opacity: 1 }}></span>
        </Link>
      </div>
    </>
  );
};
export default Products;

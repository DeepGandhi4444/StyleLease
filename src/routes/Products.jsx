import React from "react";
import Hit from "../components/Hit";
import { HitItems } from "../data/Products";
const Products = () => {
  return (
    <>
      <div className="content">
        {/* <div className="container">
          <div className="clearfix"> </div>

          <div className="special-products all-poroducts">
            <div className="s-products-head">
              <div className="s-products-head-left">
                <h3>
                  SPECIAL <span>PRODUCTS</span>
                </h3>
              </div>
              <div className="s-products-head-right">
                <a href="#">
                  <span> </span>view all products
                </a>
              </div>
              <div className="clearfix"> </div>
            </div>

            <div class="special-products-grids">
              <Hit items={HitItems} />
            </div>
          </div>

          <div className="special-products all-poroducts latest-products">
            <div className="s-products-head">
              <div className="s-products-head-left">
                <h3>
                  LATEST <span>PRODUCTS</span>
                </h3>
              </div>
              <div className="s-products-head-right">
                <a href="#">
                  <span> </span>view all products
                </a>
              </div>
              <div className="clearfix"> </div>
            </div>

            <div class="special-products-grids">
              <Hit items={HitItems} />
            </div>
          </div>
        </div> */}
         <div className="container">
          <div className="special-products">
            <div className="s-products-head">
              <div className="s-products-head-left">
                <h3>
                  SPECIAL <span>PRODUCTS</span>
                </h3>
              </div>
              <div class="s-products-head-right">
                <a href="/products">
                  <span> </span>view all products
                </a>
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
                <a href="/products">
                  <span> </span>view all products
                </a>
              </div>
              <div class="clearfix"> </div>
              <div class="special-products-grids">
                <Hit items={HitItems} />
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>

        <a href="#" id="toTop" style={{ display: "block" }}>
          <span id="toTopHover" style={{ opacity: 1 }}></span>
        </a>
      </div>
    </>
  );
};
export default Products;

import React from "react";
import { Link } from "react-router-dom";
import CustomSlider from "../components/Slider";
import Hit from "../components/Hit";
import { HomeSlider } from "../data/Slider";
import { HitItems } from "../data/Products";
const Home = () => {
  return (
    <>
      <div id="top" className="callbacks_container">
        <ul className="rslides" id="slider4">
          <CustomSlider items={HomeSlider} />
        </ul>
      </div>

      <div className="clearfix"> </div>

      <div className="content">
        <div className="container">
          <div className="top-row">
            <div className="col-xs-4">
              <div className="top-row-col1 text-center">
                <h2>WOMAN</h2>
                <img
                  className="r-img text-center"
                  src="images/img-w.jpg"
                  title="name"
                  alt=""
                />
                <span>
                  <img src="images/obj1.png" title="name" alt="" />
                </span>
                <Link className="r-list-w" to="/one">
                  <img src="images/list-icon.png" title="list" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="top-row-col1 text-center">
                <h2>MAN</h2>
                <img
                  className="r-img text-center"
                  src="images/man-r-img.jpg"
                  title="name"
                  alt=""
                />
                <span>
                  <img src="images/obj2.png" title="name" alt=""/>
                </span>
                <Link className="r-list-w" to="/one">
                  <img src="images/list-icon.png" title="list" alt=""/>
                </Link>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="top-row-col1 text-center">
                <h2>KIDS</h2>
                <img
                  className="r-img text-center"
                  src="images/kid-r-img.jpg"
                  title="name"
                  alt=""
                />
                <span>
                  <img src="images/obj3.png" title="name" alt="" />
                </span>
                <Link className="r-list-w" to="/one">
                  <img src="images/list-icon.png" title="list" alt=""/>
                </Link>
              </div>
            </div>
            <vdi className="clearfix"> </vdi>
          </div>
        </div>

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
      </div>
    </>
  );
};

export default Home;

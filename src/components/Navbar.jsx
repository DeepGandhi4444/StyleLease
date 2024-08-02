import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="top-header">
          <div className="logo">
            <Link to="/">
              <img src="images/StyleLease.png" title="brandlogo" alt="" />
            </Link>
          </div>
          <div className="clearfix"> </div>
        </div>

        <div className="top-header-nav">
          <nav className="top-nav main-menu">
            <ul className="top-nav">
              <li>
                <Link to="/products">PRODUCTS </Link>
                <span> </span>
              </li>
              <li>
                <Link to="/products">CAMPAINGS</Link>
                <span> </span>
              </li>
              <li>
                <Link to="/products">SERVICES</Link>
                <span> </span>
              </li>
              <li>
                <Link to="/products">BRANDS</Link>
                <span> </span>
              </li>
              <li>
                <Link to="/products">ABOUT US</Link>
              </li>
              <div className="clearfix"> </div>
            </ul>
            <Link to="/products" id="pull">
              <img src="images/menu.png" title="menu" alt=""/>
            </Link>
          </nav>

          <div className="top-header-search-box">
            <Search />
          </div>

          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}

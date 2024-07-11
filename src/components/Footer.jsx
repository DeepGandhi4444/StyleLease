import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      {/*--footer-*/}
      <div className="navbar shade navbar-fixed-bottom" role="navigation">
        <div className="container-fluid">
          <ul className="container-fluid">
            <li
              className="container-fluid"
              style={{ listStyle: "none", paddingTop: 10 }}
            >
              <Link to="/products" style={{ paddingLeft: 0 }}>
                <img src="images/categories.png" />
              </Link>
              <Link to="/" style={{ paddingLeft: 22 }}>
                <img src="images/home1.png" />
              </Link>
              <Link to="/cart" style={{ paddingLeft: 18 }}> 
                <img src="images/cart1.png" />
              </Link>
              <Link to="/profile" style={{ paddingLeft: 20 }}>
                <img src="images/account.png" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/*-//footer-*/}
    </>
  );
};
export default Footer;

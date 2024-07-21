import React,{useRef} from "react";
import { Link } from "react-router-dom";
import { Ripple } from "primereact/ripple";
const Footer = () => {

  return (
    <>
      {/*--footer-*/}
      <div className="navbar shade navbar-fixed-bottom p-ripple" role="navigation">
      {/* <Ripple/> */}
        <div className="container-fluid">
          <ul className="container-fluid">
            <li
              className="container-fluid p-ripple"
              style={{ listStyle: "none", paddingTop: 10 }}
            >
              <Link to="/products" className="p-ripple" style={{ paddingLeft: 0 }}>
              <Ripple/>
                <img src="images/categories.png" />
                
              </Link>
              <Link to="/home" className="p-ripple" style={{ paddingLeft: 22 }}>
              <Ripple/>
                <img src="images/home1.png" />
              </Link>
              <Link to="/cart" className="p-ripple" style={{ paddingLeft: 18 }}> 
              <Ripple/>
                <img src="images/cart1.png" />
              </Link>
              <Link to="/profile" className="p-ripple" style={{ paddingLeft: 20 }}>
              <Ripple/>
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

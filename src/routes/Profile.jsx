import React from 'react'

const Profile=()=>{
    return(
        <>
  {/*--container--*/}
  <div className="container-fluid">
    {/*--top-header--*/}
    <div className="top-header">
      <div className="logo">
        <a href="index.html">
          <img src="images/StyleLease.png" title="barndlogo" />
        </a>
      </div>
    </div>
    <div className="container-fluid" style={{ paddingTop: 50 }}>
      <div className="row">
        <div className="col-sm-6 text-center">
          <img
            src="images/img_avatar.png"
            className="profilelogo"
            alt="Avatar"
            style={{ width: 100 }}
          />
        </div>
        <div className="col-sm-6 text-center">
          <h2>Deep Gandhi</h2>
          <p>8866442233</p>
        </div>
      </div>
    </div>
    <div>
      <ul className="container-fluid">
        <li
          className="container-fluid"
          style={{ listStyle: "none", paddingTop: 10 }}
        >
          <a
            href="products.html"
            style={{ paddingLeft: 32, textAlign: "center", color: "coral" }}
          >
            <i className="fa-solid fa-box">
              <p style={{ paddingTop: 10 }}>Orders</p>
            </i>
          </a>
          <a
            href="products.html"
            style={{ paddingLeft: 50, textAlign: "center", color: "coral" }}
          >
            <i className="fa-solid fa-heart">
              <p style={{ paddingTop: 10 }}>Wishlist</p>
            </i>
          </a>
        </li>
        <li
          className="container-fluid"
          style={{ listStyle: "none", paddingTop: 10 }}
        >
          <a
            href="products.html"
            style={{ paddingLeft: 23, textAlign: "center", color: "coral" }}
          >
            <i className="fa-solid fa-gift">
              <p style={{ paddingTop: 10 }}>Coupons</p>
            </i>
          </a>
          <a
            href="products.html"
            style={{ paddingLeft: 32, textAlign: "center", color: "coral" }}
          >
            <i className="fa-solid fa-headphones">
              <p style={{ paddingTop: 10 }}>Help Center</p>
            </i>
          </a>
        </li>
      </ul>
    </div>
    <section id="aa-support">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-support-area">
              {/* single support */}
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="aa-support-single">
                  <i
                    className="fa-solid fa-truck-fast"
                    style={{ color: "coral" }}
                  />
                  <h4>FREE SHIPPING</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam, nobis.
                  </p>
                </div>
              </div>
              {/* single support */}
              <div
                className="col-md-4 col-sm-4 col-xs-12"
                style={{ paddingTop: 30 }}
              >
                <div className="aa-support-single">
                  <i className="fa-solid fa-clock" style={{ color: "coral" }} />
                  <h4>30 DAYS MONEY BACK</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam, nobis.
                  </p>
                </div>
              </div>
              {/* single support */}
              <div
                className="col-md-4 col-sm-4 col-xs-12"
                style={{ paddingTop: 30 }}
              >
                <div className="aa-support-single">
                  <i className="fa-solid fa-phone" style={{ color: "coral" }} />
                  <h4>SUPPORT 24/7</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam, nobis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*--footer-*/}
    <div className="navbar shade navbar-fixed-bottom" role="navigation">
      <div className="container-fluid">
        <ul className="container-fluid">
          <li
            className="container-fluid"
            style={{ listStyle: "none", paddingTop: 10 }}
          >
            <a href="products.html" style={{ paddingLeft: 0 }}>
              <img src="images/categories.png" />
            </a>
            <a href="index.html" style={{ paddingLeft: 22 }}>
              <img src="images/home1.png" />
            </a>
            <a href="cart.html" style={{ paddingLeft: 18 }}>
              <img src="images/cart1.png" />
            </a>
            <a href="#" style={{ paddingLeft: 20 }}>
              <img src="images/account.png" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/*-//footer-*/}
    {/*-to-top-*/}
    {/*//to-top-*/}
  </div>
  {/*--container--*/}
</>

    )
}
export default Profile;
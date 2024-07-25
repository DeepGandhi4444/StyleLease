import React, { useState, useRef } from "react";
import ProductGallery from "../components/ProductGallery";
import { Ripple } from "primereact/ripple";
import { Rating } from "primereact/rating";
import { Panel } from "primereact/panel";
import { Link } from "react-router-dom";
import { HitItems } from "../data/Products";
import { Toast } from "primereact/toast";
const Singleproduct = ({ cartItems, setCartItems }) => {
  const [value, setValue] = useState(null);
  const ref = useRef(null);
  // const addToCart = (product) => {
  //   setCartItems([...cartItems, product]);
  // };
  const toast = useRef(null);
  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "added to cart",
      detail: "Item added to the cart succesfully",
      life:3000
    });
    // toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
  };
  // const dualfunc = () => {
  //   setCartItems([...cartItems, HitItems[0]]);
  //   show();
  // };
  const dualfunc = () => {
    setCartItems([...cartItems, HitItems[0]]);
    console.log(toast.current); // Check if toast ref is set correctly
    toast.current.show({ severity: 'success', summary: 'added to cart', detail: 'Item added to the cart succesfully' });
  };
  return (
    <>
      <div className="content">
        <div className="container"></div>
        <div className="clearfix"> </div>

        <div className="product-details">
          <div className="container">
            <div className="product-details-row1">
              <div className="product-details-row1-head">
                <h2>Men'sFootwear</h2>
                <p>Hookset Handcrafted Fabric Chukka</p>
              </div>
              <div className="col-md-4 product-details-row1-col1">
                <link rel="stylesheet" href="css/etalage.css" />

                <div className="details-left">
                  <ProductGallery />
                </div>
              </div>
              <div className="col-md-8 product-details-row1-col2">
                <div className="card flex justify-content-center">
                  <Rating
                    value={value}
                    onChange={(e) => setValue(e.value)}
                    cancel={true}
                    style={{ margin: "5px" }}
                  />
                </div>

                <div className="product-price">
                  <div className="product-price-left text-right">
                    {/* <span>174.00</span> */}
                    <h5>109.00$</h5>
                  </div>

                  <div className="clearfix"> </div>
                </div>
                <div className="product-price-details">
                  <p className="text-right">
                    This is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here,e{" "}
                  </p>
                  <Link className="shipping" to="/one">
                    <span> </span>Free shipping
                  </Link>
                  <div className="clearfix"> </div>
                  <div className="product-size-qty">
                    <div className="pro-size">
                      <span>Size:</span>
                      <select>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                      </select>
                    </div>
                    <div className="pro-qty">
                      <span>Qty:</span>
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="clearfix"> </div>
                  <div className="product-cart-share">
                    <div className="add-cart-btn">
                      <div className="p-ripple">
                        <input
                          type="button"
                          defaultValue="Add to cart"
                          onClick={show}
                        />
                        <Ripple />
                      </div>
                    </div>
                    <Toast ref={toast} className="custom-toast-success" />{" "}
                    {/* Move Toast component here */}
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>

            <Panel ref={ref} header="Product Overview" toggleable>
              <h4>DESCRIPTION:</h4>
              <p>
                With its beautiful premium leather, lace-up oxford styling,
                recycled rubber outsoles and 9-inch height, this Earthkeepers
                City Premium style is an undeniably handsome boot. To complement
                its rustic, commanding outer appearance, we've paid attention to
                the inside as well - by adding SmartWool® faux shearling to the
                linings and crafting the footbed using our exclusive
                anti-fatigue comfort foam technology to absorb shock. Imported.
              </p>
            </Panel>
            <Panel ref={ref} header="Feature" toggleable>
              <h4>DESCRIPTION:</h4>
              <p>
                With its beautiful premium leather, lace-up oxford styling,
                recycled rubber outsoles and 9-inch height, this Earthkeepers
                City Premium style is an undeniably handsome boot. To complement
                its rustic, commanding outer appearance, we've paid attention to
                the inside as well - by adding SmartWool® faux shearling to the
                linings and crafting the footbed using our exclusive
                anti-fatigue comfort foam technology to absorb shock. Imported.
              </p>
            </Panel>
            <Panel ref={ref} header="Customer Reviews" toggleable>
              <h4>DESCRIPTION:</h4>
              <p>
                With its beautiful premium leather, lace-up oxford styling,
                recycled rubber outsoles and 9-inch height, this Earthkeepers
                City Premium style is an undeniably handsome boot. To complement
                its rustic, commanding outer appearance, we've paid attention to
                the inside as well - by adding SmartWool® faux shearling to the
                linings and crafting the footbed using our exclusive
                anti-fatigue comfort foam technology to absorb shock. Imported.
              </p>
            </Panel>

            <div className="clearfix"> </div>
          </div>
        </div>

        <div className="clearfix"> </div>
      </div>
    </>
  );
};
export default Singleproduct;

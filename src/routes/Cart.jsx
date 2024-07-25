import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Ripple } from "primereact/ripple";
const Cart = ({ cartItems, setCartItems }) => {
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const toast =useRef(null);
  const show = () => {
    toast.current.show({ severity: 'success', summary: 'Checkout', detail: 'Proceeding to checkout', life: 3000 });
    // setCartItems([]);
  };
  const dualfunc = () => {
    setCartItems([]);
    show();
  };
  return (
    <>
                <Toast ref={toast} className="custom-toast-success" />

      <div className="top-header">
        <div className="logo">
          <Link to="/home">
            <img src="images/StyleLease.png" title="brandlogo" alt="" />
          </Link>
        </div>
      </div>
      <div style={styles.container}>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <div className="add-cart-btn p-ripple" style={{marginBottom:"10px"}}>
        <button onClick={dualfunc} style={styles.button}>
          <Ripple/>
          Checkout
        </button>
          </div>
        )}

        {cartItems.map((item) => (
          <div key={item.id} style={styles.cartItem}>
            <img src={item.imgSrc} alt={item.name} style={styles.image} />
            <div style={styles.details}>
              <h3>{item.name}</h3>
              <p>Price: $99</p>
              <button
                onClick={() => removeFromCart(item)}
                style={styles.button}
                className="p-ripple"
              >
                Remove
                <Ripple/>
              </button>
              <Link to="/one" >
                <button style={styles.button} className="p-ripple">View</button>
                <Ripple/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "white",
    borderRadius: "6px",
  },
  image: {
    // width: '100px',
    height: "100px",
    marginRight: "20px",
  },
  details: {
    flex: 1,
  },
  button: {
    backgroundColor: "#EC3427",
    color: "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    marginRight: "5px",
  },
};

export default Cart;

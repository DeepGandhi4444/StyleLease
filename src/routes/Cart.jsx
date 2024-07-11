// import React from "react";

// const Cart = () => {
//   return (
//     <>
    //   <div className="top-header">
    //     <div className="logo">
    //       <a href="index.html">
    //         <img src="images/StyleLease.png" title="barndlogo" />
    //       </a>
    //     </div>
    //   </div>
//       <div style={{ height: "50px" }}></div>

//       <div className="container-fluid">

//       <div className="cartProductHit">
//         <div className="cartProductImg">
//           <img
//             src="images/product-slide/image1_large.jpg "
//             id="cart-product-img"
//             alt=""
//           />
//         </div>
//         <div className="cartProductDetails">
//           Lorem ipsum dolor sit amet
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };
// export default Cart;

import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, setCartItems }) => {
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <>
     <div className="top-header">
        <div className="logo">
          <a href="index.html">
            <img src="images/StyleLease.png" title="barndlogo" />
          </a>
        </div>
      </div>
    <div style={styles.container}>
      <h2>Cart</h2>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      {cartItems.map(item => (
          <div key={item.id} style={styles.cartItem}>
          <img src={item.imgSrc} alt={item.name} style={styles.image} />
          <div style={styles.details}>
            <h3>{item.name}</h3>
            <p>Price: $99</p>
            <button onClick={() => removeFromCart(item)} style={styles.button}>Remove</button>
           <Link to="/one" >
           <button style={styles.button} >View</button>
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
    padding: '20px',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor:"white",
borderRadius:"6px"
  },
  image: {
    // width: '100px',
    height: '100px',
    marginRight: '20px',
  },
  details: {
    flex: 1,
  },
  button: {
    backgroundColor: '#EC3427',
    color: 'white',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    marginRight:"5px",
  },
};

export default Cart;


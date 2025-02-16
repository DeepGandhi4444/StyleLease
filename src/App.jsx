import "./App.css";
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Singleproduct from "./routes/Singleproduct";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./routes/Profile";
import Cart from "./routes/Cart";
import Login from "./auth/login";
import Signup from "./auth/Signup";
import { PrimeReactProvider } from 'primereact/api';

function App({components}) {
  const value = {
    ripple: true,
  }
  return (
    <PrimeReactProvider value={value}>
    <Router>
      <Main />
    </Router>
    </PrimeReactProvider>
  );
}

function Main() {
  const location = useLocation();
  const noNavbarPaths = ["/cart", "/profile","/","/signup"];
  const noFooterPaths = ["/","/signup"];
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>    
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/one"
          element={
            <Singleproduct cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<p>404 not found</p>} />
      </Routes>
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;

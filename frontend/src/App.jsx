import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

/* Page imports */

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <ToastContainer />
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
      {/* Sticky blur line that stops at the end of <main> (right before footer)
      <div className="pointer-events-none sticky bottom-0 left-0 right-0 h-10 z-50">
        <div className="absolute inset-0 backdrop-blur-sm bg-black/5 mask-gradient-to-t"></div>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/10 mask-gradient-to-t"></div>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/20 mask-gradient-to-t"></div>
      </div> */}
      <Footer />
    </div>
  );
};

export default App;

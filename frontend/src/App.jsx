import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
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
  return (
    <div className="bg-white dark:bg-gray-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/placeOrder" element={<PlaceOrder/>} />
        <Route path="/product/:productId" element={<Product/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

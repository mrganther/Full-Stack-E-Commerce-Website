import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

{
  /* Page imports */
}
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

const pageVariants = {
  initial: {
    opacity: 0,
    x: -100,
    scale: 0.95,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: 100,
    scale: 0.95,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

const App = () => {
  const location = useLocation();
  const isPlaceOrder = location.pathname === "/place-order";

  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <ToastContainer />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/cart"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Cart />
              </motion.div>
            }
          />
          <Route
            path="/collection"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Collection />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="/login"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Login />
              </motion.div>
            }
          />
          <Route
            path="/orders"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Orders />
              </motion.div>
            }
          />
          <Route
            path="/place-order"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <PlaceOrder />
              </motion.div>
            }
          />
          <Route
            path="/product/:productId"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Product />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
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

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, getCartData, updateQuantity, navigate } =
    useContext(ShopContext);

  const cartData = getCartData();

  return (
    <div className=" my-10 px-4 mb-40 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="bg-white mr-30 ml-30 mt-10 mb-0 p-10 sm:mr-15 sm:ml-15">
        <div className="text-2x1 mb-3">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>
        <div>
          <div className="py-4 border bg-gray-50 border-gray-400 grid grid-cols-[0.5fr_4fr_0.5fr] sm:grid-cols-[0.5fr_4fr_1fr] items-center font-semibold text-gray-800 gap-4">
            <h1></h1>
            <h1 className="">Product</h1>
            <h1>Quantity</h1>
          </div>
          {cartData.map((item) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            return (
              <div
                key={`${item._id}-${item.color}`}
                className="py-4 border-l border-r border-b border-gray-400 text-gray-700 grid grid-cols-[0.5fr_4fr_0.5fr] sm:grid-cols-[0.5fr_4fr_1fr] items-center gap-4"
              >
                <img
                  onClick={() => updateQuantity(item._id, item.color, 0)}
                  src={assets.bin_icon}
                  alt=""
                  className="w-4 ml-5 sm:w-5 cursor-pointer"
                />
                <div className="flex items-start gap-6">
                  <img
                    src={productData.image[0]}
                    alt=""
                    className="w-16 sm:w-20"
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                    <p className="text-lg">
                      {currency}
                      {productData.price}
                    </p>
                  </div>
                </div>
                <input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.color,
                          Number(e.target.value)
                        )
                  }
                  className="border max-w-10 sm:max-w-15 px-1 sm:px-2 py-1"
                  type="number"
                  min={1}
                  value={item.quantity}
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end">
              <button
                onClick={() => navigate("/place-order")}
                className="bg-black text-white text-sm rounded-sm my-8 px-8 py-3"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

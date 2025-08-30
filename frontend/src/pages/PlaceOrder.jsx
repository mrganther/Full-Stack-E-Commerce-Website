import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const { products, currency, getCartData, delivery_fee, getCartAmount } =
    useContext(ShopContext);

  const cartData = getCartData();

  return (
    <div>
      <div className="flex flex-col sm:grid sm:grid-cols-[2fr_2fr]">
        {/* Right Side */}

        <div className="sm:order-2  sm:h-[calc(100vh-64px)] bg-gray-100 shadow-lg">
          <div className="sm:mr-[5%] p-[5%]">
            <div className="grid grid-rows-2">
              <div>
                {cartData.map((item) => {
                  const productData = products.find(
                    (product) => product._id === item._id
                  );

                  return (
                    <div
                      key={`${item._id}-${item.color}`}
                      className="py-4 border-l border-r border-b border-gray-400 text-gray-700 grid grid-cols-[0.5fr_4fr_0.5fr] sm:grid-cols-[0.5fr_4fr_1fr] items-center gap-4"
                    >
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
                          <p className="text-sm text-gray-500">
                            Color: {item.color}
                          </p>
                          <p className="text-lg">
                            {currency}
                            {productData.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="text-sm grid grid-rows-[1fr_2fr_1fr]">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>
                    {currency} {getCartAmount()}.00
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>
                    {currency} {delivery_fee}.00
                  </p>
                </div>
                <div className="flex justify-between text-2xl">
                  <b>Total</b>
                  <b>
                    {currency}
                    {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
                    .00
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Left Side */}

        <div className="sm:order-1 sm:h-[calc(100vh-64px)] sm:overflow-y-auto bg-white">
          <div className="sm:ml-[5%] p-[5%]">
            <h1>left</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

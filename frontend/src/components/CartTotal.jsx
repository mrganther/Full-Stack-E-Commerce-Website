import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="bg-gray-50 text-gray-700 text-2x1 pl-10 pt-5 border-gray-400 border-t border-r border-l">
        <h1 className="pb-5 font-bold text-2xl">Cart total</h1>
      </div>
      <div className="flex flex-col gap-4 text-gray-700 text-sm pl-10 pr-10 pt-5 pb-5 border-gray-400 border">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr className="border-gray-400" />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>
        <hr className="border-gray-400" />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;

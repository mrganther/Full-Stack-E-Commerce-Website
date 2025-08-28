import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const SearchBar = () => {
  const { search, setSearch, setShowSearch } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-center bg-gray-50 border border-gray-400 px-1 py-1 my-1">
      <img src={assets.search_icon} alt="" className="w-4 m-1.5" />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 outline-none bg-inherit text-sm placeholder:italic"
        type="text"
        placeholder="Search products"
      />
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cart_cross_icon}
        alt=""
        className="inline w-3 cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;

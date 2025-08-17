import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Link, NavLink } from 'react-router-dom'
import useScrollPosition from "../Hooks/useScrollPosition";
import { assets } from "../assets/assets";

export default function Navbar() {
  const isScrolled = useScrollPosition();
  const [visible, setVisible] = useState(false);

  return (
    <div>
    <nav className={`flex fixed top-0 left-0 w-full z-10 transition-colors ${isScrolled ? "bg-amber-200 dark:bg-gray-800 backdrop-blur-md shadow" : ""}`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">

        <Link to={'/'}>
          <h1 className={`${isScrolled 
            ? "text-gray-800 dark:text-gray-100" 
            : "text-gray-200"} `}
            >
            Brand Name
          </h1>
        </Link>

        <ul className={`hidden md:flex gap-7 text-sm ${isScrolled
          ? "text-amber-600 dark:text-gray-100"
          : "text-gray-100" } `}>

          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className="hover:bg-gray-700"/>
          </NavLink>
          <NavLink to='/product/:productId' className='flex flex-col items-center gap-1'>
            <p>Products</p>
            <hr className="hover:bg-gray-700"/>
          </NavLink>
          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>About</p>
            <hr className="hover:bg-gray-700"/>
          </NavLink>
          <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>Contact</p>
            <hr className="hover:bg-gray-700"/>
          </NavLink>

        </ul>

        <div className="flex items-center gap-6">
          <img src={assets.search_icon} alt="" className="w-5 cursor-pointer" />

          <div className="group relative">
            <img src={assets.profile_icon} alt="" className="w-5 cursor-pointer" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>          

          <Link to='/cart' className="relative">
            <img src={assets.cart_icon} alt="" className="w-8 min-w-8:" />
            <p className="absolute right-[-5px] bottom-[-5px] w-5 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]">10</p>
          </Link>
          <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="" className="w-5 cursor-pointer sm:hidden"/>
        </div>
      </div>
      <div className="flex align-left items-center p-4">
        <DarkModeToggle />
      </div>
    </nav>

        {/* Sidebar menu for small screens */}
    <div className={`fixed top-0 right-0 bottom-0 bg-white transition-all z-40 ${visible ? 'w-full' : 'w-0'}`}>
      <div className="flex flex-col text-gray-600">
        <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
          <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
          <p>Back</p>
        </div>
        <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6" to='/'>HOME</NavLink>
        <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6" to='/collection'>PRODUCTS</NavLink>
        <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6" to='/about'>ABOUT</NavLink>
        <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6" to='/contact'>CONTACT</NavLink>

      </div>
    </div>
  </div>
  );
}

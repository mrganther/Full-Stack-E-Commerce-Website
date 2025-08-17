import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='p-4 bg-gray-800 dark:bg-black'>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-32'/>
                <p className="w-full md:w-2/3 text-gray-300">heelloo there blah blah yeahah</p>
            </div>

            <div>
                <p className="text-xl font-medium mb-5 text-gray-300">POTTERY</p>
                <ul className='flex flex-col gap-1 text-gray-300'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className="text-1x font-medium mb-5 text-gray-300">GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-300'>
                    <li>email go here xD</li>
                    <li>insta link</li>
                </ul>
            </div>
        </div>
            <div>
                <p className='py-3 text-sm text-center text-gray-300'>Copyright your mum lmao</p>
            </div>
    </div>
  )
}

export default Footer
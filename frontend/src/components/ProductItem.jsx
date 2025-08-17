import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className='text-gray-700 dark:text-gray-200 cursor-pointer'>
        <div className="overflow-hidden">
            <img src={image} alt="" className="hover:scale-102 transition ease-in-out z-0" />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>

    </Link>
  )
}

export default ProductItem
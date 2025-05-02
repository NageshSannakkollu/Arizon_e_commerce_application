import React from 'react'
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    const {productDetails} = props 
    const {image,category,title,price,id} = productDetails;
    // console.log("id:",id)
  return (
    <Link to={`/products/${id}`}>
    <li className='border-red-900 w-[200px] lg:w-[300px]'> 
        <img src={image} alt={category} className="aspect-square h-[200px] w-[200px] bg-cover bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between ">
                <div>
                  <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${price}</p>
              </div>
        </li>
    </Link>
  )
}

export default ProductItem
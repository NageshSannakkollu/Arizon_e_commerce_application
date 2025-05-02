import React, { useState } from 'react'
import { BsDash } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQty, deleteCartProduct, increaseQty } from '../redux/cartSlice';

const CartListItem = (props) => {
    const {cartListDetails} = props
    const {image,title,price,id,quantity}= cartListDetails
    // const cartList = useSelector(state => state.cart)
    console.log("CartListView:",quantity)

    const dispatch = useDispatch()

    const decreaseQuantity = (id) => {
        console.log("ID:",id)
        dispatch(decreaseQty(id))        
    }

    const increaseQuantity = () => {
        dispatch(increaseQty(id))  
    }
  
    console.log("quantity:",quantity)

    const deleteCartItem = (id) => {
      dispatch(deleteCartProduct(id))
    }

  return (
    <li className="flex py-6 mr-6 ml-6">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img src={image} alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." className="size-full object-cover" />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    {title}
                  </h3>
                  <p className="ml-4">${quantity*price}</p>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
              <div className='flex items-center'>
                  <button type='button' className='' onClick={() => decreaseQuantity(id)}><BsDash/></button>
                  <p className="text-gray-500 mr-5 ml-5"> {quantity}</p>
                  <button type='button' onClick={() => increaseQuantity(id)}><GoPlus/></button>
              </div>
                <div className="flex">
                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => deleteCartItem(id)}>Remove</button>
                </div>
              </div>
            </div>
          </li>

  )
}

export default CartListItem
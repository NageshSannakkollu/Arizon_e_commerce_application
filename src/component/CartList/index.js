import React from 'react'
import Header from '../Header'
import { useSelector } from 'react-redux'
import CartListItem from '../CartListItem'
import { Link } from 'react-router-dom'

const CartList = () => {
    const cartList = useSelector(state => state.cart)
    let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      }) 
    console.log("cartList:",total)
  return (
    <div>
        <Header/>
        {cartList.length > 0 ?
        <>
        <ul>
            {cartList.map(cart => (
                <CartListItem cartListDetails={cart} key={cart.id} />
            ))}
        </ul>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${total}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <a
                      href="/"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
        </>
        : 
        <div className='flex flex-col justify-center items-center h-[400px]'>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1746120905/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector_d9jjff.jpg' alt='cart' className='h-[250px] w-[250px]'/>
            <h3 className='font-bold'>Your cart is empty</h3>
            <h4 className='font-semibold text-black-10'>Looks like you have not added anything to you cart.</h4>
            <h4 className='font-semibold text-black-50'>Go ahead and explore top categories</h4> 
            <Link to="/products">
                <button type='button' className='bg-blue-600 text-white p-2 rounded-xl mt-5'>Add Products</button>
            </Link>
        </div> 
        }
    </div>
  )
}

export default CartList
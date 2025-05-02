import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BsDashCircle,BsPlusCircle } from "react-icons/bs";
import Header from '../Header'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart} from '../redux/cartSlice';


const ProductDetails = () => {
    const[singleProduct,setSingleProduct] = useState([])
    const {id} = useParams()
    const [quantity,setQuantity] = useState(1)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cartList = useSelector(state => state.cart)
    // console.log("cartList:",cartList)
    
    useEffect (() => {
        const getSingleProduct = async() => {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            const singleData = await res.data;
            //console.log("Data:",singleData)
            setSingleProduct({...singleData,quantity})
        }
        getSingleProduct(); 
    },[id])

    const clickAddToCart = ()=> {
        const isIdAlreadyInCart = cartList.some(item => item.id === singleProduct.id);
        if(!isIdAlreadyInCart){
            dispatch(addToCart({...singleProduct,quantity}))
            navigate("/products")
        }
         navigate("/products")
    }

    const decreaseQuantity = () => {
        if(quantity > 1){
            setQuantity(prev => prev - 1)
        }
    }

    const increaseQuantity = () => {
        setQuantity(prev => prev+1)
    }
    
    const {image,title,rating,price,description} = singleProduct
  return (
    <div>
        <Header/>
        <div className='flex justify-center p-8' >
                    <div key={id} className='flex'>
                        <img src= {image} alt='Product Image' className='h-[500px] w-1/2 mr-8'/> 
                        <div  className='h-[400px] w-1/2'>
                            <div className='flex justify-between'>
                                <strong>{title}</strong>
                                <strong>${quantity*price}</strong>
                            </div>
                            <div className='flex justify-start items-center'>
                                {/* <strong className='mr-2'>{rating[0]}</strong> */}
                                <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1731046323/pngtree-five-star-rating-icon-png-image_4974126_pyoc0a.png' alt="rating" className='h-12'/>
                            </div>
                            <strong>Details:</strong>
                            <p className='mt-5 leading-6'>{description}</p>
                            <div className='flex items-center mt-5'>
                                <button type='button' onClick={() => decreaseQuantity()}><BsDashCircle/></button>
                                <p className='mr-5 ml-5'>{quantity}</p>
                                <button type='button' onClick={() => increaseQuantity()}><BsPlusCircle/></button>
                                 </div>
                            <div className='flex justify-center items-center mt-8 bg-blue-600 text-white font-semibold'>
                                <button type='button' className='mr-5 ml-5 p-3 rounded-xl bottom-0' onClick={clickAddToCart}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default ProductDetails
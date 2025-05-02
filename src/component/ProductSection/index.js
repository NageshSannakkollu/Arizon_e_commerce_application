import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../Header'
import ProductItem from '../ProductItem';

const apiConstant = {
    "INITIAL":'initial',
    "SUCCESS":'success',
    "FAILURE":'failure',
    "INPROGRESS":"inProgress"
}

const ProductSection = () => {
    const [productsList,setProductsList] = useState([])
    const [apiStatus,setApiStatus] = useState(apiConstant.INITIAL)
    const [errorMessage,setErrorMessage] = useState('')
    console.log("apiStatus:",apiStatus)

    useEffect(() => {
        setApiStatus(apiConstant.INPROGRESS);
        try {
            const getAllProducts = async() => {
            const productRes = await axios.get('https://fakestoreapi.com/products')
            const productsData = await productRes.data;
            setProductsList(productsData)
            setApiStatus(apiConstant.SUCCESS);
        }
        getAllProducts()
        } catch (error) {
            setApiStatus(apiConstant.FAILURE)
            setErrorMessage(error.message)
        }
    },[])   

  return (
    <div>
        <Header/>
        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productsList.map(product => (
                <ProductItem productDetails={product} key={product.id}/>
            ))}
        </ul>
    </div>
  )
}

export default ProductSection
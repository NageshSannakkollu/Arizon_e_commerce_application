import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col justify-center items-center h-full'>
        <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1743151479/not-found-blog-img_eefok5.png' alt='Not Found' className='w-[200px] h-[200px] mt-10' />
        <Link to="/" >
            <button type='button' className='border-red-800 rounded-lg mt-5'>Go to Dashboard</button>
        </Link>
    </div>
    </>
  )
}

export default NotFound
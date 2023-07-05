import React from 'react'
import cartIcon from './images/icon-cart.svg'

export default function Product({setCart}) {
  return (
    <main className='product-page-container'>
        {/* img component here */}
        <div className='product-details'>
            <div> 
                <h4>Sneaker Company</h4>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            </div>
            <span className='price'>$125.00</span>
            <span className='discount'>50%</span>
            <p className='old-price'>$250.00</p>
            <div className='add-to-cart-container'>
                {/* <Counter /> */}
                <button><img src={cartIcon}/>Add to cart</button>
            </div>
        </div>
    </main>
  )
}

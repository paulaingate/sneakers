import React, {useState} from 'react'
import Header from './Header'
import Product from './Product'
import Footer from './Footer'

export default function App() {
  const [cart, setCart] = useState([])
  console.log(cart)

  function addToCart(newProduct) {
    if (!cart.find(product => product.id === newProduct.id)) {
      setCart(prev => [...prev, newProduct])
    }
  }

  return (
    <>
      <Header cart={cart}/>
      <Product addToCart={addToCart} />
      <Footer />
    </>
  )
}


import React, {useState} from 'react'
import Header from './Header'
import Product from './Product'
import Footer from './Footer'

export default function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <Header cart={cart}/>
      <Product setCart={setCart} />
      <Footer />
    </>
  )
}


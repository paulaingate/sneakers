import React, {useState} from 'react'
import Header from './Header'
import Product from './Product'
import Footer from './Footer'
import Cart from './Cart'

export default function App() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false);

  function addToCart(newProduct) {
    if (!cart.find(product => product.id === newProduct.id)) {
      setCart(prev => [...prev, newProduct])
    }
  }

  function removeItem(item) {
    setCart(prev => {
      return prev.filter(p => p.id !== item.id)
    })
  }

  return (
    <>
      <Header cart={cart} showCart={showCart} setShowCart={setShowCart} removeItem={removeItem}/>
      <Product addToCart={addToCart} />
      <Footer />
    </>
  )
}


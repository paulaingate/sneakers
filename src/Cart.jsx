import React from "react";
import deleteIcon from './images/icon-delete.svg'

export default function Cart({ cart, removeItem }) {

  const cartItems = cart.map((item) => {
    return (<div className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <span>${Number(item.price).toFixed(2)} x {item.quantity}</span>
                <span className="cart-full-price">${Number(item.price * item.quantity).toFixed(2)}</span>
              </div>
              <img className="delete-icon" src={deleteIcon} alt="delete icon" onClick={() => removeItem(item)}/>
            </div>)
  })

  return (
    <div className="cart">
      <h3>Cart</h3>
      <div className="cart-content">
        {cart.length > 0 ? cartItems : <p className="cart-empty">Your cart is empty.</p>}
        {cart.length > 0 && <button>Checkout</button>}
      </div>
    </div>
  );
}

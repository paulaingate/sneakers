import React, { useState } from "react";
import logo from "./images/logo.svg";
import menuIcon from "./images/icon-menu.svg";
import cartIcon from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";
import Menu from "./Menu";
import Cart from "./Cart";

export default function Header({cart, showCart, setShowCart, removeItem}) {
  const [showMenu, setShowMenu] = useState(false);

  const cartItemCount = cart.reduce((total, item) => {return total + item.quantity}, 0)

  return (
    <header>
      <img
        className="menu-btn"
        src={menuIcon}
        alt="menu button"
        onClick={() => setShowMenu(true)}
      />
      <img className="main-logo" src={logo} alt="sneakers logo" />

      <Menu open={showMenu} closeMenu={() => setShowMenu(false)} />

      <div className="cart-btn-container">
        <img 
          className={`cart-btn ${showCart && 'open'}`} 
          src={cartIcon} 
          alt="cart icon" 
          onClick={() => setShowCart(prev => !prev)}
        />
        {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>}
      </div>
        {showCart && <Cart cart={cart} removeItem={removeItem}/>}

      <img className="avatar" src={avatar} alt="profile avatar" />
    </header>
  );
}

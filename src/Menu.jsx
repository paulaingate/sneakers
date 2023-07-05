import React from 'react'
import closeIcon from './images/icon-close.svg'

export default function Menu({open, closeMenu}) {

  const menuItems = ['Collections', 'Men', 'Women', 'About', 'Contact']


  return (
    <>
    <div className={open && 'overlay'}></div>
      <div className={`menu-container ${!open && 'hidden'}`}>
        <img 
          className='close-menu-btn' 
          src={closeIcon} 
          alt="close icon"  
          onClick={closeMenu}
        />
        {menuItems.map(item => (
          <div className='menu-item'>
            <p key={item}>{item}</p>
          </div>
        ))}
      </div>
    </>
  )
}

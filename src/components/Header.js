import React from 'react'

export default function Header(props) {
  
  return (
    <div className='header'>
      <h2> Shopping Cart </h2>
      <div className='header-items-right'>
        <div className="cart-quantity">
          <h4> Cart </h4>
          <h4 id='quantity'> {props.cart_quantity} </h4>
        </div>
        <div className='Sign-in'>
          <h4> Sign In</h4>
        </div>
      </div>
    </div>
  )
}
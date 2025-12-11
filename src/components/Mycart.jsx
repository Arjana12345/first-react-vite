import React from 'react'

export const Mycart = () => {
  return (
    <div className="cart-container">
        <h1>Your Cart</h1>
        <div className="cart-item">
            <img src="https://en.wikipedia.org/wiki/Computer_mouse#/media/File:3-Tasten-Maus_Microsoft.jpg" alt="Product 1" className="item-image"/>
            <div className="item-details">
                <div className="item-title">Product Name 1</div>
                <div className="item-price">$50.00</div>
                <div className="item-quantity">Quantity: 1</div>
            </div>
            <button className="remove-item">Remove</button>
        </div>
    </div>
  )
}

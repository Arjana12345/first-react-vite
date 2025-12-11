import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/slice'


export const Mycart = () => {
	const selector = useSelector((state)=>state.cart.value)
	console.log(selector);
	
	const dispatch = useDispatch();


  return (
    <div className="cart-container">
        <h1>Your Cart {selector} </h1>
        <div className="cart-item">
            <img src="https://en.wikipedia.org/wiki/Computer_mouse#/media/File:3-Tasten-Maus_Microsoft.jpg" alt="Product 1" className="item-image"/>
            <div className="item-details">
                <div className="item-title">Product Name 1</div>
                <div className="item-price">$50.00</div>
                <div className="item-quantity">Quantity: 1</div>
            </div>
            <button onClick={() => dispatch(removeItem())} className="remove-item">Remove</button>
        </div>
    </div>
  )
}

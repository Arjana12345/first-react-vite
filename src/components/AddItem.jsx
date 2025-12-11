import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/slice'


export const AddItem = () => {


const dispatch = useDispatch();

  return (
    <div className="cart-container">
        <h1>Add Item </h1>
        <div className="cart-item">
            <img src="https://en.wikipedia.org/wiki/Computer_mouse#/media/File:3-Tasten-Maus_Microsoft.jpg" alt="Product 1" className="item-image"/>
            <div className="item-details">
                <div className="item-title">Product Name 1</div>
                <div className="item-price">$50.00</div>
                </div>
            <button onClick={()=>dispatch(addItem())} className="add-item">Add to Cart</button>
        </div>
    </div>
  )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/slice'


export const Mycart = () => {
	//const selector = useSelector((state)=>state.cart.value)
  const cartSelector = useSelector((state)=>state.cart.items)
	console.log(cartSelector);
	
	const dispatch = useDispatch();


  return (
    <div className="cart-container">
        <h1>Your Cart  - {cartSelector.length} </h1>
		
		{
			cartSelector.length > 0 ? (
				cartSelector.map((data,idx) => (
					<div className="cart-item" key={idx}>
						<img src={data.thumbnail} alt="Product 1" className="item-image"/>
						<div className="item-details">
							<div className="item-title">{data.title}</div>
							<div className="item-price">{data.price}</div>
							<div className="item-quantity">{data.quantity}</div>
						</div>
						<button onClick={() => dispatch(removeItem(data.id))} className="remove-item">Remove</button>
					</div>
				))
				

			):
			(
				<p>No Items into your bucket </p>
			)
		}
        
    </div>
  )
}

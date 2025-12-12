import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/slice'
import { getProductData } from '../redux/productSlice'
import { useSelector } from 'react-redux'



export const AddItem = () => {

const productSelector = useSelector((state)=>state.products.items)
console.log(productSelector);

const dispatch = useDispatch();

  return (
    <div className="cart-container">
        <h1>Items
			<button onClick={()=>dispatch(getProductData())} className="add-item">Fetch More Items</button>
		</h1>
		{
			productSelector.length > 0 ? (
				productSelector.map((data,idx)=>(
					<div className="cart-item" key={data.id}>
						<img src={data.thumbnail} alt="Product 1" className="item-image"/>
						<div className="item-details">
							<div className="item-title">{data.title}</div>
							<div className="item-price">{data.price}</div>
						</div>
						<button onClick={()=>dispatch(addItem(data))} className="add-item">Add to Cart</button>
					</div>
				))
			): (
				<p>No items found.</p>
			)
		}
        
    </div>
  )
}

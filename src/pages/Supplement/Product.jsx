import React, { useContext } from 'react'
import { ShoppingContext } from '../../context/Shop';

const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShoppingContext);

    const CartItemAmt = cartItems[id]

  return (
  <div className='product'>
    <img src={productImage}></img>
    <div className='product-name'>
         <h3>{productName}</h3>
         <p>${price}</p>

    </div>
    <button className='addButton' onClick={() => addToCart(id)}>
        Add To Cart {CartItemAmt > 0 && <> ({CartItemAmt})</>}
        </button>
  </div>
  )
}

export default Product

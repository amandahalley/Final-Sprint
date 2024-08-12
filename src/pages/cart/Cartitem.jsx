import React, { useContext } from 'react';
import { ShoppingContext } from '../../context/Shop';

const CartItem = (props) => {
    const { cartItems, addToCart, removeFromCart, updateCartCount } = useContext(ShoppingContext);

    if (!props.data) {
        console.error("CartItem received undefined data:", props);
        return null; 
    }

    const { id, productName, price, productImage } = props.data;

    return (
        <div className='cartItem'>
            <img src={productImage} alt={productName} />
            <div className='product-name'>
                <h3>{productName}</h3>
                <p>${price}</p>

                <div className='counter'>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartCount(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;



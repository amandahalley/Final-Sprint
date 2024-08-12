import React, { useContext, useState } from 'react';
import { PRODUCTS, CLOTHING } from '../../products';
import { ShoppingContext } from '../../context/Shop';
import CartItem from './Cartitem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotal } = useContext(ShoppingContext); 
  const [showThankYou, setShowThankYou] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(true); 
  const total = getTotal();
  const navigate = useNavigate();

  const handleCheckout = () => {
  
    setItemsVisible(false);
    setShowThankYou(true);

    setTimeout(() => {
      setShowThankYou(false);
      setItemsVisible(true); 
      navigate('/');
    }, 3000); 
  };

  return (
    <div className='cart'>
      <div>
        <h1>Cart Items</h1>
      </div>

      {itemsVisible && (
        <div className='cartItems'>
          {[...PRODUCTS, ...CLOTHING].map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            }
            return null;
          })}
        </div>
      )}

      {total > 0 ? (
        <div className='checkout'>
          <p>Subtotal: ${total}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button onClick={handleCheckout}>Checkout</button>
          {showThankYou && <p>Thank you for your purchase!</p>}
        </div>
      ) : (
        <h3>Your cart is Empty</h3>
      )}
    </div>
  );
};

export default Cart;




import React, { createContext, useState } from 'react'
import { CLOTHING, PRODUCTS } from '../products';


export const ShoppingContext = createContext(null);

const getCart = ()=> {
    let cart = {};
    for (let i = 0; i < PRODUCTS.length; i++) {
        cart[PRODUCTS[i].id] = 0;
    }

    for (let i = 0; i < CLOTHING.length; i++) {
        cart[CLOTHING[i].id] = 0;
    }

    return cart;
};



export const ShoppingContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getCart());


    const getTotal = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = [...PRODUCTS, ...CLOTHING].find((product) => product.id === Number(item));
                    total += cartItems[item] * itemInfo.price;
                } 
            }
        return Number(total.toFixed(2));
    };
    

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartCount = (newAmnt, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmnt }));
    };

    const cartValue = { cartItems, addToCart, removeFromCart, updateCartCount, getTotal };

    return <ShoppingContext.Provider value={cartValue}>{props.children}</ShoppingContext.Provider>;
};



export default ShoppingContext

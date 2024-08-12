import React from 'react'
import {Link} from 'react-router-dom';
import {ShoppingBag} from 'phosphor-react';

const Navbar = () => {
  return (
  <div className='navbar'>
    <div className='navbar-content'>
        <div className = 'links'>
            <Link to = '/'>Supplements</Link>
            <Link to = '/Clothing'>Clothing</Link>
        </div>

        <div className='shopping-cart'>
            <Link to = '/cart'>
                <ShoppingBag className='shopping-bag' size = {32} />
            </Link>
        </div>
    </div>
    
  </div>
  );
}

export default Navbar

import React from 'react'
import {PRODUCTS} from '../../products'
import Product from './Product'

const Sup = () => {

  return (
    <div className='sups'>
        <div className='sup-title'>
            <h3>Supplements</h3>
        </div>

        <div className='products'>
        {" "}
        {PRODUCTS.map((product) => (
            <Product data = {product} />
        ))}
        </div>
      
    </div>
  )
}

export default Sup

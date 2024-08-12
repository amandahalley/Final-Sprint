import React from 'react'
import {CLOTHING} from '../../products'
import Product from '../Supplement/Product'

const Clothing = () => {
  return (
    <div className='sups'>
        <div className='sup-title'>
            <h3>Clothing</h3>
        </div>

        <div className='products'>
        {" "}
        {CLOTHING.map((product) => (
            <Product data = {product} />
        ))}
        </div>
      
    </div>
  )
}

export default Clothing

import React from 'react';
import {Lists} from "../../products";
import Product from './Product';
import './shop.css';
const Shop = () => {
  return (
    <div className='shop'>
      <div className='shop title'>

        <h1>Upadhyay Store</h1>
      </div>
<div className='products'>

{Lists.map((product)=>

<Product data={product}/>
)}

</div>

    </div>
  )
}

export default Shop;

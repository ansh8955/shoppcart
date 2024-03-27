import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

const CardItem = (props) => {

    const {id,productName,price,productImage} = props.data;
  return (
    <div className='cartItem'>
      <img src={productImage}/>
      <div className='description'>
        <p>

            <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className='countHandler'>

<button> - </button>
<input value=""/>
<button> + </button>
        </div>
      </div>
    </div>
  )
}

export default CardItem;

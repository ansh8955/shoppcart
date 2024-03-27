import React, { useContext } from 'react'
import {ShopContext} from "../../context/shop-context";
const Product = (props) => {

    const {id,productName,price,productImage} = props.data;

    const {addToCart,cartItems} = useContext(ShopContext)


    const cardItemsAmount =cartItems[id]

  return (
    <div className='product'>
     

     <img src={productImage} alt=''/>
     <div className='desc'>
<p><b>{productName}</b></p>
<p>${price}</p>
     </div>
<button className='addToCart' onClick={()=>addToCart(id)}>Add to Cart



{cardItemsAmount > 0 && <>({cardItemsAmount})</>}
</button>
    </div>
  )
}

export default Product

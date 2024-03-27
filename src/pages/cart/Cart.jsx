import React, { useContext } from "react";
import { Lists } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CardItem from "./card-item";

import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems,getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

const Navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Cart Items</h1>
        <div className="cartItems">
          {Lists.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CardItem data={product} />;
            }
          })}
        </div>
      </div>

      <div className="checkout">

        <p>Sutotal:{totalAmount}</p>
        <button onClick={()=>Navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

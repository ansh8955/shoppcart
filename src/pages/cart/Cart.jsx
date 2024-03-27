import React, { useContext } from "react";
import { Lists } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CardItem from "./card-item";
const Cart = () => {
  const { cartItems } = useContext(ShopContext);
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
    </div>
  );
};

export default Cart;

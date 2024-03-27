import { Cards } from "phosphor-react";
import React, { createContext, useState } from "react";
import { Lists } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let i = 1; i < Lists.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCardItems] = useState(getDefaultCart());

  const addToCart = (itemId)=>{

    setCardItems((prev)=>({...prev,[itemId]:prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId)=>{

    setCardItems((prev)=>({...prev,[itemId]:prev[itemId] - 1 }))
  }


  const contextValue = {cartItems,addToCart,removeFromCart};


  // console.log(cartItems);
  return (
    <div>
      <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    </div>
  );
};

export default ShopContextProvider;

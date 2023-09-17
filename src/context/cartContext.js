import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';

import reducer from '../reducer/cartReducer';

const CartContext = createContext();
const getLocalCartData=()=>{
    let localCardData=localStorage.getItem("thapaCart");
    

        const parsedData= JSON.parse(localCardData);
        if(!Array.isArray(parsedData)) return[];
        return parsedData;
    }



const initialState = {
  //cart: [],
  cart:getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  

  //increment or decrement
  const setDecrease=(id)=>{
    dispatch({type:"SET_DECREMENT",payload:id})
  }
  const setIncrease=(id)=>{
    dispatch({type:"SET_INCREMENT",payload:id})
  }
//to remove the individual item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };


  //to  add the data in localstorage
  //get vs set
  useEffect(()=>{
    dispatch({type:"CART_TOTAL_ITEM"});
    dispatch({type:"CART_TOTAL_PRICE"});
    localStorage.setItem("thapaCart", JSON.stringify(state.cart));

  },[state.cart])
  //to clear a cart
  const clearCart=()=>{
    dispatch({type:"CLEAR_CART"})
  }

return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem,clearCart,setDecrease,setIncrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
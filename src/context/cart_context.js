import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer"

const CartContext = createContext();

// to getthe data in Local Storage:
const getLocalCartData = () => {
    let localCartData = localStorage.getItem("thapaCart");

    // if(localCartData === []){
    //     return [];
    // }
    // else{
    //     return JSON.parse(localCartData);
    // }
    const parsedData = JSON.parse(localCartData);
    if(!Array.isArray(parsedData)) return [];
    return parsedData;
}

const initialState = {
    // cart: [],
    cart : getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
}

const CartProvider = ({ children }) => {

    const [state , dispatch] = useReducer(reducer, initialState);

    const addtocart = (id, color, amount , product) => {
        dispatch({type : "ADD_TO_CART" , payload: {id, color, amount , product}});
    }

    //increment and decrement the product:
    const  setDecrease = (id) => {
        dispatch({type : "SET_DECREMENT" , payload: id});
    }

    const setIncrease = (id) => {
        dispatch({type : "SET_INCREMENT" , payload : id});
    }

    // to remove the individual item from cart
    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload : id});
    }

    // to clear the cart 
    const clearCart = () => {
        dispatch({type : "CLEAR_CART"});
    }

    // to add or set the data in Local Storage:
    useEffect(() => {
        //total price in the subtotal section
        dispatch({type : "CART_TOTAL_PRICE" })
        
        localStorage.setItem("thapaCart" , JSON.stringify(state.cart))
    }, [state.cart])

    return <CartContext.Provider value={{...state, addtocart, removeItem , clearCart , setDecrease, setIncrease}}>
         {children}
     </CartContext.Provider>
}

//global context hook
const useCartContext = () => {
    return useContext(CartContext);
}

export {CartProvider , useCartContext};
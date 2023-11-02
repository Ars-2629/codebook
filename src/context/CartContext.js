import { createContext,useContext,useReducer } from "react";
import { cartReducer } from "../reducer";


const cartInitialState = {
    cartproducts:[],
    total:0
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({children})=>{
const [state,dispatch] = useReducer(cartReducer,cartInitialState);

 const addToCart = (product)=>{
   const updatedproduct = state.cartproducts.concat(product);
   const updatedTotal = state.total + product.price;

    dispatch({
        type:"ADD_TO_CART",
        payload:{
            addedcartitem:updatedproduct,
            updatedTotal:updatedTotal
            
        }
    })
 };

 const removeFromCart = (product)=>{
    const updatedproduct = state.cartproducts.filter((cartproduct)=>cartproduct.id !== product.id);
    const updatedTotal = state.total - product.price;
    dispatch({
        type:"REMOVE_FROM_CART",
        payload:{
            removedcartitem:updatedproduct,
            updatedTotal:updatedTotal
        }
    })
 };

 const clearCart = ()=>{
    dispatch({
        type:'CLEAR_CART',
        payload:{
        products:[],
        total:0
        }
    })
 }

 

   const value = {
        cartproducts:state.cartproducts,
        addToCart,
        removeFromCart,
        total:state.total,
        clearCart
    }

   return (
    <CartContext.Provider value = {value}>
    {children}
    </CartContext.Provider>
   )
}

export const useCart = ()=>{
    const context = useContext(CartContext);
    return context;
}
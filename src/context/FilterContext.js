import { createContext,useContext,useReducer } from "react";
import { filterReducer } from "../reducer";

const filterInitialState = {
    productList:[],
    onlyInStock:false,
    bestSellerOnly:false,
    sortBy:null,
    ratings:null
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({children})=>{

    const [state,dispatch] = useReducer(filterReducer,filterInitialState);

    const updatedProduct = (products)=>{
       dispatch({
        type:"PRODUCT_LIST",
        payload:{
            products:products
        }
         }
       )
    }

    const bestSeller = (products)=>{
         return (state.bestSellerOnly ? products.filter(product=>product.best_seller === true) : products);
        }
        
    const inStock = (products)=>{
            return (state.onlyInStock ? products.filter(product=>product.in_stock === true) : products );
           }

    const sortProducts = (products)=>{
        
        if(state.sortBy === "lowtohigh"){

       return  products.sort((a,b)=>Number(a.price) - Number(b.price));

         }

         if(state.sortBy === "hightolow"){

           return products.sort((a,b)=>Number(b.price) - Number(a.price));

             }

        return products.sort((a,b)=>Number(a.id)-Number(b.id));

    };

   const productsByRatings = (products)=>{
    if(state.ratings === "4&Above"){
       return products.filter(product=>product.rating>=4);
    }
    if(state.ratings === "3&Above"){
       return products.filter(product=>product.rating>=3);
    }
    if(state.ratings === "2&Above"){
       return products.filter(product=>product.rating>=2);
    }
    if(state.ratings === "1&Above"){
       return products.filter(product=>product.rating>=1);
    }
     return products;
   }

    const filteredproduct = productsByRatings(sortProducts(inStock(bestSeller(state.productList))));

    const value = {
        products:filteredproduct,
        updatedProduct,
        state,
        dispatch
    }

    return (
        <FilterContext.Provider value={value}>
              {children}
        </FilterContext.Provider>
    )
}

export const useFilter = ()=>{
    const context = useContext(FilterContext);
    return context;
}


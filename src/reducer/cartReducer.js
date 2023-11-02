export const cartReducer = (state,action)=>{
    const {type,payload} = action;

    switch(type){

    case 'ADD_TO_CART':
        return {...state,cartproducts:payload.addedcartitem,total:payload.updatedTotal};

    case 'REMOVE_FROM_CART':
        return {...state,cartproducts:payload.removedcartitem,total:payload.updatedTotal};

    case 'CLEAR_CART':
        return {...state,cartproducts:payload.products,total:payload.total};
    
    default:
        throw new Error ('NO_CASE_FOUND');

   }



}
export const getProductList = async (searchTerm)=>{

    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm.get('q') ? searchTerm.get('q') : ""}`);

    if(!response.ok){
        // eslint-disable-next-line
        throw {message:response.statusText,status:response.status};
    }
    
    const data = await response.json();
    
    return data;
}

export const getFeatureProduct = async () => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    if(!response.ok){
        // eslint-disable-next-line
        throw {message:response.statusText,status:response.status};
    }
    const data = await response.json();

    return data;
}

export const getProduct = async (params)=>{
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${params.id}`);
    if(!response.ok){
        // eslint-disable-next-line
        throw {message:response.statusText,status:response.status};
    }
    const data = await response.json();

    return data;
}
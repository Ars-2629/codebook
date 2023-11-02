export const getUserInfo = async ()=>{

    const  token = JSON.parse(sessionStorage.getItem('token'));
    const  cbid = JSON.parse(sessionStorage.getItem('cbid'));

    const requestOptions = {
        method:'GET',
        headers:{"Content-Type":"application/json",Authorization:`Bearer ${token}`}
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${cbid}`,requestOptions);
    if(!response.ok){
        throw {message:response.statusText,status:response.status}
    }

    const data = await response.json();

    return data;
}

export const createUserOrder = async (cartproducts,total,user)=>{

    const  token = JSON.parse(sessionStorage.getItem('token'));

    const order = {
        products:cartproducts,
        quantity:cartproducts.length,
        amount_paid:total,
        userOrderDetail:{
        username:user.name,
        useremail:user.email,
        userid:user.id
        }
       } 

       const requestOptions = {
            method:"POST",
            headers:{"content-Type":"application/json",Authorization:`Bearer ${token}`},
            body:JSON.stringify(order)
         }
       
       const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`,requestOptions);

       if(!response.ok){
        throw {message:response.statusText,status:response.status}
    }

    const data = await response.json();

       return data;
}

export const getOrderInfo = async ()=>{
  const token = JSON.parse(sessionStorage.getItem('token'));
  const cbid = JSON.parse(sessionStorage.getItem('cbid'));
  const requestOptions = {
    method:'GET',
    headers:{'Content-Type':'application/json',Authorization:`Bearer ${token}`},
   }

  const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?userOrderDetail.userid=${cbid}`,requestOptions);

  if(!response.ok){
    throw {message:response.statusText,status:response.status}
}

 const data = await response.json();

    return data;
}
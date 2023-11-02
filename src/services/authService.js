export const register = async (authDetails)=>{
    const requestOptions = {
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(authDetails)
      }
    
      const response = await fetch(`${process.env.REACT_APP_HOST}/600/users`,requestOptions);
      if(!response.ok){
        // eslint-disable-next-line
        throw {message:response.statusText,status:response.status} 
      }
    const data = await response.json();
  
  return data;
}


export const login = async (authDetails)=>{
    const requestOption = {
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(authDetails)
      }
    
      const response = await fetch(`${process.env.REACT_APP_HOST}/login`,requestOption);
      if(!response.ok){
        // eslint-disable-next-line
        throw {message:response.statusText,status:response.status} 
      }
      const data = await response.json();
    
      if(data.accessToken){
        sessionStorage.setItem('token',JSON.stringify(data.accessToken));
        sessionStorage.setItem('cbid',JSON.stringify(data.user.id));
        sessionStorage.setItem('cbemail',JSON.stringify(data.user.email));
      }
      return data;
}


export const logout = ()=>{
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('cbid');
    sessionStorage.removeItem('cbemail');
}
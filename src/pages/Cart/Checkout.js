import { useState,useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useCart } from './../../context';
import { getUserInfo,createUserOrder } from '../../services';
import { useTitle } from '../../hooks/useTitle'; 
import { toast } from 'react-toastify';

export const Checkout = () => {
    useTitle('Payment Details');
    const {cartproducts, total,clearCart } = useCart();
    const [user,setUser] = useState({});
    const navigate = useNavigate();
    
    useEffect(()=>{
    const fetchUserInfo = async ()=>{

        try{
        
        const data = await getUserInfo();
        setUser(data)

        } catch(error){
         toast.error(error.message);
        }

    }
        fetchUserInfo();

    },[])


    const handleOrderSubmit = async (event)=>{

        event.preventDefault();

   try{

    const data = await createUserOrder(cartproducts,total,user)
     clearCart();
     navigate("/order",{state:{data:data,status:true}});

   } catch(error){

    toast.error(error.message);
    navigate("/order",{state:{status:false}});

   }
    }
   

  return (
    <main className="">
                <div className="relative left-[450px] w-96 bg-white rounded-lg shadow dark:bg-gray-500">
                <div className="py-6 px-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    <i className="bi bi-credit-card mr-2"></i>CARD PAYMENT
                    </h3>
                    <form onSubmit={handleOrderSubmit} className="space-y-6" >
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name:</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value={user.name || ""} disabled required="" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email:</label>
                        <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value={user.email || ""} disabled required="" />
                    </div>
                    <div>
                        <label htmlFor="card" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Card Number:</label>
                        <input type="number" name="card" id="card" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value="4215625462597845" disabled required="" />
                    </div>
                    <div className="">
                        <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Expiry Date:</label>
                        <input type="number" name="month" id="month" className="inline-block w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value="03" disabled required="" />
                        <input type="number" name="year" id="year" className="inline-block w-20 ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value="27" disabled required="" />
                    </div>
                    <div>
                        <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Security Code:</label>
                        <input type="number" name="code" id="code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value="523" disabled required="" />
                    </div>
                    <p className="mb-4 text-2xl font-semibold dark:text-lime-50 text-slate-600 text-center">
                        ${total}
                    </p>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700" >
                        <i className="mr-2 bi bi-lock-fill"></i>PAY NOW
                    </button>
                    <Link to='/cart'>
                    <button type="button" className="w-full mt-4 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700" >
                        <i className="mr-2"></i>GO BACK
                    </button>
                    </Link>
                    
                    </form>
                </div>
                </div>
            {/* </div> */}
        {/* </div> */}
        </main>
  )
}

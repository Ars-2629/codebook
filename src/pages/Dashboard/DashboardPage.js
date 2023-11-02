import { useState,useEffect } from 'react';
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getOrderInfo } from '../../services';
import { useTitle } from '../../hooks/useTitle';
import { toast } from 'react-toastify';

export const DashboardPage = () => {

  useTitle('Dashboard');
  const [orders,setOrders] = useState([]);


  useEffect(()=>{
      const getOrder = async ()=>{
      try{

        const data = await getOrderInfo();
        setOrders(data);

      } catch(error){

        toast.error(error.message);

      }
      
    }
    getOrder();
  },[]);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>

      <section>
        {orders.length>0 && orders.map((order) => (

        <DashboardCard order={order} key={order.id} />

        ))}
        
      </section>

      <section>

        {orders.length === 0  && <DashboardEmpty />}
        
        </section>
    </main>
  );
}

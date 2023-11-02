
import { Link } from 'react-router-dom';
import { CartCard } from './CartCard';
import { useCart } from '../../../context';

export const CartList = () => {
  
  const { cartproducts,total } = useCart();

 
  return (
    <>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Cart ({cartproducts.length})
        </p>
      </section>
      
      <section>
    
        {cartproducts.map((cartproduct,i)=>(
          <CartCard cartproduct={cartproduct} key = {cartproduct.id} />  
        ))}
        </section>
        
      <section className="max-w-4xl m-auto">
        <div className="flex flex-col p-2 border-b dark:border-slate-300 text-lg dark:text-slate-100">
          <p className="flex justify-between my-2">
            <span className="font-semibold">Total Amount:</span>
            <span className='text-2xl font-semibold'>${total}</span>
          </p>
        </div>
    
        <div className="text-right my-5">
          <Link to='/checkout'>
          <span className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
            PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
          </span>
          </Link>
         
        </div>
      </section>
      
    </>
  )
        }


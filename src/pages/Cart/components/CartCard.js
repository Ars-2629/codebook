import { Link } from "react-router-dom";
import { useCart } from "../../../context";

export const CartCard = ({cartproduct }) => {
  const { removeFromCart } = useCart();


  return (
  
 <div className="flex flex-wrap justify-between border-b-2 dark:border-slate-500 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
          <Link to="">
            <img className="w-24 h-24 rounded" src={cartproduct.image_local} alt={cartproduct.name} />
          </Link>
          <div>
            <Link to="">
              <p className="text-lg ml-2 mt-4 dark:text-slate-200">{cartproduct.name}</p>
            </Link>            
            <button  onClick={()=>removeFromCart(cartproduct)} type="button" className="text-base ml-2 text-red-400">Remove</button>
          </div>
      </div>
      <div className="text-lg m-2 dark:text-slate-200">
      <span>${cartproduct.price}</span>
      </div>
      
    </div>
   
   
   
  )
}

import { useState,useEffect } from 'react';
import { ProductCard } from "../../../components";
import { getFeatureProduct } from '../../../services'; 
import { toast } from 'react-toastify';

export const FeaturedProducts = () => {
const [products,setProducts] = useState([]);

  useEffect(()=>{
    const fetchproduct = async ()=>{

    try{

      const data = await getFeatureProduct();
      setProducts(data);

    } catch(error){
      
     toast.error(error.message);

    }

   }
    fetchproduct();
  },[]);

  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product)=>(
          <ProductCard product={product} key = {product.id}/>
          ))}
            
        </div>
    </section>
  )
}

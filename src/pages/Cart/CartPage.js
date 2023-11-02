import { CartEmpty } from './components/CartEmpty';
import { CartList } from './components/CartList';
import { useCart } from '../../context';
import { useTitle } from '../../hooks/useTitle';

export const CartPage = () => {
  
  const { cartproducts } = useCart();
  useTitle(`Cart (${cartproducts.length})`);
  return (
    <main>
      {cartproducts.length ? <CartList/> : <CartEmpty/> }         
    </main>
  )
}

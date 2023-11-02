import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Search } from '../Sections/Search';
import { DropdownLoggedOut, DropdownLoggedIn } from '../index';
import { useCart } from '../../context';

export const Header = () => {
  const [darkMode,setDarkMode] = useState(JSON.parse(localStorage.getItem('darkmode')) || false);
  const [showSearch,setShowSearch] = useState(false);
  const [log,setLog] = useState(false);
  const token = JSON.parse(sessionStorage.getItem('token'));
  const { cartproducts } = useCart();

 useEffect(()=>{
  localStorage.setItem('darkmode',JSON.stringify(darkMode));
    if(darkMode){
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

  },[darkMode])
  return (
    <header>      
      <nav className="bg-white dark:bg-gray-900">
          <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
              <Link to="/" className="flex items-center">
                  <img onClick = {()=>{setShowSearch(false);
                  setLog(false)}} src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
                  <span onClick = {()=>{setShowSearch(false);
                  setLog(false)}} className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
              </Link>
              <div className="flex items-center relative">
                  <span onClick = {()=>setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                  <span onClick = {()=>{setShowSearch(!showSearch);
                    setLog(false)}} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                  <Link to="/cart"  className="text-gray-700 dark:text-white mr-5">
                    <span onClick = {()=>{setLog(false);
                  setShowSearch(false)}} className="text-2xl bi bi-cart-fill relative">
                      <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{ cartproducts.length }</span>
                    </span>                    
                  </Link>
                  <span onClick = {()=>{setLog(!log);
                  setShowSearch(false)}} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                  {log && (token ? <DropdownLoggedIn setLog = {setLog} /> :  <DropdownLoggedOut setLog = {setLog}/> )}
              </div>
          </div>
      </nav>
      { showSearch && <Search setShowSearch = {setShowSearch}/> }
    </header>
  )
}

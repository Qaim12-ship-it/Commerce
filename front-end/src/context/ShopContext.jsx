import React, { createContext, useEffect, useState } from 'react'
// import { products } from '../assets/assets'
import { toast } from 'react-toastify';
import Product from '../pages/Product';
import axios from  'axios'; 
import { useNavigate } from 'react-router-dom';

export const ShopContext= createContext();

const ShopContextProvider= (props)=>{

const currency= '$';
const delivery_fee= '10';


 const backendUrl = import.meta.env.VITE_BACKEND_URL;


const [search,setSearch]= useState('');
const [showSearch,setShowSearch]= useState(false);
const [cartItems, setCartItems]=useState({});
const [token, setToken]= useState('');


const [products, setProducts] = useState([]);


const navigate= useNavigate();

const addTocart= async (itemId, size)=>{

if(!size){
  toast.error('Please Select Product Size');
return;
}
let CartData= structuredClone(cartItems);
if(CartData[itemId]){
   if (CartData[itemId][size]){
    (CartData[itemId][size]) +=1;
   }else{
     (CartData[itemId][size]) =1;
   }
}else{
   CartData[itemId]={};
   CartData[itemId][size]=1;

   }
   setCartItems(CartData);
 
if (token){
  try {
    await axios.post(backendUrl + '/api/cart/add', {itemId, size}, {headers:{token}})
  } catch (error) {
      console.log(error)
  toast.error(error.message)
  }
 }



}




const UpdateQuantity= async (itemId, size, quantity)=>{
 let CartData= structuredClone(cartItems);
  CartData[itemId][size]= quantity;
  setCartItems(CartData);
   
if (token){
  try {
    await axios.post(backendUrl + '/api/cart/update', {itemId, size, quantity}, {headers:{token}})
  } catch (error) {
      console.log(error)
  toast.error(error.message)
  }
 }
}





const getCartAmount= ()=>{
  let totalAmount=0;
  for(const items in cartItems ){
    let itemInfo= products.find((Product)=>Product._id===items);
      for(const item in cartItems[items] ){
      try {
        if(cartItems[items][item]>0){
         totalAmount += itemInfo.price * cartItems[items][item];
        }
      } catch (error) {
        
      }
      }
  }
  return totalAmount;
}




const getProductData= async ()=>{
  try {
    const response = await axios.get(backendUrl+ '/api/product/list')
    if(response.data.success){
 setProducts(response.data.products)
    }else{
      toast.error(response.data.message)
    }
   
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }
}

const getUserCart = async (token) => {
  try {
    const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
    if (response.data.success) {
      setCartItems(response.data.cartData);  // ✅ fix
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};



useEffect(()=>{
getProductData()
},[])





useEffect(() => {
  const savedToken = localStorage.getItem('token');
  if (savedToken) {
    setToken(savedToken);
    getUserCart(savedToken);   // ✅ only call if token exists
  }
}, []);




const getCardCount=()=>{
  let totalCount=0;
  for(const items in cartItems ){
     for(const item in cartItems[items]){
      try {
        if(cartItems[items][item]>0){
          totalCount += cartItems[items][item];
        }
      } catch (error) {
        
      }
     }
  }
  return totalCount;
}





const value={
    products, currency, delivery_fee, search, setSearch,  setCartItems, showSearch,setShowSearch, addTocart, cartItems, getCardCount, UpdateQuantity,getCartAmount ,navigate, backendUrl, token, setToken
}

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider

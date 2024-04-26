import React, { createContext, useState } from 'react'
import { dataShop } from '../component/SliderCard/SliderData';

export const ShopContex = createContext(null);
const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0 ; index < dataShop.length+1 ; index++){
        cart[index] = 0;
    }
    return cart ;
}

function ShopContexProvider(props) {
    
    const [cartItems , setCartItems] = useState(getDefaultCart());
   
    const addToCard = (itemId) =>  {
        setCartItems((prev)=>({...prev , [itemId]: prev[itemId]+1}))
        
    }
    

    const removefromcart = (itemId) =>  {
        setCartItems((prev)=>({...prev , [itemId]:prev[itemId]-1}))
    } 

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = dataShop.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
                console.log(itemInfo);
            }
        }
        console.log(totalAmount);
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0 ;
        for (const item in cartItems){
            if (cartItems[item]>0){
                totalItems += cartItems[item];
            }
        }
        return totalItems ;
    }
    

    const contextValue = {dataShop,cartItems , addToCard , removefromcart ,getTotalCartAmount ,getTotalCartItems};

    return (
        <>
        <ShopContex.Provider value ={contextValue}>
                {props.children}
        </ShopContex.Provider>
        </>
    )
}

export default ShopContexProvider ;
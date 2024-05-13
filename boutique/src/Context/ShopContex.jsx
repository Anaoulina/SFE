import React, { createContext, useEffect, useState } from 'react'
//import { dataShop } from '../component/SliderCard/SliderData';
import axios from 'axios';

export const ShopContex = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

function ShopContexProvider(props) {

    const [All_product, setAll_product] = useState([]);
    const [All_commandes, set_All_commandes] = useState([]);

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:4000/allproducts')
            .then((response) => response.json())
            .then((data) => setAll_product(data))
        fetch('http://localhost:4000/commandesAll')
            .then((response) => response.json())
            .then((data) => set_All_commandes(data))
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/commands/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}), 
            }).then((response) => response.json())
                .then((data) => {
                    setCartItems(data);
                   
                });
        }
    }, [])
    
    //console.log('hello' +cartItems.length);
    
    const createCommand = async (commandData) => {
        try {
            const response = await axios.post('http://localhost:4000/commandlistes', commandData);
            return response.data;
        } catch (error) {
            console.error('Error creating command:', error);
            throw error;
        }
    };

    const addToCard = (itemId) => {
        //setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocard', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId })
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        }
    }


    const removefromcart = async (itemId) => {
        // setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        // if (localStorage.getItem('auth-token')) {
        //     fetch('http://localhost:4000/removefromcart', {
        //         method: 'POST',
        //         headers: {
        //             Accept: 'application/form-data',
        //             'auth-token': `${localStorage.getItem('auth-token')}`,
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ "itemId": itemId })
        //     })
        //         .then((response) => response.json())
        //         .then((data) => console.log(data));
        // }
        await fetch ('http://localhost:4000/removeCommand',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({id : itemId})
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        // for (const item in cartItems) {
        //    if (cartItems[item] > 0) {
        //        let itemInfo = All_commandes.find((product) => product.id === Number(item));
        //        if (itemInfo) {
        //             totalAmount += item.produit.new_price /* cartItems[item]*/;
        //            console.log(itemInfo);
        //         }
        //      }

        cartItems.forEach((item) => {
            totalAmount += item.produit.new_price;
        }); 
        // }
        console.log(totalAmount);
        return totalAmount;
    }
    

    // const getTotalCartItems = () => {
    //     let totalItems = 0;
    //     for (const item in cartItems) {
    //         if (cartItems[item] > 0) {
    //             totalItems += cartItems[item];
    //         }
    //     }
    //     return totalItems;
    // }


    const contextValue = { All_product, All_commandes, cartItems,createCommand, addToCard, removefromcart, getTotalCartAmount /*, getTotalCartItems*/ };

    return (
        <>
            <ShopContex.Provider value={contextValue}>
                {props.children}
            </ShopContex.Provider>
        </>
    )
}

export default ShopContexProvider;
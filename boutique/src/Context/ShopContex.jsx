import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Alert from './alert';

export const ShopContex = createContext(null);

function ShopContexProvider(props) {
    const [All_product, setAll_product] = useState([]);
    const [All_commandes, set_All_commandes] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [alert, setAlert] = useState({ type: '', message: '' });

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
            .then((response) => response.json())
            .then((data) => setAll_product(data))
            .catch((error) => {
                setAlert({ type: 'error', message: 'Failed to fetch products' });
            });

        fetch('http://localhost:4000/commandesAll')
            .then((response) => response.json())
            .then((data) => set_All_commandes(data))
            .catch((error) => {
                setAlert({ type: 'error', message: 'Failed to fetch commands' });
            });

            if (localStorage.getItem('auth-token')) {
                fetch('http://localhost:4000/commands/', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'auth-token': localStorage.getItem('auth-token'),
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ done: false }), // Send a filter to the backend
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setCartItems(data);
                    })
                    .catch((error) => {
                        setAlert({ type: 'error', message: 'Failed to fetch cart items' });
                    });
            }
    }, []);

    const createCommand = async (commandData) => {
        try {
            const response = await axios.post('http://localhost:4000/commandlistes', commandData);
            setAlert({ type: 'success', message: 'Command created successfully' });
            return response.data;
        } catch (error) {
            setAlert({ type: 'error', message: 'Error creating command' });
            throw error;
        }
    };

    const addToCard = (itemId) => {
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocard', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId }),
            })
                .then((response) => response.json())
                .then((data) => {
                    setAlert({ type: 'success', message: 'Item added to cart' });
                })
                .catch((error) => {
                    setAlert({ type: 'error', message: 'Failed to add item to cart' });
                });
        }
    };

    const removefromcart = async (itemId) => {
        await fetch('http://localhost:4000/removeCommand', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: itemId }),
        }).then(() => {
            setAlert({ type: 'success', message: 'Item removed from cart' });
        }).catch((error) => {
            setAlert({ type: 'error', message: 'Failed to remove item from cart' });
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        cartItems.forEach((item) => {
            totalAmount += item.price;
        });
        return totalAmount;
    };

    const contextValue = {
        All_product,
        All_commandes,
        cartItems,
        createCommand,
        addToCard,
        removefromcart,
        getTotalCartAmount,
    };

    return (
        <ShopContex.Provider value={contextValue}>
            
           
            {props.children}
        </ShopContex.Provider>
    );
}

export default ShopContexProvider;

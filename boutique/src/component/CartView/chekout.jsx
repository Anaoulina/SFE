import React, { useContext, useState } from 'react';
import axios from 'axios';
import { ShopContex } from '../../Context/ShopContex';
import './stylechekout.css'
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const navigate = useNavigate() ;
    const { cartItems, getTotalCartAmount, createCommand } = useContext(ShopContex);
    const [address, setAddress] = useState('');
    const [Tel, setTel] = useState(''); 
    const [error, setError] = useState('');

    const handleCheckout = async () => {
        if (address === '' || Tel === '') {
            setError('Please fill in all required fields.');
            return;
        }

        const idProduits = cartItems.map(item => item.user._id);
        const commandData = {
            iduser: idProduits[0], 
            paiement: getTotalCartAmount(), 
            adresse: address,
            Tel: Tel,
            idproduits: cartItems.map(item => item.id)
        };

        try {
            await createCommand(commandData);
            setAddress('');
            setTel('');
            setError('');
            for (const item of cartItems) {
                try {
                    const response = await axios.patch(`http://localhost:4000/commandeditedone/${item._id}`, { done: true });
                    console.log('Updated command done status:', response.data);
                } catch (error) {
                    console.error('Failed to update command:', error);
                }
            }
            navigate('/');

        } catch (err) {
            setError('Failed to place order. Please try again.');
        }
    };

    return (
        <div className="checkout-container">
            <div className="sec">
                <h2 className="titre" style={{ fontSize: "40px" }}>Checkout</h2>
                <hr style={{ marginBottom: "15px" }} />
            </div>
            <p>Total: {getTotalCartAmount()} DH</p>
            <div className="checkout-form">
                <center>
                    <h3>More Details</h3>
                </center>
                <form>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Enter your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <label htmlFor="tel">Phone Number:</label>
                    <input
                        type="text"
                        id="tel"
                        name="tel"
                        placeholder="Enter your phone number"
                        value={Tel}
                        onChange={(e) => setTel(e.target.value)}
                        required
                    />
                    <center>
                        <div style={{ marginTop: "20px" }}>
                            <p>Our assistance will call you as soon as possible to confirm the information you've sent us.</p>
                            <p>Thank you for choosing our services.</p>
                        </div>
                    </center>
                    {error && <p className="error-message">{error}</p>}
                    <button type="button" onClick={handleCheckout}>Place Order</button>
                </form>
            </div>
        </div>
    );
}

export default Checkout;

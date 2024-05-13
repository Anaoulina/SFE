import React, { useContext, useState } from 'react';
import { ShopContex } from '../../Context/ShopContex';
import './stylechekout.css'

function Checkout() {
    const { cartItems, getTotalCartAmount, createCommand } = useContext(ShopContex);
    const [address, setAddress] = useState('');

    const handleCheckout = () => {
        const idproduits = cartItems.map(item => item.user._id);
        const commandData = {
            iduser: idproduits[0], 
            paiement: getTotalCartAmount(), 
            adresse: address,
            idproduits: cartItems.map(item => item.id)
        };
       createCommand(commandData);
        // Reset the cart or navigate to a different page
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="order-summary">
                <h3>Order Summary</h3>
                <ul>
                    {cartItems.map(item => (
                        <li key={item.produit.id}>
                            {item.produit.name} - {item.produit.new_price} DH
                        </li>
                    ))}
                </ul>
                <p>Total: {getTotalCartAmount()} DH</p>
            </div>
            <div className="checkout-form">
                <h3>Payment Details</h3>
                <form>
                    <label htmlFor="paymentMethod">Payment Method:</label>
                    {/* <select id="paymentMethod" name="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                    </select> */}


                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <button type="button" onClick={handleCheckout}>Place Order</button>
                </form>
            </div>
        </div>
    );
}

export default Checkout;

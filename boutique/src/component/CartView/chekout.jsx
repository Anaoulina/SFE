import React, { useContext, useState } from 'react';
import { ShopContex } from '../../Context/ShopContex';
import './stylechekout.css'

function Checkout() {
    const { cartItems, getTotalCartAmount, createCommand } = useContext(ShopContex);
    const [address, setAddress] = useState('');
    const [Tel , setTel] = useState('');

    const handleCheckout = () => {
        const idproduits = cartItems.map(item => item.user._id);
        const commandData = {
            iduser: idproduits[0], 
            paiement: getTotalCartAmount(), 
            adresse: address,
            Tel :Tel ,
            idproduits: cartItems.map(item => item.id)
        };
       createCommand(commandData);
        // Reset the cart or navigate to a different page
    };

    return (
        <div className="checkout-container">
            <div className="sec">
                <h2 className="titre" style={{fontSize : "40px"}}>Checkout</h2>
                <hr style={ {marginBottom : "15px"}} />
            </div>
            <p>Total: {getTotalCartAmount()} DH</p>
            {/* <div className="order-summary">
                <h3>Order Liste</h3>
                <ul>
                    {cartItems.map(item => (
                        <li key={item.produit.id}>
                            <img src={item.produit.image} alt="404" srcset="" style={{width : "100px" , height : "100px" , borderRadius : "20px"} } />
                            {item.produit.name} - {item.price} DH
                        </li>
                    ))}
                </ul>
                <p>Total: {getTotalCartAmount()} DH</p>
            </div> */}
           
            <div className="checkout-form">
                <center>
                <h3>More Details</h3></center>
                <form>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <label htmlFor="address">Phone Number :</label>
                    <input type="text" id="tel" name="tel" placeholder="Enter your phone Number" value={Tel} onChange={(e) => setTel(e.target.value)} />
                   <center> 
                    <div style={{marginTop : "20px"}}>
                     <p>Our assitance will call you as soon as possible to confirme the informations you've sent us. </p> 
                <p>Thank you for chosing our services </p>
                </div>
                </center>
                    <button type="button" onClick={handleCheckout}>Place Order</button>
                </form>
                
            </div>
        </div>
    );
}

export default Checkout;

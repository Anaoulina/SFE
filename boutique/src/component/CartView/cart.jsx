import React, { useContext, useState } from 'react';
import { ShopContex } from '../../Context/ShopContex';
import Modal from './modal';
import Checkout from './chekout';
import './CartItemStyle.css';
import Alert from '../../Context/alert'

function Cart() {
    const { cartItems, getTotalCartAmount } = useContext(ShopContex);
    const isAuthenticated = localStorage.getItem('auth-token');
    const [showModal, setShowModal] = useState(false);
  const [alertState, setAlertState] = useState({ type: '', message: '' });

    const handleCloseModal = () => {
        setShowModal(false);
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
            setAlertState({ type: 'success', message: 'Item removed from cart' });
        }).catch((error) => {
            setAlertState({ type: 'error', message: 'Failed to remove item from cart' });
        });
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    return (
        <div className='teste'>
            {alertState.message && <Alert type={alertState.type} message={alertState.message} />}
            <h1></h1>
            <div className="sec">
                <h2 className="titre">Your Cart</h2>
                <hr />
            </div>
            {isAuthenticated ? (
                <div className='diva'>
                    <center>
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>Products</th>
                                    <th>Picture</th>
                                    <th>Title</th>
                                    <th>Original Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map(e => (
                                    <tr key={e.produit.id}>
                                        <td><img src={e.produit.image} alt="" className="carticon-product-icon" />
                                        </td>
                                        <td> <img src={e.imagePersonalisade} alt="" className="carticon-product-icon" /></td>
                                        <td>{e.produit.name}</td>
                                        <td>{e.produit.new_price} DH</td>
                                        <td >{e.quantity}</td>
                                        <td>{e.price * 1} DH</td>
                                        <td>
                                            <button
                                                className="cartitems-remove-icon"
                                                onClick={() => {
                                                    removefromcart(e.id);
                                                }}
                                            >
                                                <i className="fa fa-trash me-1"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </center>
                    <div className="cartitems-down">
                        <div className="cartitems-total">
                            <h4>Cart Totals</h4>
                            <div>
                                <div className="cartitems-total-item">
                                    <p>Subtotal</p>
                                    <p>{getTotalCartAmount()} DH</p>
                                </div>
                                <hr />
                                <div className="cartitems-total-item">
                                    <p>Shipping Fee</p>
                                    <p>Free</p>
                                </div>
                                <hr />
                                <div className="cartitems-total-item">
                                    <h3>Total</h3>
                                    <h3>{getTotalCartAmount()} DH</h3>
                                </div>
                                <h1 ></h1>
                                <center>
                        <div >

                            <button onClick={handleShowModal} className="Chekout">Proceed To Checkout</button>

                        </div>
                    </center>
                            </div>
                        </div>
                    </div>
                    
                    <Modal show={showModal} handleClose={handleCloseModal}>
                        <Checkout />
                    </Modal>
                </div>
            ) : (
                <center>
                <p style={ {fontSize : "50px"}}>Please login to view your cart.</p>
                </center>
            )}
        </div>
    );
}

export default Cart;

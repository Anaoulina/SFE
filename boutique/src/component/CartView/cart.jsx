import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { ShopContex } from '../../Context/ShopContex';
import { Link } from 'react-router-dom';
import './CartItemStyle.css';

function Cart({ modalShow, setModalShow }) {
    const { cartItems, removefromcart, getTotalCartAmount, createCommand } = useContext(ShopContex);
    const isAuthenticated = localStorage.getItem('auth-token');
    //const id = cartItems[0].user._id ;
    

    return (
        <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            className="cart-modal"
            dialogClassName="custom-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title>Your Cart</Modal.Title>
            </Modal.Header>
            {isAuthenticated ? (
                <Modal.Body className="modal-body-content">
                    <div className="cartitems-format-main">
                        <p>Products</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                        <hr />
                    </div>
                    {cartItems.map(e => (
                        <div key={e.produit.id}>
                            <div className="cartitems-format">
                                <img src={e.produit.image} alt="" className="carticon-product-icon" />
                                <p>{e.produit.name}</p>
                                <p>{e.produit.new_price} DH</p>
                                <button className="cartitems-quantity">1</button>
                                <p>{e.produit.new_price * 1} DH</p>
                                <button
                                    className="cartitems-remove-icon"
                                    onClick={() => {
                                        removefromcart(e.id);
                                    }}
                                >
                                    <i className="fa fa-trash me-1" style={{ fontSize: '20px' }}></i>
                                </button>
                            </div>
                        </div>
                    ))}

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
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            ) : (
                <Modal.Body>
                    <p>Please login to view your cart.</p>
                </Modal.Body>
            )}
            {isAuthenticated && (
                <Modal.Footer>
                    
                    <Link to="/chekout" className='Chekout' >Proceed To Checkout</Link>
                    {/* <button onClick={handleCheckout} className='Chekout'>Proceed To Checkout </button> */}
                </Modal.Footer>
            )}
        </Modal>
    );
}

export default Cart;

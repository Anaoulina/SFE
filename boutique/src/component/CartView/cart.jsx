import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { ShopContex } from '../../Context/ShopContex';
import './CartItemStyle.css';

function Cart({ modalShow, setModalShow }) {
  const { All_product, cartItems, removefromcart , getTotalCartAmount } = useContext(ShopContex);
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

        {All_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitems-format ">
                  <img src={e.image} alt="" className="carticon-product-icon" />
                  <p>{e.name}</p>
                  <p>{e.new_price} DH</p>
                  <button className="cartitems-quantity">{cartItems[e.id]}</button>
                  <p>{e.new_price * cartItems[e.id]} DH</p>
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
            );
          }
          return null ;
        })}
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
                <h3>{getTotalCartAmount ()} DH</h3>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
      <button className='Chekout'>Proceed To Checkout </button>
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;

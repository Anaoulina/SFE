import React from 'react';
import { Modal } from 'react-bootstrap';

function Cart({ modalShow, setModalShow }) {
  return (
    <Modal show={modalShow} onHide={() => setModalShow(false)} className="cart-modal">
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-content">
        <div className="empty--basket">
          <h4>Please login to view cart</h4>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Cart;

import React, { useContext, useState } from 'react';
import { Col, Container, Modal, Row, Toast } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
//import { addToCart } from '../../actions/cartActions';
import './itemselecte.css';
import { ShopContex } from '../../Context/ShopContex';

function Itemselected(props) {
  //const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const {addToCard} = useContext(ShopContex);
  const isAuthenticated = localStorage.getItem('auth-token');
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    console.log('hehihi');
    setShowModal(true);

};

const handleCloseModal = () => {
  console.log('close');
    setShowModal(false);
};

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };



  return (
    <>
      <section className="product-page">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <img loading="lazy" src={props.image} alt="no picture" />
            </Col>
            <Col md={6}>
              <h2>{props.name}</h2>
              <div className="info">
                <span className="price">${props.new_price}</span>
                <span> category : {props.category}</span>
              </div>
              
              <label> Choose the quantity : </label>
              <input
                type="number"
                className="qty-input"
                placeholder="Quantity"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </Col>
            {isAuthenticated ? (
            <button
                className="add"
                type="button"
                aria-label="Add"
                onClick={()=>{addToCard(props.id)}}
              >
                Add To Cart
              </button>):(
                <div>
                <button
                    className="add"
                    type="button"
                    aria-label="Add"
                    onClick={handleOpenModal}
                >
                     Add To Cart
                </button>
                {showModal && (
                    <div className="modal">
                        <div className="content">
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                            <p>You need to authenticate to add items to the cart.</p>
                        </div>
                    </div>
                )}
            </div>
              )}
          </Row>
          
          
        </Container>
      </section>
    </>
  );
}

export default Itemselected;

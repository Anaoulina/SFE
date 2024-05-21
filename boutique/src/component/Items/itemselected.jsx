import React, { useContext, useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import upload from '../../Image/upload.png';
import ShopCard from '../ShopCard/ShopCard';
import './itemselecte.css';
import Footer from '../Footer/footer';
import { ShopContex } from '../../Context/ShopContex';
import { useNavigate } from 'react-router-dom';
import Alert from '../../Context/alert'

function Itemselected(props) {
  const { All_product, addToCard } = useContext(ShopContex);
  const isAuthenticated = localStorage.getItem('auth-token');
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);
  const [alertState, setAlertState] = useState({ type: '', message: '' });

  const [filterList, setFilterList] = useState(
    All_product.filter((item) => item.category === props.category)
  );

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const [formData, setFormData] = useState({
    produit: props,
    price: props.new_price,
    height: props.height,
    width: props.width,
    imagePersonalisade: "",
    quantity: "1",

  });

  useEffect(() => {
    if (formData.width && formData.height && formData.quantity) {
      const newPrice = ((parseInt(formData.width) + parseInt(formData.height)) * 2) * parseInt(formData.quantity);
      setFormData((prevData) => ({
        ...prevData,
        price: newPrice.toString(),
      }));
    } else {
      const newPrice = props.new_price * parseInt(formData.quantity);
      setFormData((prevData) => ({
        ...prevData,
        price: newPrice.toString(),
      }));
    }
  }, [formData.width, formData.height, props.new_price]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    let responseData;
    let formCommend = new FormData();
    formCommend.append('commend', image);

    if (image) {
      await fetch('http://localhost:4000/uploadcomd', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formCommend,
      })
        .then((resp) => resp.json())
        .then((data) => {
          responseData = data;
          setFormData((prevData) => ({
            ...prevData,
            imagePersonalisade: responseData.image_url,
          }));
        });
    }

    console.log("Form submitted with data:", formData);
    await fetch('http://localhost:4000/addtocommend', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'auth-token': `${localStorage.getItem('auth-token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        addToCard(data.id);
        data.success ? setAlertState({ type: 'success', message: "Commend Added To cart" }) : setAlertState({ type: 'error', message: "Failed" });
      });
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate();

  return (
    <>
      <section className="product-page">
        <Container>

          {alertState.message && <Alert type={alertState.type} message={alertState.message} />}
          <div className="sec">
            <h2 className="titre" style={{ fontSize: "50px" }}> Product detail</h2>
            <hr />
          </div>
          <Row className="justify-content-center">
            <Col md={6}>
              <img loading="lazy" src={props.image} alt="no picture" />
            </Col>

            <Col md={6}>

              <div className="info">
                <center> <h2><span>Name :</span> {props.name}</h2>
                  <p><span>Description : </span>{props.descreption}</p></center>
                <p>Price : <span className="price">{props.new_price} DH </span>
                  <div style={{ marginLeft: "50px" }} className="item-price-old">  {props.old_price} DH </div></p>
                <p>Width : <span className="price">{props.width} cm </span>
                  Height <span className="price">{props.height} cm </span></p>
                <p> Availibale :  <span className="price">{props.available}</span> </p>
              </div>
            </Col>

            {isAuthenticated ? (
              <>
                {props.personalised ? (
                  <>
                    <center><h4 style={{ marginTop: "60px" }}>If you want to personalise this product : </h4></center>
                    {props.category === 'Painting' || props.category === 'Paper Paint' ? (
                      <>
                        <div className='component' style={{ display: 'flex', justifyContent: 'space-around' }}>
                          <div className="add-product">
                            <div className="addproduct-itemfield">
                              <p>Height you want</p>
                              <input value={formData.height} onChange={handleChange} type="number" name='height' />
                            </div>
                            <div className="addproduct-itemfield">
                              <p>Picture that you want to print:</p>
                              <label htmlFor="file-input">
                                <img src={image ? URL.createObjectURL(image) : upload} style={{ width: "200px", height: "200px" }} className='addproduct-thumbnail-img' alt="404" />
                              </label>
                              <input type="file" onChange={imageHandler} name='imagePersonalisade' id='file-input' hidden />
                            </div>
                          </div>
                          <div className="add-product">
                            <div className="addproduct-itemfield">
                              <p>Width you want</p>
                              <input value={formData.width} onChange={handleChange} type="number" name='width' />
                            </div>
                            <div className="addproduct-itemfield">
                              <p>Quantity</p>
                              <input value={formData.quantity} onChange={handleChange} type="number" name='quantity' />
                            </div>
                          </div>

                          <div className="add-product">
                            <div className="addproduct-itemfield">
                              <p style={{ marginTop: "60px" }}>The new price :<span style={{ fontStyle: "oblique" }}> {((parseInt(formData.width) + parseInt(formData.height)) * 2) * parseInt(formData.quantity)} DH </span></p>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (<>
                      <div className="addproduct-itemfield">
                        <p>Quantity</p>
                        <input value={formData.quantity} onChange={handleChange} type="number" name='quantity' />
                      </div>
                      <p>Picture that you want to print:</p>
                      <label htmlFor="file-input">
                        <img src={image ? URL.createObjectURL(image) : upload} style={{ width: "200px", height: "200px" }} className='addproduct-thumbnail-img' alt="404" />
                      </label>

                    </>)}


                  </>
                ) : (
                  <>

                    <center><h4 style={{ marginTop: "45px" }}>This product can't be personalised</h4></center>
                    <div className="addproduct-itemfield">
                      <p>Quantity</p>
                      <input value={formData.quantity} onChange={handleChange} type="number" name='quantity' />
                    </div>
                    <div className="add-product">
                      <div className="addproduct-itemfield">
                        <p style={{ marginTop: "60px" }}>The new price :<span style={{ fontStyle: "oblique" }}> {(props.new_price) * parseInt(formData.quantity)} DH </span></p>
                      </div>
                    </div>
                  </>
                )}
                <button
                  className='addproduct'
                  type="button"
                  aria-label="Add"
                  onClick={handleSubmit}
                >
                  Add To Cart
                </button>
              </>
            ) : (
              <div>
                <center>
                  <button
                    className="adde"
                    type="button"
                    aria-label="Add"
                    onClick={handleOpenModal}
                  >
                    Add To Cart
                  </button>
                </center>
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
        <Container style={{ marginTop: "10px" }}>
          <div className="sec">
            <h2 className="titre" style={{ fontSize: "50px" }}> Product that you would like :</h2>
            <hr />
          </div>


          <ShopCard data={filterList} style={{ marginTop: '100px' }} />

        </Container>
        <Footer style={{ marginTop: "10px" }} />
      </section>
    </>
  );
}

export default Itemselected;

import React, { useContext, useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import upload from '../../Image/upload.png';
// import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
import './itemselecte.css';
import { ShopContex } from '../../Context/ShopContex';
import { useNavigate } from 'react-router-dom';

function Itemselected(props) {
  const [quantity, setQuantity] = useState(1);
  const { addToCard } = useContext(ShopContex);
  const isAuthenticated = localStorage.getItem('auth-token');
  const [showModal, setShowModal] = useState(false);

  const [image, setImage] = useState(false);

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }



  const [formData, setFormData] = useState({
    produit: ([]),
    price: "",
    height: "",
    Width: "",
    imagePersonalisade: ""
  });

  //   useEffect(() => {
  //     const fetchProduct = async () => {
  //         await fetch(`http://localhost:4000/product/${id}`)
  //             .then((resp) => resp.json())
  //             .then((data) => { setProduct(data.product) });
  //     };
  //     fetchProduct();
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    formData.produit = props;
    let responseData;
    let formCommend = new FormData();
    formCommend.append('commend', image);
    if (image) {
      await fetch('http://localhost:4000/uploadcomd', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formCommend,
      }).then((resp) => resp.json())
        .then((data) => { responseData = data });
      formData.imagePersonalisade = responseData.image_url;
    }
    console.log("Form submitted with data:", formData);
    await fetch('http://localhost:4000/addtocommend', {
      method: 'Post',
      headers: {
        Accept: 'application/json',
        'auth-token': `${localStorage.getItem('auth-token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((resp) => resp.json()).then((data) => {
      addToCard(data.id);
      data.success ? alert("Commend Added To cart" + data.id) : alert("Failed")
    })
  };
  const handleOpenModal = () => {
    console.log('open');
    setShowModal(true);

  };

  const handleCloseModal = () => {
    console.log('close');
    setShowModal(false);
  };

  const navigate = useNavigate();
  // const gotoForm = () =>{
  //   navigate(`/comdForm/${props.id}`);
  // }

  return (
    <>
      <section className="product-page">
        <Container>
        <center><h1 style={{marginTop : "0px" , marginBottom: "40px"}}>Product details</h1></center>
          <Row className="justify-content-center">
            <Col md={6}>
              <img loading="lazy" src={props.image} alt="no picture" />
            </Col>

            <Col md={6}>
             
              <h2><span>Name :</span> {props.name}</h2>

              <div className="info">
                <p><span>Description : </span>{props.descreption}</p>
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
                  <center><h4 style={{marginTop : "60px"}}>If you want to personnaliser this product : </h4></center>
                  <div className='component' style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div className="add-product">
                      <div className="addproduct-itemfield">
                        <p>Height you want</p>
                        <input value={formData.height} onChange={handleChange} type="number" name='height' />
                      </div>
                      <div className="addproduct-itemfield">
                        <p>Picture that you want to print:</p>
                        <label htmlFor="file-input">
                          <img src={image ? URL.createObjectURL(image) : upload} className='addproduct-thumnail-img' alt="404" />
                        </label>
                        <input type="file" onChange={imageHandler} name='imagePersonalisade' id='file-input' hidden />
                      </div>
                    </div>
                    <div className="add-product">
                      <div className="addproduct-itemfield">
                        <p>Width you want</p>
                        <input value={formData.Width} onChange={handleChange} type="number" name='Width' />
                      </div>
                    </div>
                  </div></>
                ) : (
                  <h4 style={{marginTop : "45px"}}>This product can't be personalised </h4>
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
                </button></center>
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

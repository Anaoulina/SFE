import React from 'react'
import './addProduct.css'
import upload from '../../assets/upload.png'
import { useState } from 'react'

function AddProduct() {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "Painting",
        new_price: "",
        old_price: "",
        available: "",
        height: "",
        width: "",
        descreption: "",
        personalised: false,
        souscategorie : "" 

    })
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }

    const Add_Product = async () => {
        let responseData;
        let product = productDetails;
        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => { responseData = data });

        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct', {
                method: 'Post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                data.success ? alert("Product Added") : alert("Failed")
            })
        }
    }

    return (
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='TypeHere' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='TypeHere' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='TypeHere' />
                </div>
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Product Category</p>
                    <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                        <option value="Painting">Painting</option>
                        <option value="paper">Paper Paint</option>
                        <option value="Adss">Advertise</option>
                        <option value="house">Housing items</option>
                        <option value="clothes">clothes</option>
                        <option value="Access">Accessoire</option>
                        <option value="Agendacalendrie">Agenda calendrie</option>
                        <option value="Cart">Cart</option>
                    </select>
                </div>
                <div className="addproduct-itemfield">
                    <p>Availibale products</p>
                    <input value={productDetails.available} onChange={changeHandler} name="available" type="number" />
                </div>
                <div className="addproduct-itemfield">
                    <p>Personalized</p>
                    <input
                        type="checkbox"
                        checked={productDetails.personalised}
                        onChange={(e) => setProductDetails({ ...productDetails, personalised: e.target.checked })}
                        name="personalised"
                    />
                </div>
            </div>
            <div>
                <p>Subcategory </p>
                <select value={productDetails.souscategorie} onChange={changeHandler} name="souscategorie" className='add-product-selector'>
                        <option value="Painting">{productDetails.category}</option>
                        <option value="paper">Paper Paint</option>
                        <option value="Adss">Advertise</option>
                        <option value="house">Housing items</option>
                    
                </select>
            </div>

            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Width</p>
                    <input value={productDetails.width} onChange={changeHandler} name="width" type="number" placeholder='TypeHere' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Height</p>
                    <input value={productDetails.height} onChange={changeHandler} name="height" type="number" placeholder='TypeHere' />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Add a descreption</p>
                <input value={productDetails.descreption} onChange={changeHandler} name="descreption" type="text" placeholder='TypeHere' />
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload} className='addproduct-thumnail-img' alt="" />
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
            </div>
            <button onClick={() => { Add_Product() }} className='addproduct-btn'>ADD</button>
        </div>
    )
}

export default AddProduct

import React, { useEffect, useState } from 'react';
import upload from '../../Image/upload.png';
import './formStyle.css'
import { useParams } from 'react-router-dom';

function Formulairecmd() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);

    const [image, setImage] = useState(false);

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    

    const [formData, setFormData] = useState({
        produit : ([]),
        price : "",
        height: "",
        imagePersonalisade : ""
    });

    useEffect(() => {
        const fetchProduct = async () => {
            await fetch(`http://localhost:4000/product/${id}`)
                .then((resp) => resp.json())
                .then((data) => { setProduct(data.product) });
        };
        fetchProduct();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        formData.produit = product ; 
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
            formData.imagePersonalisade = responseData.image_url ;
        } 
        console.log("Form submitted with data:", formData);
        await fetch('http://localhost:4000/addtocommend' , {
            method : 'Post' ,
            headers : {
                Accept : 'application/json' ,
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(formData) , 
        }).then((resp)=>resp.json()).then((data)=>{
            data.success?alert("Commend Added") : alert ("Failed")
        })
    };
    

    return (
        <>
            <div className="add-product">
                <div className="addproduct-itemfield">
                    <p>Height</p>
                    <input value={formData.height} onChange={handleChange} type="number" name='height' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Picture that you want to print : </p>
                    <label htmlFor="file-input">
                        <img src={image ? URL.createObjectURL(image) : upload} className='addproduct-thumnail-img' alt="404" />
                    </label>
                    <input type="file" onChange={imageHandler} name='imagePersonalisade' id='file-input' hidden />
                </div>
                <button onClick={handleSubmit} className='addproduct-btn'>Add To Cart</button>
            </div>
        </>
    );
}

export default Formulairecmd;

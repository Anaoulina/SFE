import React, { useState, useEffect } from 'react';
import './Listeproduct.css';
import supp from '../../assets/supp.png'
import edite from '../../assets/edite.png'
import { Link } from 'react-router-dom'


function Listeproduct() {

    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
            .then((resp) => resp.json())
            .then((data) => { setAllProducts(data) })
    }

    useEffect(() => {
        fetchInfo();
    }, [])

    const remove_product = async (id) => {
        await fetch('http://localhost:4000/removedproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id }),
        });
        await fetchInfo();
    };



    return (
        <div className="liste-product">
            <h1>All Product Liste</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Availibale</p>
                <p>Category</p>
                <p>Remove</p>
                <p>Edite</p>
            </div>
            <div className="listeproduct-allproducts">
                {allproducts.map((product, index) => {
                    return (
                        <div key={index} className="listeproduct-format-main listeproduct-format">
                            <img src={product.image} alt="" className="listproduct-product-icon" />
                            <p>{product.name}</p>
                            <p>{product.old_price} DH</p>
                            <p>{product.new_price} DH</p>
                            <p>{product.available}</p>
                            <p>{product.category}</p>
                            <img onClick={() => { remove_product(product.id) }} className='listproduct-remove-icon' src={supp} alt="404" />
                            <Link to={`/editeproduct/${product.id}`} style={{ textDecoration: "none" }}>
                                <img className='listproduct-remove-icon' src={edite} alt="404" />
                            </Link>

                        </div>
                    );
                })}
                <hr />
            </div>
        </div>
    )
}

export default Listeproduct;

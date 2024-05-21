import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './editeStyle.css'

function EditProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({
        name: '',
        image: '',
        category: '',
        new_price: '',
        old_price: '',
        available: '',
        descreption: '',
        height: '',
        width: '',
        personalised: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/product/${id}`)
            .then(response => {
                setProduct(response.data.product);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/edit/${id}`, product)
            .then(response => {
                if (response.data.success) {
                    alert("Product Updated");
                    navigate('/listproduct');
                } else {
                    alert("Failed to update product");
                }
                console.log('Product updated:', response.data.updatedProduct);
            })
            .catch(error => {
                console.error('Error updating product:', error);
            });
    };

    return (
        <div className="edite-product">
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="editeproduct-itemfield">
                    <label>Name:</label>
                    <input type="text" name="name" value={product.name} onChange={handleChange} />
                </div>
                <div className="editeproduct-itemfield">
                    <label>Image:</label>
                    <input type="text" name="image" value={product.image} onChange={handleChange} />
                </div>
                <div className="editeproduct-itemfield">
                    <p>Category:</p>
                    <select value={product.category} onChange={handleChange} name="category" className='edite-product-selector'>
                        <option value="Painting">Painting</option>
                        <option value="paper">Paper Paint</option>
                        <option value="Adss">Advertise</option>
                        <option value="house">Housing items</option>
                        <option value="clothes">clothes</option>
                        <option value="Access">Accessoire</option>
                    </select>
                </div>
                <div className="editeproduct-price">
                    <div className="editeproduct-itemfield">
                        <label>New Price:</label>
                        <input type="text" name="new_price" value={product.new_price} onChange={handleChange} />
                    </div>
                    <div className="editeproduct-itemfield">
                        <label>Old Price:</label>
                        <input type="text" name="old_price" value={product.old_price} onChange={handleChange} />
                    </div>
                </div>

                <div className="editeproduct-itemfield">
                    <label>Available:</label>
                    <input type="text" name="available" value={product.available} onChange={handleChange} />
                </div>
                <div className="editeproduct-itemfield">
                    <label>Descreption:</label>
                    <input type="text" name="descreption" value={product.descreption} onChange={handleChange} />
                </div>
                <div className="editeproduct-price">
                    <div className="editeproduct-itemfield">
                        <label>Height:</label>
                        <input type="text" name="height" value={product.height} onChange={handleChange} />
                    </div>
                    <div className="editeproduct-itemfield">
                        <label>Width:</label>
                        <input type="text" name="width" value={product.width} onChange={handleChange} />
                    </div>
                </div>

                <div className="editeproduct-itemfield">
                    <label>Personalised:</label>
                    <input
                        type="checkbox"
                        checked={product.personalised}
                        onChange={(e) => setProduct({ ...product, personalised: e.target.checked })}
                        name="personalised"
                    />
                </div>
                <button type="submit" className='editeproduct-btn'>Save Changes</button>
            </form>
        </div>

    );

}

export default EditProduct;

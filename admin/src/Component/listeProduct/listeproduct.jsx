import React, { useState, useEffect } from 'react';
import './Listeproduct.css';
import { Container, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import supp from '../../assets/supp.png'
import edite from '../../assets/edite.png'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const options = [
    { value: 'Painting', label: 'Painting' },
    { value: 'paper', label: 'Paper Paint' },
    { value: 'Adss', label: 'Advertise' },
    { value: 'house', label: 'Housing items' },
    { value: 'clothes', label: 'Clothes' },
    { value: 'Access', label: 'Accessoire' },
    { value: 'Agendacalendrie', label: 'Agenda calendrie' },
    { value: 'Cart', label: 'Cart' },

];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: '#454545',
        color: '#ffffff',
        borderRadius: '15px',
        border: 'none',
        boxShadow: 'none',
        width: '300px',
        height: '50px',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#454545' : 'white',
        color: state.isSelected ? 'white' : 'black',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'white',
    }),
};

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

    const [search, setSearch] = useState('');

    const [selectedOption, setSelectedOption] = useState(null);
    const [filterList, setFilterList] = useState(
        allproducts.filter((item) => item.category === "Painting")
    );

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        setFilterList(allproducts.filter((item) => item.category === selectedOption.value));
    };
    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
        setFilterList(
            allproducts.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    };





    return (
        <div className="liste-product">
            <h1 style={{marginBottom : "50px"}}>All Product Liste</h1>

            <Container className="filter-bar-container" style={{marginLeft : "187px" , marginBottom : "20px"}}>
                <Row className="justify-content-center">
                    <Col md={4}>
                        <Select
                            options={options}
                            value={selectedOption}
                            placeholder="Filter By Category"
                            styles={customStyles}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col md={8}>
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search ..."
                                value={search}
                                onChange={handleChangeSearch}
                            />
                            <FaSearch />
                        </div>
                    </Col>
                </Row>

            </Container>



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
                {filterList.map((product, index) => {
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

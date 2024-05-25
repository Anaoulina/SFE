import React, { useState ,useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { dataShop } from '../SliderCard/SliderData';
import { ShopContex } from '../../Context/ShopContex';
import './sherachcard.css';

function SearchBar({ setFilterList }) {
    const [search, setSearch] = useState('');
    const { All_product} = useContext(ShopContex);

    const handleChange = (event) => {
        setSearch(event.target.value);
        setFilterList(
            All_product.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search ..."
                value={search}
                onChange={handleChange}
            />
            <FaSearch />
        </div>
    );
}

export default SearchBar;

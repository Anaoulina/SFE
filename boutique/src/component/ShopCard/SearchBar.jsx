import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { dataShop } from '../SliderCard/SliderData';
import './sherachcard.css';

function SearchBar({ setFilterList }) {
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
        setFilterList(
            dataShop.filter((item) =>
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

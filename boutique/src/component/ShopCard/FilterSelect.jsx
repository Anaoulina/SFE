import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { ShopContex } from '../../Context/ShopContex';

const options = [
    { value: 'Painting', label: 'Painting' },
    { value: 'paper', label: 'Paper Paint' },
    { value: 'Adss', label: 'Advertise' },
    { value: 'house', label: 'Housing items' },
    { value: 'clothes', label: 'Clothes' },
    { value: 'Access', label: 'Accessoire' },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: '#03a49c9a',
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        boxShadow: 'none',
        width: '200px',
        height: '40px',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#03a49c9a' : 'white',
        color: state.isSelected ? 'white' : '#03a49c9a',
        }),
    singleValue: (provided) => ({
        ...provided,
        color: 'white',
    }),
};

const FilterSelect = ({ setFilterList }) => {
    const { All_product } = useContext(ShopContex);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        setFilterList(All_product.filter((item) => item.category === selectedOption.value));
    };

    return (
        <Select
            options={options}
            value={selectedOption}
            placeholder="Filter By Category"
            styles={customStyles}
            onChange={handleChange}
        />
    );
};

export default FilterSelect;

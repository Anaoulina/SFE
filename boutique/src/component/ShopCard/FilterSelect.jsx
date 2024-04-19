import Select from 'react-select';
import { dataShop } from '../SliderCard/SliderData';

const options = [
    { value: 'tab', label: 'Tableau' },
    { value: 'sofa', label: 'Sofa' },
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
    const handleChange = (selectedOption) => {
        setFilterList(dataShop.filter((item) => item.category === selectedOption.value));
    };
    

    return (
        <Select
            options={options}
            defaultValue={{ value: '', label: 'Filter By Category' }}
            styles={customStyles}
            onChange={handleChange}
        />
    );
};

export default FilterSelect;
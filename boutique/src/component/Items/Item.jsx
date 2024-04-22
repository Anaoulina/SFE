import React from 'react';
import './ItemStyle.css';
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';



function Item(props) {
    const navigate = useNavigate();
    const click = () => {
        navigate(`/produit/${props.id}`);
    };
    return (
        <>
            <div className='item' >

                <img src={props.image} style={{ height: '250px', width: '250px' }} alt="notFound" />
                <p>{props.name}</p>
                <div className="container">
                    <div className="item-prices">
                        <div className="item-price-new">
                            {props.new_price}
                        </div>
                        <div className="item-price-old">
                            {props.old_price}
                        </div>
                    </div>
                    <div className="item-prices">
                        <button
                            aria-label="Add"
                            type="submit"
                            className="add"
                            onClick={() => click()}
                        >
                            <IoIosAddCircle />

                        </button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Item

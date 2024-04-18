import React from 'react';
import './ItemStyle.css';
import { IoIosAddCircle } from "react-icons/io";



function Item(props) {
    return (
        <>
            <div className='item' >

                <img src={props.image} alt="notFound" />
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
                    // onClick={() => props.handelAdd(props)}
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

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
            <div className='item' /*style={{ border: '2px solid gray' }}*/ >

                <img src={props.image} style={{ height: '250px', width: '250px' }} alt="notFound" />
                <center><p>{props.name}</p></center>
                <div className="container" >

                
                {/* <center><p className='description'>{props.descreption}</p></center> */}
                    <div className="item-prices">
                        <div className="item-price-new">
                            {props.new_price} DH
                        </div>
                        <div className="item-price-old">
                            {props.old_price} DH
                        </div>
                    </div>
                    <div className="item-prices">
                        <button
                            aria-label="Add"
                            type="submit"
                            className="add"
                            onClick={() => click()}
                        >
                            {/* <IoIosAddCircle /> */}
                            More details
                        </button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Item

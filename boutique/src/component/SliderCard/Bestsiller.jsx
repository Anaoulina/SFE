import React from 'react';
import './BestStyle.css';
import { data_product } from './SliderData';
import Item from '../Items/Item';

function Bestsiller() {
    return (
        <>
            <div className='best'>
            <div className="sec"> 
                <h1>Best Sales</h1>
                <hr />
                </div>
                <div className="container">
                    <div className="row">
                        {data_product.map((item, i) => (
                            <div className="col-md-4" key={i}>
                                <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bestsiller;

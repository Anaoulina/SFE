import React from 'react'
import './../SliderCard/BestStyle.css';
import Item from '../Items/Item';
import { dataShop } from './../SliderCard/SliderData';

function ShopCard({data}) {
    return (
        <>
        <div className='best'>
            <div className="sec"> 
                </div>
                <div className="container">
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="col-md-4" key={i}>
                                <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopCard

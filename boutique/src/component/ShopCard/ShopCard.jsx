import React from 'react'
import './../SliderCard/BestStyle.css';
import Item from '../Items/Item';

function ShopCard({data}) {
    return (
        <>
        <div className='best'>
            <div className="sec"> 
                </div>
                <div className="container">
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="col-md-3" key={i}>
                                <Item id={item.id} name={item.name} descreption={item.descreption} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopCard

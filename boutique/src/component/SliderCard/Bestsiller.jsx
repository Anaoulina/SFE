import React, { useContext, useState, useEffect } from 'react';
import './BestStyle.css';
import Item from '../Items/Item';
import { ShopContex } from '../../Context/ShopContex';

function Bestsiller() {
    const { All_product } = useContext(ShopContex);
    const [topSales, setTopSales] = useState([]);

    function getTopSales(products, topN) {
        return products
            .sort((a, b) => b.sales - a.sales)
            .slice(0, topN);
    }

    useEffect(() => {
        const topSalesProducts = getTopSales(All_product, 12);
        setTopSales(topSalesProducts);
    }, [All_product]);

    return (
        <>
            <div className='best'>
                <div className="sec">
                    <h1>Best Sales</h1>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        {topSales.map((item, i) => (
                            <div className="col-md-3" key={i}>
                                <Item 
                                    id={item.id} 
                                    name={item.name} 
                                    image={item.image} 
                                    new_price={item.new_price} 
                                    old_price={item.old_price} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bestsiller;

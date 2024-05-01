import React, { Fragment, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { dataShop } from '../../component/SliderCard/SliderData';
//import ShopCard from '../../component/ShopCard/ShopCard';
//import { Container } from 'react-bootstrap';
import "./../../component/SliderCard/prodcatestyle.css";
import { ShopContex } from '../../Context/ShopContex';
// import Item from '../../component/Items/Item';
import Itemselected from '../../component/Items/itemselected';

function Prduitcard() {

    const {id} = useParams();

    const { All_product} = useContext(ShopContex);
    const [SelectedProduct , setSemectedProdect] = useState(
        All_product.filter((item) => parseInt(item.id) === parseInt(id))[0]
    );

    return (
        <>
        <Fragment>
            <div className="banner">
            <h2 className="titre" title={SelectedProduct?.name}></h2>
            {/* <Item id={SelectedProduct.id} name={SelectedProduct.name} image={SelectedProduct.image} new_price={SelectedProduct.new_price} old_price={SelectedProduct.old_price}/> */}
            <Itemselected id={SelectedProduct.id} name={SelectedProduct.name} image={SelectedProduct.image} new_price={SelectedProduct.new_price} old_price={SelectedProduct.old_price} personnaliser = {SelectedProduct.personnaliser} category = {SelectedProduct.category} />
            </div>
           
            

        </Fragment>
        </>
    )
}

export default Prduitcard

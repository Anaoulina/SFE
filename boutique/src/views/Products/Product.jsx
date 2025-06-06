import React, { Fragment, useState,useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ShopCard from '../../component/ShopCard/ShopCard';
import SearchBar from '../../component/ShopCard/SearchBar';
import { ShopContex } from '../../Context/ShopContex';
//import { dataShop } from '../../component/SliderCard/SliderData';
import FilterSelect from '../../component/ShopCard/FilterSelect';
import { useParams } from 'react-router-dom';
import Footer from '../../component/Footer/footer';


function Product() {
    const { category } = useParams();
    const { All_product} = useContext(ShopContex);
    const [filterList, setFilterList] = useState(
        All_product.filter((item) => item.category === category)
    );

    return (
    <>
        <Fragment>
            <section className="filter-bar">
                <Container style={{ marginTop: '50px' }} className="filter-bar-container">
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <FilterSelect setFilterList={setFilterList} />
                        </Col>
                        <Col md={8}>
                            <SearchBar setFilterList={setFilterList} />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <ShopCard data={filterList} style={{ marginTop: '100px' }} />
                </Container>
            </section>
        </Fragment>

        <Footer/>
        </>
    );
}

export default Product;
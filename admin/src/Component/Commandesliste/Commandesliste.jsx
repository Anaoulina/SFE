import React, { useState, useEffect } from 'react';
import './stylecommande.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Commandesliste() {
    const [allCommands, setAllCommands] = useState([]);
    const [seeAll, setSeeAll] = useState(false);

    const fetchInfo = async () => {
        try {
            const response = await fetch('http://localhost:4000/commandlistes');
            const data = await response.json();
            setAllCommands(data);
        } catch (error) {
            console.error("Error fetching commands:", error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(2);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    const navigate = useNavigate();
    const navToDetails = (id) => {
        navigate(`/commende/${id}`);
    };

    return (
        <div className="liste-commend">
            <h1>All Commandes</h1>
            <Container className="filter-bar-container" style={{ marginBottom: "20px" }}>
                <Row className="justify-content-center">
                    <Col md={11}>
                        <h1></h1>
                    </Col>
                    <Col md={1}>
                        <button type="submit" className="see" onClick={() => setSeeAll(true)}>See All</button>
                    </Col>
                </Row>
            </Container>
            <div className="listcommend-format-main">
                <p>N°</p>
                <p>Client</p>
                <p>Total items</p>
                <p>Price</p>
                <p>Date</p>
                <p>Information</p>
            </div>
            <div className="listeproduct-allproducts">
                {allCommands.map((command, index) => (
                    (seeAll || !command.done) && (
                        <div key={index} className="listecommend-format-main listecommend-format">
                            <p>{command.id}</p>
                            <p>{command.userdata.name}</p>
                            <p>{command.idproduits.length}</p>
                            <p>{command.paiement} Dh</p>
                            <p>{formatDate(command.date)}</p>
                            <button type="submit" className="see" onClick={() => navToDetails(command._id)}>See</button>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default Commandesliste;

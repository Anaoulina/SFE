import React from 'react'
import './stylecommande.css'
import { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Commandesliste() {
    const [allcommend, setallcommands] = useState([]);
    const [seeall, setSeeAll] = useState(false);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/commandlistes')
            .then((resp) => resp.json())
            .then((data) => { setallcommands(data) })
    }
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(2);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }
    

    useEffect(() => {
        fetchInfo();
    }, [])

    const navigate = useNavigate();
    const Navtodetails = (id) => {
        navigate(`/commende/${id}`);
    };

    return (
        <div className="liste-commend">
            <h1>All Commandes </h1>
            <button type="submit" className="see" onClick={() => setSeeAll(true)}>See All</button>
            <div className="listcommend-format-main">
                <p>N°</p>
                <p>Client</p>
                <p>Total items</p>
                <p>Price</p>
                <p>Date</p>
                <p>Information</p>
            </div>
            <div className="listeproduct-allproducts">
                {allcommend.map((commend, index) => {
                    if (!commend.done && !seeall) {
                        return (
                            <div key={index} className="listecommend-format-main listecommend-format">
                                <p>{commend.id}</p>
                                <p>{commend.userdata.name}</p>
                                <p>{commend.idproduits.length}</p>
                                <p>{commend.paiement} Dh</p>
                                <p>{formatDate(commend.date)}</p>
                                <button type="submit" className="see" onClick={() => Navtodetails(commend._id)}>See</button>
                            </div>
                        );
                    }
                    return (
                        <div key={index} className="listecommend-format-main listecommend-format">
                            <p>{commend.id}</p>
                            <p>{commend.userdata.name}</p>
                            <p>{commend.idproduits.length}</p>
                            <p>{commend.paiement} Dh</p>
                            <p>{formatDate(commend.date)}</p>
                            <button type="submit" className="see" onClick={() => Navtodetails(commend._id)}>See</button>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Commandesliste


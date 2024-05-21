import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './stylepage.css'

function Commandepage() {
    const { id } = useParams();
    const [selectedCommend, setSelectedCommend] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const response = await fetch(`http://localhost:4000/getcommand/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setSelectedCommend(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchInfo();
    }, [id]);

    if (!selectedCommend) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Command Information</h1>
            <div className="cont">
                <div className="item-espace">
                    <div className="item-item">
                        <p><span>N° commend: </span>{selectedCommend.id}</p>
                        <p><span>Total Items: </span>{selectedCommend.idproduits.length}</p>
                    </div>
                    <div className="item-item">
                        <p><span>Price: </span>{selectedCommend.paiement} Dh</p>
                        <p><span>Date of the commend: </span> {formatDate(selectedCommend.date)}</p>
                    </div>
                </div>
                <p><span>Done:</span> <input type="checkbox" checked={selectedCommend.done} readOnly /></p>
                <div className="container">
                    <div className="row">
                        {selectedCommend.idproduits.map((produit, index) => (

                            <div className="col-md-3">
                                <div key={index}>
                                    <Information produit={produit} />
                                </div>

                            </div>

                        ))}
                    </div>
                </div>
                <h1>To contact the client  : </h1>
                <div className="item-espace">
                    <div className="item-item">
                    <p><span>Name : </span> {selectedCommend.userdata.name}</p>
                    <p><span>Email :</span> {selectedCommend.userdata.email}</p>
                   
                    </div>
                <div className="item-item">
                <p><span>Phone Number : </span>  {selectedCommend.Tel} </p>
                    <p><span>Adreess : </span>{selectedCommend.adresse} </p>
                </div>
            </div>
        </div>
        </div>
    );
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

function Information({ produit }) {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const response = await fetch(`http://localhost:4000/commendbyid/${produit}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setInfo(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchInfo();
    }, [produit]);

    if (!info) {
        return <p>Loading information...</p>;
    }

    return (

        <div className='cadre'>
            <p><span>Product Name: </span>{info[0].produit.name}</p>
            <p><span>Product Price:</span> {info[0].price} Dh</p>
            <p><span>Personalised Image   :</span> </p>
            <img src={info[0].imagePersonalisade} alt="There is no picture " srcset="" />
            <p><span>Original Price:</span> {info[0].produit.new_price} Dh</p>
            <p><span>Original product :</span> </p>
            <img src={info[0].produit.image} alt="404" srcset="" />
            


            {/* Add more information about the product as needed */}
        </div>


    );
}

export default Commandepage;

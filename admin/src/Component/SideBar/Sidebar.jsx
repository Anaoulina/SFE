import React from 'react'
import './sidebar.css'
import addprocuct from '../../assets/add-product.png'
import listproduct from '../../assets/liste_product.png'
import commandes from '../../assets/commandes.png'

import {Link} from 'react-router-dom'


function Sidebar() {
    return (
        <div className="sidebar">
<Link to={'/addproduct'} style={{textDecoration : "none"}}>
    <div className="sidebar-item">
        <img src={addprocuct} alt="" />
        <p>Add product</p>
    </div>
</Link>

<Link to={'/listproduct'} style={{textDecoration : "none"}}>
    <div className="sidebar-item">
    <img src={listproduct} alt="" />
        <p>Product liste</p>
    </div>
</Link>

<Link to={'/commandeliste'} style={{textDecoration : "none"}}>
    <div className="sidebar-item">
    <img src={commandes} alt="" />
        <p>Command</p>
    </div>
</Link>
        </div>
    )
}

export default Sidebar

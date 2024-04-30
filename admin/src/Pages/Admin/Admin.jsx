import React from 'react'
import './Admin.css'
import Sidebar from '../../Component/SideBar/Sidebar'
import {Routes , Route} from 'react-router-dom'
import Listeproduct from '../../Component/listeProduct/listeproduct'
import AddProduct from '../../Component/Addproduct/addProduct'

function Admin() {
    return (
        <div className='admin'>
            <Sidebar />
            <Routes>
                <Route path='/addproduct' element={<AddProduct/>}/> 
                <Route path='/listproduct' element={<Listeproduct/>}/>
            </Routes>
        </div>
    )
}

export default Admin

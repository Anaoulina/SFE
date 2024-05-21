import React from 'react'
import './Admin.css'
import Sidebar from '../../Component/SideBar/Sidebar'
import {Routes , Route} from 'react-router-dom'
import Listeproduct from '../../Component/listeProduct/listeproduct'
import AddProduct from '../../Component/Addproduct/addProduct'
import EditProduct from '../../Component/Editeproduct/Editeproduct'
import Commandesliste from '../../Component/Commandesliste/Commandesliste'
import Commandepage from '../../Component/Commandesliste/commandepage'

function Admin() {
    return (
        <div className='admin'>
            <Sidebar />
            <Routes>
                <Route path='/addproduct' element={<AddProduct/>}/> 
                <Route path='/listproduct' element={<Listeproduct/>}/>
                <Route path='/editeproduct/:id' element={<EditProduct/>}/>
                <Route path='/commandeliste' element = {<Commandesliste/>}/>
                <Route path='/commende/:id' element={<Commandepage/>}/>

            </Routes>
        </div>
    )
}

export default Admin

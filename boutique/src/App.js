import './App.css';
import Navbar from './component/NavBar/Navbar.jsx';
import Home from './views/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './views/Products/Product.jsx';
import About from './views/About/about.jsx';
import Contact from './views/Contact/contact.jsx';
import Signup from './views/Sign/Signup.jsx';
import Prduitcard from './views/Products/Prduitcard.jsx';
import Login from './views/Sign/Login.jsx';
// import FormCmd from './component/Items/formulairecmd.jsx'
import Chekout from './component/CartView/chekout.jsx';
import Cart from './component/CartView/cart.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop/:category' element={<Product/>} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/produit/:id' element={<Prduitcard/>}/>
          <Route path='/login' element = {<Login/>}/>
          {/* <Route path='/comdForm/:id' element = {<FormCmd/>} /> */}
          <Route path='/checkout' element = {<Chekout/>}/>
          <Route path='/cart' element = {<Cart/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

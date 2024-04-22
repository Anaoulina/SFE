import './App.css';
import Navbar from './component/NavBar/Navbar.jsx';
import Home from './views/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './views/Products/Product.jsx';
import About from './views/About/about.jsx';
import Contact from './views/Contact/contact.jsx';
import LoginSignup from './views/Sign/Signup.jsx';
import Prduitcard from './views/Products/Prduitcard.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Product />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path='/produit/:id' element={<Prduitcard/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

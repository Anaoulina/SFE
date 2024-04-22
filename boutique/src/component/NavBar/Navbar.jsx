import React, { useEffect, useState } from 'react';
import './navbarstyle.css';
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../CartView/cart';

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [menu, setMenu] = useState("Home");
  const [modalShow, setModalShow] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate(); 

  function showHideModal() {
    setModalShow(!modalShow);
  }

  function scrollHandler() {
    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else if (window.scrollY <= 50) {
      setIsFixed(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  function handleLoginClick() {
    navigate('/login');
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow py-3 ${isFixed ? 'fixed-top' : ''} ${isCollapsed ? 'collapsed-navbar' : ''}`}>
      <div className="container-fluid py-2">
        <h6>logo</h6>
        <button className="navbar-toggler" type="button" onClick={() => setIsCollapsed(!isCollapsed)} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-link active fw-bold " onClick={() => { setMenu("Home") }} > <Link style={{textDecoration : 'none' , color : 'black'}} to='/'>Home </Link> {menu === "Home" ? <hr /> : <></>}</li>
            <li className="nav-link active fw-bold " onClick={() => { setMenu("Shop") }} > <Link style={{textDecoration : 'none' , color : 'black'}} to='/Shop' >Shop</Link> {menu === "Shop" ? <hr /> : <></>}</li>
            <li className="nav-link active fw-bold " onClick={() => { setMenu("About") }} > <Link style={{textDecoration : 'none' , color : 'black'}} to='/About' >About </Link>{menu === "About" ? <hr /> : <></>}</li>
            <li className="nav-link active fw-bold " onClick={() => { setMenu("Contact") }} > <Link style={{textDecoration : 'none' , color : 'black'}} to='/Contact' >Contact</Link> {menu === "Contact" ? <hr /> : <></>}</li>
          </ul>
          <div className="buttons">
          
            <a className="btn" href="#"><i className="fa fa-sign-in me-1" style={{ fontSize: '20px' }}></i></a>
            <button className="btn" onClick={handleLoginClick}><i className="fa fa-user-plus me-1" style={{ fontSize: '20px' }}></i></button>
            <a className="btn" href="#" onClick={() => {showHideModal()}} style={{ marginTop: '-10px' }}><i className="fa fa-shopping-cart me-1" style={{ fontSize: '20px' }}></i><div className="nav-cart-count" style={{ width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-35px', marginLeft: '10px', borderRadius: '11px', fontSize: '14px', background: 'red', color: 'white' }}>0</div></a>
          </div>
        </div>
      </div>
      <Cart modalShow={modalShow} setModalShow={setModalShow} />
    </nav>
  );
}

export default Navbar;

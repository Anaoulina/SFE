import React, { useContext, useEffect, useState } from 'react';
import './navbar.css'

function Navbar() {
    const [isFixed, setIsFixed] = useState(false);
    const [menu, setMenu] = useState("Home");
    const [modalShow, setModalShow] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);
  
  
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

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow py-3 ${isFixed ? 'fixed-top' : ''} ${isCollapsed ? 'collapsed-navbar' : ''}`}>
      <div className="container-fluid py-2">
        <h6>logo</h6><h6>Admin Panel</h6>
        <div className="navbar-toggler"  /*onClick={() => setIsCollapsed(!isCollapsed)}*/ >
         
        </div>
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-link active fw-bold " onClick={() => { setMenu("Home") }} > {menu === "Home" ? <hr /> : <></>}</li>
            <li className="nav-link active fw-bold " onClick={() => { setMenu("Shop") }} >  {menu === "Shop" ? <hr /> : <></>}</li>
            <li className="nav-link active fw-bold " onClick={() => { setMenu("About") }} > {menu === "About" ? <hr /> : <></>}</li>
            <li className="nav-link active fw-bold " onClick={() => { setMenu("Contact") }} >  {menu === "Contact" ? <hr /> : <></>}</li>
          </ul>
          <div className="buttons">

            <a className="btn" /*onClick={handleLoginClick}*/><i className="fa fa-sign-in me-1" style={{ fontSize: '20px' }}></i></a>
            <a className="btn" href="#" /*onClick={() => { showHideModal() }}*/ style={{ marginTop: '-10px' }}><i className="fa fa-shopping-cart me-1" style={{ fontSize: '20px' }}></i>
              <div className="nav-cart-count" style={{ width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-35px', marginLeft: '10px', borderRadius: '11px', fontSize: '14px', background: 'red', color: 'white' }}>
                {/* {getTotalCartItems()} */}
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <Cart modalShow={modalShow} setModalShow={setModalShow} /> */}
    </nav>
        
        </>
    )
}

export default Navbar

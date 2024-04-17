import React, { useEffect, useState } from 'react';
 

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else if (window.scrollY <= 50) {
      setIsFixed(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    // Clean up
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow py-3 ${isFixed ? 'fixed-top' : ''}`}>
      <div className="container-fluid py-2">
          <h6>logo</h6>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
             {/* { <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>} */}
              <a className="nav-link active fw-bold "  style={{ fontFamily: 'Georgia, sans-serif' , padding: '0.5rem 2rem' }} aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              {/* <NavLink className="nav-link active" to="/products">Product</NavLink>*/}
              <a className="nav-link active fw-bold" style={{ fontFamily: 'Georgia, sans-serif' , padding: '0.5rem 2rem' }} href="#">Product</a>

            </li>
            <li className="nav-item">
              {/* <NavLink className="nav-link active" to="/about">About</NavLink>*/}
              <a className="nav-link active fw-bold "  style={{ fontFamily: 'Georgia, sans-serif' , padding: '0.5rem 2rem' }} href="#">About</a>
            </li>
            <li className="nav-item">
              {/*<NavLink className="nav-link active" to="/contact">Contact</NavLink>*/}
              <a className="nav-link active fw-bold "  style={{ fontFamily: 'Georgia, sans-serif', padding: '0.5rem 2rem' }} href="#">Contact</a>
            </li>
          </ul>
          {/* <NavLink className="navbar-brand mx-auto fw-bold" to="/">APPLE MART</NavLink>*/}
          <div className="buttons">
          <a className="btn" href="#"><i className="fa fa-sign-in me-1" style={{fontSize:'20px'}}></i></a>
          <a className="btn" href="#"><i className="fa fa-user-plus me-1" style={{fontSize:'20px'}}></i></a>
          <a className="btn" href="#" style={{marginTop:'-10px'}}><i className="fa fa-shopping-cart me-1" style={{fontSize:'20px'}}></i><div className="nav-cart-count" style={{ width : '20px' ,height : '20px' , display : 'flex', justifyContent : 'center',alignItems:'center',marginTop:'-35px',marginLeft:'10px',borderRadius:'11px',fontSize:'14px',background:'red',color:'white'}}>0</div></a>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar

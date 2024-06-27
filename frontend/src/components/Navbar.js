import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id='headerNav'>
      <div className="container-fluid  position-relative">
        <a className="navbar-brand mx-auto position-absolute start-50 translate-middle-x" href="#">MAINE COON OHIO</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page">HOME</Link>
            </li>
            <li className="nav-item">
              <Link to='/shop' className="nav-link">INFORMATION</Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-link">ABOUT US</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link">CONTACT INFO</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

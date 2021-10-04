import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MenuBar.css'

const MenuBar = () => {
  return (
    <div  className="container mt-5 d-flex align-items-center justify-content-center menubar">
      <div>
        <img src="https://template.hasthemes.com/edule/eduLe/assets/images/logo.png" alt="" />
      </div>
      <div>
        <ul className="d-flex align-items-center justify-content-end">
          <Link to='/home'  className="items">
            <li>Home</li>
          </Link>
          <Link to='/service'  className="items">
            <li>Service</li>
          </Link>
          <Link to='/aboutus'  className="items">
            <li>About Us</li>
          </Link>
          <Link to='contactus'  className="items">
            <li>Contact Us</li>
          </Link>
          <li  className="items">Sign In</li>
        </ul>
      </div>
      <div>
        <button className="menu-btn2">Sign Up</button>
      </div>
    </div>
);
};

export default MenuBar;
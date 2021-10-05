import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Infobar.css'

const Infobar = () => {
    return (

        <div className="d-flex bg-black text-white">
            <div className="p-4 col text-center">
                <h5>All course 28% off for <span className='pberian'>pberian people's.</span></h5>
            </div>
            <div className="col d-flex">
                <div className="p-4 col d-flex">
                    <h5 className="me-5"><i className="fas fa-phone-volume fcolor"></i> (970) 262-1413</h5>
                    <h5><i className="far fa-envelope fcolor"></i>  address@email.com</h5>
                </div>
                <div className="d-flex col">
                    <p><i class="fab fa-facebook-f p-4 ficon"></i></p>
                    <p><i class="fab fa-twitter p-4 ficon"></i></p>
                    <p><i class="fab fa-instagram p-4 ficon"></i></p>
                    <p><i class="fab fa-skype p-4 ficon"></i></p>
                </div>
            </div>
        </div>

    );
};

export default Infobar;
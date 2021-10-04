import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container row mt-5 py-5 mx-auto">
            <div className="col">
                <div>
                    <img src="https://template.hasthemes.com/edule/eduLe/assets/images/logo.png" alt="" />
                </div>
                <div className="mt-4">
                <div>
                    <h4>Caribbean Ct</h4>
                    <p>Haymarket, Virginia(VA)</p>
                </div>
                <div>
                    <p><i className="far fa-envelope fcolor"></i> address@email.com</p>
                    <p><i className="fas fa-phone-volume fcolor"></i> (970) 262-1413</p>
                </div>
                <div className="d-flex">
                    <p><i class="fab fa-facebook-f me-2"></i></p>
                    <p><i class="fab fa-twitter me-2"></i></p>
                    <p><i class="fab fa-instagram me-2"></i></p>
                    <p><i class="fab fa-skype p-"></i></p>
                </div>
                </div>
            </div>
            <div className="col">
                <h1>Category</h1>
                <div className="mt-4">
                <p>Creative Writing</p>
                <p>Film & Video</p>
                <p>Graphic Design</p>
                <p>UI/UX Design</p>
                <p>Business Analytics</p>
                <p>Marketing</p>
                </div>
            </div>
            <div className="col">
                <h1>Quick Links</h1>
                <div className="mt-4">
                <p>Discussion</p>
                <p>Terms & Conditions</p>
                <p>Customer Support</p>
                <p>Course FAQ’s</p>
                </div>
            </div>
            <div className="col">
                <h1>Subscribe</h1>
                <div className="mt-4">
                <p>Lorem Ipsum has been them an industry printer took a galley make book.</p>
                <input className="rounded" type="email" name="" id="" placeholder="Email here"/>
                <div className="mt-3">
                <button className="subs-btn">Subscribe Now</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner p-4 col-md-12 col-sm-4 col-12 d-flex align-item-center justify-content-center">
            <div>
                <h5 className="bannertext">Start your favourite course</h5>
                <h2>Now learning from <br /> anywhere, and build<br /> your bright career.</h2>
                <p>It has survived not only five centuries but also the leap into electornic typesetting</p>
                <div>
                    <button className="banner-btn">Start A Course</button>
                </div>
            </div>
            <div className="ms-2 img-fluid">
                <img src="https://template.hasthemes.com/edule/eduLe/assets/images/slider/slider-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;
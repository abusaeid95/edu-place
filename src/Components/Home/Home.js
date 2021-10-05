import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import './Home.css';

const Home = () => {
    return (
        <div className="home container">
            <Banner></Banner>
            <Courses></Courses>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';

const Home = () => {
    return (
        <div className="home container">
            <Banner></Banner>
            <SearchBar></SearchBar>
            <Courses></Courses>
        </div>
    );
};

export default Home;
import React from 'react';
import { Router } from 'react-router';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import MenuBar from '../MenuBar/MenuBar';
import SearchBar from '../SearchBar/SearchBar';
import Infobar from '../StatuBar/Infobar';
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
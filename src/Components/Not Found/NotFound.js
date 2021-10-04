import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center">
            <h1 className='bg-danger'>"404!!" Not data found!</h1>
            <Link to='/home'  className="items">
            <li>Home</li>
          </Link>
        
        </div>
    );
};

export default NotFound;
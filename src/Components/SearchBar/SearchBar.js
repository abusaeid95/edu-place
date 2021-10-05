import React from 'react';
import './SerachBar.css'

const SearchBar = () => {
    return (
        <div className="src-area d-flex justify-content-between">
            <div className="col">
                <h2>All <span className="src-text text-align-center justify-content-center">Courses</span> of Edule</h2>
            </div>
            <div className="col mx-auto d-flex">
                <div class="box"><i class="fa fa-search" aria-hidden="true"></i>
                    <input type="text" name="" />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
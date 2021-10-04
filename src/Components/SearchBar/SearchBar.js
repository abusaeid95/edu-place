import React from 'react';
import './SerachBar.css'

const SearchBar = () => {
    return (
        <div className="d-flex justify-content-between">
                <dir>
                <h2>All <span className="src-text text-align-center justify-content-center">Courses</span> of Edule</h2>
                </dir>
                <div className="col-6 mx-auto d-flex">
                <label for="inputlg"></label>
                <input class="form-control input-lg" id="inputlg" type="text" />
                <button className="src-btn">Search</button>
                </div>
        </div>
    );
};

export default SearchBar;
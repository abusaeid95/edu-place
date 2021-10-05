import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import './Courses.css'

const Courses = () => {
    const [authors, setAuthors] = useState([])
    const [serachDisplay, setSearchDisplay] = useState([])
    useEffect(() => {
        fetch('./fake.json')
            .then(res => res.json())
            .then(data =>{setSearchDisplay(data); setAuthors(data)})
            
    }, [])
    const searchHandler = event => {
        const searchText = event.target.value;
        const searchAuthors = authors.filter(author => author.title.toLowerCase().includes(searchText.toLowerCase()))
        setSearchDisplay(searchAuthors);
    }
    return (
        <div>
            <div className="src-area d-flex justify-content-between">
                <div className="col">
                    <h2>All <span className="src-text text-align-center justify-content-center">Courses</span> of Edule</h2>
                </div>
                <div className="col mx-auto d-flex">
                    <div class="box"><i class="fa fa-search" aria-hidden="true"></i>
                        <input onChange={searchHandler} type="text" name="" />
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4 my-4">

                {
                    serachDisplay.map(authorr => <CourseCard authorr={authorr}>
                    </CourseCard>)
                }
                
            </div>
            <div className="col text-center">
            <button className=" text-center subss-btn">Load More</button>
            </div>
            
        </div>

    );
};

export default Courses;
import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const [authors, setAuthors] = useState([])
    console.log(authors)
    useEffect(()=>{
        fetch('./fake.json')
        .then(res => res.json())
        .then(data => setAuthors(data))
    },[])
    return (
            <div class="row row-cols-1 row-cols-md-3 g-4 my-4">
            
            {
                authors.map(authorr =><CourseCard authorr={authorr}>
                </CourseCard>)
            }
            
        <button className="mx-auto subs-btn">Load More</button>
        </div>

    );
};

export default Courses;
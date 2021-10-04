import React from 'react';
import Rating from 'react-rating';
import './CourseCard.css'


const CourseCard = (props) => {
    console.log(props.authorr);
    const { nam, img, author, id, title, category, time, lectures, price, rating } = props.authorr
    return (
        <div className="col">
            <div className="card h-100 main-card">
                <img className="card-img" src={img} alt="" />
                <div className="card-body">
                    <div className="d-flex small-pic">
                        <div className="author d-flex" >
                            <img className="author-img" src={author} alt="" />
                            <div className="p-3 text-center">
                                <p>{nam}</p>
                            </div>
                        </div>
                        <div>
                            <p className="p-2 category">{category}</p>
                        </div>
                    </div>
                    <h5 className="card-title">{title}</h5>
                    <div className="d-flex timeb">
                        <p><i class="far fa-clock"></i> {time}</p>
                        <p><i class="fas fa-book-open"></i> {lectures} Lectures</p>
                    </div>
                    <div className="d-flex timeb">
                        <h5>${price}.00</h5>
                        <p className="rating">
                            <Rating initialRating={rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fa fa-star icon-color"
                                readonly>
                            </Rating>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CourseCard;
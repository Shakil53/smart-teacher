import React from 'react';

const CourseCard = ({ course }) => {
    const { course_title, image, price, rating } = course;
    // console.log(course_title)





    return (
        <>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">

                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Course Title: {course_title}</h2>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseCard;
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CourseCard from './CourseCard/CourseCard';


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    })
    return (
        <>
            <div className="text-center mt-4">
                <h3 className="text-4xl font-bold text-sky-500">Courses</h3>
                <h3 className='text-3xl'>Courses loaded from mongoDB</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which do not look even slightly believable. </p>

            </div>
            <div className='ml-10 w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    courses.map(course => <CourseCard
                        key={course._id}
                        course={course}
                    ></CourseCard>)
                }
            </div>
        </>

    );
};

export default Courses;
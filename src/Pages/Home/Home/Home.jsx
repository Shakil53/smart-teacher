import { useEffect, useState } from "react";
import CourseCard from "../../Courses/CourseCard/CourseCard";
import Carousel from "../Carousel/Carousel";

const Home = () => {


    return (
        <div>
            <Carousel></Carousel>
            <div className="max-w-6xl text-center m-6">
                <h1 className="text-3xl font-bold m-6 text-center ml-80">Using Technology for Both Front-End and Back-End</h1>
                <div>
                    <div className=" flex ml-[480px] badge badge-outline badge-lg font-bold mt-8">Front End with the MERN Stack</div>
                    <div className=" ml-[220px]">
                        <ul className="steps steps-vertical">
                            <li className="step step-primary step-sm font-semibold">State Management:  React Context API
                            </li>
                            <li className="step step-primary step-sm font-semibold">HTTP Client:  Using Axios or Fetch for making API calls
                            </li>
                            <li className="step step-primary step-sm font-semibold">UI Libraries:   Tailwind CSS
                            </li>

                        </ul>
                    </div>


                </div>
                <div>
                    <div className=" flex ml-[480px] badge badge-outline badge-lg font-bold mt-8">Back End with the MERN Stack</div>
                    <div className=" ml-[75px]">
                        <ul className="steps steps-vertical">
                            <li className="step step-primary step-sm font-semibold">MongoDB:  For database storage

                            </li>
                            <li className="step step-primary step-sm font-semibold">Node.js: For runtime environment

                            </li>
                            <li className="step step-primary step-sm font-semibold"> Express: Web framework

                            </li>

                        </ul>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Home;
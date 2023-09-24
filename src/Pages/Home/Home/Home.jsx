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

                            <li data-content="✓" className="step step-neutral step-sm font-semibold">State Management:  React Context API
                            </li>

                            <li data-content="✓" className="step step-neutral step-sm font-semibold">HTTP Client:  Using Axios or Fetch for making API calls
                            </li>
                            <li data-content="✓" className="step step-neutral step-sm font-semibold">Signup & Login: Create User and Login User
                            </li>

                            <li data-content="✓" className="step step-neutral step-sm font-semibold">UI Libraries:   Tailwind CSS
                            </li>

                        </ul>
                    </div>


                </div>
                <div>
                    <div className=" flex ml-[480px] badge badge-outline badge-lg font-bold mt-8">Back End with the MERN Stack</div>
                    <div className=" ml-[155px]">
                        <ul className="steps steps-vertical">
                            <li data-content="✓" className="step step-neutral step-sm font-semibold">MongoDB:  For database storage</li>
                            <li data-content="✓" className="step step-neutral step-sm font-semibold">User Authentication: Firebase authentication
                            </li>
                            <li data-content="✓" className="step step-neutral step-sm font-semibold">Node.js: For runtime environment

                            </li>
                            <li data-content="✓" className="step step-neutral step-sm font-semibold"> Express: Web framework

                            </li>

                        </ul>
                    </div>


                </div>
                <div>
                    <div className=" flex ml-[480px] badge badge-outline badge-lg font-bold mt-8 mb-10">Working Procedure</div>

                    <div className="overflow-x-auto ml-[255px] mb-36">
                        <ul className="steps">
                            <li className="step">create react vite project</li>
                            <li className="step step-secondary"> Router setup
                            </li>
                            <li className="step step-error"> npm Tailwind setup
                            </li>
                            <li className="step step-secondary">using React hook form (RHF)
                            </li>
                            <li className="step">firebase for authentication
                            </li>
                            <li className="step step-accent">setup vite environment variable (ignore firebase api key)</li>
                            <li className="step">Create provider and pass user create and login function</li>
                            <li className="step step-secondary">eslintrc props validation setup
                            </li>
                            <li className="step step-error"> Login & SignUp complete
                            </li>
                            <li className="step step-secondary"> Sweet alert after user login and signUp successful
                            </li>

                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;
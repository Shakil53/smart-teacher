import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Courses from "../Pages/Courses/Courses";
import About from "../Pages/About/About";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'courses',
                element: <Courses></Courses>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }


        ]
    },
]);
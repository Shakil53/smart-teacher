import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';


const NavBar = () => {
    const { signInUser } = useContext(AuthContex)

    const nabOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/courses'>Courses</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>


    </>
    return (
        <div className="navbar navbar-center bg-primary text-white">
            <div className="navbar-start">

                <Link to='/' className="btn btn-ghost normal-case text-xl">Smart Teacher</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-7 text-bold">

                    {nabOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    signInUser ? < Link to='/login' className="btn">Logout</Link> :
                        <Link to='/login' className="btn">Log in</Link>
                }

            </div>
        </div >
    );
};

export default NavBar;
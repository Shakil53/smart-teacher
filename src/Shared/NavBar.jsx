import { Link } from 'react-router-dom';

const NavBar = () => {

    const nabOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/courses'>Courses</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/login'>Login</Link></li>


    </>
    return (
        <div className="navbar navbar-center bg-primary text-white">
            <div className="navbar-start">

                <Link to='/' className="btn btn-ghost normal-case text-xl">Smart Teacher</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-7 text-bold">
                    {/* TODO: li dynamic */}
                    {nabOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn">Log in</Link>
            </div>
        </div>
    );
};

export default NavBar;
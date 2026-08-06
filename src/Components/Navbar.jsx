import { use } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
const Navbar = () => {

    const { user, logOut } = use(AuthContext)

    const LogOut = () => {
        logOut()
            .then(() => {

            })

    }

    const link = <>
        <NavLink className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-black"} to="/"><li className="m-2 text-xl">Home</li></NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-black"} to="/menu"><li className="m-2 text-xl">Menu</li></NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-black"} to="/about"><li className="m-2 text-xl">About</li></NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-black"} to="/contect"><li className="m-2 text-xl">Contect</li></NavLink>
    </>

    return (
        <div className="navbar h-fit bg-white/20 justify-around backdrop-blur-md shadow-2xl sticky z-50 top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <NavLink to="/"
                    className="btn-ghost text-xl sm:text-2xl text-blue-500"> Taste Nest <span className="text-red-500">Resturent</span>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end mx-5 gap-5">
                <div>
                    {
                        user ? <img className="w-16 rounded-full" src={user.photoURL} alt="" /> : <FaRegUserCircle size={30} sm:size={44} />
                    }
                </div>
                <div>
                    {
                        user ? <button type="button" className="btn-primary btn" onClick={LogOut}>SignOut</button> : <Link className="btn btn-primary outline-0" to="/login">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
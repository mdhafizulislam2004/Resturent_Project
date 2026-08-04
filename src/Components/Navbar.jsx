const Navbar = () => {

    const link=<>
    <li className="m-2 text-xl">Home</li>
    <li className="m-2 text-xl">Menu</li>
    <li className="m-2 text-xl">About</li>
    <li className="m-2 text-xl">Contect</li>
    </>

    return (
        <div className="navbar bg-base-100 sticky top-0">
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
                <a className="btn btn-ghost text-2xl text-blue-500"> Taste Nest <span className="text-red-500">Resturent</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {link}
                </ul>
            </div>
            <div className="navbar-end">
                Login
            </div>
        </div>
    );
};

export default Navbar;
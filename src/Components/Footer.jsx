import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import ErrorPage from "./ErrorPage";
// import { Link, NavLink } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-[#121212] text-white">
            <div className="max-w-9/12 mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Restaurant Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-5">Foodie's</h2>
                        <p className="text-gray-500 mb-6">
                            We serve fresh, delicious, and high-quality food made with
                            premium ingredients. Every meal is prepared with love to create
                            an unforgettable dining experience.
                        </p>
                    </div>

                    <div>
                        <h1 className="text-xl font-black">Contect Info</h1>
                        <div className="space-y-3 mt-7">
                            <p className="flex items-center gap-3">
                                <FaLocationDot className="text-primary" />
                                Savar,Dhaka, Bangladesh
                            </p>

                            <p className="flex items-center gap-3">
                                <FaPhone className="text-primary" />
                                +880 1921700133
                            </p>

                            <p className="flex text-sm items-center gap-3">
                                <FaEnvelope className="text-primary" />
                                hafizul2004official@gmail.com
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-5">Quick Links</h2>

                        <ul className="space-y-3">
                            <li><NavLink to="/" className="hover:text-primary">Home</NavLink></li>
                            <li><NavLink to="/about" className="hover:text-primary">About</NavLink></li>
                            <li><NavLink to="/menu" className="hover:text-primary">Menu</NavLink></li>
                            <li><NavLink to="/contact" className="hover:text-primary">Contact</NavLink></li>
                            <li><NavLink to="/login" className="hover:text-primary">Login</NavLink></li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h2 className="text-xl font-bold mb-5">Opening Hours</h2>

                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-base-100 pb-2">
                                <span>Mon - Fri</span>
                                <span>09:00 AM - 10:00 PM</span>
                            </div>

                            <div className="flex justify-between border-b border-base-100 pb-2">
                                <span>Saturday</span>
                                <span>10:00 AM - 11:00 PM</span>
                            </div>

                            <div className="flex justify-between border-b border-base-100 pb-2">
                                <span>Sunday</span>
                                <span>11:00 AM - 09:00 PM</span>
                            </div>
                        </div>
                    </div>
                    {/* Follow Us */}
                    <div className="flex items-center py-5 flex-col">
                        <h2 className="text-xl items-center font-bold mb-5">Follow Us</h2>

                        {/* <p className="text-gray-500 mb-6">
              Stay connected with us for the latest offers, delicious meals,
              and exciting updates.
            </p> */}

                        <div className=" text-center flex gap-4">
                            <span>
                                <Link to="https://www.facebook.com/habib20044">  <FaFacebook size={34} className="hover:text-green-500" /></Link>
                            </span>
                            <span>
                                <Link to="https://www.linkedin.com/in/mdhafizulislam2004/"><FaLinkedin className="hover:text-green-500" size={34} /></Link>
                            </span>
                            <span><Link to="/*"><FaYoutube className="hover:text-green-500" size={34}/></Link></span>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-red-400 mt-12 pt-6 flex flex-col  justify-between items-center gap-4">

                    <p className="text-center">
                        &copy; 2026 Taste Nest Restaurant. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
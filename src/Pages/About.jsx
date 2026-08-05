import {motion} from "motion/react"
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Rating from "./Rating";
import WhyChoseUs from "./WhyChooseUse";
import { NavLink } from "react-router";

const About = () => {
    return (
        <div>
            <Navbar/>
            <section className="py-20 bg-base-100">
                <motion.div whileHover={{ scale: 1.04}} className="max-w-6xl mb-10 mx-auto px-5 grid lg:grid-cols-2 py-5 rounded-2xl shadow-xl gap-10 items-center">

                    <div>
                        <img
                            className="rounded-2xl shadow-2xl"
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                            alt="Restaurant"
                        />
                    </div>

                    <div>
                        <h4 className="text-orange-500 text-4xl font-bold uppercase tracking-widest">
                            About Us
                        </h4>

                        <h2 className="text-5xl font-bold mt-3">
                            We Serve the Best Food with Passion
                        </h2>

                        <p className="mt-6 text-gray-500 leading-8">
                            Welcome to our restaurant, where every meal is prepared with
                            fresh ingredients and exceptional care. Our talented chefs
                            combine traditional recipes with modern flavors to create a
                            memorable dining experience for every guest.
                        </p>

                        <p className="mt-4 text-gray-500 leading-8">
                            Whether you're looking for a healthy breakfast, a delicious lunch,
                            or a relaxing dinner with family and friends, we are committed
                            to providing outstanding food, warm hospitality, and unforgettable
                            moments.
                        </p>

                        <button className="btn btn-warning mt-8 text-white">
                           <NavLink to="/menu"> Explore Our Menu</NavLink>
                        </button>
                    </div>

                </motion.div>
            <Rating />
            </section>
            <WhyChoseUs/>
            <Footer />

        </div>
    );
};

export default About;
import { motion } from "motion/react"
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Rating from "./Rating";
import WhyChoseUs from "./WhyChooseUse";
import { NavLink } from "react-router";

const About = () => {
    return (
        <div>
            <Navbar />
            <section className="py-20 bg-base-100">
                <motion.div whileHover={{ scale: 1.04 }} className="max-w-6xl mb-10 mx-auto px-5 grid lg:grid-cols-2 py-5 rounded-2xl shadow-xl gap-10 items-center">

                    <motion.div initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}>
                        <img
                            className="rounded-2xl shadow-2xl"
                            src="https://imgs.search.brave.com/zVFmXNdbTWwg3ZiyREVYaQeYiFjjvKBp493dlShZxUo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vcmVzdGF1cmFu/dC13aXRoLWdyZWVu/LXBsYW50LWhhbmdp/bmctZnJvbS1jZWls/aW5nXzExMjQ1NzMt/MzE5ODQuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MCZxPTgw"
                            alt="Restaurant"
                        />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}>
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

                        <NavLink to="/menu"><button className="btn btn-warning mt-8 text-white">
                             Explore Our Menu
                        </button></NavLink>
                    </motion.div>
                </motion.div>
                <Rating />
            </section>
            <WhyChoseUs />
            <Footer />

        </div>
    );
};

export default About;
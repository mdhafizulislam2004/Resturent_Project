import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import { FaLocationDot  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Navbar from "../Components/Navbar";

const Contect = () => {
    return (
        <div>
            <Navbar />
            <section className="py-20 bg-base-200">
                <div className="max-w-6xl mx-auto px-5">
                    
                    <div className="text-center py-5">
                        <h4 className="text-orange-500 uppercase font-semibold">
                            Contact Us
                        </h4>

                        <h2 className="text-5xl font-bold mt-3">
                            Get In Touch
                        </h2>

                        <p className="text-gray-500 mt-4">
                            We'd love to hear from you. Feel free to contact us anytime.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">

                        <motion.div 
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >

                            <motion.div whileHover={{ scale: 1.04}} className="p-6 bg-base-100 rounded-xl shadow">
                                <h3 className="font-bold text-xl flex items-center gap-2"><FaLocationDot /> Address</h3>
                                <p className="mt-2 text-gray-500">
                                    123 Taste Nest Resturent, Savar, Dhaka 
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.04}} className="p-6 bg-base-100 rounded-xl shadow">
                                <h3 className="font-bold text-xl flex gap-2 items-center"><FaPhoneAlt /> Phone</h3>
                                <p className="mt-2 text-gray-500">
                                    +880 01921700133
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.04}} className="p-6 bg-base-100 rounded-xl shadow">
                                <h3 className="font-bold items-center flex gap-2 text-xl"><MdEmail /> Email</h3>
                                <p className="mt-2 text-gray-500">
                                    hafizul2004official@gmail.com
                                </p>
                            </motion.div>

                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="card bg-base-100 shadow-xl"
                        >
                            <div className="card-body">

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full"
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full"
                                />

                                <textarea
                                    className="textarea textarea-bordered h-36"
                                    placeholder="Your Message"
                                ></textarea>

                                <button className="btn btn-primary text-white">
                                    Send Message
                                </button>

                            </div>
                        </motion.div>

                    </div>

                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contect;
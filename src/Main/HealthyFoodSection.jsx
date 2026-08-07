import { motion } from "motion/react"
// import { NavLink } from "react-router";
const HealthyFoodSection = () => {
    return (
        <div className="hero bg-base-200 py-6">
            <motion.div whileHover={{ scale: 1.04, y:-5 }}
            initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                className="hero-content flex-col lg:w-[800px] md:w-[600px] hover:shadow-2xl hover:rounded-2xl lg:flex-row-reverse">
                <img
                    src="https://as2.ftcdn.net/v2/jpg/02/34/24/15/1000_F_234241545_L5VvQbW36l99rsvDCGATdSTuC8Zm8nPJ.jpg"
                    className="max-w-sm w-[300px] rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Healthy Food</h1>
                    <p className="py-6">
                        Discover a healthier way to dine with our fresh salads, protein-packed bowls, and nutrient-rich meals. Every dish is carefully prepared using premium ingredients to deliver both exceptional taste and balanced nutrition.
                    </p>
                    {/* <button className="btn btn-primary"><NavLink to="/menu">Show More</NavLink></button> */}
                </div>
            </motion.div>
        </div>
    );
};

export default HealthyFoodSection;
import { motion } from "motion/react"

const DringSection = () => {
    return (
        <div className="hero bg-base-200 py-10">
            <motion.div whileHover={{ scale: 1.04,y:-5 }}
                className="hero-content flex-col hover:shadow-2xl hover:rounded-2xl items-center md:w-[600px] lg:w-[800px] lg:flex-row">
                <img
                    src="https://t4.ftcdn.net/jpg/14/15/61/91/240_F_1415619172_BLquDQvPVMqfCoHBm0ZdMKQP1CCbyh7h.jpg"
                    className="max-w-sm rounded-lg shadow-2xl w-[300px]"
                />
                <div className="items-center">
                    <h1 className="text-5xl font-bold">Bar & Mocktails</h1>
                    <p className="py-6">
                        Enjoy a premium selection of handcrafted mocktails bursting with vibrant flavors and fresh ingredients. Perfect for every occasion, our signature drinks bring the bar experience to your table without alcohol.
                    </p>
                    <button className="btn btn-primary">Show More</button>
                </div>
            </motion.div>
        </div>
    );
};

export default DringSection;
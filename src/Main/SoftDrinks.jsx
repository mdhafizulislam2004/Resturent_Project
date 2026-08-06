import { motion } from "motion/react"

const SoftDrinks = () => {
    return (
        <div className="hero bg-base-200 py-6">
            <motion.div whileHover={{ scale: 1.08,y:-6 }}
            initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                 className="hero-content flex-col md:w-[600px] lg:w-[800px] hover:shadow-2xl hover:rounded-2xl lg:flex-row">
                <img
                    src="https://t3.ftcdn.net/jpg/10/55/29/42/240_F_1055294248_8UOO97farc75DHorDlkOkC3096OAiY3Z.jpg"
                    className="max-w-sm rounded-lg w-[300px] shadow-2xl"
                />
                <div>
                    <h1 className="text-4xl font-bold">Drinks & Beverages</h1>
                    <p className="py-6">
                        Quench your thirst with our refreshing collection of juices, smoothies, coffees, teas, and signature beverages. Made from fresh ingredients, every drink offers the perfect blend of flavor and freshness.
                    </p>
                    <button className="btn btn-primary">Show More</button>
                </div>
            </motion.div>
        </div>
    );
};

export default SoftDrinks;
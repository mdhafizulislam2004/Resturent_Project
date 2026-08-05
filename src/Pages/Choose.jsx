import {motion} from "motion/react"
const Choose = ({ card }) => {
    const { title, description, image } = card

    return (
        <motion.div whileHover={{ scale: 1.04}} className="card bg-base-100 shadow-sm">
            <figure>
                <img className="p-4 rounded-3xl"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl">{title}</h2>
                <p className="text-xl">{description}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </motion.div>
    );
};

export default Choose;
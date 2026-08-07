import { motion } from "motion/react"
import { TbCurrencyTaka } from "react-icons/tb";

const SmallDataCard = ({ Data,index }) => {
    // console.log(Data);


    const { title, image, description,price } = Data;
    return (

        <motion.div whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            index
            transition={{ duration: 0.4, ease: "easeOut",delay:index*0.1 }}
            viewport={{ once: true }}
            className="card hover:shadow-2xl bg-base-100 w-full shadow-sm">
            <figure>
                <img className="h-[300px] relative w-full p-3 rounded-2xl"
                    src={image}
                    alt={title} />
                <p className="w-16 h-16 bg-green-500 flex items-center absolute rounded-full bottom-38 text-2xl right-5 text-white"><TbCurrencyTaka size={44}/>{price}</p>
            </figure>
            <div className="card-body">
                <h2 className=" text-2xl font-bold">{title}</h2>
                <p className="text-ms">{description}</p>
            </div>
        </motion.div>
    );
};

export default SmallDataCard;
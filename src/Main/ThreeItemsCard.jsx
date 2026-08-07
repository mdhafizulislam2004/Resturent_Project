// import { useLoaderData, useParams } from "react-router";
// import Menu from "../Components/Menu";

import { motion } from "motion/react"
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router";

const ThreeItemsCard = ({cards,index}) => {
    const{image,name,description,price,id}=cards

    // const data=useLoaderData()

    console.log(cards);
    

    return (
       <motion.div whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            index
            transition={{ duration: 0.2, ease: "easeOut",delay:index*0.02 }}
            viewport={{ once: true }}
            className="group card hover:shadow-2xl bg-base-100 w-full shadow-sm">
            <figure>
                <img className="h-[300px] relative w-full p-3 rounded-2xl"
                    src={image}
                    alt={name} />
                <p className="w-16 h-16 group-hover:bg-amber-600 bg-green-500 flex items-center absolute rounded-full bottom-38 text-2xl right-5 text-white"><TbCurrencyTaka size={44}/>{price}</p>
            </figure>
            <div className="card-body">
                <h2 className=" text-2xl group-hover:text-amber-600 font-semibold">{name}</h2>
                <p className="text-ms">{description}</p>
               
                <Link to={`/cardditels/${id}`}> <span className="btn bg-green-500 group-hover:bg-amber-600 w-full border-0">View More</span></Link>
            </div>
        </motion.div>
    );
};

export default ThreeItemsCard;
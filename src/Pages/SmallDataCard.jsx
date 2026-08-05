import {motion} from "motion/react"
const SmallDataCard = ({ Data }) => {
    // console.log(Data);


    const { title, image, items, description, } = Data;
    return (

        <motion.div whileHover={{ scale: 1.04}} className="max-w-sm rounded-lg hover:shadow-2xl overflow-hidden bg-white p-4 font-sans border border-gray-100 shadow-sm">


            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[300px] h-64 items-center object-cover rounded-xl"
                />


                <div className="absolute bottom-3 right-3 bg-neutral-800 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg border-2 border-white shadow-md">
                    {items}
                </div>
            </div>


            <div className="pt-5 pb-2">

                <h2 className="text-3xl font-extrabold text-neutral-800 mb-3 tracking-tight">
                    {title}
                </h2>


                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {description}
                </p>


                {/* <button className="bg-[#1a1d20] hover:bg-primary text-white font-medium py-2.5 px-5 rounded text-sm transition-colors duration-200">
                    {slug}
                </button> */}
            </div>
        </motion.div>
    );
};

export default SmallDataCard;
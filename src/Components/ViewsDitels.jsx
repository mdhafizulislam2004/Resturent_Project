import { FaStarHalfAlt } from "react-icons/fa";
import { NavLink } from "react-router";
import { IoEyeSharp } from "react-icons/io5";


const ViewsDitels = ({ cardData }) => {
    console.log(cardData);
    const { category, name, price, image, description, rating, reviews } = cardData

    return (
       <div className="flex flex-col mx-auto py-10 md:py-20 max-w-7xl px-4">
            
            <div className="card flex flex-col md:flex-row border border-gray-100 shadow-2xl gap-5 md:gap-10 p-6 bg-base-100 rounded-2xl items-start">
                
                <figure className="w-full md:w-2/5">
                    <img 
                        className="w-full rounded-2xl object-cover h-[350px] md:h-[600px] shadow-md"
                        src={image}
                        alt={name} 
                    />
                </figure>

                <div className="flex-1 space-y-6 md:space-y-10 pt-4 md:pt-0">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-semibold text-gray-500">{category}</h1>
                        <h2 className="text-4xl md:text-5xl mt-2 md:mt-5 font-bold">{name}</h2>
                    </div>

                    <p className="text-lg w-3/6 md:text-xl text-gray-600 leading-relaxed">{description}</p>
                    
                    <p className="font-bold text-green-600 flex items-center text-4xl mt-6 md:mt-12">
                        Price: ${price}
                    </p>
                    
                    <div className="gap-6 flex items-center pt-2">
                        <span className="text-2xl flex items-center gap-2.5 font-bold text-amber-600">
                            <FaStarHalfAlt /> {rating}
                        </span>
                        <span className="text-2xl flex items-center gap-2.5 font-bold text-red-500">
                            <IoEyeSharp /> {reviews}
                        </span>
                    </div>

                    <div className="pt-10 md:pt-20">
                        <NavLink to="/menu">
                            <button className="btn btn-primary btn-lg rounded-xl">Go Back!</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewsDitels;
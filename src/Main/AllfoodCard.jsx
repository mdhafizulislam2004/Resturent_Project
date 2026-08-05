import { Suspense, use } from "react";
// import { useLoaderData } from "react-router";
import SmallDataCard from "../Pages/SmallDataCard";
import { NavLink } from "react-router";
const SmallData = fetch("/json/small.json").then(res => res.json())

const AllfoodCard = () => {

    const data = use(SmallData)
    // console.log(data);

    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl py-8 text-gray-600 justify-center mx-auto font-bold"> Check our dishes</h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 px-4 lg:w-[1200px] lg:mx-auto py-4 gap-5" >
                <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                    {
                        data?.map(card => <SmallDataCard key={card.id} Data={card}></SmallDataCard>)
                    }
                </Suspense>
            </div>
             <div className="items-center text-center py-5">
                <NavLink to="/menu"><p className="text-2xl shadow-3xl btn-secondary hover:text-black hover:btn-primary btn">Show More Data</p></NavLink>
             </div>
        </div>
    );
};

export default AllfoodCard;
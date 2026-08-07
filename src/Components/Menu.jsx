import { useLoaderData } from "react-router";
import ThreeItemsCard from "../Main/ThreeItemsCard";
// import ThreeItemsCard from "../Main/ThreeItemsCard";
// import MenuLeftnav from "../Pages/MenuLeftnav";

const Menu = () => {

    const data=useLoaderData()

    console.log(data);
    
    return (
       <div className="grid md:grid-cols-2 lg:w-[1200px] mx-auto gap-8 lg:grid-cols-3">
            {
                data.map((cards,index)=><ThreeItemsCard index={index} key={cards.id} cards={cards}></ThreeItemsCard>)
            }
       </div>
    );
};

export default Menu;
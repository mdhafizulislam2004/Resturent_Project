
import data from "../../public/json/WhyChooseUs.json"
import Choose from "./Choose";

const WhyChooseUse = () => {
    console.log(data);
    // const Choose=use(data)
    // console.log(Choose);


    return (
        <div >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 mx-10 lg:w-[1200px] lg:mx-auto mb-10 gap-5 justify-center">
                    {
                        data.map(card => <Choose card={card} key={card.id}></Choose>)
                    }
            </div>
        </div>
    );
};

export default WhyChooseUse;
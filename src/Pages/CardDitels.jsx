import { useLoaderData, useParams } from "react-router";
import ViewsDitels from "../Components/ViewsDitels";

const CardDitels = () => {

    const data = useLoaderData()
    const { id } = useParams()

    const cardData = data.find(news => news.id == id)

    return (
        <div>
            {
                cardData ? <ViewsDitels cardData={cardData}></ViewsDitels> : <p className="text-center text-red-500 my-10">Data not found!</p>
            }
        </div>
    );
};

export default CardDitels;
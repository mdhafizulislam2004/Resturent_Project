import { motion } from "framer-motion";
const images = [
    { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", alt: "Burger" },
    { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591", alt: "Pizza" },
    { src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", alt: "Healthy Salad" },
    { src: "https://images.unsplash.com/photo-1550547660-d9450f859349", alt: "Cheeseburger" },
    { src: "https://images.unsplash.com/photo-1529042410759-befb1204b468", alt: "BBQ Chicken" },
    { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601", alt: "Pasta" },
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836", alt: "Steak" },
    { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", alt: "Vegetable Bowl" },
    { src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543", alt: "Breakfast" },
    { src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352", alt: "Fruit Bowl" },
];
const Marquee = () => {

    const duplicatedImages = images

    return (
        <div className="py-5 w-11/12 mx-auto overflow-hidden">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-10 pr-10 shrink-0"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                    }}
                >
                    {duplicatedImages.map((img,index) => (
                        <img
                            key={index}
                            className="w-2xs h-34 object-cover rounded-lg shrink-0 shadow-md"
                            src={img.src}
                            alt={img.alt}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;
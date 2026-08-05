import Footer from "../Components/Footer";
import Rating from "./Rating";

const About = () => {
    return (
        <div>
            <section className="py-20 bg-base-100">
                <div className="max-w-6xl mb-5 mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">

                    <div>
                        <img
                            className="rounded-2xl shadow-xl"
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                            alt="Restaurant"
                        />
                    </div>

                    <div>
                        <h4 className="text-orange-500 font-semibold uppercase tracking-widest">
                            About Us
                        </h4>

                        <h2 className="text-5xl font-bold mt-3">
                            We Serve the Best Food with Passion
                        </h2>

                        <p className="mt-6 text-gray-500 leading-8">
                            Welcome to our restaurant, where every meal is prepared with
                            fresh ingredients and exceptional care. Our talented chefs
                            combine traditional recipes with modern flavors to create a
                            memorable dining experience for every guest.
                        </p>

                        <p className="mt-4 text-gray-500 leading-8">
                            Whether you're looking for a healthy breakfast, a delicious lunch,
                            or a relaxing dinner with family and friends, we are committed
                            to providing outstanding food, warm hospitality, and unforgettable
                            moments.
                        </p>

                        <button className="btn btn-warning mt-8 text-white">
                            Explore Our Menu
                        </button>
                    </div>

                </div>
            <Rating />
            </section>
            <Footer />

        </div>
    );
};

export default About;
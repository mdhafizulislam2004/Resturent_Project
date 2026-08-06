import count from "react-countup";
import { FaCalendar, FaRegStar, FaSitemap } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";


// console.log(CountUpModule);
const Rating = () => {
    const CountUp = count.default;
    return (
        <div>
            <section className="py-20 bg-base-300 text-black">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

                    <div>
                        <div className="flex justify-center mb-5">
                            <FaCalendar size={44} />
                        </div>
                        <h2 className="text-6xl font-bold"><CountUp end={10} duration={3} />+</h2>
                        <p className="mt-3 text-lg">Years Experience</p>
                    </div>

                    <div>
                        <div className="flex justify-center mb-2">
                            <MdGroups size={64} />
                        </div>
                        <h2 className="text-6xl font-bold"> <CountUp end={100} duration={2} />k</h2>
                        <p className="mt-3 text-lg">Happy Customers</p>
                    </div>

                    <div>
                        <div className="flex justify-center mb-5">
                            <FaSitemap size={44} />
                        </div>
                        <h2 className="text-6xl font-bold"><CountUp end={15} duration={3} />
                        +</h2>
                        <p className="mt-3 text-lg">Food Items</p>
                    </div>

                    <div>
                        <div className="flex justify-center mb-5">
                            <FaRegStar size={54} />
                        </div>
                        <h2 className="text-6xl font-bold">4.<CountUp end={9} duration={3} /></h2>
                        <p className="mt-3 text-lg">Customer Rating</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Rating;
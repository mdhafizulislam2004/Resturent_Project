import { motion } from "motion/react"
const Hero = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://imgs.search.brave.com/-chI3pnHJucHsgk6R4WzrMiCO85xkJ4_5shMvAbfmIM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMv/MzMxLzc2My9zbWFs/bC9ibHVycmVkLW1v/ZGVybi1yZXN0YXVy/YW50LWZyZWUtcGhv/dG8uanBn)",
            }}
        >
            <div className="hero-overlay"></div>
            {/* <div className="hero-content text-neutral-content text-center"> */}
            <div className="max-w-full text-center px-3">
                <h1 className="mb-8 text-5xl animate-bounce text-white font-bold">Hello, New Friend!</h1>
                <h1 className="mb-8 text-5xl text-white font-bold">Welcome,To:-</h1>
                <div>
                    <motion.p whileHover={{ scale: 1.09 }}
                        whileTap={{ scale: 0.8 }} className="mb-5 text-6xl font-bold text-blue-500">
                        Taste Nest <span className="text-red-500">Resturent</span>
                    </motion.p>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Hero;
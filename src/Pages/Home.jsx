import { Suspense } from "react";
import Hero from "../Layout/Hero";
import AllfoodCard from "../Main/AllfoodCard";
import DringSection from "../Main/DringSection";
import HealthyFoodSection from "../Main/HealthyFoodSection";
import { motion } from "motion/react"
import SoftDrinks from "../Main/SoftDrinks";
import Marquee from "./Marquee";
import LoadingData from "../Main/LoadingData";

const Home = () => {

    return (
        <div>
            <Hero></Hero>
            <div className="lg:w-7xl shadow-2xl lg:mx-auto">
                <motion.h1 initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    index
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-3xl md:text-5xl font-extrabold   text-green-600 text-center my-6">
                    What Kind Of Foods You Find?
                </motion.h1>
                <DringSection></DringSection>
                <HealthyFoodSection></HealthyFoodSection>
                <SoftDrinks></SoftDrinks>
            </div>
            <Suspense fallback={
                <div className="flex justify-center py-10">
                    <LoadingData/>
                </div>
            }>
                <AllfoodCard></AllfoodCard>
            </Suspense>
            <Marquee></Marquee>
        </div>
    );
};

export default Home;
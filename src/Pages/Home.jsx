import { Suspense } from "react";
import Hero from "../Layout/Hero";
import AllfoodCard from "../Main/AllfoodCard";
import DringSection from "../Main/DringSection";
import HealthyFoodSection from "../Main/HealthyFoodSection";
import SoftDrinks from "../Main/SoftDrinks";

const Home = () => {

    return (
        <div>
            <Hero></Hero>
            <div className="lg:w-7xl shadow-2xl lg:mx-auto">
                <DringSection></DringSection>
                <HealthyFoodSection></HealthyFoodSection>
                <SoftDrinks></SoftDrinks>
            </div>
            <Suspense fallback={
                <div className="flex justify-center py-10">
                    <span className="loading loading-bars loading-xl"></span>
                </div>
            }>
                <AllfoodCard></AllfoodCard>
            </Suspense>
        </div>
    );
};

export default Home;
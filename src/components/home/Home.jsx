/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import HomeCard from "./homeCard/HomeCard";


const Home = () => {

    const data = useLoaderData();

    return (
        <div className="mt-10">
            <div>
                <div className="relative">
                    <Carousel></Carousel>
                    <div className="z-[1] absolute md:top-[100px] top-[100px] md:left-[10%] left-[5%] md:w-3/4 w-[90%] duration-300">
                        <h1 className="xl:text-4xl lg:text-4xl md:text-3xl text-3xl font-extrabold md:w-2/4 text-[#f35b5bfe] w-full">
                            Explore Your Creative Side
                        </h1>
                        <p data-aos="fade-up" data-aos-duration="1000" className="mt-5 text-[#ffffffb6] lg:w-2/4">
                            Unleash your imagination and discover a world of creativity. Whether you're
                            passionate about painting, sculpting, or crafting, we have everything you need
                            to bring your ideas to life. Let us inspire your next masterpiece.
                        </p>
                        <button className="duration-200 px-4 py-2 text-white bg-[#c15650] hover:bg-[#331313]  font-medium text-lg mt-5 rounded-lg">
                            <a href="#card">Browse Creations</a>
                        </button>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10 xl:px-32 px-10">
                    {
                        data.map(item => <HomeCard key={item._id} item={item}></HomeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
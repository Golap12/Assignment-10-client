/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import HomeCard from "./homeCard/HomeCard";
import Newsletter from "../newsSection/Newsletter";
import { Slide, Zoom } from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter'
import { Helmet } from "react-helmet-async";


const Home = () => {

    const data = useLoaderData();
    console.log(data);




    return (
        <div className="">

            <Helmet>
                <title>Gravo | Home Page</title>
            </Helmet>
            <div>
                <div className="relative w-full">
                    <Carousel></Carousel>
                    <div className=" z-[1] absolute md:top-[100px] top-[20px] md:left-[10%] left-[5%] md:w-2/4 lg:w-2/5 w-[90%] duration-300">
                        <Zoom duration={2000}>
                            <h1 style={{ paddingTop: '5rem', color: 'white', fontSize: '2rem', margin: 'auto 0', fontWeight: 'bold' }}>
                                Discover Your Creative Site. And You Can{' '}
                                <span style={{ color: 'red', fontWeight: 'bold' }}>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={['View', 'Add', 'Update', 'Delete']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                                Any Item.
                            </h1>
                        </Zoom>
                        <Zoom duration={2000}>
                            <p data-aos="fade-up" data-aos-duration="1000" className="mt-5 text-[#ffffffb6]">
                                Unleash your imagination and discover a world of creativity. Whether you're
                                passionate about painting, sculpting, or crafting, we have everything you need
                                to bring your ideas to life. Let us inspire your next masterpiece.
                            </p>
                        </Zoom>
                        <Slide duration={2000}>
                            <button className="duration-200 px-4 py-2 text-white bg-[#c15650] hover:bg-[#331313]  font-medium text-lg mt-5 rounded-lg">
                                <a href="#card">Browse Creations</a>
                            </button>
                        </Slide>
                    </div>
                </div>



                <div className="mt-16 mb-10 text-center">
                    <h1 className="text-3xl font-extrabold mb-2">All Categories</h1>
                    <p className="text-sm text-gray-500">Art, a potent expression in diverse forms, reflects culture, sparks change, and inspires creativity and personal growth.</p>
                </div>


                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10 xl:px-32 px-10">
                    {
                        data.map(item => <HomeCard key={item._id} item={item}></HomeCard>)
                    }
                </div>



                <div className="mt-10">
                    <Newsletter></Newsletter>
                </div>

            </div>
        </div>
    );
};

export default Home;
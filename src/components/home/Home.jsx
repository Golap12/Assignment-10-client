import { useLoaderData } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import HomeCard from "./homeCard/HomeCard";


const Home = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div className="mt-10">
            <div>
                <Carousel></Carousel>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10 xl:px-32 px-10">
                    {
                        data.slice(0, 6).map(item => <HomeCard key={item._id} item={item}></HomeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
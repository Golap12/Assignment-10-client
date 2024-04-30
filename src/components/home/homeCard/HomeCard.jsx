/* eslint-disable react/prop-types */

import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const HomeCard = ({ item }) => {

    return (

        <Link to={`/matchCategory/${item.subcategory_Name}`}>

            <Zoom>
            <div id="card" className="bg-slate-100 rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
                <div className="relative">
                    <img className="w-full h-[200px]" src={item.photoURL} alt="Product Image" />
                    <div className="absolute top-0 right-0 backdrop-blur-sm bg-[#ff818147] text-black px-2 py-1 m-2 rounded-md text-sm font-medium">{item.stockStatus}
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-medium mb-2">{item.subcategory_Name}</h3>
                </div>
            </div>
            </Zoom>

        </Link>
    );
};

export default HomeCard;
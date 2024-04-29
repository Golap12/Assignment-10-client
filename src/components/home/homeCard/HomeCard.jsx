/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const HomeCard = ({item}) => {

    return (

        <div id="card" className="bg-slate-100 rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
            <div className="relative">
                <img className="w-full h-[200px]" src={item.imageURL} alt="Product Image" />
                <div className="absolute top-0 right-0 backdrop-blur-sm bg-[#ff818147] text-black px-2 py-1 m-2 rounded-md text-sm font-medium">{item.stockStatus}
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{item.item_name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.shortDescription}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">${item.price}</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        <Link to={`/homeDetails/${item._id}`}>View Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
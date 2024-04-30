
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const Details = () => {


    const data = useLoaderData();

    const { subcategory_Name, item_name, shortDescription, price, rating, customization, processing_time, stockStatus, photoURL } = data



    return (


        <div className="">
            <Helmet>
                <title>Gravo | Details</title>
            </Helmet>
            <div className="flex flex-col items-center mt-10">
                <p className="text-2xl md:text-4xl font-extrabold  mb-2">Item Details</p>
                <hr className="border w-2/4 md:w-1/4 border-red-500" />
            </div>

            <div className="flex flex-col md:flex-row gap-5 mt-10 bg-slate-200 px-2 py-5">
                <div className="flex-1 p-2 flex flex-col md:items-start items-center">
                    <img className="md:h-[400px]" src={photoURL} alt="" />
                </div>
                
                    <div className="border border-dashed  border-black"></div>
                
                <div className="flex-1 flex flex-col justify-center items-start space-y-2 p-2">
                    <h2 className="text-xl md:text-3xl font-medium md:font-extrabold">{subcategory_Name}</h2>
                    <h4 className="text-lg md:text-2xl font-normal md:font-bold text-red-500">{item_name}</h4>
                    <p className="text-sm text-gray-400">Description : {shortDescription}.</p>
                    <p className="text-sm">Price : ${price}</p>
                    <p className="text-sm">Rating : {rating}</p>
                    <p className="text-sm">Customization : {customization}</p>
                    <p className="text-sm">Process Time : {processing_time}</p>
                    <p className="text-sm">Available Stock : {stockStatus}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
import { Link, useLoaderData } from "react-router-dom";

const MatchCategory = () => {
    const data = useLoaderData();




    return (

        <>
            <h1 className="md:text-3xl text-2xl font-extrabold text-center mt-10">Your Selected Category </h1>
            <hr className="lg:w-2/5 w-2/4 border-2 border-red-500 mx-auto mt-4 mb-6" />

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10 xl:px-32 px-10">
                {
                    data.map(item => (
                        <div key={item._id} id="card" className="bg-slate-100 rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
                            <div className="relative">
                                <img className="w-full h-[200px]" src={item.photoURL} alt="Product Image" />
                                <div className="absolute top-0 right-0 backdrop-blur-sm bg-[#ff818147] text-black px-2 py-1 m-2 rounded-md text-sm font-medium">{item.stockStatus}</div>
                            </div>
                            <div className="p-4 space-y-2">
                                <p className="text-xl font-bold">{item.item_name}</p>
                                <h3 className="font-medium">{item.subcategory_Name}</h3>
                                <p className="text-sm text-gray-500">{item.shortDescription}</p>
                            </div>
                            <div className="pb-4 pl-4">
                                <Link to={`/details/${item._id}`}><button className="px-3 py-2 bg-green-600 rounded-sm font-bold text-slate-100">View Details</button></Link>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    );
};

export default MatchCategory;

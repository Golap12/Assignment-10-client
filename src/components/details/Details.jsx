
import { useLoaderData } from "react-router-dom";


const Details = () => {


    const data = useLoaderData();
    console.log(data);



    return (
        <div className="font-[sans-serif] mt-10">
            <h1 className="text-3xl font-bold text-center mb-3">Item information</h1>
            <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">

                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">

                    <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
                        <img src='' alt="Product" className="w-2/4 rounded object-cover" />
                        <hr className="border-white border-2 my-6" />
                    </div>

                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-gray-800 mb-2"></h2>
                        <h2 className="text-lg font-extrabold text-gray-800">Sub Category : <span className="text-gray-600"></span></h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-gray-800 text-xl font-bold">$</p>
                        </div>

                        <div className="flex space-x-2 mt-4 items-center">

                            <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <p></p>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-gray-800">About the item</h3>
                            <ul className="space-y-3 list-disc mt-4 text-sm text-gray-800">
                                
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;
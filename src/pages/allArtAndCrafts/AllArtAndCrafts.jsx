import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const AllArtAndCrafts = () => {


    const addedItem = useLoaderData();

    return (
        <div className="flex flex-col gap-5 pt-5]">
            <Helmet>
                <title>Gravo | All Art</title>
            </Helmet>

            <h1 className="text-3xl font-extrabold text-center mb-[-10px]">All Item List</h1>
            <hr className="w-1/4 mb-2 border-t-2 border-red-500 mx-auto" />

            <div className="md:px-20 px-2">
                <div className="overflow-x-auto">
                    <table className="table border">
                        {/* head */}
                        <thead>
                            <tr className="text-xl font-bold *:border text-gray-200">
                                <th>Name</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                addedItem.map(item => (<tr key={item._id} className="text-white *:border">
                                    <td>
                                        <div className="flex flex-col md:flow-row gap-2 md:items-start items-center">
                                            <img className="w-40 h-20" src={item.photoURL} alt="" />
                                            <div>
                                                <p className="text-lg font-bold">{item.item_name}</p>
                                                <p className="text-sm text-gray-300">{item.subcategory_Name}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-green-400">{item.stockStatus}</td>
                                    <td>${item.price}</td>
                                    <td><Link to={`/details/${item._id}`}><button className="px-3 py-2 bg-blue-600 rounded-sm">details</button></Link></td>
                                </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default AllArtAndCrafts;
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";


const AllItemCard = ({ item }) => {
console.log(item._id);
    return (

        <div className="overflow-x-auto bg-slate-200">
            <table className="table ">

                <thead>
                    <tr className="text-lg font-bold text-black *:border *:border-white">
                        <th className="hidden lg:block">Name</th>
                        <th>Available Stock</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="hidden lg:block">
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className=" w-40 h-20 ">
                                        <img src={item.photoURL} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{item.item_name}</div>
                                    <div className="text-sm opacity-50">{item.subcategory_Name}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {item.stockStatus}
                        </td>
                        <td>$ {item.price}</td>
                        <th>
                            <Link to={`/details/${item._id}`}><button className="px-3 py-2 bg-green-400 rounded-lg">details</button></Link>
                        </th>
                    </tr>
                </tbody>

            </table>
        </div>

    );
};

export default AllItemCard;
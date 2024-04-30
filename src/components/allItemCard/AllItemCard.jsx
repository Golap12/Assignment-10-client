/* eslint-disable react/prop-types */

import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";


const AllItemCard = ({ item }) => {
    // console.log(item);


    return (

        <Zoom>
            <div className="overflow-x-auto bg-slate-200">
            <table className="table ">

                <thead>
                    <tr className="text-lg font-bold text-black *:border *:border-white">
                        <th className="">Name</th>
                        <th>Available Stock</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="">
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
        </Zoom>

    );
};

export default AllItemCard;
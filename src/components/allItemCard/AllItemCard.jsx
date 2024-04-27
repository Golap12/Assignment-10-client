/* eslint-disable react/prop-types */

// import { Link } from "react-router-dom";


const AllItemCard = ({ item }) => {

    console.log(item);
    return (


        <div className="bg-slate-100 rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40">
            <div className="relative">
                <img className="w-full h-[200px]" src={item.photoURL} alt="Product Image" />
                <div className="absolute top-0 right-0 backdrop-blur-sm bg-[#ffffff47] text-black px-2 py-1 m-2 rounded-md text-sm font-medium">{item.stockStatus}
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{item.itemName}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.shortDescription}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">${item.price}</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        View Details
                    </button>
                </div>
            </div>
        </div>
        // <div className="overflow-x-auto">
        //     <table className="table border-2">
        //         <tbody>
        //             {/* row 1 */}
        //             <tr className="hover">
        //                 <td className="text-lg font-medium">Name</td>
        //                 <td>{item.item_name}</td>
        //             </tr>
        //             {/* row 2 */}
        //             <tr className="hover">
        //                 <td className="text-lg font-medium">Price</td>
        //                 <td>{item.price}</td>
        //             </tr>
        //             {/* row 3 */}
        //             <tr className="hover">
        //                 <td className="text-lg font-medium">Processing Time</td>
        //                 <td>{item.processing_time}</td>
        //             </tr>
        //             <tr className="hover">
        //                 <td className="text-lg font-medium"><button className="btn btn-ghost"><Link to='/details'>View Details</Link></button></td>
        //                 <td></td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>
    );
};

export default AllItemCard;
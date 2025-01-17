/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";

import { FaStar } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";



const MyItemCard = ({ card }) => {



    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-10-server-kappa-seven.vercel.app/allitems/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <Zoom>
            <div className="rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-1">
            <div className="relative">
                <img className="w-full h-[200px]" src={card.photoURL} alt="Product Image" />
                <div className="absolute top-0 right-0 backdrop-blur-sm text-black px-2 py-1 m-2 rounded-md text-sm font-medium">{card.stockStatus}
                </div>
            </div>


            <div className="p-4 flex flex-col">

                <div className="flex flex-col mb-2">
                    <h3 className="text-2xl text-slate-100 font-semibold mb-2">{card.item_name}</h3>
                    <p className="font-bold text-sm">Price : ${card.price}</p>

                </div>

                <div className="flex flex-col">

                    <p className="text-gray-300 mb-4 text-sm"><span className="font-semibold">Description</span> :  {card.shortDescription}</p>

                    <div className="flex justify-between items-center text-sm mb-4">
                        <p className=" flex items-center gap-1"><span className="font-semibold">Customization</span> <CiEdit></CiEdit> : {card.customization}</p>
                        <p className="flex items-center gap-1"><span>Rating</span> :<span><FaStar color="orange"></FaStar></span> {card.rating}</p>
                    </div>

                    <div className="flex gap-3 items-center grow">


                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold
                         py-2 px-3 rounded ">
                            <Link to={`/update/${card._id}`} className="flex items-center gap-1"><span>Update</span> <MdDeleteForever></MdDeleteForever></Link>
                        </button>

                        <button onClick={() => handleDelete(card._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded flex items-center gap-1">
                            <span>Delete</span> <MdDeleteForever></MdDeleteForever>
                        </button>
                    </div>
                </div>

            </div>
        </div>
        </Zoom>
    );
};

export default MyItemCard;
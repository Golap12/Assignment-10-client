/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";


const MyItemCard = ({ card }) => {
    console.log(card);


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
              
              fetch(`http://localhost:5000/addedItems/${_id}`, {
                method: "DELETE"
              })
              .then(res=> res.json())
              .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
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
        <div className="rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-1">
            <div className="relative">
                <img className="w-full h-[200px]" src={card.photoURL} alt="Product Image" />
                <div className="absolute top-0 right-0 backdrop-blur-sm bg-[#ffffff47] text-black px-2 py-1 m-2 rounded-md text-sm font-medium">{card.stockStatus}
                </div>
            </div>


            <div className="p-4 flex flex-col">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl text-red-500 font-semibold mb-2">{card.item_name}</h3>
                    <span className="font-bold text-lg">Price: ${card.price}</span>

                </div>
                <div className="flex flex-col">

                    <p className="text-gray-600 mb-4"><span className="font-semibold">Description</span> :  {card.shortDescription}</p>

                    <div className="flex justify-between items-center text-sm mb-4">
                        <p className=" flex items-center gap-1"><span className="font-semibold">Customization</span> <CiEdit></CiEdit> : {card.customization}</p>
                        <p className="flex items-center gap-1"><span>Rating</span> :<span><FaStar color="orange"></FaStar></span> {card.rating}</p>
                    </div>

                    <div className="flex gap-3 items-center grow">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center gap-1">
                            <span>Update</span> <FiEdit></FiEdit>
                        </button>
                        <button onClick={()=> handleDelete(card._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center gap-1">
                            <span>Delete</span> <MdDeleteForever></MdDeleteForever>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItemCard;
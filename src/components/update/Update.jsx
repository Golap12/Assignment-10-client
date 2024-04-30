import { useContext, useState } from "react";
import { Tower } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
// import { FiEdit } from "react-icons/fi";

const Update = () => {

    const updateItem = useLoaderData();
    const { item_name, photoURL, price, processing_time, rating, shortDescription, stockStatus, subcategory_Name, _id
    } = updateItem


    const { user } = useContext(Tower);
    const [email, setEmail] = useState(user?.email || '');
    const [name, setName] = useState(user?.displayName || '');



    const handleUpdate = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const subcategory_Name = form.get("subcategory_Name");
        const item_name = form.get("item_name");
        const shortDescription = form.get("shortDescription");
        const price = form.get("price");
        const rating = form.get("rating");
        const customization = form.get("customization");
        const processing_time = form.get("processing_time");
        const stockStatus = form.get("stockStatus");
        const photoURL = form.get("photoUrl");
        const user_Name = form.get("userName")
        const email = form.get("email");

        const newUpdateItem = {
            subcategory_Name, item_name, shortDescription, price, rating, customization, processing_time, stockStatus, photoURL, user_Name, email
        }
        
        fetch(`http://localhost:5000/allitems/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUpdateItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Go Back'
                    })
                }
            })
    }



    return (
        <div>
            <Helmet>
                <title>Gravo | Update Art</title>
            </Helmet>
            <div className="max-w-[1000px] md:w-3/4  mt-10 mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Update Art and Craft Item</h2>
                <form onSubmit={handleUpdate}>
                    {/* Sub Category */}
                    <div className="mb-4">
                        <label htmlFor="subcategory" className="block font-medium mb-1">Sub Category Name</label>
                        <select defaultValue={subcategory_Name} id="subcategory" name="subcategory_Name" className="p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                            {/* Options for subcategories */}
                            <option value="Card Making">Card Making</option>
                            <option value="Scrapbooking">Scrapbooking</option>
                            <option value="Paper Quilling & origami"> Paper Quilling & origami
                            </option>
                            <option value="Glass Painting">Glass Painting</option>
                            <option value="Lampworking">Lampworking</option>
                            <option value="Glass Dying & Staining">Glass Dying & Staining</option>
                        </select>
                    </div>

                    {/* Item Name */}
                    <div className="mb-4">
                        <label htmlFor="itemName" className="block font-medium mb-1">Item Name</label>
                        <input defaultValue={item_name} type="text" id="itemName" name="item_name" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>

                    {/* Short Description */}
                    <div className="mb-4">
                        <label htmlFor="shortDescription" className="block font-medium mb-1">Short Description</label>
                        <textarea defaultValue={shortDescription} id="shortDescription" name="shortDescription" rows="3" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>

                    {/* Photo URL */}
                    <div className="mb-4">
                        <label htmlFor="photoUrl" className="block font-medium mb-1">Photo URL</label>
                        <input defaultValue={photoURL} type="text" id="photoUrl" name="photoUrl" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>

                    {/* Price and Rating */}
                    <div className="flex mb-4 gap-5 justify-between">
                        <div className="w-full">
                            <label htmlFor="price" className="block font-medium mb-1">Price</label>
                            <input defaultValue={price} type="number" id="price" name="price" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="rating" className="block font-medium mb-1">Rating</label>
                            <input defaultValue={rating} type="number" id="rating" name="rating" min="0" max="5" step="0.1" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                        </div>
                    </div>

                    {/* Customization and Processing Time */}
                    <div className="mb-4 flex justify-between gap-5">
                        <div className="w-full">
                            <label className="block font-medium mb-1">Customization</label>
                            <div className="flex items-center space-x-4">
                                <label htmlFor="customizationYes" className="flex items-center">
                                    <input type="radio" id="customizationYes" name="customization" value="Yes" className="mr-2 p-2" />
                                    Yes
                                </label>
                                <label htmlFor="customizationNo" className="flex items-center">
                                    <input type="radio" id="customizationNo" name="customization" value="No" className="mr-2 p-2" />
                                    No
                                </label>
                            </div>
                        </div>

                        <div className=" w-full">
                            <label htmlFor="processingTime" className="block font-medium mb-1">Processing Time</label>
                            <input defaultValue={processing_time} type="text" id="processingTime" name="processing_time" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                        </div>
                    </div>


                    {/* Stock Status */}
                    <div className="mb-4">
                        <label htmlFor="stockStatus" className="block font-medium mb-1">Stock Status</label>
                        <input defaultValue={stockStatus} type="text" id="stockStatus" name="stockStatus" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>

                    {/* User Name and Email */}
                    <div className="flex mb-4 gap-5 justify-between">
                        <div className="w-full">
                            <label htmlFor="userName" className="block font-medium mb-1">User Name</label>
                            <input value={name}
                                onChange={(e) => setName(e.target.value)} type="text" id="userName" name="userName" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="block font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={user?.email || "Enter Your Email"}
                                className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                        </div>
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;
import { useContext, useState } from "react";
import { Tower } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";


const AddCraftItem = () => {


    const { user } = useContext(Tower);
    const [email, setEmail] = useState(user?.email || '');
    const [name, setName] = useState(user?.displayName || '');



    const handleAdd = (e) => {
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


        const newAddItem = {
            subcategory_Name, item_name, shortDescription, price, rating, customization, processing_time, stockStatus, photoURL, user_Name, email
        }
        


        // send data to the server

        fetch('https://assignment-10-server-kappa-seven.vercel.app/allitems', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAddItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Go Back'
                    })
                }
            })
    }


    return (
        <div>
            <Helmet>
                <title>Gravo | Add Art</title>
            </Helmet>
            <div className="max-w-[1000px] md:w-3/4  mt-10 mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Add Art and Craft Item</h2>
                <form onSubmit={handleAdd}>
                    {/* Sub Category */}
                    <div className="mb-4">
                        <label htmlFor="subcategory" className="block font-medium mb-1">Sub Category Name</label>
                        <select id="subcategory" name="subcategory_Name" className="p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                            {/* Options for subcategories */}
                            <option value="Landscape Painting">Landscape Painting</option>
                            <option value="Portrait Drawing">Portrait Drawing</option>
                            <option value="Watercolour Painting"> Watercolour Painting
                            </option>
                            <option value="Oil Painting">Oil Painting</option>
                            <option value="Charcoal Sketching">Charcoal Sketching</option>
                            <option value="Cartoon Drawing">Cartoon Drawing</option>
                        </select>
                    </div>

                    {/* Item Name */}
                    <div className="mb-4">
                        <label htmlFor="itemName" className="block font-medium mb-1">Item Name</label>
                        <input type="text" id="itemName" name="item_name" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>

                    {/* Short Description */}
                    <div className="mb-4">
                        <label htmlFor="shortDescription" className="block font-medium mb-1">Short Description</label>
                        <textarea id="shortDescription" name="shortDescription" rows="3" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>

                    {/* Photo URL */}
                    <div className="mb-4">
                        <label htmlFor="photoUrl" className="block font-medium mb-1">Photo URL</label>
                        <input type="text" id="photoUrl" name="photoUrl" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>

                    {/* Price and Rating */}
                    <div className="flex mb-4 gap-5 justify-between">
                        <div className="w-full">
                            <label htmlFor="price" className="block font-medium mb-1">Price</label>
                            <input type="number" id="price" name="price" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="rating" className="block font-medium mb-1">Rating</label>
                            <input type="number" id="rating" name="rating" min="0" max="5" step="0.1" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
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
                            <input type="text" id="processingTime" name="processing_time" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                        </div>
                    </div>


                    {/* Stock Status */}
                    <div className="mb-4">
                        <label htmlFor="stockStatus" className="block font-medium mb-1">Stock Status</label>
                        <input type="text" id="stockStatus" name="stockStatus" className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
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
                    <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">ADD</button>
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;
import { useContext, useEffect, useState } from "react";
import { Tower } from "../../providers/AuthProvider";
import MyItemCard from "../../components/myItemCard/MyItemCard";

const MyArtAndCraftList = () => {
    const { user } = useContext(Tower);
    const [items, setItems] = useState([]);
    const [sortBy, setSortBy] = useState("price");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        fetch(`http://localhost:5000/myItems/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }, [user]);

   
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

   
    const sortedItems = items.slice().sort((a, b) => {
        if (sortBy === "price") {
            return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
        } else if (sortBy === "rating") {
            return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
        }
        return 0;
    });

    return (
        <>
            <div className="flex flex-col gap-5 relative mt-5">
                <div className="flex gap-2 items-center text-center absolute right-5 top-16 md:right-6 xl:right-20">
                    <p className="font-bold">Sort By :</p>
                    <select
                        className="w-[100px] border-2 rounded-sm px-2 border-red-500"
                        value={sortBy}
                        onChange={handleSortChange}
                    >
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>
            <h1 className="text-3xl font-extrabold text-center">My Item List</h1>
            <hr className="w-1/4 mt-2 border-2 border-red-500 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 mt-10 max-w-6xl mx-auto">
                {sortedItems.map((card) => (
                    <MyItemCard key={card._id} card={card} />
                ))}
            </div>
        </>
    );
};

export default MyArtAndCraftList;

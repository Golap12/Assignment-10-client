import { useContext, useEffect, useState } from "react";
import { Tower } from "../../providers/AuthProvider";
import MyItemCard from "../../components/myItemCard/MyItemCard";


const MyArtAndCraftList = () => {

    const { user } = useContext(Tower);
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myItems/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            })

    }, [user]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 mt-10 max-w-6xl mx-auto">
            {
                item.map(card => <MyItemCard key={card._id} card={card}></MyItemCard>)
            }
        </div>
    );
};

export default MyArtAndCraftList;
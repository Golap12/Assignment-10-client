import { useLoaderData } from "react-router-dom";
import AllItemCard from "../../components/allItemCard/AllItemCard";


const AllArtAndCrafts = () => {


    const addedItem = useLoaderData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-10 p-5 max-w-6xl mx-auto">
            {
                addedItem.map(item => <AllItemCard key={item._id} item={item}>

                </AllItemCard>)
            }
        </div>
    );
};

export default AllArtAndCrafts;
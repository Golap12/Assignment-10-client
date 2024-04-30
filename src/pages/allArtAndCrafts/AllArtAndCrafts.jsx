import { useLoaderData } from "react-router-dom";
import AllItemCard from './../../components/allItemCard/AllItemCard';
import { Helmet } from "react-helmet-async";


const AllArtAndCrafts = () => {


    const addedItem = useLoaderData();

    return (
        <div className="flex flex-col gap-5 mt-5 p-5 ">
            <Helmet>
                <title>Gravo | All Art</title>
            </Helmet>

            <h1 className="text-3xl font-extrabold text-center">All Item List</h1>
            <hr className="w-1/4 mb-2 border-2 border-red-500 mx-auto" />
            {
                addedItem.map(item => <AllItemCard key={item._id} item={item}>

                </AllItemCard>)
            }
        </div>
    );
};

export default AllArtAndCrafts;
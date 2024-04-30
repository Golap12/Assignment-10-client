import { useLoaderData } from "react-router-dom";
import AllItemCard from './../../components/allItemCard/AllItemCard';
import { Helmet } from "react-helmet-async";


const AllArtAndCrafts = () => {


    const addedItem = useLoaderData();

    return (
        <div className="flex flex-col gap-5 mt-10 p-5 ">
            <Helmet>
                <title>Gravo | All Art</title>
            </Helmet>
            {
                addedItem.map(item => <AllItemCard key={item._id} item={item}>

                </AllItemCard>)
            }
        </div>
    );
};

export default AllArtAndCrafts;
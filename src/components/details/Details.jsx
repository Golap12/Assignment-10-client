
import { useLoaderData } from "react-router-dom";


const Details = () => {


    const data = useLoaderData();
    console.log(data);

    

    return (
        <div>
            this is all details page
        </div>
    );
};

export default Details;
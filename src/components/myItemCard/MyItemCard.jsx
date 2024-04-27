/* eslint-disable react/prop-types */


const MyItemCard = ({card}) => {
    console.log(card);
    return (
        <div className="bg-slate-100 rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40">
            <div className="relative">
                <img className="w-full h-[200px]" src={card.photoURL} alt="Product Image" />
                <div className="absolute top-0 right-0 backdrop-blur-sm bg-[#ffffff47] text-black px-2 py-1 m-2 rounded-md text-sm font-medium">{card.stockStatus}
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{card.item_name}</h3>
                <p className="text-gray-600 text-sm mb-4">{card.shortDescription}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">${card.price}</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyItemCard;
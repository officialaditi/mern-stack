import { Link } from "react-router-dom";

const ProductCard = ({ prod }) => {
    return (
        <Link to={`/product/${prod.id}`}>
            <div className=" w-full hover:shadow-2xl max-w-[350px] border  border-gray-200 rounded-lg flex flex-col h-full ">
                {/* image */}
                <div className="h-[350px]">
                    <img
                        src={prod.img}
                        alt={prod.name}
                        className="w-full h-full object-cover  rounded-t-lg "
                    />
                </div>
                {/* name  and price */}
                <div className="flex flex-col px-3 py-2 gap-2">
                    <h2 className="font-semibold text-2xl">{prod.name}</h2>
                    <div className="flex items-center justify-between gap-4">
                        <span className="font-bold text-xl text-pink-500">
                            ₹{prod.price}
                        </span>
                        <span className="font-bold text-xl">
                            ⭐{prod.rating}
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button className="font-bold text-xl bg-pink-600 text-white rounded-lg py-2 px-4 mb-4">
                        Buy Now
                    </button>
                </div>
            </div>
        </Link>
    );
};
export default ProductCard;

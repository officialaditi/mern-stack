import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

const SingleProductpage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSingleProduct();
  }, [id]);

  return (
    <div className="px-6 py-6 max-w-7xl mx-auto">
      {/* Back button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 transition text-white px-4 py-2 rounded-full shadow-md"
        >
          <IoMdArrowRoundBack className="text-lg" />
          <span className="font-medium">Back</span>
        </Link>
      </div>

      {/* Product section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-lg">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-[350px] md:w-[450px] rounded-xl object-cover shadow-md"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold tracking-wide text-gray-800">
            {product.name}
          </h1>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Rating + Reviews */}
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar />
              <span className="font-semibold text-gray-700">
                {product.rating}
              </span>
            </div>
            <span className="text-gray-500 text-sm">
              ({product.numReviews} reviews)
            </span>
          </div>

          {/* Price */}
          {product.price && (
            <p className="text-2xl font-semibold text-pink-600 mt-4">
              ₹{product.price}
            </p>
          )}

          {/* Add to Cart Button */}
          <button className="mt-6 bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-3 rounded-xl shadow-md font-medium w-fit">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default SingleProductpage;

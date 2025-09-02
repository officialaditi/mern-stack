import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import axios from "axios";

const Homepage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const { data } = await axios.get("/api/products");
                setProducts(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllProducts();
    }, []);
    return (
        <div>
            <h1 className="text-center font-bold text-2xl underline my-10">
                Best Sellers
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2  place-items-center md:grid-cols-3 lg:grid-cols-4 gap-6 md:max-w-[1500px] mx-auto">
                {products.map((prod) => (
                    <ProductCard key={prod.id} prod={prod} />
                ))}
            </div>
        </div>
    );
};
export default Homepage;

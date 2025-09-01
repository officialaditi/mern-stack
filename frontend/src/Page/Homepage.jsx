import ProductCard from "../Components/ProductCard";
import products from "../data";

const Homepage = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl underline my-10">
                Best Sellers
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2  place-items-center md:grid-cols-3 lg:grid-cols-4 gap-6 md:max-w-7xl mx-auto">
                {products.map((prod) => (
                    <ProductCard key={prod.id} prod={prod} />
                ))}
            </div>
        </div>
    );
};
export default Homepage;

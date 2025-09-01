import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between z-50 bg-white py-5 px-4 w-full fixed top-0 left-0 shadow-xl ">
            <Link to="/">
                <h1 className="font-bold text-2xl">Flower world</h1>
            </Link>
            <div className="flex items-center justify-between text-lg font-medium gap-5">
                <Link to="/cart">
                    {" "}
                    <span className="flex items-center justify-between gap-2">
                        Cart <FaShoppingCart size={20} />{" "}
                    </span>
                </Link>
                <Link to="/login">
                    {" "}
                    <span className="flex items-center justify-between gap-2 ">
                        Login <MdAccountCircle size={20} />{" "}
                    </span>
                </Link>
            </div>
        </div>
    );
};
export default Navbar;

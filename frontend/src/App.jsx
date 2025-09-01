import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Homepage from "./Page/Homepage";
import SingleProductpage from "./Page/SingleProductpage";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="mt-[72px] flex flex-col">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route
                        path="/product/:id"
                        element={<SingleProductpage />}
                    />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
};
export default App;

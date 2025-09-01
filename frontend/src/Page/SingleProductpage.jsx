import { useParams } from "react-router-dom";

const SingleProductpage = () => {
    const { id } = useParams();

    return (
        <div>
            <hh1>hello for single page {id}</hh1>
        </div>
    );
};
export default SingleProductpage;

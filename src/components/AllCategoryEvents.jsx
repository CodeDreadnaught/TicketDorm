import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const AllCategoryEvents = () => {
    return (
        <div className="pt-[5rem] lg:pt-[8rem] px-[1.6rem] lg:px-[8.8rem]">
            <Link to="/find-events" className="my-[1.5rem] block">
            <section className="text-primaryPurple flex items-center font-montserrat"><FaArrowLeft className="w-[3rem]" /><span>Back to Find Events</span></section>
            </Link>
            <section>Map</section>
        </div>
    );
};

export default AllCategoryEvents;
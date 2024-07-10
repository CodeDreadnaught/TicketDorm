import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import EventCard from "./EventCard";

const EventCategorySection = props => {
    const { setEventCategory } = useContext(AppContext);

    const events = props.events.map(event => <EventCard key={event._id} {...event} width="w-[13.5rem] lg:w-[25rem]" />);

    return (
        <div className="px-[1.6rem] lg:px-[8.8rem] py-[1rem] hover:bg-[#F8F9FA] gen-transistion font-inter">
            <section>
                <section className="flex justify-between items-center mb-[1.6rem]">
                    <h1 className="font-semibold leading-[2.42rem] lg:text-[3.2rem] lg:leading-[3.873rem]">{props.category}</h1>
                    <p>
                        <Link onClick={() => setEventCategory(props.category)} 
                        className="leading-[1.936rem] lg:text-[2.4rem] lg:leading-[2.905rem] text-primaryPurple" to="/all-category-events">
                            View More
                        </Link>
                    </p>
                </section>
                <section className="event-card-wrapper flex overflow-x-auto gap-[1rem] lg:gap-[2.4rem] p-[0.5rem_0]">{events}</section>
            </section>
        </div>
    );
};

export default EventCategorySection;
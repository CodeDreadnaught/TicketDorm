import { Link } from "react-router-dom";
import EventCard from "./EventCard";

const EventCategorySection = props => {
    const events = props.events.map(event => <EventCard key={event._id} {...event} />);

    return (
        <div className="px-[1.6rem] lg:px-[8.8rem] py-[1rem] hover:bg-[#F8F9FA] gen-transistion font-inter">
            <section>
                <section className="flex justify-between items-center mb-[1.6rem]">
                    <h1 className="font-semibold leading-[2.42rem] lg:text-[3.2rem] lg:leading-[3.873rem]">{props.category}</h1>
                    <p><Link className="leading-[1.936rem] lg:text-[2.4rem] lg:leading-[2.905rem] text-primaryPurple">View More</Link></p>
                </section>
                <section className="event-card-wrapper flex overflow-x-auto gap-[1.5rem] lg:gap-[2.4rem] p-[0.5rem_0]">{events}</section>
            </section>
        </div>
    );
};

export default EventCategorySection;
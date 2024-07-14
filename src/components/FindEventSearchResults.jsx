import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import EventCard from "./EventCard";

const FindEventSearchResults = props => {
    const { allEvents } = useContext(AppContext);

    const similarEvents = allEvents.filter(event => event.eventName.toLowerCase().includes((props.searchText).toLowerCase())),
    event = similarEvents.map(event => <EventCard key={event._id} {...event} />);
    
    return (
        <div className="px-[1.6rem] lg:px-[8.8rem] font-inter">
            <h2 className="font-semibold text-[1.8rem] leading-[2.42rem] lg:text-[3.2rem] lg:leading-[3.873rem] mb-[0.6rem] lg:mb-[2.4rem]">Search Results</h2>
            <section className="py-[0.3rem] flex flex-wrap gap-[1rem] lg:gap-[2rem] *:w-[calc(50%-0.5rem)] lg:*:w-[calc(25%-1.5rem)]">
                {similarEvents.length > 0 ? event :
                <section className="text-center font-med center font-montserrat flex-[0_0_100%]">
                    <h2 className="my-[1.2rem] lg:text-[1.8rem]">We do not have any record of this event on our TicketDorm Servers, will you like to create this event instead?</h2>
                    <Link to="/sell-tickets"><button className="p-[1rem] rounded-[12px] text-white bg-[#0E4887]">Create Event</button></Link>
                </section>
                }
            </section>
        </div>
    );
};

export default FindEventSearchResults;
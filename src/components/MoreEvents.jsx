import { useContext } from "react";
import AppContext from "../context/AppContext";
import EventCard from "./EventCard";

const MoreEvents = props => {
    const { allEvents } = useContext(AppContext),
    similarEvents = (allEvents.filter(event => event.eventCategory === props.eventType)).filter(event => event._id !== props.eventId),
    event = (similarEvents.map(event => <EventCard key={event._id} {...event} />).slice(0, 4) );

    return (
        <section className="my-[2.5rem] lg:my-[5.5rem] px-[1.6rem] lg:px-[8.8rem] font-montserrat">
            <h2 className="font-semibold text-[1.8rem] leading-[2.42rem] lg:text-[3.2rem] lg:leading-[3.873rem] mb-[0.6rem] lg:mb-[2.4rem]">Similar Events for You</h2>
            {event.length > 0 ? <section className="py-[0.3rem] flex flex-wrap gap-[1rem] lg:gap-[2rem] *:w-[calc(50%-0.5rem)] lg:*:w-[calc(25%-1.5rem)]">{event}</section> : <p className="font-medium">{`There are no events similar to ${props.eventName} at this point in time.`}</p>}
        </section>
    );
};

export default MoreEvents;
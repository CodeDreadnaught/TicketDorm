import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import { FaArrowLeft } from "react-icons/fa";
import EventCard from "./EventCard";

const AllCategoryEvents = () => {
    const { allEvents, eventCategory } = useContext(AppContext);

    const topTrendingEvents = [...allEvents].reverse().map(event => <EventCard key={event._id} {...event} />),
    nightLifeEvents = (allEvents.filter(event => event.eventCategory === "Nightlife")).reverse().map(event => <EventCard key={event._id} {...event} />),
    comedyShows = (allEvents.filter(event => event.eventCategory === "Comedy")).reverse().map(event => <EventCard key={event._id} {...event} />),
    musicConcerts = (allEvents.filter(event => event.eventCategory === "Concert")).reverse().map(event => <EventCard key={event._id} {...event} />);

    let event;

    switch(eventCategory) {
        case "Upcoming Events" :
            event = topTrendingEvents;
        break;
        case "Nighttime Soirees" :
            event = nightLifeEvents;
        break;
        case "Comedy Shows" :
            event = comedyShows;
        break;
        case "Music Concerts" :
            event = musicConcerts;
        break;
    }

    return (
        <div className="pt-[5rem] lg:pt-[8rem] px-[1.6rem] lg:px-[8.8rem]" id="categories">
            <Link to="/find-events" className="my-[1.5rem] block">
            <section className="text-[rgba(14,72,135,1)] flex items-center font-montserrat"><FaArrowLeft className="w-[3rem]" /><span>Back to Find Events</span></section>
            </Link>
            <section className="py-[0.3rem] mb-[1.5rem] flex flex-wrap gap-[1rem] lg:gap-[2rem] *:w-[calc(50%-0.5rem)] lg:*:w-[calc(25%-1.5rem)]">{event}</section>
        </div>
    );
};

export default AllCategoryEvents;
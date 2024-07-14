import { useContext } from "react";
import AppContext from "../context/AppContext";
import EventCategorySection from "./EventCategorySection";

const FindEventDefaultResults = props => {
    const { allEvents } = useContext(AppContext);
    
    return (
        <div className="">
            <EventCategorySection category="Upcoming Events" events={[...allEvents].reverse().slice(0, 6)} />
            <EventCategorySection category="Nighttime Soirees" events={(allEvents.filter(event => event.eventCategory === "Nightlife")).reverse().slice(0, 6)} />
            <EventCategorySection category="Comedy Shows" events={(allEvents.filter(event => event.eventCategory === "Comedy")).reverse().slice(0, 6)} />
            <EventCategorySection category="Music Concerts" events={(allEvents.filter(event => event.eventCategory === "Concert")).reverse().slice(0, 6)} />
        </div>
    );
};

export default FindEventDefaultResults;
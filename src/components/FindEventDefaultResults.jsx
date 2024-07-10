import { useContext } from "react";
import AppContext from "../context/AppContext";
import EventCategorySection from "./EventCategorySection";

const FindEventDefaultResults = props => {
    const { allEvents } = useContext(AppContext);
    console.log(allEvents);
    return (
        <div className="">
            <EventCategorySection category="Top Trending Events" events={[...allEvents].reverse().slice(0, 6)} />
            <EventCategorySection category="Nightlife Events" events={(allEvents.filter(event => event.eventCategory === "Nightlife")).reverse().slice(0, 6)} />
            <EventCategorySection category="Comedy Shows" events={(allEvents.filter(event => event.eventCategory === "Comedy")).reverse().slice(0, 6)} />
            <EventCategorySection category="Music Concerts" events={(allEvents.filter(event => event.eventCategory === "Concert")).reverse().slice(0, 6)} />
        </div>
    );
};

export default FindEventDefaultResults;
import { useContext } from "react";
import AppContext from "../context/AppContext";
import EventCategorySection from "./EventCategorySection";

const FindEventDefaultResults = props => {
    const { allEvents } = useContext(AppContext);

    console.log(allEvents);

    return (
        <div className="">
            <EventCategorySection category="Top Trending Events" events={[...allEvents].reverse().slice(0, 6)} />
        </div>
    );
};

export default FindEventDefaultResults;
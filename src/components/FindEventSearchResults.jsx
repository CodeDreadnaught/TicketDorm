import { useContext } from "react";
import AppContext from "../context/AppContext";

const FindEventSearchResults = props => {
    const { allEvents } = useContext(AppContext);
    
    return (
        <div className="px-[1.6rem] lg:px-[8.8rem]">
            Search Results
        </div>
    );
};

export default FindEventSearchResults;
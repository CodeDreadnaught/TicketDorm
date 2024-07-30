import { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import FindEventSearchResults from "./FindEventSearchResults";
import { FaExclamationTriangle } from "react-icons/fa";

const SearchBarResults = props => {
    const { allEvents } = useContext(AppContext);

    useEffect(() => {
        if (props.searchText) {
            document.body.classList.add("prevent-scrolling");
        } else {
            document.body.classList.remove("prevent-scrolling");
        }

        return () => document.body.classList.remove("prevent-scrolling");
    }, []);

    return (
        <section className="searched-events fixed w-screen overflow-auto h-[calc(100dvh-8rem)] text-black bg-white top-[8rem] left-0 py-[2rem]">
            {allEvents.length > 0 ? <FindEventSearchResults searchText={props.searchText} defaultSearchBar={true} /> : 
                <section className="h-[80vh] center">
                    <section className="text-center center font-montserrat px-[1.6rem] lg:px-[8.8rem] mb-[2.4rem] lg:mb-[4rem]">
                        <FaExclamationTriangle className="text-[4.5rem] lg:text-[6rem] text-yellow-500"/>
                        <p className="font-semibold my-[1rem]">There might be an issue with your internet connection, we are actively reloading this page to show you all available events.</p>
                    </section>
                </section>
                }
        </section>
    );
};

export default SearchBarResults;
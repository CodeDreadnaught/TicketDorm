import { useEffect } from "react";
import FindEventSearchResults from "./FindEventSearchResults";

const SearchBarResults = props => {
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
            <FindEventSearchResults searchText={props.searchText} defaultSearchBar={true} />
        </section>
    );
};

export default SearchBarResults;
import { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import FindEventSearchResults from "./FindEventSearchResults";
import { FaExclamationTriangle } from "react-icons/fa";

const MobileSearchBar = () => {
    const { allEvents } = useContext(AppContext),
    [ displayedElement, setDisplayedElement ] = useState(null);

    const changeHandler = event => {
        const { value } = event.target;

        if (value) {
            if (allEvents.length > 0) {
                setDisplayedElement(<FindEventSearchResults searchText={value} defaultSearchBar={true} />);
            } else {
                setDisplayedElement(
                <section className="h-[90vh] center">
                    <section className="text-center center font-montserrat px-[1.6rem] lg:px-[8.8rem] mb-[2.4rem] lg:mb-[4rem]">
                        <FaExclamationTriangle className="text-[4.5rem] lg:text-[6rem] text-yellow-500"/>
                        <p className="font-semibold my-[1rem]">There might be an issue with your internet connection, we are actively reloading this page to show you all available events.</p>
                    </section>
                </section>);    
            }
        } else {
            setDisplayedElement(null);
        }
    };
    
    return (
        <div className="font-montserrat pt-[5rem] lg:pt-[8rem] text-black">
            <section>
                <section className="h-[3rem] my-[1.5rem] px-[1.6rem] lg:px-[8.8rem]">
                    <input type="text" className="block size-full border-b gen-transistion focus:border-primaryPurple" placeholder="Search Events..." onChange={changeHandler} />
                </section>
                <section className="min-h-[90vh] mb-[1.5rem]">{displayedElement}</section>
            </section>
        </div>
    );
};

export default MobileSearchBar;
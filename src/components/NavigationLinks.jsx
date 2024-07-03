import { useState } from "react";
import { Link } from "react-router-dom";
import CaretDownArrow from "../assets/icons/caret-down-arrow.svg";
import NavigationLinksMenu from "./NavigationLinksMenu";

const NavigationLinks = () => {
    const [ showHelpCenter, setShowHelpCenter ] = useState(false),
    helpCenterState = showHelpCenter ? "active" : "";

    const toggleHelpCenterMenu = () => {
        setShowHelpCenter(prevState => !prevState);
    };

    return (
        <section>
            <ul className="flex gap-[1.6rem]">
                <li><Link to="/find-events">Find Events</Link></li>
                <li><Link to="/sell-tickets">Sell Tickets</Link></li>
                <li><span className={`flex items-center relative bg-black help-center ${helpCenterState}`}>
                <span className="inline-block cursor-pointer" onClick={toggleHelpCenterMenu}>Help Center</span> 
                <span className="inline-block cursor-pointer size-[2.4rem] center" onClick={toggleHelpCenterMenu}><img src={CaretDownArrow} alt="Caret Down Icon" className="help-center-caret size-full gen-transistion" /></span>
                <NavigationLinksMenu onClickMenuItem={setShowHelpCenter} />
                </span></li>
            </ul>
        </section>
    );
};

export default NavigationLinks;
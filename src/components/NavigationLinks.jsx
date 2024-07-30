import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const NavigationLinks = () => {
    const { setShowProfileDropdown, setDisplayedElement } = useContext(AppContext);

    return (
        <section>
            <ul className="flex gap-[1.6rem]">
                <li><Link to="/find-events" onClick={() => {
                    setShowProfileDropdown(false);
                    setDisplayedElement(false);
                }}>Find Events</Link></li>
                <li><Link to="/sell-tickets" onClick={() => {
                    setShowProfileDropdown(false);
                    setDisplayedElement(false);
                }}>Sell Tickets</Link></li>
                <li><Link to="/about-us" onClick={() => {
                    setShowProfileDropdown(false);
                    setDisplayedElement(false);
                }}>About Us</Link></li>
            </ul>
        </section>
    );
};

export default NavigationLinks;
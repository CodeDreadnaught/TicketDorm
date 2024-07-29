import { Link } from "react-router-dom";

const NavigationLinks = () => {
    return (
        <section>
            <ul className="flex gap-[1.6rem]">
                <li><Link to="/find-events">Find Events</Link></li>
                <li><Link to="/sell-tickets">Sell Tickets</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
            </ul>
        </section>
    );
};

export default NavigationLinks;
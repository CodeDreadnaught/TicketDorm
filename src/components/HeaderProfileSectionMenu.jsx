import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const HeaderProfileSectionMenu = () => {
    const { setUser, setToken, setShowProfileDropdown } = useContext(AppContext);

    return (
        <section className="absolute z-[-1] show-profile-dropdown gen-transistion top-[4rem] opacity-0 w-full p-[1.2rem] bg-black rounded-[5px]">
            <ul>
                <li><Link to="/dashboard" onClick={() => setShowProfileDropdown(false)}>Dashboard</Link></li>
                <li className="border-b border-[gray] my-[0.5rem]"></li>
                <li><Link onClick={() => {
                    setUser(null);
                    setToken(null);
                    localStorage.removeItem("site");
                    localStorage.removeItem("orderInformation");
                    localStorage.removeItem("eventsInformation");
                    setShowProfileDropdown(false);
                }}>Sign Out</Link></li>
            </ul>
        </section>
    );
};

export default HeaderProfileSectionMenu;
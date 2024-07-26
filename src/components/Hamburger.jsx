import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const Hamburger = () => {
    const { token, setToken, setUser } = useContext(AppContext),
    navigate = useNavigate();

    const [ showMobileNavigation, setShowMobileNavigation ] = useState(false),
    hamburgerState = showMobileNavigation ? "active" : "";

    const activeLinkStyle = ({ isActive }) => isActive ? "font-extrabold gen-transistion size-full center bg-[#F8F9FA] rounded-[5px]" : "font-normal gen-transistion";

    const toggleMenu = () => {
        setShowMobileNavigation(prevState => !prevState);
    };

    return (
        <section className={`hamburger-icon w-[3rem] h-[3rem] py-[0.781rem] px-[0.281rem] flex flex-col justify-between lg:hidden ${hamburgerState} font-inter leading-[1.936rem]`}>
            <section className="h-[0.188rem] bg-white rounded-[5px] gen-transistion" onClick={toggleMenu}></section>
            <section className="h-[0.188rem] bg-white rounded-[5px] gen-transistion" onClick={toggleMenu}></section>
            <section className="h-[0.188rem] bg-white rounded-[5px] gen-transistion" onClick={toggleMenu}></section>
            <section className="mobile-navigation-menu fixed top-[5rem] left-[-150vw] w-full bg-white text-black p-[1.6rem] h-[calc(100vh-5rem)] flex flex-col justify-between gen-transistion">
                <ul>
                    <li className="h-[4rem] center"><NavLink to="/" className={activeLinkStyle} onClick={() => setShowMobileNavigation(false)}>Home</NavLink></li>
                    <li className="h-[4rem] center"><NavLink to="/find-events" className={activeLinkStyle} onClick={() => setShowMobileNavigation(false)}>Find Events</NavLink></li>
                    <li className="h-[4rem] center"><NavLink to="/sell-tickets" className={activeLinkStyle} onClick={() => setShowMobileNavigation(false)}>Sell Tickets</NavLink></li>
                    {token && <li className="h-[4rem] center"><NavLink to="/dashboard" className={activeLinkStyle} onClick={() => {
                        setShowMobileNavigation(false);
                    }}>Dashboard</NavLink></li>}  
                    {token && <li className="h-[4rem] center"><NavLink to="/dashboard" className={activeLinkStyle} onClick={() => {
                        setShowMobileNavigation(false);
                    }}>Orders</NavLink></li>}  
                    {token && <li className="h-[4rem] center"><NavLink to="/dashboard" className={activeLinkStyle} onClick={() => {
                        setShowMobileNavigation(false);
                    }}>Events</NavLink></li>}  
                    <li className="h-[4rem] center"><NavLink to="/contact-us" className={activeLinkStyle} onClick={() => setShowMobileNavigation(false)}>Contact Us</NavLink></li>
                    {token && <li className="h-[4rem] center"><NavLink onClick={() => {
                        setShowMobileNavigation(false);
                        setUser(null);
                        setToken(null);
                        localStorage.removeItem("site");
                        navigate("/");
                    }}>Logout</NavLink></li>}
                </ul>
                <section>
                    {token ? <p className="text-center">CDNLKM</p> :
                        <ul className="flex justify-between items-center">
                        <li className="h-[4.2rem] w-[15rem] center rounded-[5px] border border-primaryPurple"><NavLink to="/sign-in" className="h-full center" onClick={() => {
                                setShowMobileNavigation(false);
                            }}><button className="p-[1rem]">Sign In</button></NavLink>
                        </li>
                        <li className="h-[4.2rem] w-[15rem] center rounded-[5px] bg-primaryPurple text-white"><NavLink to="/sign-up" onClick={() => {
                                setShowMobileNavigation(false);
                                }}><button className="p-[1rem]">Sign Up</button></NavLink>
                        </li>
                    </ul>
                    }
                </section>
            </section>
        </section>
    );
};

export default Hamburger;
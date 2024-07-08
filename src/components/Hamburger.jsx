import { useState } from "react";
import { NavLink } from "react-router-dom";

const Hamburger = () => {
    let user;

    const [ showMobileNavigation, setShowMobileNavigation ] = useState(false),
    hamburgerState = showMobileNavigation ? "active" : "";

    const activeLinkStyle = ({ isActive }) => isActive ? "font-extrabold gen-transistion" : "font-normal gen-transistion";

    const toggleMenu = () => {
        setShowMobileNavigation(prevState => !prevState);
        // setClickProfileIcon(false);
    };

    return (
        <section className={`hamburger-icon w-[3rem] h-[3rem] py-[0.781rem] px-[0.281rem] flex flex-col justify-between lg:hidden ${hamburgerState} font-inter leading-[1.936rem]`}>
                            <section className="h-[0.188rem] bg-white rounded-[5px] gen-transistion" onClick={toggleMenu}></section>
                            <section className="h-[0.188rem] bg-white rounded-[5px] gen-transistion" onClick={toggleMenu}></section>
                            <section className="h-[0.188rem] bg-white rounded-[5px] gen-transistion" onClick={toggleMenu}></section>
                            <section className="mobile-navigation-menu fixed top-[5rem] left-[-150vw] w-full bg-[#F8F9FA] text-black p-[1.6rem] h-[calc(100vh-5rem)] flex flex-col justify-between gen-transistion">
                                <ul>
                                    <li className="h-[4rem] center"><NavLink to="/" className={activeLinkStyle} onClick={() => setShowMobileNavigation(false)}>Home</NavLink></li>
                                    <li className="h-[4rem] center"><NavLink to="/find-events" className={activeLinkStyle} onClick={() => setShowMobileNavigation(false)}>Find Events</NavLink></li>
                                    <li className="h-[4rem] center"><NavLink to="/sell-tickets" className={activeLinkStyle} onClick={() => setShowMobileNavigation(false)}>Sell Tickets</NavLink></li>
                                    <li className="h-[4rem] center"><NavLink to="/faq" className={activeLinkStyle} onClick={() => setShowMobileNavigation(false)}>FAQs</NavLink></li>
                                    <li className="h-[4rem] center"><NavLink to="/contact-us" className={activeLinkStyle} onClick={() => setShowMobileNavigation(false)}>Contact Us</NavLink></li>
                                </ul>
                                <ul>
                                    <li className="h-[4rem] center">{
                                        user ? <HeaderProfileSection onClickMenu={setShowMobileNavigation} /> : 
                                        <NavLink to="/sign-in" className="h-full flex items-end" onClick={() => {
                                            setShowMobileNavigation(false);
                                        }}>Sign In</NavLink>}
                                    </li>
                                    <li className="center mb-[0.5rem]">—</li>
                                    <li className="h-[4.3rem] center">
                                        {user ? <NavLink onClick={() => {
                                            setShowMobileNavigation(false);
                                            // setClickProfileIcon(false);
                                        }}><button className="p-[1rem]">Request for Pickup</button></NavLink> : 
                                        <NavLink to="/sign-up" onClick={() => {
                                            setShowMobileNavigation(false);
                                            }}>
                                                <button className="p-[1rem]">Sign Up</button>
                                            </NavLink>}
                                    </li>
                                </ul>
                            </section>
                        </section>
    );
};

export default Hamburger;
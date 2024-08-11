import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import DashboardHome from "./DashboardHome";
import Orders from "./Orders";
import DashboardEvents from "./DashboardEvents";
import DashboardFinance from "./DashboardFinance";

const Hamburger = () => {
    const { user, token, setToken, setUser, setDashboardElement } = useContext(AppContext),
    navigate = useNavigate();

    const [ showMobileNavigation, setShowMobileNavigation ] = useState(false),
    [ activeComponent, setActiveComponent] = useState(null),
    hamburgerState = showMobileNavigation ? "active" : "";

    const activeLinkStyle = ({ isActive }) => isActive ? "font-extrabold gen-transistion size-full center bg-[#F8F9FA] rounded-[5px]" : "font-normal gen-transistion";

    const toggleMenu = () => {
        setShowMobileNavigation(prevState => !prevState);
    };

    useEffect(() => {
        if (showMobileNavigation) {
            document.body.classList.add("prevent-scrolling");
        } else {
            document.body.classList.remove("prevent-scrolling");
        }

        return () => document.body.classList.remove("prevent-scrolling");
    }, [showMobileNavigation]);

    return (
        <section className={`hamburger-icon w-[3rem] h-[3rem] py-[0.781rem] px-[0.281rem] flex flex-col justify-between lg:hidden ${hamburgerState} font-inter leading-[1.936rem]`}>
            <section className="h-[0.188rem] bg-white rounded-[5px] gen-transistion" onClick={toggleMenu}></section>
            <section className="h-[0.188rem] bg-white rounded-[5px] gen-transistion" onClick={toggleMenu}></section>
            <section className="h-[0.188rem] bg-white rounded-[5px] gen-transistion" onClick={toggleMenu}></section>
            <section className="mobile-navigation-menu fixed top-[5rem] left-[-150vw] w-full bg-white text-black p-[1.6rem] h-[calc(100dvh-5rem)] flex flex-col justify-between gen-transistion">
                <ul>
                    <li className="h-[4rem] center"><NavLink to="/" className={activeLinkStyle} onClick={() => {
                        setShowMobileNavigation(false);
                        setActiveComponent(null);
                    }}>Home</NavLink></li>
                    <li className="h-[4rem] center"><NavLink to="/find-events" className={activeLinkStyle} onClick={() => {
                        setShowMobileNavigation(false);
                        setActiveComponent(null);
                    }}>Find Events</NavLink></li>
                    <li className="h-[4rem] center"><NavLink to="/sell-tickets" className={activeLinkStyle} onClick={() => {
                        setShowMobileNavigation(false);
                        setActiveComponent(null);
                    }}>Sell Tickets</NavLink></li>
                    <li className="h-[4rem] center"><NavLink to="/about-us" className={activeLinkStyle} onClick={() => {
                        setShowMobileNavigation(false);
                        setActiveComponent(null);
                    }}>About Us</NavLink></li>
                    {token && <li className="h-[4rem] center"><NavLink to="/dashboard" className={`${user && activeComponent === "dashboard" ?"font-extrabold gen-transistion size-full center bg-[#F8F9FA] rounded-[5px]" : "font-normal gen-transistion"}`} onClick={() => {
                        setShowMobileNavigation(false);
                        setDashboardElement(<DashboardHome />);
                        setActiveComponent("dashboard");
                    }}>Dashboard</NavLink></li>}  
                    {token && <li className="h-[4rem] center"><NavLink to="/dashboard" className={`${user && activeComponent === "orders" ?"font-extrabold gen-transistion size-full center bg-[#F8F9FA] rounded-[5px]" : "font-normal gen-transistion"}`} onClick={() => {
                        setShowMobileNavigation(false);
                        setDashboardElement(<Orders />);
                        setActiveComponent("orders");
                    }}>Orders</NavLink></li>}  
                    {token && <li className="h-[4rem] center"><NavLink to="/dashboard" className={`${user && activeComponent === "events" ?"font-extrabold gen-transistion size-full center bg-[#F8F9FA] rounded-[5px]" : "font-normal gen-transistion"}`} onClick={() => {
                        setShowMobileNavigation(false);
                        setDashboardElement(<DashboardEvents />);
                        setActiveComponent("events");
                    }}>Events</NavLink></li>}  
                    {token && <li className="h-[4rem] center"><NavLink to="/dashboard" className={`${user && activeComponent === "finance" ?"font-extrabold gen-transistion size-full center bg-[#F8F9FA] rounded-[5px]" : "font-normal gen-transistion"}`} onClick={() => {
                        setShowMobileNavigation(false);
                        setDashboardElement(<DashboardFinance />);
                        setActiveComponent("finance");
                    }}>Finance</NavLink></li>}  
                    {token && <li className="h-[4rem] center"><NavLink onClick={() => {
                        setShowMobileNavigation(false);
                        setUser(null);
                        setToken(null);
                        localStorage.removeItem("site");
                        localStorage.removeItem("orderInformation");
                        localStorage.removeItem("eventsInformation");
                        navigate("/");
                        setActiveComponent(null);
                    }}>Logout</NavLink></li>}
                </ul>
                <section>
                    {token ? null :
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
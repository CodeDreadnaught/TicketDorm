import { useState, useEffect } from "react";
import AppContext from "../context/AppContext";
import { Outlet } from "react-router-dom";
import EnsurePageLoadsFromTop from "../utilis/EnsurePageLoadsFromTop";
import { fetchAllEvents } from "../requests/APIRequest";
import Alert from "../components/Alert";
import LoadingAnimation from "../components/LoadingAnimation";
import DashboardHome from "../components/DashboardHome";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = () => {
    const [ user, setUser ] = useState(null),
    [ token, setToken ] = useState(localStorage.getItem("site") || null),
    [orderInformation, setOrderInformation] = useState(JSON.parse(localStorage.getItem("orderInformation")) || null),
    [eventsInformation, setEventsInformation] = useState(JSON.parse(localStorage.getItem("eventsInformation")) || null),
    [ verificationEmail, setVerificationEmail ] = useState(""),
    [ hasOTP, setHasOTP ] = useState(false),
    [ allEvents, setAllEvents ] = useState([]),
    [ currentEvent, setCurrentEvent ] = useState(""),
    [ verifyPayment, setVerifyPayment ] = useState(localStorage.getItem("verifyPayment") || null),
    [ eventID, setEventID ] = useState(localStorage.getItem("eventID") || null),
    [ ticketID, setTicketID ] = useState(localStorage.getItem("ticketID") || null),
    [ eventCategory, setEventCategory ] = useState(""),
    [ showLoadingAnimation, setShowLoadingAnimation ] = useState(false),
    [ showProfileDropdown, setShowProfileDropdown ] = useState(false),
    [ displayedElement, setDisplayedElement ] = useState(null),
    [dashboardElement, setDashboardElement] = useState(<DashboardHome />),
    [ showModal, setShowModal ] = useState({
        heading: "Error",
        message: "You are not authorized to perform this action",
        on: false,
        success: false
    });

    useEffect(() => {
        fetchAllEvents()
        .then(data => setAllEvents(data));

        let removeAppDot;
        document.addEventListener("mousemove", event => {
            const appDot = document.querySelector(".app-dot");

            appDot.classList.remove("lg:hidden");
            appDot.style.left = event.clientX + "px";
            appDot.style.top = event.clientY + "px";

            if (removeAppDot) {
                clearTimeout(removeAppDot);
            }
            removeAppDot = setTimeout(() => {
                appDot.classList.add("lg:hidden");
            }, 500);
        });
    }, []);

    return (
        <div className="app-container">
            <section className="app-dot hidden lg:block bg-primaryPurple size-[1.3rem] left-[-5vw] rounded-[50%] pointer-events-none z-[80] fixed"></section>
            <AppContext.Provider value={{ 
                user, setUser, token, setToken, allEvents, setAllEvents, eventCategory, setEventCategory, 
                showLoadingAnimation, setShowLoadingAnimation, showModal, setShowModal, verificationEmail, 
                setVerificationEmail, hasOTP, setHasOTP, currentEvent, setCurrentEvent, verifyPayment, setVerifyPayment,
                eventID, setEventID, ticketID, setTicketID, showProfileDropdown, setShowProfileDropdown, displayedElement, 
                setDisplayedElement, orderInformation, setOrderInformation, eventsInformation, setEventsInformation,
                dashboardElement, setDashboardElement
                }}>
                <EnsurePageLoadsFromTop>
                    <Alert />
                    <LoadingAnimation />
                    <Header />
                    <Outlet />
                    <Footer />
                </EnsurePageLoadsFromTop>
            </AppContext.Provider>
        </div>
    );
};

export default AppLayout;
import { useState, useEffect } from "react";
import AppContext from "../context/AppContext";
import { Outlet } from "react-router-dom";
import EnsurePageLoadsFromTop from "../utilis/EnsurePageLoadsFromTop";
import { fetchAllEvents } from "../requests/APIRequest";
import Alert from "../components/Alert";
import LoadingAnimation from "../components/LoadingAnimation";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = () => {
    const [ user, setUser ] = useState(null),
    [ token, setToken ] = useState(localStorage.getItem("site") || null),
    [orderInformation, setOrderInformation] = useState(null),
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
    [ showModal, setShowModal ] = useState({
        heading: "Error",
        message: "You are not authorized to perform this action",
        on: false,
        success: false
    });

    useEffect(() => {
        fetchAllEvents()
        .then(data => setAllEvents(data));
    }, []);

    return (
        <div className="app-container">
            <AppContext.Provider value={{ 
                user, setUser, token, setToken, allEvents, setAllEvents, eventCategory, setEventCategory, 
                showLoadingAnimation, setShowLoadingAnimation, showModal, setShowModal, verificationEmail, 
                setVerificationEmail, hasOTP, setHasOTP, currentEvent, setCurrentEvent, verifyPayment, setVerifyPayment,
                eventID, setEventID, ticketID, setTicketID, showProfileDropdown, setShowProfileDropdown, displayedElement, 
                setDisplayedElement, orderInformation, setOrderInformation
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
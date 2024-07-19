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
    [ verificationEmail, setVerificationEmail ] = useState(""),
    [ hasOTP, setHasOTP ] = useState(false),
    [ allEvents, setAllEvents ] = useState([]),
    [ eventCategory, setEventCategory ] = useState(""),
    [ showLoadingAnimation, setShowLoadingAnimation ] = useState(false),
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
            <AppContext.Provider value={{ user, setUser, token, setToken, allEvents, setAllEvents, eventCategory, setEventCategory, showLoadingAnimation, setShowLoadingAnimation, showModal, setShowModal, verificationEmail, setVerificationEmail, hasOTP, setHasOTP }}>
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
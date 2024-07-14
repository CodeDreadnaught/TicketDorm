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
    const [ allEvents, setAllEvents ] = useState([]),
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
            <EnsurePageLoadsFromTop>
                <AppContext.Provider value={{ allEvents, setAllEvents, eventCategory, setEventCategory, showLoadingAnimation, setShowLoadingAnimation, showModal, setShowModal }}>
                    <Alert />
                    <LoadingAnimation />
                    <Header />
                    <Outlet />
                    <Footer />
                </AppContext.Provider>
            </EnsurePageLoadsFromTop>
        </div>
    );
};

export default AppLayout;
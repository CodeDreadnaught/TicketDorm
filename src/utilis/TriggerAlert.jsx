import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const TriggerAlert = () => {
    const { setShowModal, setShowLoadingAnimation } = useContext(AppContext),
    navigate = useNavigate();

    useEffect(() => {
        setShowLoadingAnimation(false);
        setShowModal({
            heading: "Network Error",
            message: "Oops! We are unable to load this event at this point in time, kindly retry.",
            on: true,
            success: false
        });
        navigate("/find-events");

    }, []);

    return(
        <div className="h-[100vh]"></div>
    );
};

export default TriggerAlert;
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import AppContext from "../context/AppContext";

const EnsurePageLoadsFromTop = props => {
    const { setShowLoadingAnimation } = useContext(AppContext),
    location = useLocation();

    useEffect(() => {
        setShowLoadingAnimation(false);
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }, [location]);

    return (
        <>
            {props.children}
        </>
    );
};

export default EnsurePageLoadsFromTop;
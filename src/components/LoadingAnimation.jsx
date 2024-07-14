import { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";

const LoadingAnimation = () => {
    const { showLoadingAnimation } = useContext(AppContext);

    useEffect(() => {
        if (showLoadingAnimation) {
            document.body.classList.add("prevent-scrolling");
        } else {
            document.body.classList.remove("prevent-scrolling");
        }

        return () => document.body.classList.add("prevent-scrolling");
    }, [showLoadingAnimation]);

    const LoadingAnimationStyle = showLoadingAnimation ? "fixed w-full h-full center top-0 left-0 bg-[rgba(0,0,0,0.85)] z-[30] linear-transistion" : "hidden";

    const spinnerStyles = {
        animation: "move 1s alternate infinite",
        display: "block"
    };

    return (
        <div className={LoadingAnimationStyle}>
            <section className="font-montserrat text-[2.5rem] font-semibold text-white tracking-[0.25rem]"><span style={spinnerStyles}>TicketDorm</span></section>
        </div>
    );
};

export default LoadingAnimation;
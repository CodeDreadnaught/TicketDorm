import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";

const HomeCTASection = () => {
    const { token } = useContext(AppContext);

    return (
        <div className="min-h-[20.8rem] center lg:h-[39.8rem] px-[1.6rem] py-[2.4rem] lg:px-[8.8rem] lg:py-[11.2rem] bg-primaryPurple">
            <section className="center text-center text-white">
                <h1 className="font-robotoSerif font-bold text-[2rem] leading-[2.342rem] mb-[2.4rem] lg:text-[6.4rem] lg:leading-[7.494rem]">{token ? "The Ultimate Event Awaits..." : "Create a Free Account and Sell Tickets Online Today!"}</h1>
                <Link to={token ? "/sell-tickets" : "/sign-up"}><button className="font-montserrat bg-black rounded-[60px] center py-[1.6rem] px-[2.4rem] lg:px-[4rem]">{token ? "Let's Make it Happen" : "Get Started"}</button></Link>
            </section>
        </div>
    );
};

export default HomeCTASection;
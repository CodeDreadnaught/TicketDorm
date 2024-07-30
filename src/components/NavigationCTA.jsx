import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import HeaderProfileSection from "./HeaderProfileSection";
import Hamburger from "./Hamburger";

const NavigationCTA = () => {
    const { token, setDisplayedElement } = useContext(AppContext);

    return (
        <section>
            <section className="hidden lg:block">
                {token ? <HeaderProfileSection /> :
                <section className="font-poppins lg:flex items-center gap-[2rem]">
                    <Link to="sign-in" onClick={() => setDisplayedElement(false)}><button className="px-[2.4rem] py-[1.25rem] rounded-[3px] border border-primaryPurple gen-transistion">Sign In</button></Link>
                    <Link to="/sign-up" onClick={() => setDisplayedElement(false)}><button className="px-[2.4rem] py-[1.25rem] rounded-[3px] bg-primaryPurple gen-transistion">Sign Up</button></Link>
                </section>}
            </section>
            <section className="lg:hidden">
                <Hamburger />
            </section>
        </section>
    )
};

export default NavigationCTA;
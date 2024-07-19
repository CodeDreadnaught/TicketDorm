import { Link } from "react-router-dom";
import HeaderLogo from "../assets/tickdorm-header-logo.svg";
import FooterLogo from "../assets/tickdorm-footer-logo.svg";

const Logo = props => {
    return (
        <section>
            <Link to="/">
            <section className="w-[9.582rem] h-[3.4rem] lg:w-[15.5rem] lg:h-[5.5rem]">
                <img src={props.header ? HeaderLogo : FooterLogo} alt="TicketDorm Logo" className="size-full" />
            </section>
            </Link>
        </section>
    );
};

export default Logo;
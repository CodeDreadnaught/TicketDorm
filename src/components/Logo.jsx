import { Link } from "react-router-dom";
import HeaderLogo from "../assets/tickdorm-header-logo.svg";
import FooterLogo from "../assets/tickdorm-footer-logo.svg";

const Logo = props => {
    return (
        <section>
            <Link to="/">
            <section className="w-[7rem] h-[3rem] lg:w-[13.5rem] lg:h-full">
                <img src={props.header ? HeaderLogo : FooterLogo} alt="TicketDorm Logo" className="size-full" />
            </section>
            </Link>
        </section>
    );
};

export default Logo;
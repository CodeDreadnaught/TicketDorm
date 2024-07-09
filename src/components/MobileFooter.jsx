import { Link } from "react-router-dom";
import Logo from "./Logo";
import FooterSocials from "./FooterSocials";

const MobileFooter = props => {
    return (
        <section className="lg:hidden center text-center">
           <Logo />
           <section className="my-[1.6rem]">
            <p><Link to="/about-us">About TicketDorm</Link></p>
           </section> 
           <section>
            <h3>Contact</h3>
            <p>+234 (0) 867-1663-419</p>
            <p>support@ticketdorm.com</p>
           </section>
           <section className="my-[1.6rem]">
            <h3>Follow Us</h3>
            <FooterSocials />
           </section>
           <section>
           <p>&copy; {props.currentYear} — TicketDorm</p>
           <p>All Rights Reserved</p>
           </section>
        </section>
    );
};

export default MobileFooter;
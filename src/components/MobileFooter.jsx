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
            <p><Link to="tel:09068359777">+234 (0) 906-835-9777</Link></p>
            <p><Link to="mailto:support@ticketdorm.com">support@ticketdorm.com</Link></p>
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
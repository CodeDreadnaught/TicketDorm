import { Link } from "react-router-dom";
import Logo from "./Logo";
import FooterSocialIconWrapper from "./FooterSocialIconWrapper";
import MetaIcon from "../assets/icons/meta-icon.svg";
import XIcon from "../assets/icons/x-icon.svg";
import InstagramIcon from "../assets/icons/instagram-icon.svg";
import TicTokIcon from "../assets/icons/tic-tok-icon.svg";

const DesktopFooter = props => {
    return (
        <section className="hidden lg:flex h-[27.4rem] justify-between">
            <section className="h-full flex flex-col justify-between">
                <section><Logo /></section>
                <section>
                    <p>+234 (0) 867-1663-419</p>
                    <p>support@ticketdorm.com</p>
                </section>
            </section>
            <section className="h-full flex gap-[8rem]">
                <section>
                    <h3>Services</h3>
                    <p><Link to="/sell-tickets">Create Event</Link></p>
                    <p><Link to="/sell-tickets">Sell Tickets</Link></p>
                    <p><Link to="#">Safety Tips</Link></p>
                    <p><Link to="/contact-us">Contact Us</Link></p>
                    <p><Link to="/faq">FAQs</Link></p>
                </section>
                <section>
                    <h3>About</h3>
                    <p><Link to="/about-us">About TicketDorm</Link></p>
                    <p><Link to="#">Terms and Conditions</Link></p>
                    <p><Link to="#">Privacy Policy</Link></p>
                    <p><Link to="#">Cookie Policy</Link></p>
                    <p><Link to="#">Copyright Infringement Policy</Link></p>
                </section>
            </section>
            <section className="h-full flex flex-col justify-between">
                <section className="center">
                    <Link to="/contact-us"><button className="bg-[rgba(14,72,135,1)] text-white px-[2rem] py-[1rem] rounded-[40px]">Get In Touch</button></Link>
                    <section className="flex gap-[1.6rem] mt-[2.4rem]">
                        <FooterSocialIconWrapper url="#" image={MetaIcon} type="Meta" />
                        <FooterSocialIconWrapper url="#" image={XIcon} type="X" />
                        <FooterSocialIconWrapper url="#" image={InstagramIcon} type="Instagram" />
                        <FooterSocialIconWrapper url="#" image={TicTokIcon} type="TicTok" />
                    </section>
                </section>
                <section className="text-right">
                    <p>&copy; {props.currentYear} — TicketDorm</p>
                    <p>All Rights Reserved</p>
                </section>
            </section>
        </section>
    );
};

export default DesktopFooter;
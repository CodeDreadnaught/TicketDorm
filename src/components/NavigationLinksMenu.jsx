import { Link } from "react-router-dom";

const NavigationLinksMenu = props => {
    return (
        <section className="help-center-menu absolute top-[-20dvh] w-full bg-black text-white p-[0.5rem] gen-transistion z-[-1]">
            <ul>
                <li><Link to="/faq" onClick={() => props.onClickMenuItem(false)} className="block py-[0.5rem] border-b border-inputGray">FAQs</Link></li>
                <li><Link to="/contact-us" onClick={() => props.onClickMenuItem(false)} className="block py-[0.5rem]">Contact Us</Link></li>
            </ul>
 
        </section>
    );
};

export default NavigationLinksMenu;
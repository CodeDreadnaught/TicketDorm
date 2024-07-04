import { Link } from "react-router-dom";

const FooterCTA = () =>  {
    return (
        <Link to="/contact-us"><button className="bg-[rgba(14,72,135,1)] text-white px-[2rem] py-[1rem] rounded-[40px]">Get In Touch</button></Link>
    );
};

export default FooterCTA;
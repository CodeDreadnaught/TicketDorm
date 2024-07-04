import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="px-[1.6rem] py-[2.4rem] lg:px-[8.8rem] lg:py-[5.6rem] bg-[rgba(245,250,255,1)] font-montserrat text-[1.4rem]">
            <MobileFooter currentYear={currentYear} />
            <DesktopFooter currentYear={currentYear} />
        </footer>
    );
};

export default Footer;
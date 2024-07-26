import FooterSocialIconWrapper from "./FooterSocialIconWrapper";
import MetaIcon from "../assets/icons/meta-icon.svg";
import XIcon from "../assets/icons/x-icon.svg";
import InstagramIcon from "../assets/icons/instagram-icon.svg";
import TicTokIcon from "../assets/icons/tic-tok-icon.svg";

const FooterSocials = props => {
    return (
        <section className="flex gap-[1.6rem] lg:mt-[2.4rem]">
            <FooterSocialIconWrapper url="https://www.facebook.com/profile.php?id=61562204108900&mibextid=LQQJ4d" image={MetaIcon} type="Meta" />
            <FooterSocialIconWrapper url="https://www.x.com" image={XIcon} type="X" />
            <FooterSocialIconWrapper url="https://www.instagram.com/ticketdorm?igsh=YTVrM2kxOHl0YjVj&utm_source=qr" image={InstagramIcon} type="Instagram" />
            <FooterSocialIconWrapper url="https://www.tiktok.com/@sofirzcqs0h?_t=8o1RoQlja8z&_r=1" image={TicTokIcon} type="TicTok" />
        </section>
    );
};

export default FooterSocials;
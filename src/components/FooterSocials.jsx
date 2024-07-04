import FooterSocialIconWrapper from "./FooterSocialIconWrapper";
import MetaIcon from "../assets/icons/meta-icon.svg";
import XIcon from "../assets/icons/x-icon.svg";
import InstagramIcon from "../assets/icons/instagram-icon.svg";
import TicTokIcon from "../assets/icons/tic-tok-icon.svg";

const FooterSocials = props => {
    return (
        <section className="flex gap-[1.6rem] lg:mt-[2.4rem]">
            <FooterSocialIconWrapper url="#" image={MetaIcon} type="Meta" />
            <FooterSocialIconWrapper url="#" image={XIcon} type="X" />
            <FooterSocialIconWrapper url="#" image={InstagramIcon} type="Instagram" />
            <FooterSocialIconWrapper url="#" image={TicTokIcon} type="TicTok" />
        </section>
    );
};

export default FooterSocials;
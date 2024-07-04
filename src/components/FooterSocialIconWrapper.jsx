import { Link } from "react-router-dom";

const FooterSocialIconWrapper = props => {
    return (
        <Link to={props.url}>
            <section className="size-[5rem] rounded-[50%] center border border-black"><img src={props.image} alt={`${props.type} Icon`} className="size-[1.6rem]" /></section>
        </Link>
    );
};

export default FooterSocialIconWrapper;
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <section>
            <Link to="/"><span className="text-[2rem] lg:text-[3.2rem] inline-block">Logo</span></Link>
        </section>
    );
};

export default Logo;
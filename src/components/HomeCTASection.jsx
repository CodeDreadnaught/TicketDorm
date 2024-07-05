import { Link } from "react-router-dom";

const HomeCTASection = () => {
    return (
        <div className="min-h-[20.8rem] center lg:h-[39.8rem] px-[1.6rem] py-[2.4rem] lg:px-[8.8rem] lg:py-[11.2rem] bg-primaryPurple">
            <section className="center text-center text-white">
                <h1 className="font-robotoSerif font-bold text-[2rem] leading-[2.342rem] mb-[2.4rem] lg:text-[6.4rem] lg:leading-[7.494rem]">Create a Free Account and Sell Tickets Online Today!</h1>
                <Link to="/sign-up"><button className="font-montserrat bg-black rounded-[60px] center py-[1.6rem] px-[2.4rem] lg:px-[4rem]">Get Started</button></Link>
            </section>
        </div>
    );
};

export default HomeCTASection;
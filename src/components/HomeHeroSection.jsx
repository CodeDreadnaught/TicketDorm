import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSearchBar from "./HeroSearchBar";

const HomeHeroSection = () => {
    const [ heroHeight, setHeroHeight ] = useState(window.innerHeight);

    useEffect(() => {
        const updateHeroHeight = () => {
            setHeroHeight(window.innerHeight);
        };

        window.addEventListener("resize", updateHeroHeight);

        return () => {
            window.removeEventListener("resize", updateHeroHeight);
        }
    }, []);

    return (
        <div className={`home-hero-section h-[${heroHeight}] bg-cover bg-center pt-[5rem] lg:pt-[8rem]`}>
            <section className="center text-white text-center px-[1.6rem] lg:px-[8.8rem] h-[calc(100vh-5rem)] lg:h-[calc(100vh-8rem)]">
                <section className="center">
                    <h1 className="font-robotoSerif mb-[1.6rem] lg:mb-[2.4rem] font-bold text-[2rem] lg:text-[4.8rem] leading-[2.342rem] lg:leading-[5.621rem]">Unlock Unforgettable Experiences with TicketDorm</h1>
                    <p className="font-robotoSerif lg:font-medium leading-[1.874rem] lg:text-[2.4rem] lg:leading-[2.81rem] mb-[3.2rem] lg:w-[77.3rem]">Buy and sell tickets to your favorite concerts, sports games and theater shows with ease and confidence</p>
                    <Link to="find-events"><button className="font-montserrat py-[1.6rem] px-[2.4rem] bg-primaryPurple rounded-[60px] leading-[1.95rem] font-medium lg:leading-[2.926rem]">Get Tickets Now</button></Link>
                    <section className="w-full mt-[4rem] lg:hidden">
                        <HeroSearchBar homepage={true} />
                    </section>
                </section>
            </section>
        </div>
    );
};

export default HomeHeroSection;
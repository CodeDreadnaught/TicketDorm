import HeroSearchBar from "./HeroSearchBar";

const SharedHeroSection = props => {
    return (
        <section className="pt-[calc(5rem)] lg:pt-[calc(8rem)]">
            <section className={`${props.findEvents} h-[50vh] lg:h-[55vh] px-[1.6rem] lg:px-[8.8rem] bg-cover bg-center center`}>
                <section className={`text-white center ${props.width}`}>
                    <h1 className="font-robotoSerif text-center font-bold text-[2rem] mb-[1.6rem] leading-[2.342rem] lg:text-[4.8rem] lg:leading-[5.621rem]">{props.heading}</h1>
                    <p className={(props.showHeroSearchBar ? "mb-[4rem]" : "") + " font-robotoSerif text-center leading-[1.874rem] lg:text-[2.4rem] lg:leading-[2.81rem]"}>{props.text}</p>
                    {props.showHeroSearchBar && <HeroSearchBar findEventspage={props.findEventspage} showDisplayedElement={props.showDisplayedElement} />}
                </section>
            </section>
        </section>
    );
};

export default SharedHeroSection;
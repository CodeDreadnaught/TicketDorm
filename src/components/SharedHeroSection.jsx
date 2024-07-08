import HeroSearchBar from "./HeroSearchBar";

const SharedHeroSection = props => {
    const backgroundImage = props.findEvents ? "eventHero" : "aboutHero";

    return (
        <section className="pt-[calc(5rem)] lg:pt-[calc(8rem)]">
            <section className={`h-[50vh] lg:h-[55vh] px-[1.6rem] lg:px-[8.8rem] bg-${backgroundImage} bg-cover bg-center center`}>
                <section className="text-white center lg:w-[87.1rem]">
                    <h1 className="font-robotoSerif text-center font-bold text-[2rem] mb-[1.6rem] leading-[2.342rem] lg:text-[4.8rem] lg:leading-[5.621rem]">{props.heading}</h1>
                    <p className="font-robotoSerif text-center leading-[1.874rem] lg:text-[2.4rem] lg:leading-[2.81rem] mb-[4rem]">{props.text}</p>
                    {props.findEvents && <HeroSearchBar />}
                </section>
            </section>
        </section>
    );
};

export default SharedHeroSection;
import { Helmet, HelmetProvider } from "react-helmet-async";
import SharedHeroSection from "../components/SharedHeroSection";

const About = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="TicketDorm, we connect you with the best concerts, sports games, theater performances and festivals. Our mission is to make discovering, buying, and selling tickets easy and secure." />
                <meta property="og:description" content="TicketDorm, we connect you with the best concerts, sports games, theater performances and festivals. Our mission is to make discovering, buying, and selling tickets easy and secure." />
                <title>About | TicketDorm</title>
                </Helmet>
            <main>
                <SharedHeroSection findEvents="about-hero" width="lg:w-[99.8rem]" heading="Your Gateway to Unforgettable Experiences" text="We connect you with the best concerts, sports games, theater performances and festivals. Our mission is to make discovering, buying & selling tickets easy and secure." />
            </main>
        </HelmetProvider>
    );
};

export default About;
import { Helmet, HelmetProvider } from "react-helmet-async";
import SharedHeroSection from "../components/SharedHeroSection";

const About = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="TicketDorm, explore a world of exciting events – from electrifying concerts and thrilling sports games to captivating theater performances and vibrant festivals." />
                <title>About | TicketDorm</title>
                </Helmet>
            <main>
                <SharedHeroSection />
            </main>
        </HelmetProvider>
    );
};

export default About;
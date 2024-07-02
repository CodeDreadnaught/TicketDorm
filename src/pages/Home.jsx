import { Helmet, HelmetProvider } from "react-helmet-async";
import HomeHeroSection from "./HomeHeroSection";

const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
            <meta name="description" content="TicketDorm, buy and sell tickets to your favorite concerts, sports games and theater shows with ease and confidence." />
            <title>TicketDorm — Unlock Unforgettable Experiences with TicketDorm</title>
            </Helmet>
            <main>
                <HomeHeroSection />
            </main>
        </HelmetProvider>
    );
};

export default Home;
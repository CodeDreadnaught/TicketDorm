import { Helmet, HelmetProvider } from "react-helmet-async";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeClipTextSection from "../components/HomeClipTextSection";
import HomeFirstInfo from "../components/HomeFirstInfo";
import HomeSellTicketSection from "../components/HomeSellTicketSection";
import HomeCTASection from "../components/HomeCTASection";

const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
            <meta name="description" content="TicketDorm, buy and sell tickets to your favorite concerts, sports games and theater shows with ease and confidence." />
            <meta property="og:description" content="TicketDorm, buy and sell tickets to your favorite concerts, sports games and theater shows with ease and confidence." />
            <title>TicketDorm — Unlock Unforgettable Experiences with TicketDorm</title>
            </Helmet>
            <main>
                <HomeHeroSection />
                <HomeClipTextSection />
                <HomeFirstInfo />
                <HomeSellTicketSection />
                <HomeCTASection />
            </main>
        </HelmetProvider>
    );
};

export default Home;
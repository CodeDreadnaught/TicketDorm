import { Helmet, HelmetProvider } from "react-helmet-async";
import SharedHeroSection from "../components/SharedHeroSection";

const FindEvents = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="TicketDorm, explore a world of exciting events – from electrifying concerts and thrilling sports games to captivating theater performances and vibrant festivals." />
                <title>Find Events | TicketDorm</title>
                </Helmet>
            <main>
                <SharedHeroSection showHeroSearchBar={true} findEvents="event-hero" width="lg:w-[87.1rem]" heading="Discover Your Next Adventure with TicketDorm" text="Explore a world of exciting events – from electrifying concerts and thrilling sports games to captivating theater performances and vibrant festivals" />
            </main>
        </HelmetProvider>
    );
};

export default FindEvents;
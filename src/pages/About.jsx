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
                <section className="font-montserrat px-[1.6rem] lg:px-[8.8rem] my-[2.4rem] lg:my-[3.2rem] bg-[#F8F9FA] py-[2.4rem] lg:py-[6.4rem]">
                    <h1 className="font-semibold text-[2rem] leading-[2.438rem] lg:text-[3.2rem] lg:leading-[3.901rem] mb-[2.4rem]">About Us</h1>
                    <p className="leading-[2.4rem] lg:leading-[4rem] lg:text-[2.4rem] lg:text-justify mb-[1.6rem] lg:mb-[2.5rem]">Welcome to TicketDorm, where your next unforgettable experience is just a click away. We are dedicated to connecting you with the best events around, from electrifying concerts and thrilling sports games to captivating theater performances and vibrant festivals. Our mission is to make discovering, buying and selling tickets seamless and secure, ensuring that every event you attend is a memorable one. Join us on this exciting journey and be part of the TicketDorm community!</p>
                    <p className="leading-[2.4rem] lg:leading-[4rem] lg:text-[2.4rem] lg:text-justify">TicketDorm was founded with a passion for live events and a commitment to making ticket purchasing seamless and enjoyable. Our team consists of event enthusiasts who understand the thrill of a live performance and the excitement of being part of a vibrant audience. We strive to bring that excitement to you by providing a platform that is easy to navigate, secure and filled with a diverse range of events.</p>
                </section>
            </main>
        </HelmetProvider>
    );
};

export default About;
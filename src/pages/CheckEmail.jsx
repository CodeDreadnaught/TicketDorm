import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaMailBulk } from "react-icons/fa";

const CheckEmail = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="TicketDorm, reset your password to connect with the best concerts, sports games, theater performances and festivals." />
                <title>Forgot Password | TicketDorm</title>
                </Helmet>
            <main>
                <div className="fixed center w-screen h-screen bg-[#F8F9FA] font-montserrat">
                    <section className="center text-primaryPurple">
                        <FaMailBulk className="size-[8rem] mb-[2rem]" />
                        <h1 className="text-[2rem] font-medium">Check Your Mail</h1>
                    </section>
                </div>
            </main>
        </HelmetProvider>
    );
};

export default CheckEmail;
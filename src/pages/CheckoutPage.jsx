import { useEffect, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AppContext from "../context/AppContext";
import CheckoutCard from "../components/CheckoutCard";
import CheckoutForm from "../components/CheckoutForm";

const CheckoutPage = () => {
    const currentEvent = useLoaderData(),
    { setShowLoadingAnimation } = useContext(AppContext);

    useEffect(() => {
        setShowLoadingAnimation(false);
    }, []);
    
    return (
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="TicketDorm, we connect you with the best concerts, sports games, theater performances and festivals. Our mission is to make discovering, buying, and selling tickets easy and secure." />
                <meta property="og:description" content="TicketDorm, we connect you with the best concerts, sports games, theater performances and festivals. Our mission is to make discovering, buying, and selling tickets easy and secure." />
                <title>{`${currentEvent.eventName} Checkout | TicketDorm`}</title>
                </Helmet>
            <main>
                <div className="pt-[5rem] lg:pt-[8rem] px-[1.6rem] lg:px-[8.8rem] mb-[1.6rem] font-montserrat">
                    <section className="mt-[1.6rem] lg:mt-[3.5rem] mb-[1.6rem] lg:mb-[3.2rem]">
                        <h1 className="text-[2rem] lg:text-[4rem] font-bold mb-[0.5rem]">Let's Make Payment</h1>
                        <p className="text-[1.5rem] lg:text-[2.2rem]">Input your details to purchase a ticket, you will be redirected to a payment gateway once you are all set to pay.</p>
                    </section>
                    <section className="flex flex-col lg:flex-row gap-[2.2rem] lg:justify-between lg:mb-[3.2rem] lg:items-center">
                        <CheckoutCard event={currentEvent} />
                        <CheckoutForm event={currentEvent} />
                    </section>
                </div>
            </main>
        </HelmetProvider>
    );
};

export default CheckoutPage;
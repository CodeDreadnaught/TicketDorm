import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CheckoutCard from "../components/CheckoutCard";

const CheckoutPage = () => {
    const { currentEvent } = useContext(AppContext);
    return (
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="TicketDorm, we connect you with the best concerts, sports games, theater performances and festivals. Our mission is to make discovering, buying, and selling tickets easy and secure." />
                <title>{`${currentEvent.eventName} Checkout | TicketDorm`}</title>
                </Helmet>
            <main>
                <div className="pt-[5rem] lg:pt-[8rem] px-[1.6rem] lg:px-[8.8rem] font-inter">
                    <section className="mt-[1.6rem] lg:mt-[3.5rem] mb-[1.5rem]">
                        <h1 className="text-[2rem] lg:text-[4rem] font-bold mb-[0.5rem]">Let's Make Payment</h1>
                        <p className="text-[1.5rem] lg:text-[2.2rem]">Input your details to purchase a ticket, you will be redirected to a payment gateway once you are all set to pay.</p>
                    </section>
                    <section>
                        <CheckoutCard event={currentEvent} />
                    </section>
                </div>
            </main>
        </HelmetProvider>
    );
};

export default CheckoutPage;
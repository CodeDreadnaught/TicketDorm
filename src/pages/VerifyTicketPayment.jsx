import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaCheck } from "react-icons/fa6";
import { sendTicketEmail } from "../requests/APIRequest";

const VerifyTicketPayment = () => {
    const { eventID, ticketID, setVerifyPayment } = useContext(AppContext);

    useEffect(() => {
        const transactionID = window.location.href.split("/").pop().slice(10);
        sendTicketEmail(eventID, ticketID, transactionID);
    }, []);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Payment Verification | TicketDorm</title>
            </Helmet>
            <main>
                <div className="fixed w-screen bg-white">
                    <section className="h-screen center">
                        <section className="font-montserrat center">
                            <h1 className="font-semibold text-[2.5rem] lg:text-[4.8rem] lg:leading-[5.8rem] mb-[2.8rem]">Ticket Purchased!</h1>
                            <section className="size-[20rem] mb-[2.8rem] center text-center">
                                <section className="p-[2rem] bg-[green] rounded-[50%]">
                                    <FaCheck className="text-white size-[10rem]" />
                                </section>
                                <section className="font-medium mt-[1.5rem]">Your Receipt Has Delivered Via Email.</section>
                            </section>
                            <Link to="/" onClick={() => {
                                setVerifyPayment(null);
                                localStorage.removeItem("verifyPayment");
                            }} className="w-full"><button className="h-[5.7rem] bg-[#C6C7F8] font-medium rounded-[5px] w-full">Back to Home</button></Link>
                        </section>
                    </section>
                </div>
            </main>
        </HelmetProvider>
    );
};

export default VerifyTicketPayment;
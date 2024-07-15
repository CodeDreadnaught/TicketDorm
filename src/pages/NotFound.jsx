import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ErrorIcon from "../assets/icons/not-found-icon.svg";

const NotFound = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Not Found | TicketDorm</title>
            </Helmet>
            <main>
                <div className="pt-[5rem] lg:pt-[8rem]">
                    <section className="h-[calc(100vh-5rem)] lg:h-[calc(100vh-8rem)] center">
                        <section className="font-montserrat center">
                            <h1 className="font-semibold text-[2.5rem] lg:text-[4.8rem] lg:leading-[5.8rem] mb-[2.8rem]">Page Not Found</h1>
                            <section className="size-[20rem] mb-[2.8rem]">
                                <img src={ErrorIcon} alt="Not Found Icon" className="size-full object-cover" />
                            </section>
                            <Link to="/" className="w-full"><button className="h-[5.7rem] bg-[#C6C7F8] font-medium rounded-[5px] w-full">Back to Home</button></Link>
                        </section>
                    </section>
                </div>
            </main>
        </HelmetProvider>
    );
};

export default NotFound;
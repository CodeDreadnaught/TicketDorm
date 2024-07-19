import { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import MoreEvents from "../components/MoreEvents";

const Event = props => {
    const { setShowLoadingAnimation } = useContext(AppContext);

    const event = useLoaderData(),
    { id } = useParams();

    useEffect(() => {
        setShowLoadingAnimation(false);
    }, []);

    const clickHandler = () => {
        console.log("Clicked!");
    }

    // const eventDate = new Date(props.eventDate); 
    const eventDate = new Date("08-30-2024"); 

    const day = eventDate.getDay(),
    date = eventDate.getDate(),
    month = eventDate.getMonth(),
    year = eventDate.getFullYear();

    let eventDay, eventMonth;

    switch(day) {
        case 0 : 
        eventDay = "Sunday";
        break;
        case 1 : 
        eventDay = "Monday";
        break;
        case 2 : 
        eventDay = "Tuesday";
        break;
        case 3 : 
        eventDay = "Wednesday";
        break;
        case 4 : 
        eventDay = "Thursday";
        break;
        case 5 : 
        eventDay = "Friday";
        break;
        case 6 : 
        eventDay = "Saturday";
        break;
    }

    switch(month) {
        case 0 : 
        eventMonth = "January";
        break;
        case 1 : 
        eventMonth = "February";
        break;
        case 2 : 
        eventMonth = "March";
        break;
        case 3 : 
        eventMonth = "April";
        break;
        case 4 : 
        eventMonth = "May";
        break;
        case 5 : 
        eventMonth = "June";
        break;
        case 6 : 
        eventMonth = "July";
        break;
        case 7 : 
        eventMonth = "August";
        break;
        case 8 : 
        eventMonth = "September";
        break;
        case 9 : 
        eventMonth = "October";
        break;
        case 10 : 
        eventMonth = "November";
        break;
        case 11 : 
        eventMonth = "December";
        break;
    }

    return (
        <HelmetProvider>
            <Helmet>
            <meta name="description" content={`${(event.eventDescription).slice(0, 160)}`} />
            <title>{`${event.eventName} | TicketDorm`}</title>
            </Helmet>
            <main>
                <div className="pt-[5rem] lg:pt-[8rem] px-[1.6rem] lg:px-[8.8rem]">
                    <section className="h-[18rem] lg:h-[30.2rem] rounded-[20px] mt-[1.6rem] lg:mt-[2.5rem] mb-[3.2rem] lg:mb-[6.4rem]">
                        <img src={event.eventCoverPhotos[0]} alt="Event Image" className="size-full object-cover rounded-[20px]" />
                    </section>
                    <section className="font-inter">
                        <section className="flex flex-col lg:flex-row gap-[2rem] lg:gap-[6.8rem]">
                            <section className="lg:w-[calc(100%-36.6rem-3.4rem)]">
                            <p className="leading-[1.936rem] lg:leading-[2.905rem] lg:text-[2.4rem] mb-[1.2rem]">{`${eventDay} ${eventMonth} ${date}, ${year}`}</p>
                                <h1 className="font-semibold text-[2rem] leading-[2.42rem] lg:text-[4rem] lg:leading-[4.841rem] mb-[1.2rem] lg:mb-[3.2rem]">{event.eventName}</h1>
                                <p className="lg:text-justify leading-[1.936rem] lg:leading-[2.905rem] lg:text-[2.4rem]">{event.eventDescription}</p>
                            </section>
                            <section className="lg:w-[calc(36.6rem-3.4rem)] center">
                                <section className="w-full lg:h-[15rem] center lg:rounded-[12px] lg:border border-gray-600 lg:px-[2.4rem]">
                                    <section className="w-full text-center">
                                        <p className="leading-[2.42rem] lg:text-[2.4rem] lg:leading-[2.905rem] mb-[1.2rem] lg:mb-[2rem]">Attend Event</p>
                                        <Link onClick={clickHandler}><button className="w-full rounded-[10px] p-[1.2rem] lg:p-[1rem] text-white leading-[1.874rem] lg:leading-[2.905rem] bg-primaryPurple lg:text-[2.4rem]">Get Ticket</button></Link>
                                    </section>
                                </section>
                            </section>
                        </section>
                        <section className="mt-[2.5rem] lg:mt-[5.5rem]">
                            <h2 className="font-semibold text-[1.8rem] leading-[2.42rem] lg:text-[3.2rem] lg:leading-[3.873rem] mb-[0.6rem] lg:mb-[2.4rem]">Event Time and Duration</h2>
                            <p className="leading-[1.936rem] lg:leading-[2.905rem] lg:text-[2.4rem]">{`Event starts by ${event.eventTime} prompt and will last for ${event.duration}.`}</p>
                        </section>
                        <section className="mt-[2.5rem] lg:mt-[5.5rem]">
                            <h2 className="font-semibold text-[1.8rem] leading-[2.42rem] lg:text-[3.2rem] lg:leading-[3.873rem] mb-[0.6rem] lg:mb-[2.4rem]">Location</h2>
                            <p className="leading-[1.936rem] lg:leading-[2.905rem] lg:text-[2.4rem]">{event.eventLocation}.</p>
                        </section>
                        <section className="mt-[2.5rem] lg:mt-[5.5rem]">
                            <h2 className="font-semibold text-[1.8rem] leading-[2.42rem] lg:text-[3.2rem] lg:leading-[3.873rem] mb-[0.6rem] lg:mb-[2.4rem]">Refund Policy</h2>
                            <p className="leading-[1.936rem] lg:leading-[2.905rem] lg:text-[2.4rem]">{event.refundPolicy}.</p>
                        </section>
                        <section className="mt-[2.5rem] lg:mt-[5.5rem]">
                            <h2 className="font-semibold text-[1.8rem] leading-[2.42rem] lg:text-[3.2rem] lg:leading-[3.873rem] mb-[0.6rem] lg:mb-[2.4rem]">About this Event</h2>
                            <p className="leading-[1.936rem] lg:leading-[2.905rem] lg:text-[2.4rem]">{event.eventDescription}.</p>
                        </section>
                    </section>
                </div>
                <section className="mt-[2.5rem] lg:mt-[5.5rem] font-inter">
                    <section className="px-[1.6rem] lg:px-[8.8rem]">
                        <h2 className="font-semibold text-[1.8rem] leading-[2.42rem] lg:text-[3.2rem] lg:leading-[3.873rem] mb-[0.6rem] lg:mb-[2.4rem]">Organizer</h2>
                    </section>
                    <section className="bg-[#F8F9FA] h-[10.9rem] lg:h-[18.9rem] center px-[1.6rem] lg:px-[8.8rem]">
                        <section className="flex items-center w-full justify-between gap-[1.5rem] lg:gap-[3rem]">                                        
                                <section className="flex items-center w-[75%]">
                                    <section className="size-[5rem] lg:size-[8rem] rounded-[12px] mr-[1rem] lg:mr-[2rem]">
                                        <img src={event.eventCoverPhotos} alt="Organizer's Photo" className="size-full object-cover rounded-[12px]" />
                                    </section>
                                    <section className="leading-[1.936rem] lg:leading-[2.905rem] lg:text-[2rem] font-medium">TicketDorm</section>
                                </section>
                                <section className="w-[25%] lg:flex justify-end">
                                    <Link><button className="bg-[#2777CD] text-white center w-full lg:w-[13rem] leading-[1.694rem] lg:leading-[2.905rem] rounded-[10px] p-[1rem] text-[1.4rem] lg:text-[1.9rem]">Contact</button></Link>
                                </section>
                        </section>
                    </section>
                </section>
                <MoreEvents eventId={event._id} eventType={event.eventCategory} />
            </main>
        </HelmetProvider>
    );
};

export default Event;
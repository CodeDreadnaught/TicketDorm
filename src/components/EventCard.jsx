import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const EventCard = props => {
    const { setShowLoadingAnimation } = useContext(AppContext);
    
    const [ chosenDate, chosenMonth, chosenYear] = props.eventDate.split("-").reverse(),
    chosenEventDate = `${chosenMonth}/${chosenDate}/${chosenYear}`,
    eventDate = new Date(chosenEventDate);

    const day = eventDate.getDay(),
    date = eventDate.getDate(),
    month = eventDate.getMonth(),
    year = eventDate.getFullYear();

    let eventDay, eventMonth;

    switch(day) {
        case 0 : 
        eventDay = "Sun";
        break;
        case 1 : 
        eventDay = "Mon";
        break;
        case 2 : 
        eventDay = "Tue";
        break;
        case 3 : 
        eventDay = "Wed";
        break;
        case 4 : 
        eventDay = "Thu";
        break;
        case 5 : 
        eventDay = "Fri";
        break;
        case 6 : 
        eventDay = "Sat";
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
        <Link to={`/view-event/${props._id}`} onClick={() => setShowLoadingAnimation(true)}>
            <section className={`rounded-t-[20px] rounded-b-[5px] bg-[#F8F9FA] flex-[0_0_13.5rem] lg:flex-[0_0_25rem] ${props.width}`}>
                <section className="rounded-t-[20px] h-[10rem] lg:h-[17rem]">
                    <img src={props.eventCoverPhotos[0]} alt="Event Poster" className="rounded-t-[20px] rounded-b-[5px] size-full object-cover" />
                </section>
                <section className="px-[0.5rem] font-inter pt-[0.6rem] lg:pt-[2rem] pb-[0.5rem] lg:pb-[1rem] rounded-b-[5px]">
                    <h1 className="font-semibold text-[1.3rem] leading-[1.573rem] h-[1.6rem] lg:h-[2.4rem] max-w-full lg:text-[1.8rem] lg:leading-[2.42rem] overflow-hidden whitespace-nowrap text-ellipsis">{props.eventName}</h1>
                    <p className="text-[#1B67BB] text-[1.2rem] leading-[1.452rem] lg:text-[1.6rem] lg:leading-[1.936rem] mt-[0.4rem] lg:mt-[1.2rem]">
                        {`${eventDay} ${eventMonth} ${date}, ${year}`}
                        <span className="hidden lg:inline"> ●</span> {props.eventTime} GMT +1</p>
                    <p className="my-[0.4rem] lg:my-[0.8rem] text-[1.3rem] leading-[1.573rem] lg:text-[1.6rem] lg:leading-[1.936rem] max-w-full overflow-hidden whitespace-nowrap text-ellipsis">{props.ticketPrice === 0 ? "Free" : <span>Price ● ₦{props.ticketPrice}</span>}</p>
                    <p className="text-[1.3rem] leading-[1.573rem] lg:text-[1.6rem] lg:leading-[1.936rem] max-w-full overflow-hidden whitespace-nowrap text-ellipsis">{props.eventLocation}</p>
                </section>
            </section>
        </Link>
    );
};

export default EventCard;
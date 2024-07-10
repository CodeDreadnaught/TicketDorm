import { Link } from "react-router-dom";

const EventCard = props => {
    return (
        <Link>
            <section className="rounded-t-[20px] rounded-b-[5px] bg-[#F8F9FA] flex-[0_0_13.5rem] lg:flex-[0_0_25rem]">
                <section className="rounded-t-[20px] h-[10rem] lg:h-[17rem]">
                    <img src={props.eventCoverPhotos[0]} alt="Event Poster" className="rounded-t-[20px] rounded-b-[5px] size-full object-cover" />
                </section>
                <section className="px-[0.5rem] font-inter pt-[0.6rem] lg:pt-[2rem] pb-[0.5rem] lg:pb-[1rem] rounded-b-[5px]">
                    <h1 className="font-semibold text-[1.3rem] leading-[1.573rem] h-[1.6rem] lg:h-[2.4rem] w-[13.5rem] lg:w-[25rem] lg:text-[1.8rem] lg:leading-[2.42rem] overflow-hidden whitespace-nowrap text-ellipsis">{props.eventName}</h1>
                    <p className="text-[#1B67B8] text-[1.2rem] leading-[1.452rem] lg:text-[1.6rem] lg:leading-[1.936rem] mt-[0.4rem] lg:mt-[1.2rem] w-[70%] lg:w-full">{props.eventDate} <span className="hidden lg:inline">●</span> {props.eventTime} GMT +1</p>
                    <p className="my-[0.4rem] lg:my-[0.8rem] text-[1.3rem] leading-[1.573rem] lg:text-[1.6rem] lg:leading-[1.936rem]">{(typeof props.ticketPrice) === "number" ? "Price ●" : ""} {(typeof props.ticketPrice) === "number" ? "₦" : ""}{props.ticketPrice}</p>
                    <p className="text-[1.3rem] leading-[1.573rem] lg:text-[1.6rem] lg:leading-[1.936rem] w-[13.5rem] lg:w-[25rem] overflow-hidden whitespace-nowrap text-ellipsis">{props.eventLocation}</p>
                </section>
            </section>
        </Link>
    );
};

export default EventCard;
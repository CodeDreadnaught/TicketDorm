import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const DashboardEvents = () => {
    const { user, eventsInformation } = useContext(AppContext),
    allEvents = [...eventsInformation.events].reverse().map(event => <section key={event._id}
    className="min-h-[4rem] flex items-center p-[0.5rem] font-medium rounded-[5px] border border-gray-400">
        <section className="h-[4rem] w-[5rem] mr-[1rem] rounded-[5px]"><img src={event.eventCoverPhotos[0]} alt="Event Cover Photo" className="size-full rounded-[5px] object-cover" /></section>
        <section>{event.eventName}</section> 
    </section>);

    return (
        <section>
            <h1 className="font-semibold text-[1.8rem] lg:text-[2rem]">Events</h1>
            {eventsInformation.eventsMade < 1 && <p className="mt-[0.5rem]">{`${user.firstname}, you are yet to create an event.`}</p>}
            {eventsInformation.eventsMade < 1 && <p className="my-[1.5rem]"><Link to="/sell-tickets" className="font-medium h-[3.5rem] text-white center p-[0.5rem] bg-primaryPurple rounded-[5px]">Create Event</Link></p>}
            {eventsInformation.eventsMade > 0 && <p className="my-[1.5rem]">{`${user.firstname}, here is a list of all the events you have created;`}</p>}
            {eventsInformation.eventsMade > 0 && <section className="dashboard-event-list flex flex-col gap-[1rem] h-[calc(100vh-19rem)] lg:h-[calc(100vh-24rem)] overflow-y-auto">{allEvents}</section>}
        </section>
    );
};

export default DashboardEvents;
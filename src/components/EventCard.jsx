const EventCard = props => {
    return (
        <section className="rounded-t-[20px] rounded-b-[5px] flex-[0_0_14rem] lg:flex-[0_0_27rem]">
            <section className="rounded-t-[20px] h-[9.1rem] lg:h-[17rem] mb-[1.2rem] lg:mb-[2rem]">
                <img src={props.img} alt="Event Poster" className="rounded-t-[20px] rounded-b-[5px] size-full object-cover" />
                </section>
                <section className="px-[0.5rem] font-inter">
                    <h1>RRB is Still in Works</h1>
                </section>
        </section>
    );
};

export default EventCard;
const CheckoutCard = props => {
    return (
        <section className="p-[1.5rem] lg:p-[2rem] rounded-[10px] bg-[#F0F0F0] lg:order-2 lg:w-[45.6rem]">
            <p className="text-[rgba(87,87,87,1)] font-medium text-[1.65rem] lg:text-[1.8rem]">You're paying,</p>
            <h1 className="pt-[0.5rem] lg:pt-[1.5rem] font-bold text-[3.5rem] lg:text-[6.5rem] flex justify-end mb-[3rem] lg:mb-[6.4rem]">₦{props.event.ticketPrice}.00</h1>
            <section className="pb-[2rem] lg:pb-[3rem] border-b border-[rgba(116,116,116)]">
                <p className="flex justify-between mb-[2rem] lg:mb-[3rem]"><span className="text-[1.65rem] lg:text-[1.8rem] inline-block font-bold">General Admission</span> <span className="inline-block font-medium">₦{props.event.ticketPrice}.00</span></p>
                <p className="flex justify-between"><span className="text-[1.65rem] lg:text-[1.8rem] inline-block font-bold">Discounts & Offers</span> <span className="inline-block font-medium">₦0.00</span></p>
            </section>
            <section className="pt-[2rem] lg:pt-[3rem]">
                <p className="flex justify-between"><span className="text-[1.65rem] lg:text-[1.8rem] inline-block font-bold">Total</span> <span className="inline-block font-medium">₦{props.event.ticketPrice}.00</span></p>
            </section>
        </section>
    );
};

export default CheckoutCard;
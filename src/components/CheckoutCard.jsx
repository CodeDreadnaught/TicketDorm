const CheckoutCard = props => {
    return (
        <section className="p-[2rem] rounded-[10px] bg-[#F0F0F0]">
            <p className="text-[rgba(87,87,87,1)] font-medium text-[1.7rem]">You're paying,</p>
            <h1 className="pt-[1rem] font-bold text-[5rem] lg:text-[6.4rem] flex justify-end mb-[3.2rem] lg:mb-[6.4rem]">₦4,000.00</h1>
            <section className="pb-[2.5rem] border-b border-[rgba(116,116,116)]">
                <p className="flex justify-between mb-[2.5rem]"><span className="text-[1.7rem] inline-block font-bold">General Admission</span> <span className="inline-block font-medium">₦.00</span></p>
                <p className="flex justify-between"><span className="text-[1.7rem] inline-block font-bold">Discounts & Offers</span> <span className="inline-block font-medium">₦0.00</span></p>
            </section>
            <section className="pt-[2.5rem]">
                <p className="flex justify-between"><span className="text-[1.7rem] inline-block font-bold">Total</span> <span className="inline-block font-medium">₦.00</span></p>
            </section>
        </section>
    );
};

export default CheckoutCard;
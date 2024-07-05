import EasyTicketImage from "../assets/landing-page-images/easy-ticketing-image.webp";
import EventRangeImage from "../assets/landing-page-images/wide-range-image.webp";

const HomeFirstInfo = () => {
    return (
        <div className="font-robotoSerif bg-[linear-gradient(180deg,#030A55_0%,#020B6D_100%),linear-gradient(297.05deg,rgba(203,0,227,0.4)_0%,rgba(61,0,68,0.4)_100%)] text-white px-[1.6rem] py-[2.4rem] lg:px-[8.8rem] lg:py-[11.2rem]">
            <section className="mb-[2.4rem] lg:items-center lg:mb-[11.2rem] flex flex-col lg:flex-row gap-[1.6rem] lg:gap-[6.4rem] lg:justify-between">
                <section className="lg:w-[60rem]">
                    <h1 className="font-medium text-[2rem] leading-[2.342rem] lg:text-[3.2rem] lg:leading-[3.747rem] mb-[1.6rem] lg:mb-[2.4rem]">Secure & Easy Ticketing</h1>
                    <p className="leading-[2.5rem] lg:leading-[4rem] lg:text-[2.4rem] lg:text-justify">At TicketDorm, we prioritize your security and convenience. Our streamlined checkout process and encrypted payment gateways ensure that your transactions are safe and your personal information is protected. Buying tickets has never been easier – with just a few clicks, you can secure your spot at the hottest events in town.</p>
                </section>
                <section className="lg:w-[60rem]  w-full center h-[15rem] lg:h-full">
                    <img src={EasyTicketImage} alt="Info Image" className="size-full object-cover w-[28rem] lg:w-full rounded-[5px]" />
                </section>
            </section>
            <section className="flex flex-col lg:items-center lg:flex-row gap-[1.6rem] lg:gap-[6.4rem] lg:justify-between">
                <section className="lg:w-[60rem] lg:order-2">
                    <h1 className="font-medium text-[2rem] leading-[2.342rem] lg:text-[3.2rem] lg:leading-[3.747rem] mb-[1.6rem] lg:mb-[2.4rem]">Wide Range of Events</h1>
                    <p className="leading-[2.5rem] lg:leading-[4rem] lg:text-[2.4rem] lg:text-justify">Discover a diverse selection of events catering to every taste and interest. Whether you're into electrifying concerts, thrilling sports matches, captivating theater performances, or vibrant festivals, TicketDorm offers something for everyone. Our extensive listings ensure that you can find and attend the events that matter most to you.</p>
                </section>
                <section className="lg:w-[60rem] w-full lg:order-1 h-[15rem] lg:h-full">
                    <img src={EventRangeImage} alt="Info Image" className="size-full object-cover" />
                </section>
            </section>
        </div>
    );
};

export default HomeFirstInfo;
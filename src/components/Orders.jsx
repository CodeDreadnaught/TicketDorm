import { useContext } from "react";
import AppContext from "../context/AppContext";

const Orders = () => {
    const { orderInformation } = useContext(AppContext),
    orderID = orderInformation.tickets.map(order => <section className="min-h-[4rem] flex items-center max-w-[30rem] overflow-hidden whitespace-nowrap" key={Math.floor(Math.random() * 999999987)}>{order.orderNumber}</section>),
    eventName = orderInformation.tickets.map(order => <section className="min-h-[4rem] flex items-center max-w-[30rem] overflow-hidden whitespace-nowrap" key={Math.floor(Math.random() * 999999987)}>{order.event}</section>),
    buyer = orderInformation.tickets.map(order => <section className="min-h-[4rem] flex items-center max-w-[30rem] overflow-hidden whitespace-nowrap" key={Math.floor(Math.random() * 999999987)}>{order.buyer}</section>),
    amount = orderInformation.tickets.map(order => <section className="min-h-[4rem] flex items-center max-w-[30rem] overflow-hidden whitespace-nowrap" key={Math.floor(Math.random() * 999999987)}>{order.ticketType}</section>),
    orderDate = orderInformation.tickets.map(order => <section className="min-h-[4rem] flex items-center max-w-[30rem] overflow-hidden whitespace-nowrap" key={Math.floor(Math.random() * 999999987)}>{order.date}</section>);

    console.log(orderInformation);

    return (
        <section>
            <h1 className="font-semibold text-[1.8rem] lg:text-[2rem]">Orders</h1>
            <p className="my-[1.5rem]">Total number of tickets sold : <span className="font-medium">{orderInformation.ticketsSold}</span> </p>
                <section className="dashboard-scroll flex justify-between overflow-auto gap-[1.2rem]">
                    <section className="flex-[0_0_7rem]">
                        <h2 className="text-[1.65] font-medium h-[3rem]">Order ID</h2>
                        {orderID}
                    </section>
                    <section className="flex-[0_0_13rem]">
                        <h2 className="text-[1.65] font-medium h-[3rem]">Event Name</h2>
                        {eventName}
                    </section>
                    <section className="flex-[0_0_13rem]">
                        <h2 className="text-[1.65] font-medium h-[3rem]">Buyer</h2>
                        {buyer}
                    </section>
                    <section className="flex-[0_0_13rem]">
                        <h2 className="text-[1.65] font-medium h-[3rem]">Amount</h2>
                        {amount}
                    </section>
                    <section className="flex-[0_0_10rem]">
                        <h2 className="text-[1.65] font-medium h-[3rem]">Order Date</h2>
                        {orderDate}
                    </section>
                </section>
        </section>
    );
};

export default Orders;
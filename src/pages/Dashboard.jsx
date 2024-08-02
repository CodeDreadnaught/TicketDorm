import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Orders from "../components/Orders";

const Dashboard = () => {
    const [ activeComponent, setActiveComponent] = useState("orders"),
    [dashboardElement, setDashboardElement] = useState(<Orders />);

    const activeComponentHandler = component => {
        setActiveComponent(component);
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>Dashboard | TicketDorm</title>
            </Helmet>
            <main>
                <div className="pt-[5rem] lg:pt-[8rem] px-[1.6rem] lg:pl-0 lg:pr-[8.8rem] font-montserrat">
                    <div className="lg:h-[calc(100vh-8rem)] lg:flex lg:gap-[8.8rem]">
                        <section className="w-[25.6rem] hidden lg:block bg-[#F8F9FA] pt-[4rem]">
                            <section>
                                <ul>
                                    <li className={`h-[5rem] font-medium center ${activeComponent === "home" ? "bg-[#007BFF] text-white font-semibold" : null}`} onClick={() => activeComponentHandler("home")}><NavLink>Home</NavLink></li>
                                    <li className={`h-[5rem] font-medium center ${activeComponent === "orders" ? "bg-[#007BFF] text-white font-semibold" : null}`} onClick={() => activeComponentHandler("orders")}><NavLink>Orders</NavLink></li>
                                    <li className={`h-[5rem] font-medium center ${activeComponent === "events" ? "bg-[#007BFF] text-white font-semibold" : null}`} onClick={() => activeComponentHandler("events")}><NavLink>Events</NavLink></li>
                                    <li className={`h-[5rem] font-medium center ${activeComponent === "finance" ? "bg-[#007BFF] text-white font-semibold" : null}`} onClick={() => activeComponentHandler("finance")}><NavLink>Finance</NavLink></li>
                                </ul>
                            </section>
                        </section>
                        <section className="py-[1.6rem] lg:py-[4rem] w-full min-h-[calc(100vh-5rem)]">
                            {dashboardElement}
                        </section>
                    </div>
                </div>
            </main>
        </HelmetProvider>
    );
};

export default Dashboard;
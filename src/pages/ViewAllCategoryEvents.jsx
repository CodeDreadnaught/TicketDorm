import { Helmet, HelmetProvider } from "react-helmet-async";
import AllCategoryEvents from "../components/AllCategoryEvents";

const ViewAllCategoryEvents = props => {
    return (
        <HelmetProvider>
            <Helmet>
            <meta name="description" content="TicketDorm, find tickets to your favorite concerts, sports games and theater shows with ease and confidence." />
            <meta property="og:description" content="TicketDorm, find tickets to your favorite concerts, sports games and theater shows with ease and confidence." />
            <title>View Events | TicketDorm</title>
            </Helmet>
            <main>
                <AllCategoryEvents />
            </main>
        </HelmetProvider>
    );
};

export default ViewAllCategoryEvents;
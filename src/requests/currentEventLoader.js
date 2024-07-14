const apiUrl = "https://ticketdorm-server.onrender.com/ticketdorm";

const currentEventLoader = async ({ params }) => {
    try {
        const response = await fetch(`${apiUrl}/event/${params.id}`),
        data = await response.json();

        return data.data.event;
    } catch(error) {
        throw Error("CodeDreadnaught, TicketDorm is unable to fetch this event due to network issues.");
    }
};

export { currentEventLoader };
const apiUrl = "https://ticketdorm-server.onrender.com/ticketdorm";

const createAccount = async userInfo => {
    try {
        const response = await fetch(`${apiUrl}/auth/register/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
            }),
            data = await response.json();

            return data;
    } catch(error) {
        throw Error("CodeDreadnaught, TicketDorm is unable to register this account.");
    }
};

const signIn = async userInfo => {
    try {
        const response = await fetch(`${apiUrl}/auth/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
            }),
            data = await response.json();

            return data;
    } catch(error) {
        throw Error("CodeDreadnaught, TicketDorm is unable to log this user in.");
    }
};

const fetchAllEvents = async () => {
    try {
        const response = await fetch(`${apiUrl}/event/all`),
        data = await response.json();

         return data.data.events;
    } catch(error) {
        throw Error("CodeDreadnaught, TicketDorm is unable to connect to the server.");
    }
};

const verifyOTPRequest = async userInfo => {
    try {
        const response = await fetch(`${apiUrl}/auth/verifyOtp/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
            }),
            data = await response.json();
            
            return data;
    } catch(error) {
        throw Error("CodeDreadnaught, TicketDorm is unable to verify this OTP.");
    }
};

const forgetPasswordRequest = async userInfo => {
    try {
        const response = await fetch(`${apiUrl}/auth/reset/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
            }),
            data = await response.json();

            return data;
    } catch(error) {
        throw Error("CodeDreadnaught, TicketDorm is unable to initiate a reset password request.");
    }
};

const resetPasswordRequest = async (userInfo, userID) => {
    try {
        const response = await fetch(`${apiUrl}/auth/resetPassword/${userID}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
            }),
            data = await response.json();

            return data;
    } catch(error) {
        throw Error("CodeDreadnaught, TicketDorm is unable to complete a reset password request.");
    }
};

const buyTicket = async (userInfo, eventID) => {
    try {
        const response = await fetch(`${apiUrl}/ticket\/buyticket/${eventID}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
            }),
            data = await response.json();
             
            return data;
    } catch(error) {
        throw Error("CodeDreadnaught, TicketDorm is unable to initiate ticket purchase.");
    }
};

const buyFreeTicket = async (userInfo, eventID) => {
    try {
        const response = await fetch(`${apiUrl}/ticket/freeticket/${eventID}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
            }),
            data = await response.json();
            
            return data;
    } catch(error) {
        throw Error("CodeDreadnaught, TicketDorm is unable to initiate free ticket purchase.");
    }
};

const createEventRequest = async (userInfo, token) => {
    try {
        const response = await fetch(`${apiUrl}/event/create/`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: userInfo
            }),
            data = await response.json();

            return data;
    } catch(error) {
        throw Error("CodeDreadnaught, TicketDorm is unable to initiate an event creation.");
    }
};

const sendTicketEmail = async (eventID, ticketID, transactionID) => {
    try {
        const response = await fetch(`${apiUrl}/ticket/verify-payment/event/${eventID}/ticket/${ticketID}/callback?${transactionID}/`),
        data = await response.json();
            
         return data;
    } catch(error) {
        throw Error("CodeDreadnaught, TicketDorm is unable to send ticket email from the server.");
    }
};

const fetchUserOrder = async (userID, token) => {
    try {
        const response = await fetch(`${apiUrl}/user/ticketsold/${userID}/`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
        data = await response.json();

         return data;
    } catch(error) {
        throw Error("CodeDreadnaught, TicketDorm is unable to load this order from the server.");
    }
};

const fetchUserEvents = async (userID, token) => {
    try {
        const response = await fetch(`${apiUrl}/user/eventscreated/${userID}/`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
        data = await response.json();

         return data;
    } catch(error) {
        throw Error("CodeDreadnaught, TicketDorm is unable to load events created from the server.");
    }
};

export { createAccount, signIn, fetchAllEvents, verifyOTPRequest, forgetPasswordRequest, 
resetPasswordRequest, buyTicket, buyFreeTicket, createEventRequest, sendTicketEmail,
fetchUserOrder, fetchUserEvents 
};
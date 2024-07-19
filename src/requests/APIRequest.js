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

export { createAccount, signIn, fetchAllEvents, verifyOTPRequest, forgetPasswordRequest, resetPasswordRequest };
import { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { buyTicket, buyFreeTicket } from "../requests/APIRequest";

const CheckoutForm = props => {
    const { setShowModal, setShowLoadingAnimation, setVerifyPayment, setEventID, setTicketID } = useContext(AppContext),
    navigate = useNavigate(),
    [ formData, setFormData ] = useState({
        buyer: "",
        email: "",
        phoneNumber: ""
    });
    
    const changeHandler = event => {
        const { name, value } = event.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const submitHandler = event => {
        event.preventDefault();
        setShowLoadingAnimation(true);
        
        if (props.event.ticketPrice === 0) {
            buyFreeTicket(formData, props.event._id)
            .then(data => {
                setShowLoadingAnimation(false);
                if (data.success) {
                    setVerifyPayment(true);
                    localStorage.setItem("eventID", data.success.eventId);
                    setEventID(data.success.eventId);
                    localStorage.setItem("ticketID", data.success._id);
                    setTicketID(data.success._id);
                    localStorage.setItem("verifyPayment", JSON.stringify(true));
                    navigate("/verify-payment/CDNLKM");

                 setFormData({
                    buyer: "",
                    email: "",
                    phoneNumber: ""
                });
                } else {
                    setShowModal({
                        heading: "Initialization Failed",
                        message: "There was an error with initializing your ticket purchase, please try again.",
                        on: true,
                        success: false
                    });
                }
            })
            .catch(error => {
                setShowLoadingAnimation(false);
                setShowModal({
                    heading: "Initialization Failed",
                    message: "There was an error with initializing your ticket purchase, please try again.",
                    on: true,
                    success: false
                });
            });
        } else {
            buyTicket(formData, props.event._id)
            .then(data => {
                setShowLoadingAnimation(false);
                if (data.success) {
                    setVerifyPayment(true);
                    localStorage.setItem("eventID", data.success.eventId);
                    setEventID(data.success.eventId);
                    localStorage.setItem("ticketID", data.success._id);
                    setTicketID(data.success._id);
                    localStorage.setItem("verifyPayment", JSON.stringify(true));
                    window.location.href = data.authorization_url;

                 setFormData({
                    buyer: "",
                    email: "",
                    phoneNumber: ""
                });
                } else {
                    setShowModal({
                        heading: "Initialization Failed",
                        message: "There was an error with initializing your ticket purchase, please try again.",
                        on: true,
                        success: false
                    });
                }
            })
            .catch(error => {
                setShowLoadingAnimation(false);
                setShowModal({
                    heading: "Initialization Failed",
                    message: "There was an error with initializing your ticket purchase, please try again.",
                    on: true,
                    success: false
                });
            });
        }
    };

    return (
        <form className="*:block lg:order-1 lg:w-[55rem]" onSubmit={submitHandler}>
            <label htmlFor="buyer">Full Name</label>
            <input className="w-full h-[4rem] mt-[0.3rem] mb-[0.8rem] gen-transistion border-b-2 border-[rgba(149,99,255,0.4)] focus:border-[rgba(149,99,255,1)]" type="text" name="buyer" value={formData.buyer} onChange={changeHandler} required />
            <label htmlFor="email">Email Address</label>
            <input className="w-full h-[4rem] mt-[0.3rem] mb-[0.8rem] gen-transistion border-b-2 border-[rgba(149,99,255,0.4)] focus:border-[rgba(149,99,255,1)]" type="email" name="email" value={formData.email} onChange={changeHandler} required />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input className="w-full h-[4rem] mt-[0.3rem] mb-[0.8rem] gen-transistion border-b-2 border-[rgba(149,99,255,0.4)] focus:border-[rgba(149,99,255,1)]" type="number" name="phoneNumber" value={formData.phoneNumber} onChange={changeHandler} required />
            <label htmlFor="eventName">Event Name</label>
            <input className="w-full h-[4rem] mt-[0.3rem] mb-[0.8rem] gen-transistion border-b-2 border-[rgba(149,99,255,0.4)] focus:border-[rgba(149,99,255,1)]" type="text" value={props.event.eventName} readOnly />
            <label htmlFor="eventDate">Event Date</label>
            <input className="w-full h-[4rem] mt-[0.3rem] mb-[0.8rem] gen-transistion border-b-2 border-[rgba(149,99,255,0.4)] focus:border-[rgba(149,99,255,1)]" type="text" value={props.event.eventDate} readOnly />
            <label htmlFor="time">Time</label>
            <input className="w-full h-[4rem] mt-[0.3rem] gen-transistion border-b-2 border-[rgba(149,99,255,0.4)] focus:border-[rgba(149,99,255,1)]" type="text" value={props.event.eventTime} readOnly />
            <button className="font-semibold h-[4rem] rounded-[10px] w-full mt-[1.5rem] lg:mt-[2rem] lg:w-[25%] text-white bg-[#9563FF]">Pay</button>
        </form>
    );
};

export default CheckoutForm;
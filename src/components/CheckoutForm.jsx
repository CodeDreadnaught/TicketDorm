import { useState } from "react";

const CheckoutForm = props => {
    const [ formData, setFormData ] = useState({
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

        console.log(formData);
    };

    return (
        <form className="*:block lg:order-1 lg:w-[55rem]" onSubmit={submitHandler}>
            <label htmlFor="buyer">Full Name</label>
            <input className="w-full h-[4rem] mt-[0.3rem] mb-[0.8rem] bg-[rgba(149,99,255,0.2)] border-b border-[rgba(149,99,255,1)] indent-[0.7rem] rounded-[5px]" type="text" name="buyer" value={formData.buyer} onChange={changeHandler} required />
            <label htmlFor="email">Email Address</label>
            <input className="w-full h-[4rem] mt-[0.3rem] mb-[0.8rem] bg-[rgba(149,99,255,0.2)] border-b border-[rgba(149,99,255,1)] indent-[0.7rem] rounded-[5px]" type="email" name="email" value={formData.email} onChange={changeHandler} required />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input className="w-full h-[4rem] mt-[0.3rem] mb-[0.8rem] bg-[rgba(149,99,255,0.2)] border-b border-[rgba(149,99,255,1)] indent-[0.7rem] rounded-[5px]" type="number" name="phoneNumber" value={formData.phoneNumber} onChange={changeHandler} required />
            <label htmlFor="eventName">Event Name</label>
            <input className="w-full h-[4rem] mt-[0.3rem] mb-[0.8rem] bg-[rgba(149,99,255,0.2)] border-b border-[rgba(149,99,255,1)] indent-[0.7rem] rounded-[5px]" type="text" value={props.event.eventName} readOnly />
            <label htmlFor="eventDate">Event Date</label>
            <input className="w-full h-[4rem] mt-[0.3rem] mb-[0.8rem] bg-[rgba(149,99,255,0.2)] border-b border-[rgba(149,99,255,1)] indent-[0.7rem] rounded-[5px]" type="text" value={props.event.eventName} readOnly />
            <label htmlFor="time">Time</label>
            <input className="w-full h-[4rem] mt-[0.3rem] bg-[rgba(149,99,255,0.2)] border-b border-[rgba(149,99,255,1)] indent-[0.7rem] rounded-[5px]" type="text" value={props.event.eventTime} readOnly />
            <button className="font-semibold h-[4rem] rounded-[10px] w-full mt-[1.5rem] lg:mt-[2rem] lg:w-[25%] text-white bg-[#9563FF]">Pay</button>
        </form>
    );
};

export default CheckoutForm;
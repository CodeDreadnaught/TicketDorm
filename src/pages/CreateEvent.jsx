import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AppContext from "../context/AppContext";
import ArrowLeft from "../assets/icons/caret-left-arrow.svg";
import { createEventRequest } from "../requests/APIRequest";

const CreateEvent = () => {
    const { token, setShowModal, setShowLoadingAnimation } = useContext(AppContext),
    navigate = useNavigate();

    let formTitle, formProgress, pageOneDisplayState, pageTwoDisplayState, pageThreeDisplayState, continueButtonDisplayState, submitButtonDisplayState;
    const [ currentFormPage, setCurrentFormPage ] = useState(1),
    [ formData, setFormData ] = useState({
        eventCategory: "Concert",
        eventName: "",
        eventDescription: "",
        eventDate: "",
        eventTime: "",
        duration: "",
        eventCoverPhotos: [],
        eventLocation: "",
        ticketPrice: "",
        eventCapacity: "",
        aboutEvent: ""
    });

    const [ showDisclaimer, setShowDisclaimer ] = useState(false),
    modalStyle = showDisclaimer ? "fixed h-screen w-screen z-50 overflow-y-hidden" : "hidden";

    const [ chosenDate, chosenMonth, chosenYear] = formData.eventDate.split("-").reverse(),
    chosenEventDate = `${chosenMonth}/${chosenDate}/${chosenYear}`,
    eventDate = new Date(chosenEventDate); 

    const day = eventDate.getDay(),
    date = eventDate.getDate(),
    month = eventDate.getMonth(),
    year = eventDate.getFullYear();

    let eventDay, eventMonth;

    switch(day) {
        case 0 : 
        eventDay = "Sunday";
        break;
        case 1 : 
        eventDay = "Monday";
        break;
        case 2 : 
        eventDay = "Tuesday";
        break;
        case 3 : 
        eventDay = "Wednesday";
        break;
        case 4 : 
        eventDay = "Thursday";
        break;
        case 5 : 
        eventDay = "Friday";
        break;
        case 6 : 
        eventDay = "Saturday";
        break;
    }

    switch(month) {
        case 0 : 
        eventMonth = "January";
        break;
        case 1 : 
        eventMonth = "February";
        break;
        case 2 : 
        eventMonth = "March";
        break;
        case 3 : 
        eventMonth = "April";
        break;
        case 4 : 
        eventMonth = "May";
        break;
        case 5 : 
        eventMonth = "June";
        break;
        case 6 : 
        eventMonth = "July";
        break;
        case 7 : 
        eventMonth = "August";
        break;
        case 8 : 
        eventMonth = "September";
        break;
        case 9 : 
        eventMonth = "October";
        break;
        case 10 : 
        eventMonth = "November";
        break;
        case 11 : 
        eventMonth = "December";
        break;
    }

    const imageInfoHandler = event => {
        setFormData(prevFormData => ({
            ...prevFormData,
            eventCoverPhotos: [event.target.files[0]]
        }));
    };

    const changeHandler = event => {
        const { name, value } = event.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
            }));
    }; 

        switch(currentFormPage) {
            case 1:
                formTitle = "About";
                formProgress = "w-[33.33%]";
                pageOneDisplayState = "block";
                pageTwoDisplayState = "hidden";
                pageThreeDisplayState = "hidden";
                continueButtonDisplayState = "grid";
                submitButtonDisplayState = "!hidden";
            break;
            case 2:
                formTitle = "Create";
                formProgress = "w-[66.66%]";
                pageOneDisplayState = "hidden";
                pageTwoDisplayState = "block";
                pageThreeDisplayState = "hidden";
                continueButtonDisplayState = "grid";
                submitButtonDisplayState = "!hidden";
            break;
            case 3:
                formTitle = "Preview";
                formProgress = "w-[100%]";
                pageOneDisplayState = "hidden";
                pageTwoDisplayState = "hidden";
                pageThreeDisplayState = "block";
                continueButtonDisplayState = "!hidden";
                submitButtonDisplayState = "!block";
            break;
        }

    const arrowLeftHandler = () => {
        if (currentFormPage > 1) {
            setCurrentFormPage(prevFormPage => prevFormPage - 1);
        } else {
            window.history.go(-1);
        }
    };

    const formChangeHandler = () => {
        setCurrentFormPage(prevFormPage => {
            if (prevFormPage > 2) {
                return 1;
            } else {
                return prevFormPage + 1;
            }
        });
    };

    const commisionNotificationHandler = event => {
        event.preventDefault();
        setShowDisclaimer(true);
    };

    const submitFormHandler = event => {
        event.preventDefault();
        setShowLoadingAnimation(true);
        
        const newFormData = new FormData();
        Object.keys(formData).forEach(key => {
            const value = formData[key];
            
            if (Array.isArray(value)) {
                value.forEach(item => {
                    if (item instanceof File) {
                        newFormData.append(key, item);
                    } else {
                        newFormData.append(key, item);
                    }
                });
            } else {
                newFormData.append(key, value);
            }
        });

        createEventRequest(newFormData, token)
        .then(data => {
            setShowLoadingAnimation(false);
            if (data.message === "Event created successfully") {
                setShowModal({
                    heading: "Event Created",
                    message: `${data.data.newEvent.eventName} has been successfully added to our array of events, well-done ${data.data.newEvent.postedBy.firstname}`,
                    on: true,
                    success: true
                });

                navigate("/find-events");

                setFormData({
                    eventCategory: "Concert",
                    eventName: "",
                    eventDescription: "",
                    eventDate: "",
                    eventTime: "",
                    duration: "",
                    eventCoverPhotos: [],
                    eventLocation: "",
                    ticketPrice: "",
                    eventCapacity: "",
                    aboutEvent: ""
                });
            } else {
                setShowModal({
                    heading: "Error",
                    message: "We encountered a problem with creating your event, please try again.",
                    on: true,
                    success: false
                });
            }
        })
        .catch(error => {
            setShowLoadingAnimation(false);
            setShowModal({
                heading: "Error",
                message: "We encountered a problem with creating your event, please try again.",
                on: true,
                success: false
            });
        });
    };

    return (
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="TicketDorm, lets create the best of concerts, sports games, theater performances and festivals. Our mission is to make discovering, buying, and selling tickets easy and secure." />
                <meta property="og:description" content="TicketDorm, lets create the best of concerts, sports games, theater performances and festivals. Our mission is to make discovering, buying, and selling tickets easy and secure." />
                <title>CreateEvent | TicketDorm</title>
                </Helmet>
            <main>
                <div className="fixed w-screen h-screen px-[1.6rem] lg:px-[8.8rem] bg-[rgba(245,250,255,1)] font-montserrat pb-[1.6rem] lg:center">
                    <form className="bg-white px-[1rem] py-[0.5rem] lg:px-[2rem] mt-[1.6rem] rounded-[10px] lg:w-[60vw]" onSubmit={formData.ticketPrice > 0 ? commisionNotificationHandler : submitFormHandler}>
                        <section className="flex items-center mt-[1.6rem] mb-[2.65rem] lg:mb-[4rem]">
                            <span className="size-[3rem] inline-block rounded-[50%] center mr-[1rem] bg-blue-300 cursor-pointer" onClick={arrowLeftHandler}>
                                <img src={ArrowLeft} alt="Caret Left" />
                            </span>
                            <section>
                                <h2 className="font-semibold lg:text-[2rem] gen-transistion">Step of {currentFormPage} of 3 : {formTitle} Event</h2>
                                <section className="mt-[0.1rem] h-[0.3rem] rounded-[5px] bg-blue-200"><section className={`bg-[#0E4887] h-full gen-transistion ${formProgress}`}></section></section>
                            </section>
                        </section>
                        <section>
                            <section className={`${pageOneDisplayState} gen-transistion`}>
                                <label htmlFor="eventCategory" className="block font-medium mb-[0.1rem]">What type of event do you want to host? <span className="text-[red]">*</span></label>
                                <select name="eventCategory" id="eventCategory" className="border border-black rounded-[5px] h-[3rem] p-[0.1rem] focus:border-[#0E4887] bg-transparent mb-[0.8rem]" value={formData.eventCategory} onChange={changeHandler} required >
                                    <option value="Party">Party</option>
                                    <option value="Comedy">Comedy</option>
                                    <option value="Concert">Concert</option>
                                    <option value="Health & Wellbeing">Health & Wellbeing</option>
                                    <option value="Food & drinks">Food & Drinks</option>
                                    <option value="Nightlife">NightLife</option>
                                    <option value="Sports & Fitness">Sport & Fitness</option>
                                    <option value="Religion">Religion</option>
                                    <option value="Others">Others</option>
                                </select>
                                <label htmlFor="eventName" className="block font-medium mb-[0.1rem]">What name would you like to call your event? <span className="text-[red]">*</span></label>
                                <input type="text" name="eventName" className="border border-black rounded-[5px] indent-[0.5rem] focus:border-[#0E4887] h-[3.5rem] w-full bg-transparent mb-[0.8rem]" value={formData.eventName} onChange={changeHandler} required />
                                <label htmlFor="eventDescription" className="block font-medium mb-[0.1rem]">Briefly tell your audience what this event is about <span className="text-[red]">*</span></label>
                                <textarea name="eventDescription" className="border border-black rounded-[5px] p-[0.4rem] focus:border-[#0E4887] w-full resize-none h-[5rem] bg-transparent mb-[0.2rem]" value={formData.eventDescription} onChange={changeHandler} required />
                                <label htmlFor="eventDateAndTime" className="block font-medium mb-[0.1rem]">Event Date, Time and Duration <span className="text-[red]">*</span></label>
                                <section className="*:inline-block *:h-full flex h-[3rem] items-center gap-[1rem] mb-[0.8rem]">
                                    <input type="date" name="eventDate" className="w-[48%] border border-black rounded-[5px] p-[0.1rem] focus:border-[#0E4887] bg-transparent" value={formData.eventDate} onChange={changeHandler} required />
                                    <input type="time" name="eventTime" className="w-[30%] border border-black rounded-[5px] p-[0.1rem] focus:border-[#0E4887] bg-transparent" value={formData.eventTime} onChange={changeHandler} required />
                                    <input type="text" name="duration" className="w-[30%] border border-black rounded-[5px] indent-[0.5rem] focus:border-[#0E4887] bg-transparent" placeholder="Duration" value={formData.duration} onChange={changeHandler} required />
                                </section>
                                <label htmlFor="eventCoverPhotos" className="block font-medium mb-[0.1rem]">Upload a cover photo for your event <span className="text-[red]">*</span></label>
                                <input type="file" accept="image/*" name="eventCoverPhotos"className="bg-transparent mb-[0.8rem] w-full" onChange={imageInfoHandler} required />
                                <label htmlFor="eventLocation" className="block font-medium mb-[0.1rem]">Location <span className="text-[red]">*</span></label>
                                <input type="text" name="eventLocation" className="border border-black rounded-[5px] indent-[0.5rem] focus:border-[#0E4887] h-[3.5rem] w-full bg-transparent" value={formData.eventLocation} onChange={changeHandler} required />
                            </section>
                            <section className={`${pageTwoDisplayState} gen-transistion`}>
                                <label htmlFor="ticketPrice" className="block font-medium mb-[0.1rem]">Ticket Price in Naira (Enter 0 for a free event) <span className="text-[red]">*</span></label>
                                <input type="number" name="ticketPrice" className="border border-black rounded-[5px] indent-[0.5rem] focus:border-[#0E4887] h-[3.5rem] w-full bg-transparent mb-[0.8rem]" value={formData.ticketPrice} onChange={changeHandler} required />
                                <label htmlFor="eventCapacity" className="block font-medium mb-[0.1rem]">Event Capacity <span className="text-[red]">*</span></label>
                                <input type="number" name="eventCapacity" className="border border-black rounded-[5px] indent-[0.5rem] focus:border-[#0E4887] h-[3.5rem] w-full bg-transparent mb-[0.8rem]" value={formData.eventCapacity} onChange={changeHandler} required />
                                <label htmlFor="aboutEvent" className="block font-medium mb-[0.1rem]">About Event <span className="text-[red]">*</span></label>
                                <textarea name="aboutEvent" className="border border-black rounded-[5px] p-[0.4rem] focus:border-[#0E4887] w-full resize-none h-[20rem] bg-transparent" value={formData.aboutEvent} onChange={changeHandler} required />
                            </section>
                            <section className={`${pageThreeDisplayState} gen-transistion`}>
                                <section className={`${formData.eventCoverPhotos[0] ? "h-[10rem] lg:h-[8rem]" : ""} rounded-[10px] mb-[1.5rem]`}>
                                    {formData.eventCoverPhotos[0] ? <img src={URL.createObjectURL(formData.eventCoverPhotos[0])} alt="Event Image" className="size-full object-cover rounded-[10px]" /> : <p className="font-medium text-[red]">You are yet to upload a cover photo for your event.</p>}
                                </section>
                                <section>{formData.eventDate ? `${eventDay} ${eventMonth} ${date}, ${year}` : <p className="font-medium text-[red]">You are yet to choose a date for your event.</p>}</section>
                                <section className="my-[0.3rem]">{formData.eventName ? <h2 className="font-semibold text-[1.9rem]">{formData.eventName}</h2> : <p className="font-medium text-[red]">You are yet to choose a name for your event.</p>}</section>
                                <section className="mb-[1.5rem]">{formData.eventDescription ? formData.eventDescription : <p className="font-medium text-[red]">You are yet to add a description to your event.</p>}</section>
                                <h2 className="font-semibold text-[1.7rem]">Event Time and Duration</h2>
                                <section className="mb-[1rem]">{formData.eventTime && formData.duration ? `Event starts by ${formData.eventTime} prompt and will last for ${formData.duration}.` : <p className="font-medium text-[red]">You are yet to decide on  the event timing and duration.</p>}</section>
                                <h2 className="font-semibold text-[1.7rem]">Location</h2>
                                <section className="mb-[1rem]">{formData.eventLocation ? `${formData.eventLocation}.` : <p className="font-medium text-[red]">You are yet to choose a location for your event.</p>}</section>
                                <h2 className="font-semibold text-[1.7rem]">Refund Policy</h2>
                                <section className="mb-[1rem]">Contact organizer for refund.</section>
                                <h2 className="font-semibold text-[1.7rem]">About this Event</h2>
                                <section className="preview-about-section max-h-[10rem] leading-[1.5] overflow-hidden">{formData.aboutEvent ? `${formData.aboutEvent}.` : <p className="font-medium text-[red]">You are yet to include an about to your event.</p>}</section>
                            </section>
                        </section>
                        <section className="flex justify-end my-[1rem]">
                            <section className={`bg-[#0E4887] center text-white h-[3.5rem] font-medium w-[15rem] lg:w-[17rem] rounded-[10px] cursor-pointer ${continueButtonDisplayState}`} onClick={formChangeHandler}>Continue</section>
                            <button className={`bg-[#0E4887] center text-white h-[3.5rem] font-medium w-[15rem] lg:w-[17rem] rounded-[10px] ${submitButtonDisplayState}`}>Create Event</button>
                        </section>
                    </form>
                </div>
                <div className={modalStyle}>
                    <div className="backdrop-blur-[2px] size-full bg-[rgba(203,0,227,0.2)] center font-montserrat">
                    <form className="w-[31rem] py-[1.8rem] px-[1.45rem] bg-white rounded-[14.24px]" onSubmit={submitFormHandler}>
                    <div className="min-h-[17.2rem] relative text-center center">
                        <h1 className="text-[2.15rem] font-semibold mb-[1rem] leading-[41px]">Comission Policy</h1>
                        <p className="mb-[1.5rem]">A 10% commission will be charged on each ticket sold, you are encouraged to factor this in your pricing.</p>
                        <section className="flex items-center justify-between w-full">
                            <section className="w-[8rem] h-[3rem] center bg-red-700 text-white rounded-[5px] cursor-pointer" onClick={() => {
                                setShowDisclaimer(false);
                            }}>Cancel</section>
                            <button className="w-[8rem] h-[3rem] center bg-[#0E4887] text-white rounded-[5px] cursor-pointer" onClick={() => {
                                setShowDisclaimer(false);
                            }}>Agree</button>
                        </section>
                    </div>
                    </form>
                    </div>
                </div>
            </main>
        </HelmetProvider>
    );
};

export default CreateEvent;
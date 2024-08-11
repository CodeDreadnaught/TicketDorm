import { useState, useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AdditionalActionsAccountWrapper from "../components/AdditionalActionsAccountWrapper";
import PhoneIcon from "../assets/icons/phone-icon.svg";
import AdditionalActionsCTA from "../components/AdditionalActionsCTA";
import OTPRegulator from "../utilis/OTPRegulator";
import { verifyOTPRequest, fetchUserOrder, fetchUserEvents } from "../requests/APIRequest";

const VerifyOTP = () => {
    const {  setUser, setToken, verificationEmail, setOrderInformation, setEventsInformation, setShowLoadingAnimation, setShowModal } = useContext(AppContext),
    navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstInput: "",
        secondInput: "",
        thirdInput: "",
        fourthInput: ""
    });

    const changeHandler = event => {
        const { name, value } = event.target;

        setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
        }));
    };
    
    useEffect(() => {
        OTPRegulator();
    }, []);

    const submitHandler = event => {
        event.preventDefault();
        setShowLoadingAnimation(true);
        const OTPValue = (formData.firstInput + formData.secondInput + formData.thirdInput + formData.fourthInput),
        formDataObject = {
            email: verificationEmail,
            otp: OTPValue
        };
        
        verifyOTPRequest(formDataObject)
        .then(data => {
            setShowLoadingAnimation(false);
            switch (data.message) {
                case "OTP verified successfully." :
                    setUser(data.user);
                    setToken(data.accessToken);
                    localStorage.setItem("site", data.accessToken);

                    fetchUserOrder(data.user._id, data.accessToken)
                    .then(data => {
                        setOrderInformation(data);
                        localStorage.setItem("orderInformation", JSON.stringify(data));
                    })
                    .catch(error => console.log(error));

                    fetchUserEvents(data.user._id, data.accessToken)
                    .then(data => {
                        setEventsInformation(data);
                        localStorage.setItem("eventsInformation", JSON.stringify(data));
                    })
                    .catch(error => console.log(error));

                    setShowModal({
                        heading: "Account Verified",
                        message: `Hello ${data.user.firstname}, welcome to a dispensation of creating unforgettable experiences with ease and confidence.`,
                        on: true,
                        success: true
                    });
                    
                    navigate("/");

                    setFormData({
                        firstInput: "",
                        secondInput: "",
                        thirdInput: "",
                        fourthInput: ""
                    });
                break;
                case "Invalid or expired OTP" :
                    setShowModal({
                        heading: "Verification Error",
                        message: "The OTP you entered is either invalid or has expired.",
                        on: true,
                        success: false
                    });
                break;
            }
            switch (data.messaage) {
                case "Invalid or expired OTP" :
                    setShowModal({
                        heading: "Verification Error",
                        message: "The OTP you entered is either invalid or has expired.",
                        on: true,
                        success: false
                    });
                break;
            }
        })
        .catch(error => {
            setShowLoadingAnimation(false);
            setShowModal({
                heading: "Network Error",
                message: "Your internet may have been disconnected, please reconnect and try again.",
                on: true,
                success: false
            });
        });
    };

    return (
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="TicketDorm, verify your OTP to connect with the best concerts, sports games, theater performances and festivals." />
                <meta property="og:description" content="TicketDorm, verify your OTP to connect with the best concerts, sports games, theater performances and festivals." />
                <title>Verify OTP | TicketDorm</title>
                </Helmet>
            <main>
                <AdditionalActionsAccountWrapper>
                    <section className="w-full">
                        <form className="center" onSubmit={submitHandler}>
                            <section className="size-[4.5rem] lg:size-[5.5rem] mb-[1.8rem] lg:mb-[2.8rem]"><img src={PhoneIcon} alt="Phone Icon" className="size-full" /></section>
                            <h1 className="font-semibold text-[2rem] mb-[1.5rem]">OTP Verification</h1>
                            <p className="text-[rgba(0,0,0,0.8)]">Enter the verification code we sent to:</p>
                            <p className="font-semibold my-[1.5rem] lg:my-[2rem]">{verificationEmail}</p>
                            <p className="font-semibold">Type your 4 digit security code</p>
                            <section className="my-[2rem]">
                                <section className="otp-wrapper flex w-[23rem] justify-between">
                                    <input type="number" name="firstInput" onChange={changeHandler} value={formData.firstInput} className="size-[5rem] rounded-[16px] text-center font-semibold text-[2rem] border border-[rgba(0,0,0,0.8)]" required />
                                    <input type="number" name="secondInput" onChange={changeHandler} value={formData.secondInput} className="size-[5rem] rounded-[16px] text-center font-semibold text-[2rem] border border-[rgba(0,0,0,0.8)]" required />
                                    <input type="number" name="thirdInput" onChange={changeHandler} value={formData.thirdInput} className="size-[5rem] rounded-[16px] text-center font-semibold text-[2rem] border border-[rgba(0,0,0,0.8)]" required />
                                    <input type="number" name="fourthInput" onChange={changeHandler} value={formData.fourthInput} className="size-[5rem] rounded-[16px] text-center font-semibold text-[2rem] border border-[rgba(0,0,0,0.8)]" required />
                                </section>
                            </section>
                            <AdditionalActionsCTA>Submit</AdditionalActionsCTA>
                        </form>
                    </section>
                </AdditionalActionsAccountWrapper>
            </main>
        </HelmetProvider>
    );
};

export default VerifyOTP;
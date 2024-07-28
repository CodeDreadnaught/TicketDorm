import { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AdditionalActionsAccountWrapper from "../components/AdditionalActionsAccountWrapper";
import AdditionalActionsCTA from "../components/AdditionalActionsCTA";
import { forgetPasswordRequest } from "../requests/APIRequest";

const ForgotPassword = () => {
    const navigate = useNavigate();

    const { setShowLoadingAnimation, setShowModal } = useContext(AppContext);

    const [formData, setFormData] = useState({
        email: ""
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
        
        forgetPasswordRequest(formData)
        .then(data => {
            setShowLoadingAnimation(false);
            switch (data.message) {
                case "Password reset link sent to your email" :
                    setShowModal({
                        heading: "Link Sent",
                        message: `A link to reset your password has been sent to your email.`,
                        on: true,
                        success: true
                    });

                    navigate("/check-email");

                    setFormData({
                        email: ""
                    });

                break;
                case "User with email not found" :
                    setShowModal({
                        heading: "Error",
                        message: "There is no account with the information you provided, kindly recheck your details.",
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
                <meta name="description" content="TicketDorm, reset your password to connect with the best concerts, sports games, theater performances and festivals." />
                <meta property="og:description" content="TicketDorm, reset your password to connect with the best concerts, sports games, theater performances and festivals." />
                <title>Forgot Password | TicketDorm</title>
                </Helmet>
            <main>
                <AdditionalActionsAccountWrapper>
                    <section className="w-full">
                        <form className="center" onSubmit={submitHandler}>
                            <h1 className="font-semibold text-[2rem] mb-[1.5rem]">Forgot Password?</h1>
                            <p className="text-[rgba(0,0,0,0.8)]">Enter your email to reset your password</p>
                            <input type="email" name="email" onChange={changeHandler} value={formData.email} placeholder="Enter your Email" className="w-full rounded-[10px] indent-[1rem] h-[4rem] border border-[rgba(0,0,0,0.8)] my-[2rem]" required />
                            <AdditionalActionsCTA>Submit</AdditionalActionsCTA>
                        </form>
                    </section>
                </AdditionalActionsAccountWrapper>
            </main>
        </HelmetProvider>
    );
};

export default ForgotPassword;
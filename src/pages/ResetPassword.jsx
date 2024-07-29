import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AppContext from "../context/AppContext";
import AdditionalActionsAccountWrapper from "../components/AdditionalActionsAccountWrapper";
import AdditionalActionsCTA from "../components/AdditionalActionsCTA";
import { resetPasswordRequest } from "../requests/APIRequest";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import showPasswordStrength from "../utilis/showPasswordStrength";

const ResetPassword = () => {
    const { setShowLoadingAnimation, setShowModal } = useContext(AppContext),
    { register, getValues, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onChange",
    }),
    [ showPassword, setShowPassword ] = useState({
        password: false,
        confirmPassword: false
    }),
    [ userID, setUserID ] = useState(""),
    navigate = useNavigate();

    useEffect(() => {
        const url = window.location.href,
        id = url.split("/").pop();

        setUserID(id);
    }, []);

    const toggleShowPassword = event => {
        const { id } = event.target.parentElement;

        if (id === "password") {
            setShowPassword(prevState => ({
                ...prevState,
                password: !prevState.password
            }));
        } else if (id === "confirmPassword") {
            setShowPassword(prevState => ({
                ...prevState,
                confirmPassword: !prevState.confirmPassword
            }));
        }
    }

    const submitHandler = formData => {
        setShowLoadingAnimation(true);
        
        resetPasswordRequest({password: formData.password }, userID)
        .then(data => {
            setShowLoadingAnimation(false);

            if (data.message === "password reset successfully") {
                setShowModal({
                    heading: "Success",
                    message: `${data.data.user.firstname}, your have successfully changed your password, lets get back to creating unforgettable experiences with ease and confidence.`,
                    on: true,
                    success: true
                });

                navigate("/sign-in");
                reset();
                showPasswordStrength("");
            } else {
                setShowModal({
                    heading: "Error",
                    message: `We are unable to reset your password at this point in time.`,
                    on: true,
                    success: false
                });
            }
        })
        .catch(error => {
            setShowLoadingAnimation(false);
            console.log("Fuck This Shit!");
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
                <title>Reset Password | TicketDorm</title>
                </Helmet>
            <main>
                <AdditionalActionsAccountWrapper>
                    <section className="w-full">
                        <form className="center" onSubmit={handleSubmit(submitHandler)}>
                            <h1 className="font-semibold text-[2rem] mb-[1.5rem]">Setup New Password</h1>
                            <section className="h-[3.5rem] lg:h-[3.4rem] bg-white rounded-[5px] w-full flex items-center gap-[0.5rem] border border-[#D9D9D9] pr-[0.5rem]">
                                <input type={showPassword.password ? "text" : "password"} name="password" {...register("password", {
                                    min: {
                                        value: 8,
                                        message: "Your password must contain at least 8 characters"
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_=+-]).{8,}$/,
                                        message: "Your password must have at least a lower case, an uppercase, a number and a special character."
                                    },
                                    onChange: () => {
                                        const values = getValues();
                                        showPasswordStrength(values.password);
                                    }
                                })} 
                                    placeholder="Enter Password" className=" text-black indent-[0.2rem] size-full" required />
                                <section className="w-[10%] lg:w-[5%] h-full center" id="password">
                                    <FaEye  className={`size-[2rem] cursor-pointer gen-transistion ${showPassword.password ? "block" : "hidden"}`} onClick={toggleShowPassword} />
                                    <FaEyeSlash  className={`size-[2rem] cursor-pointer gen-transistion ${showPassword.password ? "hidden" : "block"}`} onClick={toggleShowPassword} />
                                </section>
                                    </section>
                                    {errors.password && <p className="mb-[1.3rem] lg:mb-[1rem] text-[red] text-[1.4rem] text-center font-medium gen-transistion">{errors.password.message}</p>}
                                    <section className="flex gap-[1rem] py-[0.5rem] text-[1.25rem] w-full">
                                        <section className="w-[calc(25%-0.75rem)] center">
                                            <section className="h-[0.5rem] w-full gen-transistion border border-[gray] rounded-[12px] mb-[0.6rem] weak"></section>
                                            <span className="block text-[gray] font-medium">Weak</span>
                                        </section>
                                        <section className="w-[calc(25%-0.75rem)] center">
                                        <section className="h-[0.5rem] w-full gen-transistion border border-[gray] rounded-[12px] mb-[0.6rem] fair"></section>
                                        <span className="block text-[gray] font-medium">Fair</span>
                                        </section>
                                        <section className="w-[calc(25%-0.75rem)] center">
                                        <section className="h-[0.5rem] w-full gen-transistion border border-[gray] rounded-[12px] mb-[0.6rem] good"></section>
                                        <span className="block text-[gray] font-medium">Good</span>
                                        </section>
                                        <section className="w-[calc(25%-0.75rem)] center">
                                        <section className="h-[0.5rem] w-full gen-transistion border border-[gray] rounded-[12px] mb-[0.6rem] strong"></section>
                                        <span className="block text-[gray] font-medium">Strong</span>
                                        </section>
                                    </section>
                                    <section className="mb-[1.3rem] lg:mb-[1rem] text-[gray] font-medium text-[1.2rem] text-center">Use 8 or more characters with a mix of letters, numbers & symbols</section>
                                    <section className="h-[3.5rem] lg:h-[3.4rem] bg-white rounded-[5px] flex items-center gap-[0.5rem] border border-[#D9D9D9] w-full pr-[0.5rem]">
                                        <input type={showPassword.confirmPassword ? "text" : "password"} name="confirmPassword" {...register("confirmPassword", {
                                            validate: value => {
                                                const password = getValues().password;

                                                return (value === password  || "Confirm password must be the same as password.");
                                            }
                                        })} placeholder="Confirm Password" className=" text-black indent-[0.2rem] size-full" required />
                                        <section className="w-[10%] lg:w-[5%] h-full center" id="confirmPassword">
                                            <FaEye  className={`size-[2rem] cursor-pointer gen-transistion ${showPassword.confirmPassword ? "block" : "hidden"}`} onClick={toggleShowPassword} />
                                            <FaEyeSlash  className={`size-[2rem] cursor-pointer gen-transistion ${showPassword.confirmPassword ? "hidden" : "block"}`} onClick={toggleShowPassword} />
                                        </section>
                                    </section>
                                    {errors.confirmPassword && <p className="mb-[1.3rem] lg:mb-[1rem] text-[red] text-[1.4rem] font-medium gen-transistion text-center">{errors.confirmPassword.message}</p>}
                                    {!errors.confirmPassword && <p className="mb-[1.3rem] lg:mb-[1rem] text-[red] text-[1.4rem] font-medium gen-transistion"></p>}
                            <AdditionalActionsCTA>Submit</AdditionalActionsCTA>
                        </form>
                    </section>
                </AdditionalActionsAccountWrapper>
            </main>
        </HelmetProvider>
    );
};

export default ResetPassword;
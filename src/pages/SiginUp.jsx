import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import { createAccount } from "../requests/APIRequest";
import ArrowLeft from "../assets/icons/caret-left-arrow.svg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import showPasswordStrength from "../utilis/showPasswordStrength";

const SignUp = () => {
    const navigate = useNavigate();

    const { register, getValues, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onChange",
    });

    const [ showPassword, setShowPassword ] = useState({
        password: false,
        confirmPassword: false
    });

    const { setShowLoadingAnimation, setShowModal, setHasOTP, setVerificationEmail } = useContext(AppContext);

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
    };

    const submitHandler = formData => {
        setShowLoadingAnimation(true);
        createAccount(formData)
        .then(data => {
            setShowLoadingAnimation(false);

            if (data.message === "User saved successfully") {
                setShowModal({
                    heading: "Success",
                    message: `${data.newUser.firstname}, your TicketDorm account has been created, verify your account to create unforgettable experiences.`,
                    on: true,
                    success: true
                });

                setVerificationEmail(formData.email);
                setHasOTP(true);
                navigate("/verify-otp");
                reset();
                showPasswordStrength("");
            } else if (data.messaage === "User already exists") {
                setShowModal({
                    heading: "Account Exists",
                    message: `${data.user.firstname}, you already have a TicketDorm account, sign in to create unforgettable experiences with ease and confidence.`,
                    on: true,
                    success: false
                });
                navigate("/sign-in");
                reset();
                showPasswordStrength("");
            } else {
                setShowModal({
                    heading: "Network Error",
                    message: "There was a problem with creating your account, please try again.",
                    on: true,
                    success: false
                });
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

    const arrowLeftHandler = () => {
        window.history.go(-1);
    };

    return (
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="TicketDorm, create an account and share a universe of exciting events – from electrifying concerts and thrilling sports games to captivating theater performances and vibrant festivals." />
                <title>SignUp | TicketDorm</title>
                </Helmet>
            <main>
                <div className="bg-[#F8F9FA] min-h-screen absolute">
                    <form className="font-montserrat w-screen  lg:center" onSubmit={handleSubmit(submitHandler)}>
                        <section className="px-[1.6rem] lg:px-0 lg:w-[50rem]">
                            <section className="flex items-center mt-[1.6rem] mb-[2rem] lg:absolute lg:left-[1.6rem]">
                                <span className="size-[3rem] inline-block rounded-[50%] center mr-[1rem] bg-blue-300 cursor-pointer" onClick={arrowLeftHandler}>
                                    <img src={ArrowLeft} alt="Caret Left" />
                                </span>
                                <Link to="/"><h2 className="font-semibold lg:text-[2rem]">TicketDorm</h2></Link>
                            </section>
                            <section>
                                <h1 className="text-[1.9rem] lg:text-[3rem] font-semibold leading-[3.75rem] mb-[2rem] lg:mt-[1.6rem]">Sign Up</h1>
                                <section className="*:w-full">
                                    <label className="font-semibold mb-[0.3rem] block" htmlFor="firstName">First Name</label>
                                    <input type="text" name="firstname" {...register("firstname")} placeholder="Enter First Name" className="h-[3.5rem] lg:h-[3.4rem] bg-white rounded-[5px] text-black indent-[0.2rem] mb-[1.3rem] border lg:mb-[1rem] border-[#D9D9D9]" required />
                                    <label className="font-semibold mb-[0.3rem] block" htmlFor="lastName">Last Name</label>
                                    <input type="text" name="lastname" {...register("lastname")} placeholder="Enter Last Name" className="h-[3.5rem] lg:h-[3.4rem] bg-white rounded-[5px] text-black indent-[0.2rem] mb-[1.3rem] border lg:mb-[1rem] border-[#D9D9D9]" required />
                                    <label className="font-semibold mb-[0.3rem] block" htmlFor="email">Email</label>
                                    <input type="email" name="email" {...register("email")} placeholder="Enter a Valid Email" className="h-[3.5rem] lg:h-[3.4rem] bg-white rounded-[5px] text-black indent-[0.2rem] border border-[#D9D9D9] mb-[1.3rem] lg:mb-[1rem]" required />
                                    <label className="font-semibold mb-[0.3rem] block" htmlFor="password">Password</label>
                                    <section className="h-[3.5rem] lg:h-[3.4rem] bg-white rounded-[5px] flex items-center gap-[0.5rem] border border-[#D9D9D9]">
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
                                            placeholder="Enter Password" className=" text-black indent-[0.2rem] h-full w-[90%] lg:w-[95%]" required />
                                        <section className="w-[10%] lg:w-[5%] h-full center" id="password">
                                            <FaEye  className={`size-[2rem] cursor-pointer gen-transistion ${showPassword.password ? "block" : "hidden"}`} onClick={toggleShowPassword} />
                                            <FaEyeSlash  className={`size-[2rem] cursor-pointer gen-transistion ${showPassword.password ? "hidden" : "block"}`} onClick={toggleShowPassword} />
                                        </section>
                                    </section>
                                    {errors.password && <p className="mb-[1.3rem] lg:mb-[1rem] text-[red] text-[1.4rem] text-center font-medium gen-transistion">{errors.password.message}</p>}
                                    <section className="flex gap-[1rem] py-[0.5rem] text-[1.25rem]">
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
                                    <label className="font-semibold mb-[0.3rem] block" htmlFor="confirmPassword">Confirm Password</label>
                                    <section className="h-[3.5rem] lg:h-[3.4rem] bg-white rounded-[5px] flex items-center gap-[0.5rem] border border-[#D9D9D9]">
                                        <input type={showPassword.confirmPassword ? "text" : "password"} name="confirmPassword" {...register("confirmPassword", {
                                            validate: value => {
                                                const password = getValues().password;

                                                return (value === password  || "Confirm password must be the same as password.");
                                            }
                                        })} placeholder="Confirm Password" className=" text-black indent-[0.2rem] h-full w-[90%] lg:w-[95%]" required />
                                        <section className="w-[10%] lg:w-[5%] h-full center" id="confirmPassword">
                                            <FaEye  className={`size-[2rem] cursor-pointer gen-transistion ${showPassword.confirmPassword ? "block" : "hidden"}`} onClick={toggleShowPassword} />
                                            <FaEyeSlash  className={`size-[2rem] cursor-pointer gen-transistion ${showPassword.confirmPassword ? "hidden" : "block"}`} onClick={toggleShowPassword} />
                                        </section>
                                    </section>
                                    {errors.confirmPassword && <p className="mb-[1.3rem] lg:mb-[1rem] text-[red] text-[1.4rem] font-medium gen-transistion text-center">{errors.confirmPassword.message}</p>}
                                    {!errors.confirmPassword && <p className="mb-[1.3rem] lg:mb-[1rem] text-[red] text-[1.4rem] font-medium gen-transistion"></p>}
                                    <section className="mb-[1.3rem] lg:mb-[1rem] flex items-center">
                                        <input type="checkbox" name="rememberMe" {...register("rememberMe")} id="rememberMe" className="size-[2rem] rounded-[5px] mr-[0.8rem]" />
                                        <label htmlFor="rememberMe" className="font-medium">Remember Me</label>
                                    </section>
                                    <button className="h-[3.5rem] lg:h-[3.4rem] bg-primaryPurple text-white font-medium rounded-[5px]">Sign Up</button>
                                    <p className="my-[1.3rem] lg:my-[1rem] text-center font-medium">Already have an account? <Link to="/sign-in" className="text-blue-800">Sign In</Link></p>
                                </section>
                            </section>
                        </section>
                    </form>
                </div>
            </main>
        </HelmetProvider>
    );
};

export default SignUp;
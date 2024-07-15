import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import ArrowLeft from "../assets/icons/caret-left-arrow.svg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
    const [ showPassword, setShowPassword ] = useState(false);

    const toggleShowPassword = event => {
        const { id } = event.target.parentElement;

        if (id === "password") {
            setShowPassword(prevState => !prevState);
        }
    };

    const submitHandler = event => {
        event.preventDefault();
    };

    const arrowLeftHandler = () => {
        window.history.go(-1);
    };

    return (
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="TicketDorm, sign in to your account and experience a universe of exciting events – from electrifying concerts and thrilling sports games to captivating theater performances and vibrant festivals." />
                <title>SignIn | TicketDorm</title>
                </Helmet>
            <main>
            <form className=" bg-[#F8F9FA] font-montserrat w-screen absolute lg:center h-screen" onSubmit={submitHandler}>
                    <section className="px-[1.6rem] lg:px-0 lg:w-[50rem]">
                        <section className="flex items-center mt-[1.6rem] mb-[2.65rem] lg:mb-[4rem] lg:absolute lg:left-[1.6rem]">
                            <span className="size-[3rem] inline-block rounded-[50%] center mr-[1rem] bg-blue-300 cursor-pointer" onClick={arrowLeftHandler}>
                                <img src={ArrowLeft} alt="Caret Left" />
                            </span>
                            <Link to="/"><h2 className="font-semibold lg:text-[2rem]">TicketDorm</h2></Link>
                        </section>
                        <section className="lg:h-screen lg:center">
                            <section className="w-full">
                                <h1 className="text-[1.9rem] lg:text-[3rem] font-semibold leading-[3.75rem] mb-[2.4rem] lg:mt-[1.6rem]">Sign In</h1>
                                <section className="*:w-full">
                                    <label className="font-semibold mb-[0.3rem] block" htmlFor="firstName">Email</label>
                                    <input type="email" placeholder="Enter your Email" className="h-[4rem] bg-white rounded-[5px] text-black indent-[0.2rem] mb-[1.6rem] border border-[#D9D9D9]" required />
                                    <label className="font-semibold mb-[0.3rem] block" htmlFor="firstName">Password</label>
                                    <section className="h-[4rem] bg-white rounded-[5px] flex items-center gap-[0.5rem] mb-[1.6rem] border border-[#D9D9D9]">
                                        <input type={showPassword ? "text" : "password"} placeholder="Enter your Password" className=" text-black indent-[0.2rem] h-full w-[90%] lg:w-[95%]" required />
                                        <section className="w-[10%] lg:w-[5%] h-full center" id="password">
                                            <FaEye  className={`size-[2rem] cursor-pointer gen-transistion ${showPassword ? "block" : "hidden"}`} onClick={toggleShowPassword} />
                                            <FaEyeSlash  className={`size-[2rem] cursor-pointer gen-transistion ${showPassword ? "hidden" : "block"}`} onClick={toggleShowPassword} />
                                        </section>
                                    </section>
                                    <section className="mb-[1.6rem] flex items-center justify-between">
                                        <section className="flex items-center">
                                            <input type="checkbox" name="rememberMe" id="rememberMe" className="size-[2rem] rounded-[5px] mr-[0.8rem]" />
                                            <label htmlFor="rememberMe" className="font-medium">Remember Me</label>
                                        </section>
                                        <Link to="/forget-password" className="text-blue-800">Forgot Password?</Link>
                                    </section>
                                    <button className="h-[4rem] bg-primaryPurple text-white font-medium rounded-[5px]">Sign In</button>
                                    <p className="my-[1.6rem] text-center font-medium">Don't have an account? <Link to="/sign-up" className="text-blue-800">Sign Up</Link></p>
                                </section>
                            </section>
                        </section>
                    </section>
                </form>
            </main>
        </HelmetProvider>
    );
};

export default SignIn;
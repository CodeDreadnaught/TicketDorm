import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import ArrowLeft from "../assets/icons/caret-left-arrow.svg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
    const [ showPassword, setShowPassword ] = useState({
        password: false,
        confirmPassword: false
    });

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

    const submitHandler = event => {
        event.preventDefault();
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
                    <form className="font-montserrat w-screen  lg:center" onSubmit={submitHandler}>
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
                                    <input type="text" placeholder="Enter First Name" className="h-[3.5rem] lg:h-[3.4rem] bg-white rounded-[5px] text-black indent-[0.2rem] mb-[1.3rem] border lg:mb-[1rem] border-[#D9D9D9]" required />
                                    <label className="font-semibold mb-[0.3rem] block" htmlFor="lastName">Last Name</label>
                                    <input type="text" placeholder="Enter Last Name" className="h-[3.5rem] lg:h-[3.4rem] bg-white rounded-[5px] text-black indent-[0.2rem] mb-[1.3rem] border lg:mb-[1rem] border-[#D9D9D9]" required />
                                    <label className="font-semibold mb-[0.3rem] block" htmlFor="email">Email</label>
                                    <input type="email" placeholder="Enter a Valid Email" className="h-[3.5rem] lg:h-[3.4rem] bg-white rounded-[5px] text-black indent-[0.2rem] border border-[#D9D9D9]" required />
                                    <p className="mb-[1.3rem] lg:mb-[1rem] text-[red] text-[1.4rem] font-medium gen-transistion"></p>
                                    <label className="font-semibold mb-[0.3rem] block" htmlFor="password">Password</label>
                                    <section className="h-[3.5rem] lg:h-[3.4rem] bg-white rounded-[5px] flex items-center gap-[0.5rem] border border-[#D9D9D9]">
                                        <input type={showPassword.password ? "text" : "password"} placeholder="Enter Password" className=" text-black indent-[0.2rem] h-full w-[90%] lg:w-[95%]" required />
                                        <section className="w-[10%] lg:w-[5%] h-full center" id="password">
                                            <FaEye  className={`size-[2rem] cursor-pointer gen-transistion ${showPassword.password ? "block" : "hidden"}`} onClick={toggleShowPassword} />
                                            <FaEyeSlash  className={`size-[2rem] cursor-pointer gen-transistion ${showPassword.password ? "hidden" : "block"}`} onClick={toggleShowPassword} />
                                        </section>
                                    </section>
                                    <section className="flex gap-[1rem] py-[0.5rem] text-[1.25rem]">
                                        <section className="w-[calc(25%-0.75rem)] center">
                                            <section className="h-[0.5rem] w-full gen-transistion bg-[green] rounded-[12px] mb-[0.6rem]"></section>
                                            <span className="block text-[gray] font-medium">Weak</span>
                                        </section>
                                        <section className="w-[calc(25%-0.75rem)] center">
                                        <section className="h-[0.5rem] w-full gen-transistion bg-[green] rounded-[12px] mb-[0.6rem]"></section>
                                        <span className="block text-[gray] font-medium">Fair</span>
                                        </section>
                                        <section className="w-[calc(25%-0.75rem)] center">
                                        <section className="h-[0.5rem] w-full gen-transistion bg-[green] rounded-[12px] mb-[0.6rem]"></section>
                                        <span className="block text-[gray] font-medium">Good</span>
                                        </section>
                                        <section className="w-[calc(25%-0.75rem)] center">
                                        <section className="h-[0.5rem] w-full gen-transistion bg-[green] rounded-[12px] mb-[0.6rem]"></section>
                                        <span className="block text-[gray] font-medium">Strong</span>
                                        </section>
                                    </section>
                                    <section className="mb-[1.3rem] lg:mb-[1rem] text-[gray] font-medium text-[1.2rem] text-center">Use 8 or more characters with a mix of letters, numbers & symbols</section>
                                    <label className="font-semibold mb-[0.3rem] block" htmlFor="confirmPassword">Confirm Password</label>
                                    <section className="h-[3.5rem] lg:h-[3.4rem] bg-white rounded-[5px] flex items-center gap-[0.5rem] border border-[#D9D9D9]">
                                        <input type={showPassword.confirmPassword ? "text" : "password"} placeholder="Confirm Password" className=" text-black indent-[0.2rem] h-full w-[90%] lg:w-[95%]" required />
                                        <section className="w-[10%] lg:w-[5%] h-full center" id="confirmPassword">
                                            <FaEye  className={`size-[2rem] cursor-pointer gen-transistion ${showPassword.confirmPassword ? "block" : "hidden"}`} onClick={toggleShowPassword} />
                                            <FaEyeSlash  className={`size-[2rem] cursor-pointer gen-transistion ${showPassword.confirmPassword ? "hidden" : "block"}`} onClick={toggleShowPassword} />
                                        </section>
                                    </section>
                                    <p className="mb-[1.3rem] lg:mb-[1rem] text-[red] text-[1.4rem] font-medium gen-transistion"></p>
                                    <section className="mb-[1.3rem] lg:mb-[1rem] flex items-center">
                                        <input type="checkbox" name="rememberMe" id="rememberMe" className="size-[2rem] rounded-[5px] mr-[0.8rem]" />
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
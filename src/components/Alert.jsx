import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

const Alert = () => {
    const { showModal, setShowModal } = useContext(AppContext),
    modalStyle = showModal.on ? "fixed h-screen w-screen z-50 overflow-y-hidden" : "hidden",
    modalSectionStyle = showModal.success ? "w-[31rem] py-[1.8rem] px-[1.45rem] bg-green-700 text-white rounded-[14.24px]" : "w-[31rem] py-[1.8rem] px-[1.45rem] bg-red-700 text-white rounded-[14.24px]",
    cancelBg = showModal.success ? "bg-red-700 text-white" : "bg-white text-red-700";

    useEffect(() => {
        if (showModal.on) {
            document.body.classList.add("prevent-scrolling");
        } else {
            document.body.classList.remove("prevent-scrolling");
        }

        return () => document.body.classList.add("prevent-scrolling");
    }, [showModal.on]);

    return (
        <div className={modalStyle}>
            <div className="backdrop-blur-[2px] size-full bg-[rgba(203,0,227,0.2)] center font-montserrat">
                <div className={modalSectionStyle}>
                    <div className="min-h-[17.2rem] relative text-center center">
                        <h1 className="text-[2.15rem] font-semibold mb-[1rem] leading-[41px]">{showModal.heading}</h1>
                        <p className="mb-[1.5rem]">{showModal.message}</p>
                        <section className="absolute right-0 top-0 cursor-pointer"><span className={`size-[3rem] rounded-[50%] font-montserrat text-[2rem] center ${cancelBg}`} onClick={() => setShowModal({heading: "", message: "", on: false})}>X</span></section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alert;
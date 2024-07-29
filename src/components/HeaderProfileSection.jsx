import { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import ProfileIcon from "../assets/icons/profile-icon.svg";
import CaretDownArrow from "../assets/icons/caret-down-arrow.svg";

const HeaderProfileSection = () => {
    const [ showProfileDropdown, setShowProfileDropdown ] = useState(false),
    showProfile = showProfileDropdown ? "active" : null,
    { user } = useContext(AppContext);

    const clickHandler = () => {
        setShowProfileDropdown(prevState => !prevState);
    };

    return (
        <section className={`h-[4rem] flex items-center gap-[1rem] show-profile ${showProfile}`}>
            <section className="size-[3.8rem] cursor-pointer" onClick={clickHandler}><img src={ProfileIcon} alt="Profile Icon" className="size-full" /></section>
            <section className="cursor-pointer" onClick={clickHandler}>{user ? `${user.firstname} ${user.lastname[0]}.` : "Profile"}</section>
            <section className="cursor-pointer size-[2.4rem] rotate-[180deg]" onClick={clickHandler}><img src={CaretDownArrow} alt="Caret Down Icon" className="show-profile-caret size-full gen-transistion" /></section>
        </section>
    );
};

export default HeaderProfileSection;
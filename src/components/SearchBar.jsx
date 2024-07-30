import { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import SearchIcon from "../assets/icons/search-icon.svg";
import SearchBarResults from "./SearchBarResults";

const SearchBar = () => {
    const { setShowProfileDropdown, displayedElement, setDisplayedElement } = useContext(AppContext),
    [ formData, setFormData ] = useState({search: ""});

    const changeHandler = event => {
        const { value } = event.target;

        if (value) {
            setDisplayedElement(<SearchBarResults searchText={value} />);
        } else {
            setDisplayedElement(null);
        }

        setFormData(prevFormData => ({
            ...prevFormData,
            search: value
        }));
    };

    return (
        <section className="h-[5.5rem] w-[40rem] bg-white rounded-[55px] flex items-center px-[1.9rem] mr-[1.6rem]" onClick={() => setShowProfileDropdown(false)}>
            <span className="inline-block mr-[0.351rem]"><img src={SearchIcon} alt="Search Icon" /></span>
            <input type="text" value={displayedElement ? formData.search : ""} className="inline-block h-full placeholder:text-inputGray placeholder:font-medium w-[calc(100%-1.9rem)] text-black leading-[2.42rem]" placeholder="Search Events" onChange={changeHandler} />
            {displayedElement}
        </section>
    );
};

export default SearchBar;
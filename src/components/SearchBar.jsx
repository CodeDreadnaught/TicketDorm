import SearchIcon from "../assets/icons/search-icon.svg";

const SearchBar = () => {
    return (
        <section className="h-[5.5rem] w-[40rem] bg-white rounded-[55px] flex items-center px-[1.9rem] mr-[1.6rem]">
            <span className="inline-block mr-[0.351rem]"><img src={SearchIcon} alt="Search Icon" /></span>
            <input type="text" className="inline-block h-full placeholder:text-inputGray placeholder:font-medium w-[calc(100%-1.9rem)] text-black leading-[2.42rem]" placeholder="Search Events" />
        </section>
    );
};

export default SearchBar;
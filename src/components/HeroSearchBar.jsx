import { useNavigate } from "react-router-dom";
import FindEventDefaultResults from "./FindEventDefaultResults";
import FindEventSearchResults from "./FindEventSearchResults";
import BlackIcon from "../assets/icons/hero-search-icon-black.svg";

const HeroSearchBar = props => {
    const navigate = useNavigate(),
    background = props.homepage ? "bg-[rgba(255,255,255,0.85)]" : "bg-[rgba(255,255,255,0.64)]";

    const changeHandler = event => {
        const { value } = event.target;

        if (props.findEventspage) {
            if (value) {
                props.showDisplayedElement(<FindEventSearchResults searchText={value} />);
            } else {
                props.showDisplayedElement(<FindEventDefaultResults />);
            }
        }
    };

    const clickHandler = () => {
        if (props.homepage) {
            navigate("/search");
        }
    };

    return (
        <section className="h-[4rem] lg:h-[5rem] flex w-full" onClick={clickHandler}>
            <section className={`w-[75%] ${background} flex items-center px-[0.8rem] lg:px-[2rem]`}>
                <span className="inline-block size-[2rem] lg:size-[2.4rem] mr-[0.8rem] lg:mr-[1.6rem]">
                    <img src={BlackIcon} alt="SearchIcon" className="size-full" />
                </span>
                <input type="text" className="inline-block w-[calc(100%-1.6rem)] text-black placeholder:text-black placeholder:text-[1.2rem] h-[2rem] lg:placeholder:text-[1.4rem] font-montserrat" placeholder="Search Events" onChange={changeHandler} />
            </section>
            <button className="w-[25%] bg-primaryPurple font-medium lg:font-semibold font-montserrat leading-[1.95rem] lg:leading-[2.438rem] center">Search</button>
        </section>
    );
};

export default HeroSearchBar;
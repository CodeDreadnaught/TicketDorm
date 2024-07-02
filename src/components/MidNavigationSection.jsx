import SearchBar from "./SearchBar";
import NavigationLinks from "./NavigationLinks";

const MidNavigationSection = () => {
    return (
        <section className="hidden lg:flex items-center">
            <SearchBar />
            <NavigationLinks />
        </section>
    );
};

export default MidNavigationSection;
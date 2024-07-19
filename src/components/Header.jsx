import Logo from "./Logo";
import MidNavigationSection from "./MidNavigationSection";
import NavigationCTA from "./NavigationCTA";

const Header = () => {
    return (
        <header>
            <nav className="h-[5rem] lg:h-[8rem] font-inter flex items-center justify-between px-[1.6rem] lg:px-[8.8rem] bg-black text-white w-full fixed">
                <Logo header={true} />
                <MidNavigationSection />
                <NavigationCTA />
            </nav>
        </header>
    );
};

export default Header;
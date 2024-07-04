import AppContext from "../context/AppContext";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = () => {
    return (
        <div className="app-container">
            <AppContext.Provider>
                <Header />
                <Outlet />
                <Footer />
            </AppContext.Provider>
        </div>
    );
};

export default AppLayout;
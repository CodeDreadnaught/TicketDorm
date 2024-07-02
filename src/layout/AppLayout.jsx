import AppContext from "../context/AppContext";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
    return (
        <div className="app-container">
            <AppContext.Provider>
                <Header />
                <Outlet />
            </AppContext.Provider>
        </div>
    );
};

export default AppLayout;
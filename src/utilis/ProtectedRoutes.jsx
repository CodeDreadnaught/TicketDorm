import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const { user } = useContext(AppContext);

    return user ? <Outlet /> : <Navigate to="/sign-in" />

};

export default ProtectedRoutes;
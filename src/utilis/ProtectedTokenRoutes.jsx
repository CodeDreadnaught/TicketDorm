import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedTokenRoutes = () => {
    const { token } = useContext(AppContext);

    return token ? <Outlet /> : <Navigate to="/sign-in" />

};

export default ProtectedTokenRoutes;
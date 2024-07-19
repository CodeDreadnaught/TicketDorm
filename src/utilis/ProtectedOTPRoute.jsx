import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedOTPRoute = () => {
    const { hasOTP } = useContext(AppContext);

    return hasOTP ? <Outlet /> : <Navigate to="/sign-up" />

};

export default ProtectedOTPRoute;
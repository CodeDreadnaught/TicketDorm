import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedPaymentRoute = () => {
    const { verifyPayment } = useContext(AppContext);

    return verifyPayment ? <Outlet /> : <Navigate to="/find-events" />

};

export default ProtectedPaymentRoute;
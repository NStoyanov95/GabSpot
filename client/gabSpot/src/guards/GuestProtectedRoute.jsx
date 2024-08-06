import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function GuestProtectedRoute() {
    const { isAuth } = useContext(AuthContext);

    if (!isAuth) {
        return <Outlet />;
    } else {
        return <Navigate to="/" />;
    }
}

export default GuestProtectedRoute;

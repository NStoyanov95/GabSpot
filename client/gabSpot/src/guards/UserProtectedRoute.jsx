import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function UserProtectedRoute() {
    const { isAuth } = useContext(AuthContext);

    if (isAuth) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" />;
    }
}

export default UserProtectedRoute;

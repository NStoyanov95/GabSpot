import { useContext, useEffect } from "react";
import { logout } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

function Logout(params) {
    const navigate = useNavigate();
    const { changeAuthState } = useContext(AuthContext);
    useEffect(() => {
        (async () => {
            try {
                await logout();
                changeAuthState({});
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return (
        <>
            <h1>Logout</h1>
        </>
    );
}

export default Logout;

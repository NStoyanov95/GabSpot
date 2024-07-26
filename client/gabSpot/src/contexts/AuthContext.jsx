import { createContext, useState } from "react";
import { verifyUser } from "../services/userService";

const AuthContext = createContext();

export function AuthContextProvider(props) {
    const [authData, setAuthData] = useState({});

    useState(() => {
        (async () => {
            try {
                const data = await verifyUser();
                setAuthData(data);
            } catch (error) {
                setAuthData({});
            }
        })();
    }, []);

    const changeAuthState = (data) => {
        setAuthData(data);
    };

    const contextData = {
        userId: authData._id,
        email: authData.email,
        username: authData.username,
        accessToken: authData.accessToken,
        isAuth: !!authData.email,
        changeAuthState,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;

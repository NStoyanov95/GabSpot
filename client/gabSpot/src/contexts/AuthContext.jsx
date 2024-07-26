import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthContextProvider(props) {
    const [authData, setAuthData] = useState({});

    const changeAuthState = (data) => {
        setAuthData(data);
    };

    const contextData = {
        userId: authData._id,
        email: authData.email,
        username: authData.username,
        accessToken: authData.accessToken,
        isAuth: !!authData.accessToken,
        changeAuthState,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;

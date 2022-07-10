import { useState, createContext, useContext } from "react";
import Cookies from 'js-cookie';
const AuthContext = createContext(null);

export const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = () => {
        const auth_token = Cookies.get("APP_ID");
        setUser(auth_token);
    };

    const logout = () => {  // logout function
        setUser(null);
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}
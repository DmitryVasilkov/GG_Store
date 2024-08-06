import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (newUser, callback)=>{
        setUser(newUser);
        callback();
    }

    const logout = (callback) => {
        setUser(null);
        callback();
    }

    const value = { user, login, logout };


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;
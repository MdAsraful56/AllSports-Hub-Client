import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null);

    const info = {
        loader,
        user,
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../firebase/firebase.init';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const info = {
        loader,
        user,
        createUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
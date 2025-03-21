import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null);
    const [photoUrl,setphotoUrl] = useState("")
    const [userName,setUserName] = useState("")

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut=()=>{
        setUser(null)
        toast("Log Out Successfully!")
        return signOut(auth)
    }


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoader(false);
            setUser(currentUser);
        });
        return unsubscribe();
    } ,[]);

    
    const updateInformation = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }


    const info = {
        loader, setLoader,
        user, setUser,
        photoUrl, setphotoUrl,
        userName, setUserName,
        updateInformation,
        createUser,
        signInUser,
        logOut,

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
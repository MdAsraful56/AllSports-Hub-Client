import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut, 
    updateProfile 
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null);
    const [photoUrl, setphotoUrl] = useState("");
    const [userName, setUserName] = useState("");

    // Create User
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign In User
    const signInUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log Out User
    const logOut = () => {
        setLoader(true);
        return signOut(auth)
            .then(() => {
                toast("Log Out Successfully!");
                setLoader(false);
            })
            .catch(error => {
                console.error("Logout Error:", error);
                setLoader(false);
            });
    };

    // Persist Authentication State
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
            if (currentUser) {
                console.log("Currently Logged In User:", currentUser);
            } else {
                console.log("No User Logged In");
            }
        });

        return () => unsubscribe(); // Fix: Properly clean up the listener
    }, []);

    // Update User Profile
    const updateInformation = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    };

    const info = {
        loader, setLoader,
        user, setUser,
        photoUrl, setphotoUrl,
        userName, setUserName,
        updateInformation,
        createUser,
        signInUser,
        logOut
    };

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const AuthProvider = ({children}) => {

    const[user,setUser]=useState(null)

    const creatUser=(email,password)=>{
     return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUSer)=>{
            setUser(currentUSer)
        })
        return ()=>{
            unsubscribe()
        }
    })

    const logOut=()=>{
        return signOut(auth)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const UpdateUser=(currentUSer)=>{
        return updateProfile(auth.currentUser,currentUSer)
    }

    const userInfo={
        user,
        creatUser,
        signIn,
        logOut,
        UpdateUser
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
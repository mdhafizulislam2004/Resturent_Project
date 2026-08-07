import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const AuthProvider = ({children}) => {

    const[user,setUser]=useState(null)
    const[loder,setLoder]=useState(true)

    const googleProvider=new GoogleAuthProvider()

    const creatUser=(email,password)=>{
     return createUserWithEmailAndPassword(auth,email,password)
     setLoder(true)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUSer)=>{
            setUser(currentUSer)
            setLoder(false)
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
        setLoder(true)
    }

    const UpdateUser=(currentUSer)=>{
        return updateProfile(auth.currentUser,currentUSer)
    }

    const resetPassword=(email)=>{
      return  sendPasswordResetEmail(auth,email)
    }

    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const userInfo={
        user,
        creatUser,
        signIn,
        logOut,
        UpdateUser,
        resetPassword,
        loder,
        googleLogin
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
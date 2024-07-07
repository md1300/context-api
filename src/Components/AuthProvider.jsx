import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.init";

export const AuthContext=createContext(null)

const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null)
   const [loading,setLoading]=useState(true)

   const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);

   }

   const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }
   const signInWithGoogle=()=>{
    setLoading(true)
    signInWithPopup(auth,googleProvider)
   }

   const logOut=()=>{
    setLoading(true)
   return signOut(auth)
   }

   useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
    setLoading(false)
        setUser(currentUser)
        console.log('observing current user inside useEffect in authprivider', currentUser)
    })
    return ()=>{
        unSubscribe();
    }
   },[])

    const authInfo={user,createUser,signInUser,logOut,loading,signInWithGoogle}

    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
  };
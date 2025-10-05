import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase";

// export const AuthContext = createContext()
export const AuthContext = createContext();

export const AuthContextProvider = ({Children})=>{
    const [currentUser, setCurrentUser]=useState({})

    useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (users)=>{
            setCurrentUser(users)
            console.log(users);
            
        });
        return () =>{
            unsub()
        }
    }, []);
   
    return(
    <AuthContext.Provider value={(currentUser)}>
    {Children}
    </AuthContext.Provider>
    );
};


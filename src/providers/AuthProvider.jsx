import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

// import axios from "axios";
import app from "../firebase/firebase.config";
import axios from "axios";
import { getRole } from "../hooks/useRole";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    useEffect(()=>{
        if(user){
            getRole(user.email)
            .then(data => setRole(data))
        }
    },[user])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            
            console.log('current user', currentUser);
           // setLoading(false);

          // get and set token
            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then(data =>{
                    // console.log(data.data.token)
                    localStorage.setItem('sports-access-token', data.data.token)
                    setUser(currentUser);
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('sports-access-token')
                setUser(currentUser);
                setLoading(false);
            }

            
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile,
        role,
        setRole
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

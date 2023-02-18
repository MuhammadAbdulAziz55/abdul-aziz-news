import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signUpWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("inside auth state changed", currentUser);
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loginWithGoogle,
    logOut,
    loginWithEmailAndPassword,
    signUpWithEmailAndPassword,
    loading,
    updateUserProfile,
    verifyEmail,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

import { auth } from '../firebase/config';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';


export const signUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
};

export const logout = async () => {
    return await signOut(auth);
};

export const resetPassword = async (email) => {
    return await sendPasswordResetEmail(auth, email);
};


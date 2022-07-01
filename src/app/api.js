import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

export const signUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        const user = userCredential.user;
        await setDoc(doc(db, 'users', user.uid),{});
        return user.uid;
    })
}

export const signIn= async (email, password) => {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result.user.uid;
}

export const getCurrentUserId = async () => await auth.currentUser?.uid;
export const getCurrentUser = async () => await auth.currentUser;
export const logout = async () => await signOut(auth);
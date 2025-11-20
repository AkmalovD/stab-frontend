'use client'

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { error } from "console";

export interface Login {
    email: string;
    password: string;
}

export async function login(email: string, password: string) {
    try {
        const useCred = await signInWithEmailAndPassword(auth, email, password);
        return {user: useCred.user, error: null}
    } catch (e) {
        return {user: null, error: "Error!"};
    }
}
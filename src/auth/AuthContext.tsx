'use client'

import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import { login as firebaseLogin } from './login';


interface AuthContextType {
    user: User | null
    loading: boolean
    login: (email: string, password: string) => Promise<any>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const login = (email: string, password: string) => {
        return firebaseLogin(email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    return (
        <AuthContext.Provider value={{user, loading, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
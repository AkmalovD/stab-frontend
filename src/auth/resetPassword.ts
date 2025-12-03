'use client'

import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "./firebase"
import { FirebaseError } from "firebase/app"
import { success } from "zod"

export async function resetPassword(email: string) {
    try {
        await sendPasswordResetEmail(auth, email)
        return { success: true, error: null }
    } catch(e) {
        if (e instanceof FirebaseError) {
            switch (e.code) {
                case 'auth/user-not-found':
                    return { success: false, error: "Пользователь с таким email не найден" };
                case 'auth/invalid-email':
                    return { success: false, error: "Некорректный формат email адреса" };
                case 'auth/too-many-requests':
                    return { success: false, error: "Слишком много попыток. Попробуйте позже" };
                case 'auth/network-request-failed':
                    return { success: false, error: "Проблемы с подключением к интернету" };
                default:
                    return { success: false, error: "Ошибка отправки письма. Попробуйте позже" };
            }
        }

        return { success: false, error: "Произошла неизвестная ошибка"}
    }
}
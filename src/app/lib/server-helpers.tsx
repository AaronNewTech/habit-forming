import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const { JWT_SECRET } = process.env
const isProduction = process.env.NODE_ENV === 'production';

if (!JWT_SECRET) {
    throw new Error("Invalid env variable: JWT_SECRET");
}

export const generateAuthToken = (_id: string): string => {
    return jwt.sign({ _id }, JWT_SECRET, { expiresIn: "7d" });
}

export const setAuthCookies = (value: string): void => {
    cookies().set({
        name: 'auth-token',
        value: value,
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'strict' : 'lax',
        maxAge: value ? 7*24*60*60 : 0
    })
}
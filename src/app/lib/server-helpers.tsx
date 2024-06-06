import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { IUser } from '../types/index'
import { connectToMongoDB } from './mongodb';
import User from '../models/user';

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

export const isUserAuthorized = async () => {
    const token = cookies().get('auth-token')?.value;

    let user: IUser | null = null;

    if (token) {
        const data = jwt.verify(token, JWT_SECRET);

        if (typeof data !== 'string') {

            try {
                connectToMongoDB().catch(error => { throw new Error(error) });

                user = await User.findById(data._id)

                return user;

            } catch (error) {
                return null;
            }
            
        }

        return user;
    }
    return user;
}
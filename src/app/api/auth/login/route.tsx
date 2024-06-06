import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "../../../lib/mongodb";
import User from "../../../models/user";
import { compare } from "bcryptjs";
import { generateAuthToken, setAuthCookies } from "../../../lib/server-helpers";

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();
        if (!email) {
            return NextResponse.json({success: false, error: "Email is required"}, {status: 400});
        }
        if (!password) {
            return NextResponse.json({success: false, error: "Password is required"}, {status: 400});
        }

        connectToMongoDB().catch(err => NextResponse.json(err));

        const user = await User.findOne({email}).select("password");

        if (!user) {
            return NextResponse.json({success: false, error: "User with this email not found"}, {status: 404});
        }

        const isPasswordCorrect = await compare(password, user.password); 

        if (!isPasswordCorrect) {
            return NextResponse.json({success: false, error: "Incorrect password"}, {status: 400});
        }

        const authToken = generateAuthToken(user._id);

        setAuthCookies(authToken);

        return NextResponse.json({success: true, msg: "User logged in successfully"}, {status: 200});

    } catch (error) {
        return NextResponse.json({success: false, error}, {status: 500});
    }
}
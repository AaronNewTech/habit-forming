import { isUserAuthorized } from "@/app/lib/server-helpers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const user = await isUserAuthorized()

        if (!user) {
            return NextResponse.json({success: false, meg: "Please login to view your profile"}, {status: 403})
        }
        return NextResponse.json({success: true, user}, {status: 200})
    }
    catch (error) {
        return NextResponse.json({success: false, error}, {status: 500})
    }
}
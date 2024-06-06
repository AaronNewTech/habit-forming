import { NextRequest, NextResponse } from 'next/server';
import { setAuthCookies } from '@/app/lib/server-helpers';

export async function POST(request: NextRequest) {
    try {
        setAuthCookies("");

        return NextResponse.json({success: true, msg: "User logged out successfully"})
    }
    catch (error) {
        return NextResponse.json({success: false, error}, {status: 500});
    }
}
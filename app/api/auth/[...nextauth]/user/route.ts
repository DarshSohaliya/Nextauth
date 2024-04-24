import { NEXT_AUTH } from "@/app/lib/auth"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function GET() {
    const sesssion = await  getServerSession(NEXT_AUTH )
    return NextResponse.json({
        sesssion
    })
}
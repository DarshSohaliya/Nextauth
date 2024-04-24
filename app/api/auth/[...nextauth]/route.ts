import { NEXT_AUTH } from "@/app/lib/auth";
import { } from "next-auth"
import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";


const handler = NextAuth(NEXT_AUTH
);

export const GET = handler;
export const POST = handler;
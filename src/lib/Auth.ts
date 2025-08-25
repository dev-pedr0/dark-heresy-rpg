import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
adapter: PrismaAdapter(prisma),
providers: [
    GitHubProvider({
    clientId: process.env.GITHUB_ID!,
    clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
        name: "Credentials",
        credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Senha", type: "password" },
        },
        async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) {
                throw new Error("Email e senha são obrigatórios.");
            }

            const user = await prisma.user.findUnique({
                where: { email: credentials.email },
            });

            if (!user || !user.hashedPassword) {
                throw new Error("Email não encontrado ou senha inválida.");
            }

            const isValid = await bcrypt.compare(
                credentials.password,
                user.hashedPassword,  
            );

            if (!isValid) {
                throw new Error("Senha incorreta.");
            }

            return user;
        },
    }),
],
debug: true,
session: {
    strategy: "jwt",
},
callbacks: {
    async session({ session, token }) {
    if (session.user && token.sub) {
        session.user.id = token.sub;
    }
    return session;
    },
},
};
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "Todos os campos são obrigatórios." },
                { status: 400 },
            );
        }

        const existingUser = await prisma.user.findUnique({ where: { email }});
        if (existingUser) {
            return NextResponse.json(
                { message: "Este email já está cadastrado." },
                { status: 400 },
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword,
            },
        });

        return NextResponse.json({ message: "Usuário criado com sucesso!" }, { status: 201 });
    } catch (error) {
        console.error("Erro ao registrar usuário:", error);
        return NextResponse.json({ message: "Erro interno do servidor." }, { status: 500 });
    }
}
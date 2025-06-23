"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";


export default function DashboardPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return <p className="text-white">Carregando...</p>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#140D0B] text-white p-4">
            <h1 className="text-4xl font-bold mb-4 text-[#FCB02D]">Bem-vindo ao Painel</h1>
            <div className="bg-[#835214] p-6 rounded-xl shadow-lg w-full max-w-lg text-center space-y-4">
                <p>👤 Nome: <strong>{session?.user?.name}</strong></p>
                <p>📧 Email: <strong>{session?.user?.email}</strong></p>
                <p>🆔 ID: <strong>{session?.user?.id}</strong></p>

                <button
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className="mt-6 bg-[#FCB02D] text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-500 transition"
                >
                    Sair
                </button>
            </div>
        </div>
    );
}
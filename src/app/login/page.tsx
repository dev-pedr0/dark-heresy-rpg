"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LoginPage() {
    const {data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/dashboard");
        }
    }, [status, router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#140D0B] text-white">
            <div className="bg-[#835214] p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
                <h1 className="text-3xl font-bold mb-4 text-[#7D0000]">Entrar no Sistema</h1>
                <p className="mb-6 text-sm text-white">
                    Faça login com sua conta do GitHub para acessar suas fichas e rolar dados.
                </p>
                <button
                    onClick={() => signIn("github")}
                    className="bg-[#FCB02D] text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-500 transition"
                >
                    Entrar com GitHub
                </button>
            </div>
        </div>
    );
}
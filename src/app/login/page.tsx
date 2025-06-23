"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
    const {data: session, status } = useSession();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/dashboard");
        }
    }, [status, router]);

    const handleCredentialsLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (res?.error) {
            setError("Email ou senha Incorretos.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#140D0B] text-white">
            <div className="bg-[#835214] p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
                <h1 className="text-3xl font-bold mb-4 text-[#7D0000]">Entrar no Sistema</h1>
                <p className="mb-6 text-sm text-white">
                    Faça login com sua conta para acessar suas fichas e rolar dados.
                </p>

                <div className="space-y-4">
                    <button
                        onClick={() => signIn("github")}
                        className="bg-[#FCB02D] text-black font-semibold px-6 py-3 rounded-xl w-full hover:bg-yellow-500 transition"
                    >
                        Entrar com GitHub
                    </button>

                    <button
                        onClick={() => signIn("google")}
                        className="bg-white text-black font-semibold px-6 py-3 rounded-xl w-full hover:bg-gray-300 transition"
                    >
                        Entrar com Google
                    </button>

                    <form onSubmit={handleCredentialsLogin} className="space-y-3 mt-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-md text-black"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-md text-black"
                            required
                        />
                        {error && <p className="text-red-300 text-sm">{error}</p>}
                        <button
                            type="submit"
                            className="bg-[#7D0000] text-white px-4 py-2 w-full rounded-xl hover:bg-red-800 transition"
                        >
                            Entrar com Email e Senha
                        </button>
                    </form>

                    <Link
                        href="/register"
                        className="bg-[#FCB02D] text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition"
                    >
                        Crie sua Conta
                    </Link>
                </div>
            </div>
        </div>
    );
}
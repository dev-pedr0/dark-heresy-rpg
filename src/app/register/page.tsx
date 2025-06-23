"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";

export default function ResgisterPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, email, password}),
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.message || "Erro ao registrar.");
        } else {
            router.push("/login");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#140D0B] text-white">
            <form
                onSubmit={handleRegister}
                className="bg-[#835214] p-8 rounded-2xl shadow-lg w-full max-w-md text-center space-y-4"
            >
                <h1 className="text-3xl font-bold mb-2 text-[#7D0000]">Criar Conta</h1>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded-md text-black"
                    required
                />
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
                    Registrar
                </button>
            </form>
        </div>
    );
}
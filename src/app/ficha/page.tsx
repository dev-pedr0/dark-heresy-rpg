"use client"

import { ABREVIACOES_CARACTERISTICAS, CARACTERISTICAS } from "@/utils/caracteristicas";
import { useEffect, useState } from "react";

type Ficha = {
    origem: {
        nome: string;
        bonus: string;
        talentos: string[];
        efeitoNaArma?: string;
        aptidoes: string;
        vida: number;
        limiteDestino: number;
    } | null;
    atributos: { [atributo: string]: number } | null;
    background: {
        nome: string;
        bonus: string;
        pericias: string[];
        talentos: string[];
        equipamentos: string[];
        aptidoes: string[];
    } | null;
    funcao: {
        nome: string;
        bonus: string;
        talentos: string[];
        aptidoes: string[];
    } | null;
    dadosFinais: {
        aptidoes: string[];
        avançoElite?: string;
        nomePersonagem: string;
        nomeJogador: string;
        idade?: number;
        aparencia: string;
        historia: string;
        genero: "masculino" | "feminino";
        divinacao: {
        texto: string;
        efeito: string;
        } | null;
        aliados?: string[];
        inimigos?: string[];
    };
};

export default function FichaPage() {
    const [ficha, setFicha] = useState<Ficha | null>(null);
    const [aliadosTexto, setAliadosTexto] = useState("");
    const [inimigosTexto, setInimigosTexto] = useState("");

    useEffect(() => {
        const raw = localStorage.getItem("ficha-personagem-temp");
        if (raw) {
        setFicha(JSON.parse(raw));
        }
    }, []);

    const handleChange = (field: string, value: string) => {
        if (!ficha) return;

        const novaFicha = { ...ficha };

        switch (field) {
        case "origem":
            if (novaFicha.origem) novaFicha.origem.nome = value;
            break;
        case "background":
            if (novaFicha.background) novaFicha.background.nome = value;
            break;
        case "funcao":
            if (novaFicha.funcao) novaFicha.funcao.nome = value;
            break;
        case "avançoElite":
            novaFicha.dadosFinais.avançoElite = value;
            break;
        case "profecia":
            if (novaFicha.dadosFinais.divinacao)
            novaFicha.dadosFinais.divinacao.texto = value;
            break;
        case "nomeJogador":
            novaFicha.dadosFinais.nomeJogador = value;
            break;
        case "genero":
            novaFicha.dadosFinais.genero = value as "masculino" | "feminino";
            break;
        case "idade":
            novaFicha.dadosFinais.idade = Number(value);
            break;
        }

        setFicha(novaFicha);
    };

    const handleListChange = (field: "aliados" | "inimigos", value: string) => {
        if (!ficha) return;

        const novaFicha = { ...ficha };
        novaFicha.dadosFinais[field] = value
            .split("\n")
            .map((item) => item.trim())
            .filter((item) => item.length > 0);

        setFicha(novaFicha);
    };

    if (!ficha) {
        return <p className="text-center mt-10">Nenhuma ficha encontrada.</p>;
    }

    return (
        <main className="p-6 max-w-[90%] mx-auto space-y-4 border"
            style={{ color: "var(--color-text)", backgroundColor: "var(--color-darkblack)", borderColor: "var(--color-darkred)"}}
        >
            <h1 className="text-4xl font-bold text-center"
                style={{ color: "var(--color-mustard)"}}
            >
                {ficha.dadosFinais.nomePersonagem}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label className="block text-sm font-medium">Planeta de Origem</label>
                    <input
                    value={ficha.origem?.nome || ""}
                    onChange={(e) => handleChange("origem", e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Background</label>
                    <input
                    value={ficha.background?.nome || ""}
                    onChange={(e) => handleChange("background", e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Função</label>
                    <input
                    value={ficha.funcao?.nome || ""}
                    onChange={(e) => handleChange("funcao", e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Avanço de Elite</label>
                    <input
                    value={ficha.dadosFinais.avançoElite || ""}
                    onChange={(e) => handleChange("avançoElite", e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Profecia da Divinação</label>
                    <input
                    value={ficha.dadosFinais.divinacao?.texto || ""}
                    onChange={(e) => handleChange("profecia", e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
                    />
                </div>     

                <div>
                    <label className="block text-sm font-medium">Gênero</label>
                    <select
                    value={ficha.dadosFinais.genero}
                    onChange={(e) => handleChange("genero", e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
                    >
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium">Idade</label>
                    <input
                        type="number"
                        value={ficha.dadosFinais.idade ?? 0}
                        onChange={(e) => handleChange("idade", e.target.value)}
                        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Nome do Jogador</label>
                    <input
                    value={ficha.dadosFinais.nomeJogador}
                    onChange={(e) => handleChange("nomeJogador", e.target.value)}
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
                    />
                </div>
            </div>

            <div className="flex flex-col mt-6 pt-6 lg:flex-row">
                {/* Lado esquerdo */}
                <div className="w-full lg:w-1/2 lg:pr-4 lg:border-r lg:border-white">
                    
                    <div className="flex justify-around">
                        <div className="text-center">
                            <label className="block text-sm font-medium mb-1">Aliados</label>
                            <textarea
                                value={(ficha.dadosFinais.aliados || []).join("\n")}
                                onChange={(e) => handleListChange("aliados", e.target.value)}
                                className="w-full h-24 p-2 bg-zinc-800 border border-zinc-600 rounded text-white resize-none"
                                placeholder="Liste seus aliados, um por linha"
                            />
                        </div>

                        <div className="text-center">
                            <label className="block text-sm font-medium mb-1">Inimigos</label>
                            <textarea
                                value={(ficha.dadosFinais.inimigos || []).join("\n")}
                                onChange={(e) => handleListChange("inimigos", e.target.value)}
                                className="w-full h-24 p-2 bg-zinc-800 border border-zinc-600 rounded text-white resize-none"
                                placeholder="Liste seus inimigos, um por linha"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">Características</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {CARACTERISTICAS.map((caracteristica) => {
                            const valor = ficha?.atributos?.[caracteristica] ?? 0;
                            const dezena = Math.floor(valor / 10);
                            const melhorias = 0;
                            const abreviacao = ABREVIACOES_CARACTERISTICAS[caracteristica];

                            return (
                                <div key={caracteristica} className="bg-zinc-900 p-4 rounded shadow space-y-2 border border-zinc-700">
                                    <div className="flex justify-between text-sm text-zinc-300">
                                        <span className="font-semibold">
                                            {caracteristica} / {abreviacao}
                                        </span>
                                        <span>Valor: <strong>{valor}</strong></span>
                                        <span>Bônus: <strong>{dezena}</strong></span>
                                    </div>

                                    <div className="text-xs text-zinc-400">
                                        Melhorias:
                                        <div className="flex gap-1 mt-1">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <div
                                                key={i}
                                                className={`w-4 h-4 rounded-full ${
                                                    i < melhorias ? "bg-yellow-500" : "bg-zinc-700"
                                                }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                            })}
                        </div>
                    </div>

                </div>

                {/* Lado direito */}
                <div className="w-full lg:w-1/2 lg:pl-4">
                    a
                </div>
            </div>
        </main>
    );
}
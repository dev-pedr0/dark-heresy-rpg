"use client"

import AllyEnemySection from "@/components/character-data/AllyEnemySection";
import CharacteristicSection from "@/components/character-data/CharacteristicSection";
import HeaderSection from "@/components/character-data/HeaderSection";
import PericiasSection from "@/components/character-data/PericiasScetion";
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

    useEffect(() => {
        const raw = localStorage.getItem("ficha-personagem-temp");
        if (raw) {
            const f: Ficha = JSON.parse(raw);
            setFicha(f);
        }
    }, []);

    if (!ficha) {
        return <p className="text-center mt-10">Nenhuma ficha encontrada.</p>;
    }

    const handleHeaderChange = (field: string, value: string) => {
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

    const handleAllyEnemyChange = (field: "aliados" | "inimigos", value: string) => {
        if (!ficha) return;

        const novaFicha = { ...ficha };
        novaFicha.dadosFinais[field] = value
            .split("\n")
            .map((item) => item.trim())
            .filter((item) => item.length > 0);

        setFicha(novaFicha);
    };

    return (
        <main className="p-6 max-w-[90%] mx-auto space-y-4 border"
            style={{ color: "var(--color-text)", backgroundColor: "var(--color-darkblack)", borderColor: "var(--color-darkred)"}}
        >
            <h1 className="text-4xl font-bold text-center"
                style={{ color: "var(--color-mustard)"}}
            >
                {ficha.dadosFinais.nomePersonagem}
            </h1>

            <HeaderSection ficha={ficha} onChange={handleHeaderChange}/>

            <div className="flex flex-col mt-6 pt-6 lg:flex-row">
                {/* Lado esquerdo */}
                <div className="w-full lg:w-1/2 lg:pr-4 lg:border-r lg:border-white">
                    
                    <AllyEnemySection
                        aliados={ficha.dadosFinais.aliados || []}
                        inimigos={ficha.dadosFinais.inimigos || []}
                        onChange={handleAllyEnemyChange}
                    />

                    <CharacteristicSection atributos={ficha.atributos || {}}/>

                    <PericiasSection ficha={ficha} onChange={(novas) => {
                        console.log("Perícias atualizadas:", novas);}}
                    />

                </div>

                {/* Lado direito */}
                <div className="w-full lg:w-1/2 lg:pl-4">
                    a
                </div>
            </div>
        </main>
    );
}
"use client"

import AllyEnemySection from "@/components/character-data/AllyEnemySection";
import AptidoesSection from "@/components/character-data/AptitudesSection";
import ArmorAndDefense from "@/components/character-data/ArmorAndDefense";
import CharacteristicSection from "@/components/character-data/CharacteristicSection";
import ExtraSection from "@/components/character-data/ExtraSection";
import Gear from "@/components/character-data/Gear";
import HeaderSection from "@/components/character-data/HeaderSection";
import InsanityCorruptionSection from "@/components/character-data/InsanityCorruptionSection";
import MovementAndFatigeSection from "@/components/character-data/MovementAndFatigeSection";
import MovementFadige from "@/components/character-data/MovementAndFatigeSection";
import PericiasSection from "@/components/character-data/PericiasSection";
import PsykerSection from "@/components/character-data/PsykerSection";
import TalentosETracosSection from "@/components/character-data/TalentoseTracosSection";
import WeaponSection from "@/components/character-data/WeaponSection";
import XpFateSection from "@/components/character-data/XpFateSection";
import { Armadura } from "@/data/armaduras";
import { Arma, ARMAS } from "@/data/armas";
import { montarPericiasComNiveis, PericiaComNivel } from "@/data/pericias";
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
        origemNome: string; //vem de origem.nome;
        atributosPersonagem: { [atributo: string]: number } | null; //vem de atributos
        backgroundNome?: string //vem de background.nome
        funcaoNome?: string; //vem de funcao.nome
        aptidoes: string[]; //vem de origem.aptidoes, background.aptidoes, funcao.aptidoes
        avancoElite?: string;
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
        xpDisponivel?: number;
        xpGasto?: number;
        destinoTotal?: number; //vem de origem.limiteDestino
        destinoAtual?: number;
        pericias: PericiaComNivel[]; //background.pericias
        atributos: {
            [atributo: string]: {
                valorFinal: number;
                melhorias: number;
            };
        };
        insanidade: number;
        traumas: string;
        corrupcao: number;
        malignancias: string;
        mutacoes: string[];
        talentos: {
            nome: string;
            especializacao?: string;
            descricao: string;
        }[]; //vem de origem.bonus, origem.talentos, background.bonus, background.talentos, funcao.bonus, função.talentos
        tracos?: { 
            nome: string; 
            nivel?: number; 
            descricao: string 
        }[];
        equipamentos?: string[]; //vem de background.equipamentos
        armas?: Arma[];
        armaduras?: Armadura[];
        defesaPorLocal: {
           "Cabeça": { resistencia: 0, defesa: 0 },
            "Braço Esquerdo": { resistencia: 0, defesa: 0 },
            "Braço Direito": { resistencia: 0, defesa: 0 },
            "Corpo": { resistencia: 0, defesa: 0 },
            "Perna Esquerda": { resistencia: 0, defesa: 0 },
            "Perna Direita": { resistencia: 0, defesa: 0 }, 
        };
        vidatotal?: number; //vem de origem.vida
        vidaAtual?: number;
        danoCritico?: number;
        condicoes?: string;
        movimento?: {
            parcial?: number;
            total?: number;
            disparada?: number;
            corrida?: number;
        }
        fadigaLimite?: number;
        fadigaAtual?: number;
        psiNivel?: number;
        poderesPsiquicos?: string;
        outrasHabilidades?: string;
    };
};

export default function FichaPage() {
    const [ficha, setFicha] = useState<Ficha | null>(null);

    useEffect(() => {
        const raw = localStorage.getItem("ficha-personagem-temp");
        if (raw) {
            const f: Ficha = JSON.parse(raw);
            if (f.background?.pericias && !f.dadosFinais.pericias?.length) {
                f.dadosFinais.pericias = montarPericiasComNiveis(f.background.pericias);
            }
             if (
                f.background?.equipamentos?.length &&
                (!f.dadosFinais.armas || !f.dadosFinais.armas.length)
                ) {
                const armasDoBackground = f.background.equipamentos
                    .map((nomeEq) =>
                    ARMAS.find((arma) => arma.nome.toLowerCase() === nomeEq.toLowerCase())
                    )
                    .filter((a): a is Arma => !!a);

                f.dadosFinais.armas = armasDoBackground;
            }
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
            novaFicha.dadosFinais.avancoElite = value;
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

    const handlePericiasChange = (novasPericias: PericiaComNivel[]) => {
        if (!ficha) return;
        const novaFicha = { ...ficha };
        novaFicha.dadosFinais.pericias = novasPericias;
        setFicha(novaFicha);
    };

    const handleAptidoesChange = (novasAptidoes: string[]) => {
        if (!ficha) return;

        const novaFicha = { ...ficha };
        novaFicha.dadosFinais.aptidoes = novasAptidoes;
        setFicha(novaFicha);     
    };

    const handleXpDestinoChange = ({
        xpDisponivel,
        destinoLimite,
        destinoAtual,
    }: {
        xpDisponivel: number;
        destinoLimite: number;
        destinoAtual: number;
    }) => {
        if (!ficha) return;
        const novaFicha = { ...ficha };

        novaFicha.dadosFinais.xpDisponivel = xpDisponivel;
        novaFicha.dadosFinais.destinoAtual = destinoAtual;

        if (novaFicha.origem) {
            novaFicha.origem.limiteDestino = destinoLimite;
        }

        setFicha(novaFicha);
    };

    const handleArmasChange = (novasArmas: Arma[]) => {
        if (!ficha) return;
        const novaFicha = { ...ficha };
        novaFicha.dadosFinais.armas = novasArmas;
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

                    <CharacteristicSection
                        atributos={ficha.atributos || {}}
                        dadosFinais={ficha.dadosFinais?.atributos || {}}
                        onChange={(atributo, novoBase, novasMelhorias) => {
                            const novaFicha = {...ficha};
                            if (!novaFicha.atributos) novaFicha.atributos = {};
                            novaFicha.atributos[atributo] = novoBase;
                            if (!novaFicha.dadosFinais.atributos) novaFicha.dadosFinais.atributos = {};
                            novaFicha.dadosFinais.atributos[atributo] = {
                                melhorias: novasMelhorias,
                                valorFinal: novoBase,
                            };
                            setFicha(novaFicha);
                        }}  
                    />

                    <PericiasSection ficha={ficha} onChange={handlePericiasChange} />

                    <AptidoesSection 
                        aptidoesPersonagem={ficha.dadosFinais.aptidoes || []} 
                        onChange={handleAptidoesChange}
                    />

                    <XpFateSection
                        xpDisponivel={ficha.dadosFinais.xpDisponivel ?? 0}
                        xpGasto={ficha.dadosFinais.xpGasto ?? 0}
                        destinoAtual={ficha.dadosFinais.destinoAtual ?? ficha.origem?.limiteDestino ?? 0}
                        destinoLimite={ficha.origem?.limiteDestino ?? 0}
                        onChange={handleXpDestinoChange}
                    />

                    <InsanityCorruptionSection
                        insanidade={ficha.dadosFinais.insanidade ?? 0}
                        traumas={ficha.dadosFinais.traumas ?? ""}
                        corrupcao={ficha.dadosFinais.corrupcao ?? 0}
                        malignancias_mutacao={ficha.dadosFinais.malignancias ?? ""}
                        corrupcao_marcados={ficha.dadosFinais.mutacoes ?? []}
                        onChangeInsanidade={(novaInsanidade, novosTraumas) => {
                            const novaFicha = { ...ficha };
                            novaFicha.dadosFinais.insanidade = novaInsanidade;
                            novaFicha.dadosFinais.traumas = novosTraumas;
                            setFicha(novaFicha);
                        }}
                        onChangeCorrupcao={(novoValor, novoTexto, novasMarcacoes) => {
                            const novaFicha = { ...ficha };
                            novaFicha.dadosFinais.corrupcao = novoValor;
                            novaFicha.dadosFinais.malignancias = novoTexto;
                            novaFicha.dadosFinais.mutacoes = novasMarcacoes;
                            setFicha(novaFicha);
                        }} 
                    />
                </div>

                {/* Lado direito */}
                <div className="w-full lg:w-1/2 lg:pl-4">
                                        <TalentosETracosSection
                        ficha={ficha}
                        onChange={(novosTalentos, novosTracos) => {
                            const novaFicha = { ...ficha };
                            novaFicha.dadosFinais.talentos = novosTalentos;
                            novaFicha.dadosFinais.tracos = novosTracos;
                            setFicha(novaFicha);
                        }}
                    />

                    <WeaponSection
                        armas={ficha.dadosFinais.armas || []}
                        setArmas={handleArmasChange}
                    />

                    <ArmorAndDefense
                        ficha={ficha} setFicha={setFicha}
                    />

                    <Gear
                        ficha={ficha} setFicha={setFicha}
                    />

                    <MovementAndFatigeSection
                        ficha={ficha} setFicha={setFicha}
                    />

                    <PsykerSection
                        ficha={ficha} setFicha={setFicha}
                    />

                    <ExtraSection
                        ficha={ficha} setFicha={setFicha}
                    />
                </div>
            </div>
        </main>
    );
}
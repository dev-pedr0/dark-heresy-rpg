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
import PericiasSection from "@/components/character-data/PericiasSection";
import PsykerSection from "@/components/character-data/PsykerSection";
import TalentosETracosSection from "@/components/character-data/TalentoseTracosSection";
import WeaponSection from "@/components/character-data/WeaponSection";
import XpFateSection from "@/components/character-data/XpFateSection";
import { Armadura } from "@/data/armaduras";
import { Arma, ARMAS } from "@/data/armas";
import { montarPericiasComNiveis, PericiaComNivel } from "@/data/pericias";
import prisma from "@/lib/prisma";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export type Ficha = {
  id: string;
  origemNome: string;
  atributosPersonagem: { [atributo: string]: number } | null;
  backgroundNome?: string;
  funcaoNome?: string;
  aptidoes: string[];
  avancoElite?: string;
  nomePersonagem: string;
  nomeJogador: string;
  idade?: number;
  aparencia: string;
  historia: string;
  genero: "masculino" | "feminino";
  divinacao: { texto: string; efeito: string } | null;
  aliados: string[];
  inimigos: string[];
  xpDisponivel?: number;
  xpGasto?: number;
  destinoTotal?: number;
  destinoAtual?: number;
  pericias: PericiaComNivel[];
  atributos: { [atributo: string]: { valorFinal: number; melhorias: number } };
  insanidade: number;
  traumas: string;
  corrupcao: number;
  malignancias: string;
  mutacoes: string[];
  talentos: { nome: string; especializacao?: string; descricao: string }[];
  tracos: { nome: string; nivel?: number; descricao: string }[];
  equipamentos: string[];
  armas: Arma[];
  armaduras: Armadura[];
  defesaPorLocal: {
    Cabeça: { resistencia: number; defesa: number };
    "Braço Esquerdo": { resistencia: number; defesa: number };
    "Braço Direito": { resistencia: number; defesa: number };
    Corpo: { resistencia: number; defesa: number };
    "Perna Esquerda": { resistencia: number; defesa: number };
    "Perna Direita": { resistencia: number; defesa: number };
  };
  vidatotal?: number;
  vidaAtual?: number;
  danoCritico?: number;
  condicoes?: string;
  movimento?: { parcial?: number; total?: number; disparada?: number; corrida?: number };
  fadigaLimite?: number;
  fadigaAtual?: number;
  psiNivel?: number;
  poderesPsiquicos?: string;
  outrasHabilidades?: string;
};

export default function FichaPage() {
    const [ficha, setFicha] = useState<Ficha | null>(null);
    const { data: session } = useSession();

    useEffect(() => {
        const fetchFicha = async () => {
        if (!session?.user?.id) {
            setFicha(null);
            return;
        }

        try {
            const character = await prisma.character.findFirst({
            where: { userId: session.user.id },
            });

            if (character) {
            const fichaFormatada: Ficha = {
                id: character.id,
                origemNome: character.origemNome || "",
                atributosPersonagem: (typeof character.atributosPersonagem === 'object' && character.atributosPersonagem !== null ? character.atributosPersonagem : {}) as { [atributo: string]: number } | null,
                backgroundNome: character.backgroundNome || undefined,
                funcaoNome: character.funcaoNome || undefined,
                aptidoes: character.aptidoes || [],
                avancoElite: character.avancoElite || undefined,
                nomePersonagem: character.nomePersonagem || "",
                nomeJogador: character.nomeJogador || "",
                idade: character.idade || undefined,
                aparencia: character.aparencia || "",
                historia: character.historia || "",
                genero: (character.genero as "masculino" | "feminino") || "masculino",
                divinacao: (typeof character.divinacao === 'object' && character.divinacao !== null && 'texto' in character.divinacao && 'efeito' in character.divinacao ? character.divinacao : null) as { texto: string; efeito: string } | null,
                aliados: character.aliados || [],
                inimigos: character.inimigos || [],
                xpDisponivel: character.xpDisponivel || 0,
                xpGasto: character.xpGasto || 0,
                destinoTotal: character.destinoTotal || 0,
                destinoAtual: character.destinoAtual || 0,
                pericias: (Array.isArray(character.pericias) && character.pericias.every(p => typeof p === 'object' && p !== null && 'nome' in p && 'nivel' in p) ? character.pericias : montarPericiasComNiveis([])) as PericiaComNivel[],
                atributos: (character.atributos as { [atributo: string]: { valorFinal: number; melhorias: number } }) || {},
                insanidade: character.insanidade || 0,
                traumas: character.traumas || "",
                corrupcao: character.corrupcao || 0,
                malignancias: character.malignancias || "",
                mutacoes: character.mutacoes || [],
                talentos: (character.talentos as { nome: string; especializacao?: string; descricao: string }[]) || [],
                tracos: (character.tracos as { nome: string; nivel?: number; descricao: string }[]) || [],
                equipamentos: character.equipamentos || [],
                armas: (character.armas as Arma[]) || character.equipamentos
                    .map((nomeEq) => ARMAS.find((arma) => arma.nome.toLowerCase() === nomeEq.toLowerCase()))
                    .filter((a): a is Arma => !!a),
                armaduras: (character.armaduras as Armadura[]) || [],
                defesaPorLocal: (character.defesaPorLocal as any) || {
                Cabeça: { resistencia: 0, defesa: 0 },
                "Braço Esquerdo": { resistencia: 0, defesa: 0 },
                "Braço Direito": { resistencia: 0, defesa: 0 },
                Corpo: { resistencia: 0, defesa: 0 },
                "Perna Esquerda": { resistencia: 0, defesa: 0 },
                "Perna Direita": { resistencia: 0, defesa: 0 },
                },
                vidatotal: character.vidatotal || 0,
                vidaAtual: character.vidaAtual || 0,
                danoCritico: character.danoCritico || 0,
                condicoes: character.condicoes || "",
                movimento: (character.movimento as any) || undefined,
                fadigaLimite: character.fadigaLimite || undefined,
                fadigaAtual: character.fadigaAtual || undefined,
                psiNivel: character.psiNivel || undefined,
                poderesPsiquicos: character.poderesPsiquicos || undefined,
                outrasHabilidades: character.outrasHabilidades || undefined,
            };

            setFicha(fichaFormatada);
            } else {
            setFicha(null);
            }
        } catch (error) {
            console.error("Erro ao buscar ficha:", error);
            setFicha(null);
        }
        };

    fetchFicha();
    }, [session]);

    if (!ficha) {
        return <p className="text-center mt-10">Nenhuma ficha encontrada.</p>;
    }

    const updateFicha = async (updates: Partial<Ficha>) => {
        const novaFicha = { ...ficha, ...updates };
        setFicha(novaFicha);

        const dataToUpdate: any = { ...updates };

        // Mapear campos Json para garantir compatibilidade com Prisma
        if (updates.pericias) {
            dataToUpdate.pericias = updates.pericias.map(p => ({ nome: p.nome, nivel: p.nivel }));
        }
        if (updates.atributosPersonagem) {
            dataToUpdate.atributosPersonagem = { ...updates.atributosPersonagem };
        }
        if (updates.atributos) {
            dataToUpdate.atributos = { ...updates.atributos };
        }
        if (updates.talentos) {
            dataToUpdate.talentos = updates.talentos.map(t => ({ nome: t.nome, especializacao: t.especializacao, descricao: t.descricao }));
        }
        if (updates.tracos) {
            dataToUpdate.tracos = updates.tracos.map(t => ({ nome: t.nome, nivel: t.nivel, descricao: t.descricao }));
        }
        if (updates.armas) {
            dataToUpdate.armas = updates.armas; // Ajuste conforme tipo de Arma
        }
        if (updates.armaduras) {
            dataToUpdate.armaduras = updates.armaduras; // Ajuste conforme tipo de Armadura
        }
        if (updates.defesaPorLocal) {
            dataToUpdate.defesaPorLocal = { ...updates.defesaPorLocal };
        }
        if (updates.divinacao) {
            dataToUpdate.divinacao = { ...updates.divinacao };
        }

        try {
            await prisma.character.update({
            where: { id: ficha.id },
            data: dataToUpdate,
            });
        } catch (error) {
            console.error("Erro ao atualizar ficha:", error);
        }
        };

    return (
        <main className="p-6 max-w-[90%] mx-auto space-y-4 border"
            style={{ color: "var(--color-text)", backgroundColor: "var(--color-darkblack)", borderColor: "var(--color-darkred)"}}
        >
            <h1 className="text-4xl font-bold text-center"
                style={{ color: "var(--color-mustard)"}}
            >
                {ficha.nomePersonagem}
            </h1>

            <HeaderSection ficha={ficha} onChange={(updates: Partial<Ficha>) => updateFicha(updates)} />
{/*             
            <div className="flex flex-col mt-6 pt-6 lg:flex-row">
                { Lado esquerdo }
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

                { Lado direito }
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
            </div> */}
        </main>
    );
}
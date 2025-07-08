"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import OriginSelection from "@/components/character-creation/OriginSelection";
import AtributoSelector from "@/components/character-creation/AtributoSelector";
import BackgroundSelector from "@/components/character-creation/BackgroundSelector";
import FuncaoSelector from "@/components/character-creation/FuncaoSelector";
import FinalElements from "@/components/character-creation/FinalElements";

export default function CharacterWizard() {
    const [step, setStep] = useState(1);
    const [origin, setOrigin] = useState<any>(null);
    const [pontosDestino, setPontosDestino] = useState<number | null>(null);
    const [bencaoResultado, setBencaoResultado] = useState<number | null>(null);
    const [bencaoTentada, setBencaoTentada] = useState(false);
    const [pontosDeVida, setPontosDeVida] = useState<number | null>(null);
    const [atributos, setAtributos] = useState<{ [atributo: string]: number } | null>(null);
    const [backgroundSelecionado, setBackgroundSelecionado] = useState<any>(null);
    const [funcaoSelecionada, setFuncaoSelecionada] = useState<any>(null);
    const router = useRouter();

    const [ficha, setFicha] = useState({
        origem: null as null | {
            nome: string;
            bonus: string;
            talentos: string[];
            efeitoNaArma?: string;
            aptidoes: string;
            vida: number;
            limiteDestino: number;            
        },
        atributos: null as null | {
            [atributo: string]: number;
        },
        background: null as null | {
            nome: string;
            bonus: string;
            pericias: string[];
            talentos: string[];
            equipamentos: string[];
            aptidoes: string[];
        },
        funcao: null as null | {
            nome: string;
            bonus: string;
            talentos: string[];
            aptidoes: string[];
        },
        dadosFinais: {
            aptidoes: [] as string[],
            nomePersonagem: '',
            nomeJogador: '',
            aparencia: '',
            historia: '',
            genero: "masculino" as "masculino" | "feminino",
            divinacao: null as null | {
                texto: string;
                efeito: string;
            }
        }
    });

    const handlerOriginSelect = (originData: any) => {
        setOrigin(originData);
        setStep(1);
    };

    const tentarBencao = () => {
        if (!origin) return;

        const resultado = Math.floor(Math.random() * 10) + 1;
        setBencaoResultado(resultado);
        setBencaoTentada(true);

        if (resultado >= origin.bencao) {
            setPontosDestino(origin.limiteDestino + 1);
        } else {
            setPontosDestino(origin.limiteDestino);
        }
    };

    const salvarOrigemFicha = () => {
        if (!origin || pontosDestino === null || pontosDeVida === null) return;

        setFicha((prev) => ({
            ...prev,
            origem: {
                nome: origin.nome,
                bonus: origin.bonus,
                talentos: [
                    ...(origin.talentoFixo ? [origin.talentoFixo] : []),
                    ...(origin.talentosEscolhiveis ?? [])
                ],
                efeitoNaArma: origin.efeitoNaArma,
                aptidoes: origin.aptidoes,
                vida: pontosDeVida,
                limiteDestino: pontosDestino,
            }
        }));
    };

    const salvarAtributosFicha = (atributosSelecionados: { [atributo: string]: number }) => {
        setAtributos(atributosSelecionados);
        setFicha((prev) => ({
            ...prev,
            atributos: atributosSelecionados,
        }));
    };

    const salvarBackgroundFicha = (backgroundData: any) => {
        const nome = backgroundData.nome;
        const bonus = backgroundData.bonus;

        const pericias = [
            ...(backgroundData.pericias.fixas || []),
            ...(backgroundData.pericias.escolhasSelecionadas || []),
        ];

        const talentos = [
            ...(backgroundData.talentos.fixos || []),
            ...(backgroundData.talentos.escolhasSelecionadas || []),
        ];

        const equipamentos = [
            ...(backgroundData.equipamentos.fixos || []),
            ...(backgroundData.equipamentos.escolhasSelecionadas || []),
        ];

        const aptidoes = [
            ...(backgroundData.aptidoes.fixas || []),
            ...(backgroundData.aptidoes.escolhasSelecionadas || []),
        ];

        setBackgroundSelecionado(backgroundData);

        setFicha((prev) => ({
            ...prev,
            background: {
                nome,
                bonus,
                pericias,
                talentos,
                equipamentos,
                aptidoes,
            },
        }));
    };

    const salvarFuncaoFicha = (funcaoData: any) => {
        const nome = funcaoData.nome;
        const bonus = funcaoData.bonus;

        const talentos = funcaoData.talentosEscolhiveis;

        const aptidoes = [
            ...(funcaoData.aptidoes.fixas || []),
            ...(funcaoData.aptidoes.escolhasSelecionadas || []),
        ];

        setFuncaoSelecionada(funcaoData);

        setFicha((prev) => ({
            ...prev,
            funcao: {
                nome,
                bonus,
                talentos,
                aptidoes,
            },
        }));
    };

    const avancarPara = (novoStep: number) => {
        setStep(novoStep);
    };

    const voltar = () => {
        setStep((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className="p-4 max-w-5xl mx-auto space-y-6 text-white">
            {step === 1 && (
                <OriginSelection
                    onSelect={handlerOriginSelect}
                    originSelecionada={origin}
                    bencaoTentada={bencaoTentada}
                    bencaoResultado={bencaoResultado}
                    pontosDestino={pontosDestino}
                    setPontosDeVida={setPontosDeVida}
                    tentarBencao={tentarBencao}
                    continuar={() => {
                        salvarOrigemFicha();
                        avancarPara(2);
                        console.log("ORIGIN AT STEP 2:", origin);
                    }}
                />
            )}

            {step === 2 && origin && (
                <>
                    <AtributoSelector
                        positivos={origin.modificadores?.positivo || []}
                        negativos={origin.modificadores?.negativo || []}
                        continuar={(atributosSelecionados) => {
                            salvarAtributosFicha(atributosSelecionados);
                            avancarPara(3);
                        }}
                    />
                    <button
                        onClick={voltar}
                        className="mt-4 text-sm underline hover:opacity-80 cursor-pointer"
                        style={{ color: "var(--color-mustard)"}}
                    >
                        ← Voltar para origem
                    </button>
                </>
            )}

            {step === 3 && atributos && (
                <>
                    <BackgroundSelector
                        onSelect={(background) => {
                            salvarBackgroundFicha(background);
                        }}
                        backgroundSelecionado={backgroundSelecionado}
                        continuar={() => avancarPara(4)}
                    />
                    <button
                        onClick={voltar}
                        className="mt-4 text-sm underline hover:opacity-80 cursor-pointer"
                        style={{ color: "var(--color-mustard)"}}
                    >
                        ← Voltar para atributos
                    </button>
                </>
            )}

            {step === 4 && backgroundSelecionado && (
                <>
                    <FuncaoSelector
                        onNext={(funcao) => {
                            salvarFuncaoFicha(funcao);
                            avancarPara(5);
                        }}
                    />
                    <button
                        onClick={voltar}
                        className="mt-4 text-sm underline hover:opacity-80 cursor-pointer"
                        style={{ color: "var(--color-mustard)"}}
                    >
                        ← Voltar para background
                    </button>
                </>
            )}

            {step === 5 && funcaoSelecionada && (
                <>
                    <FinalElements
                        aptidoesOrigem={ficha.origem?.aptidoes ?? ""}
                        aptidoesBackground={ficha.background?.aptidoes ?? []}
                        aptidoesFuncao={ficha.funcao?.aptidoes ?? []}
                        onFinalizar={(dadosFinais) => {
                            const fichaAtualizada = {
                                ...ficha,
                                dadosFinais
                            };

                            setFicha(fichaAtualizada);

                            localStorage.setItem("ficha-personagem-temp", JSON.stringify(fichaAtualizada));
                            router.push("/character-sheet");
                        }}
                    />
                    <button
                        onClick={voltar}
                        className="mt-4 text-sm underline hover:opacity-80 cursor-pointer"
                        style={{ color: "var(--color-mustard)"}}
                    >
                        ← Voltar para funções
                    </button>
                </>

                    
            )}
        </div>
    );
}
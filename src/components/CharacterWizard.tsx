"use client";

import { useState } from "react";
import OriginSelection from "./OriginSelection";
import AtributoSelector from "./AtributoSelector";

export default function CharacterWizard() {
    const [step, setStep] = useState(1);
    const [origin, setOrigin] = useState<any>(null);
    const [pontosDestino, setPontosDestino] = useState<number | null>(null);
    const [bencaoResultado, setBencaoResultado] = useState<number | null>(null);
    const [bencaoTentada, setBencaoTentada] = useState(false);
    const [pontosDeVida, setPontosDeVida] = useState<number | null>(null);
    const [atributos, setAtributos] = useState<{ [atributo: string]: number } | null>(null);

    const [ficha, setFicha] = useState({
        origem: null as null | {
            planetaNome: string;
            planetaBonus: string;
            talentosEscolhiveis?: string[];
            talentoFixo?: string;
            efeitoNaArma?: string;
            planetaAptidao: string;
            planetaVida: number;
            limiteDestino: number;            
        },
        atributos: null as null | {
            [atributo: string]: number;
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
                planetaNome: origin.nome,
                planetaBonus: origin.bonus,
                talentosEscolhiveis: origin.talentosEscolhiveis,
                talentoFixo: origin.talentoFixo,
                efeitoNaArma: origin.efeitoNaArma,
                planetaAptidao: origin.aptidoes,
                planetaVida: pontosDeVida,
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
                    }}
                />
            )}

            {step === 2 && origin && (
                <>
                    <AtributoSelector
                        positivos={origin.atributos_positivos || []}
                        negativos={origin.atributos_negativos || []}
                        continuar={(atributosSelecionados) => {
                            salvarAtributosFicha(atributosSelecionados);
                            avancarPara(3);
                        }}
                    />
                    <button
                        onClick={voltar}
                        className="mt-4 text-sm text-[#FCB02D] underline hover:text-yellow-400"
                    >
                        ← Voltar para origem
                    </button>
                </>
            )}

            {step === 3 && atributos && (
                <>
                   <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Resumo da Ficha</h2>

                        <div className="border rounded p-4 space-y-2">
                            <h3 className="text-xl font-semibold">Origem</h3>
                            {ficha.origem ? (
                            <ul className="list-disc list-inside">
                                <li><strong>Planeta:</strong> {ficha.origem.planetaNome}</li>
                                <li><strong>Bônus:</strong> {ficha.origem.planetaBonus}</li>
                                <li><strong>Aptidão:</strong> {ficha.origem.planetaAptidao}</li>
                                <li><strong>Vida:</strong> {ficha.origem.planetaVida}</li>
                                <li><strong>Destino:</strong> {ficha.origem.limiteDestino}</li>
                                {ficha.origem.talentoFixo && <li><strong>Talento Fixo:</strong> {ficha.origem.talentoFixo}</li>}
                                {ficha.origem.talentosEscolhiveis && ficha.origem.talentosEscolhiveis.length > 0 && (
                                <li><strong>Talentos Escolhíveis:</strong> {ficha.origem.talentosEscolhiveis.join(", ")}</li>
                                )}
                                {ficha.origem.efeitoNaArma && <li><strong>Efeito na Arma:</strong> {ficha.origem.efeitoNaArma}</li>}
                            </ul>
                            ) : (
                            <p className="text-red-600">Origem não definida.</p>
                            )}
                        </div>

                        <div className="border rounded p-4 space-y-2">
                            <h3 className="text-xl font-semibold">Atributos</h3>
                            {ficha.atributos ? (
                            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {Object.entries(ficha.atributos).map(([key, value]) => (
                                <li key={key}><strong>{key}:</strong> {value}</li>
                                ))}
                            </ul>
                            ) : (
                            <p className="text-red-600">Atributos não definidos.</p>
                            )}
                        </div>

                        <div className="flex justify-between pt-4">
                            <button
                                onClick={voltar}
                                className="mt-4 text-sm text-[#FCB02D] underline hover:text-yellow-400"
                            >
                                ← Voltar para atributos
                            </button>
                        </div>
                    </div>  
                </>
            )}
        </div>
    );
}
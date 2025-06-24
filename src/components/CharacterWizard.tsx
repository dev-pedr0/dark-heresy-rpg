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
                    tentarBencao={tentarBencao}
                    continuar={() => avancarPara(2)}
                />
            )}

            {step === 2 && origin && (
                <>
                    <AtributoSelector
                        positivos={origin.atributos_positivos || []}
                        negativos={origin.atributos_negativos || []}
                    />
                    <button
                        onClick={voltar}
                        className="mt-4 text-sm text-[#FCB02D] underline hover:text-yellow-400"
                    >
                        ← Voltar para origem
                    </button>
                </>
            )}
        </div>
    );
}
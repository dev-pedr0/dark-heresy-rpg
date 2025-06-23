"use client";

import { useState } from "react";
import OriginSelection from "./OriginSelection";
import AtributoSelector from "./AtributoSelector";

export default function CharacterWizard() {
    const [step, setStep] = useState(0);
    const [origin, setOrigin] = useState<any>(null);

    const handlerOriginSelect = (originData: any) => {
        setOrigin(originData);
        setStep(1);
    };

    const avancarPara = (novoStep: number) => {
        setStep(novoStep);
    };

    const voltar = () => {
        setStep((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className="p-4 max-w-5xl mx-auto space-y-6 text-white">
            {step === 0 && <OriginSelection onSelect={handlerOriginSelect} />}

            {step === 1 && origin && (
                <>
                    <div>
                        <h2 className="text-2xl font-semibold">Você Escolheu: {origin.nome}</h2>
                        <p className="mb-4">{origin.descricao}</p>

                        <button
                            onClick={() => avancarPara(2)}
                            className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
                        >
                            Continuar para Atributos
                        </button>
                    </div>

                    <button
                        onClick={voltar}
                        className="text-sm text-[#FCB02D] underline hover:text-yellow-400"
                    >
                        ← Voltar à seleção de origem
                    </button>
                </>
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
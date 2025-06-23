import { Caracteristica } from "@/utils/caracteristicas"
import { gerarAtributosPorPonto } from "@/utils/gerarAtributosPorPontos";
import { useState } from "react";

type Props = {
    positivos: Caracteristica[];
    negativos: Caracteristica[];
    todas: readonly Caracteristica[];
    onVoltar: () => void;
};

export default function MetodoPontos({ positivos, negativos, todas, onVoltar }: Props) {
    const { valoresBase, pontosDisponiveis, limiteMaximo } = gerarAtributosPorPonto(
        positivos,
        negativos,
        todas,
    );

    const [atributos, setAtributos] = useState<Record<Caracteristica, number>>({ ...valoresBase });

    const pontosGastos = Object.entries(atributos).reduce((acc, [key, valor]) => {
        const base = valoresBase[key as Caracteristica];
        return acc + (valor - base);
    }, 0);

    const pontosRestantes = pontosDisponiveis - pontosGastos;

    const alterarValor = (caracteristica: Caracteristica, delta: number) => {
        setAtributos((prev) => {
            const atual = prev[caracteristica];
            const novo = atual + delta;
            const base = valoresBase[caracteristica];

            if (
                novo < base ||
                novo > limiteMaximo ||
                pontosGastos + delta > pontosDisponiveis
            ) {
                return prev;
            }

            return {
                ...prev,
                [caracteristica]: novo,
            };
        });
    };

    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                <span className="text-lg font-medium">Pontos restantes: {pontosRestantes}</span>
                <button onClick={onVoltar} className="bg-gray-400 text-white px-4 py-2 rounded-xl shadow">
                    Voltar
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {todas.map((caracteristica) => (
                <div key={caracteristica} className="border rounded p-2 flex flex-col items-center">
                    <strong>{caracteristica}</strong>
                    <span className="text-lg">{atributos[caracteristica]}</span>
                    <div className="flex gap-2 mt-1">
                        <button
                            onClick={() => alterarValor(caracteristica, -1)}
                            className="px-2 py-1 bg-red-500 text-white rounded"
                        >
                            -
                        </button>
                        <button
                            onClick={() => alterarValor(caracteristica, 1)}
                            className="px-2 py-1 bg-green-600 text-white rounded"
                        >
                            +
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
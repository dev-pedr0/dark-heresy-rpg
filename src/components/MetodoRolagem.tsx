import { Caracteristica } from "@/utils/caracteristicas"
import { gerarAtributosPorRolagem } from "@/utils/gerarAtributosPorRolagem";
import { useState } from "react";

type Props = {
    positivos: Caracteristica[];
    negativos: Caracteristica[];
    todas: readonly Caracteristica[];
    onVoltar: () => void;
    onConfirmar: (atributos: Record<Caracteristica, number>) => void;
};

export default function MetodoRolagem ({ positivos, negativos, todas, onVoltar, onConfirmar }: Props) {
    const [atributos, setAtributos] = useState<Record<Caracteristica, number> | null>(null);

    const rolar = () => {
        const resultado = gerarAtributosPorRolagem(positivos, negativos, todas);
        setAtributos(resultado);
    };

    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                <button onClick={rolar} className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow">
                    Rolar Atributos
                </button>
                <button onClick={onVoltar} className="bg-gray-400 text-white px-4 py-2 rounded-xl shadow">
                    Voltar
                </button>
            </div>

            {atributos && (
                <>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {todas.map((caracteristica) => (
                            <div key={caracteristica} className="border rounded p-2">
                                <strong>{caracteristica}</strong>: {atributos[caracteristica]}
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => onConfirmar(atributos)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow"
                    >
                        Confirmar
                    </button>
                </>
            )}
        </div>
    );
}
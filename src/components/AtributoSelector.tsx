import { Caracteristica, CARACTERISTICAS } from "@/utils/caracteristicas"
import { useState } from "react";
import MetodoRolagem from "./MetodoRolagem";
import MetodoPontos from "./MetodoPontos";

type Props = {
    positivos: Caracteristica[];
    negativos: Caracteristica[];
    continuar: (atributosSelecionados: Record<Caracteristica, number>) => void;
};

export default function AtributosSelector ({ positivos, negativos, continuar }: Props) {
    const [metodo, setMetodo] = useState<"rolagem" | "pontos" | null>(null);
    const [atributosConfirmados, setAtributosConfirmados] = useState<Record<Caracteristica, number> | null>(null);

    if (!metodo) {
        return (
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-xl font-semibold">Escolha o método de geração de atributos:</h2>
                <button onClick={() => setMetodo("rolagem")} className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow">
                    Rolagem de Dados
                </button>
                <button onClick={() => setMetodo("pontos")} className="px-4 py-2 bg-green-600 text-white rounded-xl shadow">
                    Distribuição por Pontos
                </button>
            </div>
        );
    }

    return (
        <div>
            {metodo === "rolagem" && (
                <MetodoRolagem
                positivos={positivos}
                negativos={negativos}
                todas={CARACTERISTICAS}
                onVoltar={() => setMetodo(null)}
                onConfirmar={setAtributosConfirmados}
                />
            )}
            {metodo === "pontos" && (
                <MetodoPontos
                positivos={positivos}
                negativos={negativos}
                todas={CARACTERISTICAS}
                onVoltar={() => setMetodo(null)}
                onConfirmar={setAtributosConfirmados}
                />
            )}
            {atributosConfirmados && (
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={() => continuar(atributosConfirmados)}
                        className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
                    >
                        Continuar para Background
                    </button>
                </div>
            )}
        </div>
    );
}
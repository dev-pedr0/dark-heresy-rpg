import { Caracteristica, CARACTERISTICAS } from "@/utils/caracteristicas"
import { useState } from "react";
import MetodoRolagem from "./MetodoRolagem";
import MetodoPontos from "./MetodoPontos";

type Props = {
    positivos: Caracteristica[];
    negativos: Caracteristica[];
};

export default function AtributosSelector ({ positivos, negativos }: Props) {
    const [metodo, setMetodo] = useState<"rolagem" | "pontos" | null>(null);

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
                />
            )}
            {metodo === "pontos" && (
                <MetodoPontos
                positivos={positivos}
                negativos={negativos}
                todas={CARACTERISTICAS}
                onVoltar={() => setMetodo(null)}
                />
            )}
        </div>
    );
}
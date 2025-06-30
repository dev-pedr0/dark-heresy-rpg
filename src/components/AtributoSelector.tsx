import { Caracteristica, CARACTERISTICAS } from "@/utils/caracteristicas"
import { useState } from "react";
import { gerarAtributosPorRolagem } from "@/utils/gerarAtributosPorRolagem";
import { gerarAtributosPorPonto } from "@/utils/gerarAtributosPorPontos";

type Props = {
    positivos: Caracteristica[];
    negativos: Caracteristica[];
    continuar: (atributosSelecionados: Record<Caracteristica, number>) => void;
};

export default function AtributosSelector ({ positivos, negativos, continuar }: Props) {
    const [atributos, setAtributos] = useState<Record<Caracteristica, number>>(
        Object.fromEntries(CARACTERISTICAS.map((car) => [car, 0])) as Record<Caracteristica, number>
    );
    const [pontosDisponiveis, setPontosDisponiveis] = useState<number | null>(null);
    const [metodo, setMetodo] = useState<"rolagem" | "pontos" | null>(null);

    function handleRolagem() {
        console.log("POSITIVOS:", positivos);
        console.log("NEGATIVOS:", negativos);
        const resultado = gerarAtributosPorRolagem(positivos, negativos, CARACTERISTICAS);
        setAtributos(resultado);
        setMetodo("rolagem");
        setPontosDisponiveis(null);
    }

    function handlePontos() {
        const { valoresBase, pontosDisponiveis } = gerarAtributosPorPonto(positivos, negativos, CARACTERISTICAS);
        console.log("POSITIVOS:", positivos);
        console.log("NEGATIVOS:", negativos);
        console.log("Base gerada:", valoresBase);
        setAtributos(valoresBase);
        setPontosDisponiveis(pontosDisponiveis);
        setMetodo("pontos");
    }

    function alterarValor(caracteristica: Caracteristica, delta: number) {
        if (metodo !== "pontos" || pontosDisponiveis === null) return;
        
        const novoValor = atributos[caracteristica] + delta;

        if (novoValor < 15 || novoValor > 40) return;

        const novosPontos = pontosDisponiveis - delta;

        if (novosPontos < 0) return;

        setAtributos({
            ...atributos,
            [caracteristica]: novoValor,
        });
        setPontosDisponiveis(novosPontos);
    }

    const atributosDefinidos = Object.values(atributos).every((v) => v > 0);
    const podeContinuar = atributosDefinidos && (metodo === "rolagem" || (pontosDisponiveis !== null && pontosDisponiveis === 0));

    return (
        <div className="flex flex-col items-center gap-6">
            <h2 className="text-xl font-semibold">
                Escolha o método de geração de atributos
            </h2>
            <div className="flex gap-4">
                <button
                    onClick={handleRolagem}
                    className="px-4 py-2 rounded-xl shadow font-bold hover:opacity-80 cursor-pointer"
                    style={{ backgroundColor: "var(--color-darkred)", color: "var(--color-mustard)" }}
                >
                    Rolagem de Dados
                </button>
                <button
                    onClick={handlePontos}
                    className="px-4 py-2 rounded-xl shadow font-bold hover:opacity-80 cursor-pointer"
                    style={{ backgroundColor: "var(--color-darkred)", color: "var(--color-mustard)" }}
                >
                    Distribuição de Pontos
                </button>
            </div>

            {metodo === "pontos" && (
                <p className="text-sm mt-2">
                    Pontos Disponíveis: <span className="font-bold">{pontosDisponiveis}</span>
                </p>
            )}

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                {Object.entries(atributos).map(([caracteristica, valor]) => (
                <div key={caracteristica} className="flex flex-col items-center">
                    <span className="text-sm font-semibold mb-1">{caracteristica}</span>
                    <div className="w-16 h-[67px] text-center rounded-full font-bold border-[3px] flex items-center justify-center text-xl"
                        style={{ borderColor: "var(--color-mustard)", backgroundColor: "var(--color-darkred)" }}>
                    {valor}
                    </div>
                    {metodo === "pontos" && (
                    <div className="flex gap-1 mt-1">
                        <button
                        onClick={() => alterarValor(caracteristica as Caracteristica, -1)}
                        className="bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-600 cursor-pointer"
                        >−</button>
                        <button
                        onClick={() => alterarValor(caracteristica as Caracteristica, 1)}
                        className="bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-600 cursor-pointer"
                        >+</button>
                    </div>
                    )}
                </div>
                ))}
            </div>

            {podeContinuar && (
                <button
                onClick={() => continuar(atributos)}
                className="mt-4 px-4 py-2 rounded hover:opacity-80 cursor-pointer"
                style={{ backgroundColor: "var(--color-mustard)", color: "var(--color-text)"}}
                >
                Continuar para Background
                </button>
            )}
        </div>
    );
}
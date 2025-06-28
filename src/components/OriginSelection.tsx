import { PlanetaDeOrigem, planetasDeOrigem } from "@/data/planetas";
import { rolarExpressaoDeVida } from "@/utils/rolarDados";
import Image from "next/image";
import { useState } from "react";

interface Props {
    onSelect: (origin: PlanetaDeOrigem) => void;
    originSelecionada: PlanetaDeOrigem | null;
    bencaoTentada: boolean;
    bencaoResultado: number | null;
    pontosDestino: number | null;
    setPontosDeVida: (valor: number) => void;
    tentarBencao: () => void;
    continuar: () => void;
}

export default function OriginSelection({
    onSelect,
    originSelecionada,
    bencaoTentada,
    bencaoResultado,
    pontosDestino,
    setPontosDeVida,
    tentarBencao,
    continuar,
}: Props) {
    const [selected, setSelected] = useState<string | null>(null);
    const [vidaRolada, setVidaRolada] = useState<number | null>(null);
    const [descricaoAberta, setDescricaoAberta] = useState<PlanetaDeOrigem | null>(null);

    const rolarVida = () => {
        if (originSelecionada) {
        const resultado = rolarExpressaoDeVida(originSelecionada.vida);
        setVidaRolada(resultado);
        setPontosDeVida(resultado);
        }
    };


    return (
        <div className="flex flex-col items-center">

            {descricaoAberta && (
                <div 
                    style={{ backgroundColor: "var(--color-darkblack)", color: "var(--color-text)" }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-70"
                >
                    <div className="p-6 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto"
                        style={{ backgroundColor: "var(--color-mediumbrown)" }}
                    >
                        <h3 className="text-xl font-bold mb-4 text-center"
                            style={{ color: "var(--color-mustard)" }}
                        >
                            {descricaoAberta.nome}
                        </h3>
                        <p className="text-sm whitespace-pre-line text-justify">
                        {descricaoAberta.descricao} 
                        </p>
                        <button
                            onClick={() => setDescricaoAberta(null)}
                            className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 cursor-pointer"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )};

            <h2 className="text-2xl mb-4 font-bold">Escolha seu Planeta de Origem</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {planetasDeOrigem.map((origin) => (
                    <div
                        key={origin.id}
                        className={`rounded-xl overflow-hidden border-4 cursor-pointer transition duration-300 ${
                            selected === origin.id ? "border-yellow-500 scale-105" : "border-transparent"
                        }`}
                        onClick={() => {
                            if (selected === origin.id) {
                                setSelected(null);
                            } else {
                                setSelected(origin.id);
                                onSelect(origin);
                            }
                        }}
                    >
                        <Image
                            src={origin.imagem.replace("/public", "")}
                            alt={origin.nome}
                            width={300}
                            height={180}
                            className="w-100 h-80 object-fill rounded-t-xl mx-auto"
                        />
                        <div
                            style={{ backgroundColor: "var(--color-mediumbrown)", color: "var(--color-text)" }}
                            className="p-3 text-center"
                        >
                            <h3 className="text-xl font-bold">{origin.nome}</h3>
                            {selected === origin.id && (
                                <div
                                    className={`mt-2 space-y-2 text-sm transition-opacity duration-300 ${
                                        selected === origin.id ? "opacity-100" : "opacity-0 pointer-events-none"
                                    }`}
                                >
                                    <div>
                                        <p className="m-0 p-0">{origin.descricao.slice(0, 300)}...</p>
                                        <button
                                            onClick={() => setDescricaoAberta(origin)}
                                            className="text-sm hover:underline font-extrabold cursor-pointer"
                                        >
                                            Ler mais
                                        </button>
                                    </div>

                                    <p style={{ color: "var(--color-mustard)" }} className="italic">
                                        {origin.bonus}
                                    </p>

                                    <div
                                        style={{ backgroundColor: "var(--color-darkblack)" }}
                                        className="mt-2 p-3 rounded-lg text-sm space-y-1"
                                    >
                                        <p>
                                            <span className="font-semibold text-purple-400">
                                                Aptidão:
                                            </span>{" "}
                                            {origin.aptidoes}
                                        </p>
                                        <p>
                                            <span className="font-semibold text-blue-400">
                                                Limite de Pontos de Destino:
                                            </span>{" "}
                                            {origin.limiteDestino}
                                        </p>
                                        <p>
                                            <span className="font-semibold text-yellow-300">
                                                Benção do Imperador:
                                            </span>{" "}
                                            {origin.bencao}+
                                        </p>
                                        <p>
                                            <span className="font-semibold text-red-400">
                                                Pontos de Vida:
                                            </span>{" "}
                                            {origin.vida}
                                        </p>
                                        <p>
                                            <span className="font-semibold text-green-400">
                                                🔺 Modificadores Positivos:
                                            </span>{" "}
                                            {origin.modificadores.positivo.join(", ")}
                                        </p>
                                        <p>
                                            <span className="font-semibold text-orange-500">
                                                🔻 Modificadores Negativos:
                                            </span>{" "}
                                            {origin.modificadores.negativo.join(", ")}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {selected && originSelecionada && selected === originSelecionada.id && (
                <div
                    style={{ backgroundColor: "var(--color-mediumbrown)", color: "var(--color-text)" }}
                    className="mt-6 p-4 rounded-lg w-full max-w-xl flex flex-col justify-center items-center"
                >
                    <h3 className="text-lg font-bold mb-2">Informações do Planeta Escolhido</h3>
                    <p>
                        🎯 Limite base de Pontos de Destino: <strong>{originSelecionada.limiteDestino}</strong>
                    </p>
                    <p>
                        🙏 Benção do Imperador: <strong>{originSelecionada.bencao}+</strong>
                    </p>

                    {!bencaoTentada ? (
                        <button
                            onClick={tentarBencao}
                            className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
                        >
                            Tentar Benção do Imperador (1d10)
                        </button>
                    ) : (
                        <div className="mt-4 space-y-1 text-center">
                            <p>
                                🎲 Resultado: <strong>{bencaoResultado}</strong>
                            </p>
                            <p>
                                ✅ Novo limite de pontos de destino:{" "}
                                <strong className="text-green-400">{pontosDestino}</strong>
                            </p>
                        </div>
                    )}

                    <div className="mt-6">
                        <button
                            onClick={rolarVida}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400"
                        >
                            Rolar Pontos de Vida ({originSelecionada.vida})
                        </button>
                        {vidaRolada !== null && (
                            <p className="mt-2 text-red-300 text-center">
                                ❤️ Pontos de Vida iniciais: <strong>{vidaRolada}</strong>
                            </p>
                        )}
                    </div>

                    <button
                        onClick={continuar}
                        className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
                    >
                        Continuar para Atributos
                    </button>
                </div>
            )}
        </div>
    );
}
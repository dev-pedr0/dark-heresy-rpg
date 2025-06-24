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
    tentarBencao: () => void;
    continuar: () => void;
}

export default function OriginSelection({
    onSelect,
    originSelecionada,
    bencaoTentada,
    bencaoResultado,
    pontosDestino,
    tentarBencao,
    continuar,
}: Props) {
    const [selected, setSelected] = useState<string | null>(null);
    const [vidaRolada, setVidaRolada] = useState<number | null>(null);

    const rolarVida = () => {
        if (originSelecionada) {
        const resultado = rolarExpressaoDeVida(originSelecionada.vida);
        setVidaRolada(resultado);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl mb-4 font-bold">Escolha seu Planeta de Origem</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {planetasDeOrigem.map((origin) =>(
                    <div
                    key={origin.id}
                    className={`rounded-xl overflow-hidden border-4 cursor-pointer transition duration-300 ${
                    selected === origin.id ? "border-yellow-500 scale-105" : "border-transparent"
                    }`}
                    onClick={() => {
                        if (selected === origin.id) {
                            onSelect(origin);
                        } else {
                            setSelected(origin.id);
                        }
                    }}>
                        <Image
                        src={origin.imagem.replace("/public", "")}
                        alt={origin.nome}
                        width={300}
                        height={180}
                        className="w-40 h-40 object-cover rounded-xl mx-auto"/>
                        <div className="bg-[#835214] p-3 text-center text-white">
                            <h3 className="text-xl font-bold">{origin.nome}</h3>
                            {selected === origin.id && (
                                <div className="mt-2 space-y-2 text-sm">
                                    <p>{origin.descricao}</p>
                                    <p className="italic text-yellow-300">{origin.bonus}</p>
                                    <p>Aptidão: {origin.aptidoes}.</p>
                                    <p>Pontos de Vida: {origin.vida}.</p>

                                    <div className="mt-2 bg-[#2F1B0F] p-3 rounded-lg text-sm space-y-1">
                                        <p>
                                            <span className="font-semibold text-green-400">🎯 Limite de Pontos de Destino:</span>{" "}
                                            {origin.limiteDestino}
                                        </p>
                                        <p>
                                            <span className="font-semibold text-yellow-300">🙏 Benção do Imperador:</span>{" "}
                                            {origin.bencao}+
                                        </p>
                                        <p>
                                            <span className="font-semibold text-blue-400">🔺 Modificadores Positivos:</span>{" "}
                                            {origin.modificadores.positivo.join(", ")}
                                        </p>
                                        <p>
                                            <span className="font-semibold text-red-400">🔻 Modificadores Negativos:</span>{" "}
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
                <div className="mt-6 bg-[#2F1B0F] p-4 rounded-lg text-white w-full max-w-xl">
                    <h3 className="text-lg font-bold mb-2">Informações do Planeta Escolhido</h3>
                    <p>🎯 Limite base de Pontos de Destino: <strong>{originSelecionada.limiteDestino}</strong></p>
                    <p>🙏 Benção do Imperador: <strong>{originSelecionada.bencao}+</strong></p>

                    {!bencaoTentada ? (
                        <button
                            onClick={tentarBencao}
                            className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
                        >
                            Tentar Benção do Imperador (1d10)
                        </button>
                    ) : (
                        <div className="mt-4 space-y-1">
                            <p>🎲 Resultado: <strong>{bencaoResultado}</strong></p>
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
                        <p className="mt-2 text-red-300">❤️ Pontos de Vida iniciais: <strong>{vidaRolada}</strong></p>
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
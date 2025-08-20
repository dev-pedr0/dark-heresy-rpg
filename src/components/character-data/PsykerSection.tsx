import { useEffect, useState } from "react";

type Props = {
    ficha: any;
    setFicha: (f: any) => void;
};

export default function PsykerSection({ ficha, setFicha }: Props) {
    const [psiNivel, setPsiNivel] = useState(0);
    const [poderes, setPoderes] = useState<string[]>([]);

    useEffect(() => {
        if (ficha.dadosFinais?.psiNivel === undefined) {
            setFicha((prev: any) => ({
                ...prev,
                dadosFinais: {
                    ...prev.dadosFinais,
                    psiNivel: 0,
                },
            }));
            setPsiNivel(0);
        } else {
            setPsiNivel(ficha.dadosFinais.psiNivel);
        }

        if (!ficha.dadosFinais?.poderesPsiquicos) {
            setFicha((prev: any) => ({
                ...prev,
                dadosFinais: {
                    ...prev.dadosFinais,
                    poderesPsiquicos: [],
                },
            }));
            setPoderes([]);
        } else {
            setPoderes(ficha.dadosFinais.poderesPsiquicos);
        }
    }, [ficha]);

    const atualizarPsiNivel = (valor: number) => {
        setPsiNivel(valor);
        setFicha((prev: any) => ({
            ...prev,
            dadosFinais: {
                ...prev.dadosFinais,
                psiNivel: valor,
            },
        }));
    };

    const atualizarPoder = (index: number, valor: string) => {
        const novos = [...poderes];
        novos[index] = valor;
        setPoderes(novos);

        setFicha((prev: any) => ({
            ...prev,
            dadosFinais: {
                ...prev.dadosFinais,
                poderesPsiquicos: novos,
            },
        }));
    };

    const adicionarPoder = () => {
        const novos = [...poderes, ""];
        setPoderes(novos);

        setFicha((prev: any) => ({
            ...prev,
            dadosFinais: {
                ...prev.dadosFinais,
                poderesPsiquicos: novos,
            },
        }));
    };

    const removerUltimoPoder = () => {
        if (poderes.length === 0) return;

        const novos = [...poderes.slice(0, -1)];
        setPoderes(novos);

        setFicha((prev: any) => ({
            ...prev,
            dadosFinais: {
                ...prev.dadosFinais,
                poderesPsiquicos: novos,
            },
        }));
    };

    return (
        <div className="space-y-6 mt-6">
            <div>
                <h2 className="text-xl font-bold text-white">Psyker</h2>
                <div className="flex items-center gap-3 mt-2">
                    <label className="text-gray-300 w-32">Psi-Nível:</label>
                    <input
                        type="number"
                        className="bg-gray-900 text-white p-1 w-20"
                        value={psiNivel}
                        onChange={(e) => atualizarPsiNivel(parseInt(e.target.value) || 0)}
                    />
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-white">Poderes Psíquicos</h3>
                <div className="flex flex-col gap-2 mt-2">
                    {poderes.map((poder, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <label className="text-gray-300 w-20">Poder {index + 1}:</label>
                            <input
                                type="text"
                                className="bg-gray-900 text-white p-1 flex-1"
                                value={poder}
                                onChange={(e) => atualizarPoder(index, e.target.value)}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex gap-4 mt-4">
                    <button
                        onClick={adicionarPoder}
                        className="bg-green-700 hover:bg-green-600 text-white px-3 py-1 rounded"
                    >
                        + Adicionar
                    </button>
                    <button
                        onClick={removerUltimoPoder}
                        className="bg-red-700 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                        - Remover Último
                    </button>
                </div>
            </div>
        </div>
    );
}
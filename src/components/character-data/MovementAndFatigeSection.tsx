import { useEffect, useState } from "react";

type Props = {
    ficha: any;
    setFicha: (f: any) => void;
};

export default function MovementAndFatigeSection({ ficha, setFicha }: Props) {
    const [movimento, setMovimento] = useState({
        parcial: 0,
        total: 0,
        disparada: 0,
        corrida: 0,
    });

    const [fadiga, setFadiga] = useState({
        limite: 0,
        atual: 0,
    });

    const calcularBonusAgilidade = () => {
        const agilidade = ficha.atributos?.["Agilidade"] || 0;
        return Math.floor(agilidade / 10);
    };

    useEffect(() => {
        const bonus = calcularBonusAgilidade();

        if (!ficha.dadosFinais?.movimento) {
            const inicial = {
                parcial: bonus,
                total: bonus * 2,
                disparada: bonus * 3,
                corrida: bonus * 6,
            };

            setMovimento(inicial);
            setFicha((prev: any) => ({
                ...prev,
                dadosFinais: {
                    ...prev.dadosFinais,
                    movimento: inicial,
                },
            }));
        } else {
            setMovimento(ficha.dadosFinais.movimento);
        }
    }, [ficha.atributos?.["Agilidade"]]);

    const atualizarMovimento = (campo: keyof typeof movimento, valor: number) => {
        const atualizado = { ...movimento, [campo]: valor };
        setMovimento(atualizado);

        setFicha((prev: any) => ({
            ...prev,
            dadosFinais: {
                ...prev.dadosFinais,
                movimento: atualizado,
            },
        }));
    };

    const calcularLimiteFadiga = () => {
        const resistencia = ficha.atributos?.["Resistência"] || 0;
        const vontade = ficha.atributos?.["Vontade"] || 0;
        return Math.floor(resistencia / 10) + Math.floor(vontade / 10);
    };

    useEffect(() => {
        if (!ficha.dadosFinais?.fadiga) {
            const inicial = {
                limite: calcularLimiteFadiga(),
                atual: 0,
            };

            setFadiga(inicial);
            setFicha((prev: any) => ({
                ...prev,
                dadosFinais: {
                    ...prev.dadosFinais,
                    fadiga: inicial,
                },
            }));
        } else {
            setFadiga(ficha.dadosFinais.fadiga);
        }
    }, [ficha.atributos?.["Resistência"], ficha.atributos?.["Vontade"]]);

    const atualizarFadiga = (campo: keyof typeof fadiga, valor: number) => {
        const atualizado = { ...fadiga, [campo]: valor };
        setFadiga(atualizado);

        setFicha((prev: any) => ({
            ...prev,
            dadosFinais: {
                ...prev.dadosFinais,
                fadiga: atualizado,
            },
        }));
    };

    return (
        <div className="space-y-4 mt-6">
            <h2 className="text-xl font-bold text-white">Movimento</h2>

            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                    <label className="text-gray-300 w-32">Parcial:</label>
                    <input
                        type="number"
                        className="bg-gray-900 text-white p-1 w-20"
                        value={movimento.parcial}
                        onChange={(e) => atualizarMovimento("parcial", parseInt(e.target.value) || 0)}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <label className="text-gray-300 w-32">Total:</label>
                    <input
                        type="number"
                        className="bg-gray-900 text-white p-1 w-20"
                        value={movimento.total}
                        onChange={(e) => atualizarMovimento("total", parseInt(e.target.value) || 0)}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <label className="text-gray-300 w-32">Disparada:</label>
                    <input
                        type="number"
                        className="bg-gray-900 text-white p-1 w-20"
                        value={movimento.disparada}
                        onChange={(e) => atualizarMovimento("disparada", parseInt(e.target.value) || 0)}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <label className="text-gray-300 w-32">Corrida:</label>
                    <input
                        type="number"
                        className="bg-gray-900 text-white p-1 w-20"
                        value={movimento.corrida}
                        onChange={(e) => atualizarMovimento("corrida", parseInt(e.target.value) || 0)}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold text-white">Fadiga</h2>
                <div className="flex flex-col gap-3 mt-2">
                    <div className="flex items-center gap-2">
                        <label className="text-gray-300 w-32">Limite:</label>
                        <input
                            type="number"
                            className="bg-gray-900 text-white p-1 w-20"
                            value={fadiga.limite}
                            onChange={(e) =>
                                atualizarFadiga("limite", parseInt(e.target.value) || 0)
                            }
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <label className="text-gray-300 w-32">Atual:</label>
                        <input
                            type="number"
                            className="bg-gray-900 text-white p-1 w-20"
                            value={fadiga.atual}
                            onChange={(e) =>
                                atualizarFadiga("atual", parseInt(e.target.value) || 0)
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
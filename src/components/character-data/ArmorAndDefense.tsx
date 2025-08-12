import { Armadura, ARMADURAS } from "@/data/armaduras";
import { useEffect, useState } from "react";

type Props = {
    ficha: any;
    setFicha: (f: any) => void;
};

const LOCATIONS = [
    [null, "Cabeça", null],
    ["Braço Esquerdo", null, "Braço Direito"],
    [null, "Corpo", null],
    ["Perna Esquerda", null, "Perna Direita"],
];

export default function ArmorAndDefense({ficha, setFicha}: Props) {
    const [armaduras, setArmaduras] = useState<Armadura[]>([]);

    useEffect(() => {
        // Se já existem armaduras completas salvas, usa elas
        if (ficha.dadosFinais?.armaduras?.length) {
        setArmaduras(ficha.dadosFinais.armaduras);
        return;
        }

        // Caso contrário, tenta encontrar nos equipamentos do background
        const equipamentos = ficha.background?.equipamentos || [];
        const armadurasIniciais = equipamentos
        .map((eq: string) => ARMADURAS.find((a) => a.nome.toLowerCase() === eq.toLowerCase()))
        .filter((a: any): a is Armadura => !!a); // Remove undefined

        setArmaduras(armadurasIniciais);

        setFicha({
        ...ficha,
        dadosFinais: {
            ...ficha.dadosFinais,
            armaduras: armadurasIniciais,
        },
        });
    }, []);

    const atualizarNome = (index: number, novoNome: string) => {
        const novaLista = [...armaduras];
        const base = ARMADURAS.find(a => a.nome.toLowerCase() === novoNome.toLowerCase());

        novaLista[index] = base
        ? { ...base, nome: novoNome } // Usa os dados padrão da base se encontrar
        : {
            nome: novoNome,
            tipo: "",
            locais: [],
            defesa: 0,
            agilidadeMaxima: 0,
            peso: "",
            disponibilidade: "",
            descricao: "",
            };

        setArmaduras(novaLista);
        setFicha((prev: any) => ({
        ...prev,
        dadosFinais: {
            ...prev.dadosFinais,
            armaduras: novaLista,
        },
        }));
    };

    const adicionarArmadura = () => {
        const novaLista = [...armaduras, {
        nome: "",
        tipo: "",
        locais: [],
        defesa: 0,
        agilidadeMaxima: 0,
        peso: "",
        disponibilidade: "",
        descricao: "",
        }];
        setArmaduras(novaLista);
        setFicha((prev: any) => ({
        ...prev,
        dadosFinais: {
            ...prev.dadosFinais,
            armaduras: novaLista,
        },
        }));
    };

    const removerUltimaArmadura = () => {
        const novaLista = armaduras.slice(0, -1);
        setArmaduras(novaLista);
        setFicha((prev: any) => ({
        ...prev,
        dadosFinais: {
            ...prev.dadosFinais,
            armaduras: novaLista,
        },
        }));
    };

    useEffect(() => {
        if (!ficha.dadosFinais.defesaPorLocal) {
            const inicial = {
                "Cabeça": { resistencia: 0, defesa: 0 },
                "Braço Esquerdo": { resistencia: 0, defesa: 0 },
                "Braço Direito": { resistencia: 0, defesa: 0 },
                "Corpo": { resistencia: 0, defesa: 0 },
                "Perna Esquerda": { resistencia: 0, defesa: 0 },
                "Perna Direita": { resistencia: 0, defesa: 0 },
            };

            setFicha((prev: any) => ({
                ...prev,
                dadosFinais: {
                ...prev.dadosFinais,
                defesaPorLocal: inicial,
                },
            }));
        }
    }, []);

  const atualizarValor = (local: string, campo: "resistencia" | "defesa", valor: number) => {
        const atual = ficha.dadosFinais.defesaPorLocal || {};
        const atualizado = {
            ...atual,
            [local]: {
                ...atual[local],
                [campo]: valor,
            },
        };

        setFicha((prev: any) => ({
            ...prev,
            dadosFinais: {
                ...prev.dadosFinais,
                defesaPorLocal: atualizado,
            },
        }));
  };

    return (
        <div className="space-y-4">
            {/* Armadura */}
            <h2 className="text-xl font-bold text-white">Armaduras</h2>

            {armaduras.map((armadura, index) => (
                <div key={index} className="flex items-center gap-2">
                    <label className="text-gray-300">Nome:</label>
                    <input
                        type="text"
                        className="bg-gray-900 text-white p-1"
                        value={armadura.nome}
                        onChange={(e) => atualizarNome(index, e.target.value)}
                    />
                </div>
            ))}

            <div className="flex gap-4 mt-2">
                <button
                    className="px-3 py-1 bg-green-700 text-white rounded"
                    onClick={adicionarArmadura}
                >
                    + Adicionar Armadura
                </button>
                <button
                    className="px-3 py-1 bg-red-700 text-white rounded"
                    onClick={removerUltimaArmadura}
                >
                    – Remover Última
                </button>
            </div>

            {/* Defesa por local */}
            <div className="mt-8 flex gap-4 items-start">
                <div
                    className="relative grid grid-cols-3 gap-4 p-4 rounded"
                    style={{
                        backgroundImage: "url('/geral/silhueta-fundo.png')",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        minHeight: "500px",
                }}
                >
                    {LOCATIONS.map((linha, rowIndex) =>
                        linha.map((local, colIndex) => (
                        <div key={`${rowIndex}-${colIndex}`} className="flex flex-col items-center justify-center min-h-[80px]">
                            {local ? (
                            <div className="bg-gray-800 bg-opacity-70 p-2 rounded text-white text-center w-full max-w-[130px]">
                                <div className="font-bold text-sm mb-1">{local}</div>
                                <div className="flex flex-col gap-1">
                                <input
                                    type="number"
                                    value={ficha.dadosFinais.defesaPorLocal?.[local]?.resistencia || 0}
                                    onChange={(e) =>
                                    atualizarValor(local, "resistencia", parseInt(e.target.value) || 0)
                                    }
                                    className="w-full p-1 text-sm text-white rounded"
                                    placeholder="Resistência"
                                />
                                <input
                                    type="number"
                                    value={ficha.dadosFinais.defesaPorLocal?.[local]?.defesa || 0}
                                    onChange={(e) =>
                                    atualizarValor(local, "defesa", parseInt(e.target.value) || 0)
                                    }
                                    className="w-full p-1 text-sm text-white rounded"
                                    placeholder="Defesa"
                                />
                                </div>
                            </div>
                            ) : (
                            <div />
                            )}
                        </div>
                        ))
                    )}
                </div>

                {/* Coluna lateral com vida, crítico e condições */}
                <div className="flex flex-col gap-4 bg-gray-800 p-4 rounded w-[260px] text-white" style={{ minHeight: "500px" }}>
                    {/* Vida total */}
                    <div>
                        <label className="block font-semibold mb-1">Vida Total</label>
                        <input
                            type="number"
                            className="w-full p-1 rounded bg-gray-700 text-white"
                            value={ficha.dadosFinais.vidaTotal ?? ficha.origem?.vida ?? 0}
                            onChange={(e) =>
                            setFicha({
                                ...ficha,
                                dadosFinais: {
                                ...ficha.dadosFinais,
                                vidaTotal: parseInt(e.target.value) || 0,
                                },
                            })
                            }
                        />
                    </div>

                    {/* Vida atual */}
                    <div>
                        <label className="block font-semibold mb-1">Vida Atual</label>
                        <input
                            type="number"
                            className="w-full p-1 rounded bg-gray-700 text-white"
                            value={ficha.dadosFinais.vidaAtual ?? 0}
                            onChange={(e) =>
                            setFicha({
                                ...ficha,
                                dadosFinais: {
                                ...ficha.dadosFinais,
                                vidaAtual: parseInt(e.target.value) || 0,
                                },
                            })
                            }
                        />
                    </div>

                    {/* Dano Crítico */}
                    <div>
                        <label className="block font-semibold mb-1">Dano Crítico (Atual)</label>
                        <input
                            type="number"
                            className="w-full p-1 rounded bg-gray-700 text-white"
                            value={ficha.dadosFinais.danoCritico ?? 0}
                            onChange={(e) =>
                            setFicha({
                                ...ficha,
                                dadosFinais: {
                                ...ficha.dadosFinais,
                                danoCritico: parseInt(e.target.value) || 0,
                                },
                            })
                            }
                        />
                    </div>

                    {/* Condições */}
                    <div className="flex flex-col flex-grow">
                        <label className="block font-semibold mb-1">Condições</label>
                        <textarea
                            className="w-full p-1 rounded bg-gray-700 text-white flex-grow resize-none"
                            value={ficha.dadosFinais.condicoes ?? ""}
                            onChange={(e) =>
                            setFicha({
                                ...ficha,
                                dadosFinais: {
                                ...ficha.dadosFinais,
                                condicoes: e.target.value,
                                },
                            })
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
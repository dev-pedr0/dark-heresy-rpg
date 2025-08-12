import { ARMADURAS } from "@/data/armaduras";
import { ARMAS } from "@/data/armas";
import { EQUIPAMENTOS } from "@/data/equipamentos";
import { useEffect, useState } from "react";

type EquipamentoFinal = {
    nome: string;
    quantidade: number;
    peso: number;
};

type Props = {
    ficha: any;
    setFicha: (f: any) => void;
};

export default function Gear({ficha, setFicha}: Props) {
    const [itens, setItens] = useState<EquipamentoFinal[]>([]);

    const encontrarPeso = (nomeItem: string): number => {
        const base =
            ARMADURAS.find((a) => a.nome.toLowerCase() === nomeItem.toLowerCase()) ||
            ARMAS.find((a) => a.nome.toLowerCase() === nomeItem.toLowerCase()) ||
            EQUIPAMENTOS.find((e) => e.nome.toLowerCase() === nomeItem.toLowerCase());
        if (!base?.peso) return 0;
        const valorNumerico = parseFloat(String(base.peso).replace(",", "."));
        return isNaN(valorNumerico) ? 0 : valorNumerico;
    };

    useEffect(() => {
        if (ficha.dadosFinais?.equipamentos?.length) {
            setItens(ficha.dadosFinais.equipamentos);
            return;
        }

        const lista: EquipamentoFinal[] =
            ficha.background?.equipamentos?.map((eq: string) => {
                const partes = eq.split("x");
                const nome = partes[0].trim();
                const quantidade = partes[1] ? parseInt(partes[1].trim()) || 1 : 1;
                const peso = encontrarPeso(nome);
                return { nome, quantidade, peso };
            }) || [];

        setItens(lista);

        setFicha({
        ...ficha,
        dadosFinais: {
            ...ficha.dadosFinais,
            equipamentos: lista,
            cargaMaxima: ficha.dadosFinais?.cargaMaxima ?? 0,
            },
        });
    }, []);

    const atualizarItem = (index: number, campo: keyof EquipamentoFinal, valor: string | number) => {
        const novaLista = [...itens];
        if (campo === "peso" || campo === "quantidade") {
            novaLista[index][campo] = Number(valor);
        } else {
            novaLista[index][campo] = String(valor);
            const novoPeso = encontrarPeso(String(valor));
            if (novoPeso !== 0) novaLista[index].peso = novoPeso;
        }

        setItens(novaLista);
        setFicha({
            ...ficha,
            dadosFinais: {
                ...ficha.dadosFinais,
                equipamentos: novaLista,
            },
        });
    };

    const adicionarItem = () => {
        const novaLista = [...itens, { nome: "", quantidade: 1, peso: 0 }];
        setItens(novaLista);
        setFicha({
            ...ficha,
            dadosFinais: {
                ...ficha.dadosFinais,
                equipamentos: novaLista,
            },
        });
    };

    const removerUltimoItem = () => {
        const novaLista = itens.slice(0, -1);
        setItens(novaLista);
        setFicha({
            ...ficha,
            dadosFinais: {
                ...ficha.dadosFinais,
                equipamentos: novaLista,
            },
        });
    };

    const pesoTotal = itens.reduce((acc, item) => acc + item.peso * item.quantidade, 0);

    return (
        <div className="space-y-4 mt-8">
            <h2 className="text-xl font-bold text-white">Equipamentos</h2>

            {itens.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-2">
                    <input
                        type="text"
                        className="bg-gray-900 text-white p-1"
                        placeholder="Nome"
                        value={item.nome}
                        onChange={(e) => atualizarItem(index, "nome", e.target.value)}
                    />
                    <input
                        type="number"
                        className="bg-gray-900 text-white p-1"
                        placeholder="Qtd"
                        value={item.quantidade}
                        onChange={(e) => atualizarItem(index, "quantidade", e.target.value)}
                    />
                    <input
                        type="number"
                        className="bg-gray-900 text-white p-1"
                        placeholder="Peso"
                        value={item.peso}
                        onChange={(e) => atualizarItem(index, "peso", e.target.value)}
                    />
                </div>
            ))}

            <div className="flex gap-4 mt-2">
                <button
                    className="px-3 py-1 bg-green-700 text-white rounded"
                    onClick={adicionarItem}
                >
                    + Adicionar
                </button>
                <button
                    className="px-3 py-1 bg-red-700 text-white rounded"
                    onClick={removerUltimoItem}
                >
                    – Remover Último
                </button>
            </div>

            <div className="text-white">
                <div className="mt-4">
                    <span className="font-semibold">Peso Total: </span>
                    {pesoTotal} kg
                </div>
                <div className="mt-2">
                    <label className="font-semibold">Carga Máxima:</label>
                    <input
                        type="number"
                        className="bg-gray-900 text-white p-1 ml-2"
                        value={ficha.dadosFinais?.cargaMaxima ?? 0}
                        onChange={(e) =>
                        setFicha({
                            ...ficha,
                            dadosFinais: {
                            ...ficha.dadosFinais,
                            cargaMaxima: parseInt(e.target.value) || 0,
                            },
                        })
                        }
                    />
                </div>
            </div>
        </div>
    );
}
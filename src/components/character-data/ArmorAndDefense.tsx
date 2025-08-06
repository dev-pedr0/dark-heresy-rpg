import { Armadura, ARMADURAS } from "@/data/armaduras";
import { useEffect, useState } from "react";

type Props = {
    ficha: any;
    setFicha: (f: any) => void;
};

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

    return (
        <div className="space-y-4">
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
        </div>
    );
}
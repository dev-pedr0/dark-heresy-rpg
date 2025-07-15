import { Talento, Talentos } from "@/data/talentoETracos";
import { useEffect, useRef, useState } from "react";


interface FichaResumo {
  origem: {
    bonus: string;
    talentos: string[];
  } | null;
  background: {
    bonus: string;
    talentos: string[];
  } | null;
  funcao: {
    bonus: string;
    talentos: string[];
  } | null;
  dadosFinais: {
    talentos: {
      nome: string;
      especializacao?: string;
      descricao: string;
    }[];
  };
}

interface Props {
    ficha: FichaResumo;
    onChange: (
    novosTalentos: {
      nome: string;
      especializacao?: string;
      descricao: string;
    }[]
  ) => void;
}

interface TalentoSelecionado {
    nome: string;
    especializacao?: string;
    descricao: string;
}

const extrairNomeDeBonus = (bonus: string): string => {
    return bonus.split("–")[0].trim();
};

const encontrarTalento = (nome: string): Talento | undefined => {
    return Talentos.find(
        (t) => t.nome.toLowerCase() === nome.toLowerCase()
    );
};

const separarNomeEEspecializacao = (nomeCompleto: string): TalentoSelecionado => {
    const match = nomeCompleto.match(/^(.+?)\s*\((.+?)\)$/);
    if (match) {
        return {
            nome: match[1].trim(),
            especializacao: match[2].trim(),
            descricao: encontrarTalento(match[1].trim())?.descricao || "",
        };
    } else {
        const talento = encontrarTalento(nomeCompleto);
        return {
            nome: nomeCompleto,
            especializacao: talento?.especializacoes?.length === 1 ? talento.especializacoes[0] : undefined,
            descricao: talento?.descricao || "",
        };
    }
};

export default function TalentosETracosSection({ ficha, onChange }: Props) {
    const [talentosSelecionados, setTalentosSelecionados] = useState<TalentoSelecionado[]>([]);

    const inicializado = useRef(false);

    useEffect(() => {
        if (inicializado.current) return;
        inicializado.current = true;

        const nomes: string[] = [];

        if (ficha.origem?.bonus) nomes.push(extrairNomeDeBonus(ficha.origem.bonus));
        if (ficha.background?.bonus) nomes.push(extrairNomeDeBonus(ficha.background.bonus));
        if (ficha.funcao?.bonus) nomes.push(extrairNomeDeBonus(ficha.funcao.bonus));

        if (ficha.background?.talentos) nomes.push(...ficha.background.talentos);
        if (ficha.funcao?.talentos) nomes.push(...ficha.funcao.talentos);

        const talentosUnicos = Array.from(new Set(nomes));

        const talentosCompletos: TalentoSelecionado[] = talentosUnicos.map(separarNomeEEspecializacao);

        setTalentosSelecionados(talentosCompletos);
    }, []);

    const atualizarTalento = (index: number, campo: keyof TalentoSelecionado, valor: string) => {
        const novos = [...talentosSelecionados];
        novos[index][campo] = valor;
        setTalentosSelecionados(novos);
        onChange(novos);
    };

    const adicionarTalento = () => {
        const novos = [...talentosSelecionados, { nome: "", descricao: "" }];
        setTalentosSelecionados(novos);
        onChange(novos);
    };

    const removerUltimoTalento = () => {
        const novos = talentosSelecionados.slice(0, -1);
        setTalentosSelecionados(novos);
        onChange(novos);
    };

    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Talentos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {talentosSelecionados.map((talento, index) => {
                    const talentoBase = encontrarTalento(talento.nome);
                    return (
                        <div key={index} className="p-1 space-y-1">
                            <input
                                type="text"
                                value={talento.nome}
                                onChange={(e) => atualizarTalento(index, "nome", e.target.value)}
                                placeholder="Nome do Talento"
                                className="w-full p-2 border rounded"
                            />
                            <select
                                value={talento.especializacao ?? ""}
                                onChange={(e) => atualizarTalento(index, "especializacao", e.target.value)}
                                className="w-full p-1 border rounded text-sm cursor-pointer"
                            >
                                <option value="">
                                {talentoBase?.especializacoes ? "Escolha uma" : "-"}
                                </option>
                                {talentoBase?.especializacoes?.map((esp) => (
                                <option key={esp} value={esp}>
                                    {esp}
                                </option>
                                ))}
                                <option value="Outro">Outro</option>
                            </select>
                            <textarea
                                value={talento.descricao}
                                onChange={(e) => atualizarTalento(index, "descricao", e.target.value)}
                                placeholder="Descrição do Talento"
                                className="w-full p-1 border rounded text-sm min-h-[60px]"
                            />
                        </div>
                    );
                })}
            </div>
            <div className="flex gap-4 mt-4">
                <button
                    onClick={adicionarTalento}
                    className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
                >
                    Adicionar Talento
                </button>
                <button
                    onClick={removerUltimoTalento}
                    className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
                >
                    Remover Último
                </button>
            </div>
        </div>
    );
}
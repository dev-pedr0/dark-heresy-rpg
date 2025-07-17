import { Talento, Talentos, Traco, Tracos } from "@/data/talentoETracos";
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
    tracos?: { 
        nome: string; 
        nivel?: number; 
        descricao: string 
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
    }[],
    novosTracos: { 
        nome: string; 
        nivel?: number; 
        descricao: string 
    }[],
  ) => void;
}

interface TalentoSelecionado {
    nome: string;
    especializacao?: string;
    descricao: string;
}

interface TracoSelecionado {
    nome: string;
    nivel?: number;
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

const encontrarTraco = (nome: string): Traco | undefined =>
  Tracos.find((t) => t.nome.toLowerCase() === nome.toLowerCase());

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

const separarNomeENivelTraco = (nomeCompleto: string): TracoSelecionado => {
    const match = nomeCompleto.match(/^(.+?)\s*\((\d+)\)$/);
    if (match) {
        const nomeBase = match[1].trim();
        const nivel = parseInt(match[2], 10);
        const traco = encontrarTraco(nomeBase);
        return {
            nome: nomeBase,
            nivel,
            descricao: traco?.descricao || "",
        };
    } else {
        const traco = encontrarTraco(nomeCompleto.trim());
        return {
            nome: nomeCompleto.trim(),
            nivel: undefined,
            descricao: traco?.descricao || "",
        };
    }
};

const processarDescricao = (descricao: string, nivel?: number): string => {
    if (nivel == null) return descricao;

    let result = descricao.replace(/\bX\b/g, nivel.toString());

    const evaluateExpression = (expr: string): string => {
        try {
            const sanitizedExpr = expr.replace(/\bX\b/g, nivel.toString());
            const valor = Function('"use strict"; return (' + sanitizedExpr + ')')();
            return valor.toString();
        } catch (err) {
            console.warn("Erro ao avaliar expressão:", expr, err);
            return expr;
        }
    };

    let prevResult = result;
    do {
        result = prevResult.replace(/\(([^()]+|\([^()]*\)[^()]*)\)/g, (_, expr) => evaluateExpression(expr));
        if (result === prevResult) break;
        prevResult = result;
    } while (true);

    return result
        .replace(/–/g, "-")
        .replace(/\u00A0/g, " ");
};



export default function TalentosETracosSection({ ficha, onChange }: Props) {
    const [talentosSelecionados, setTalentosSelecionados] = useState<TalentoSelecionado[]>([]);
    const [tracosSelecionados, setTracosSelecionados] = useState<TracoSelecionado[]>([]);

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

        const tracosIniciais: TracoSelecionado[] =
            ficha.dadosFinais.tracos && ficha.dadosFinais.tracos.length > 0
                ? ficha.dadosFinais.tracos.map((t) => {
                    const separado = separarNomeENivelTraco(t.nome);
                    const base = encontrarTraco(separado.nome);
                    const nivel = separado.nivel ?? t.nivel ?? base?.nivel ?? 1;

                    return {
                        nome: separado.nome,
                        nivel,
                        descricao: processarDescricao(base?.descricao || t.descricao || "", nivel),
                    };
                })
                : [
                    {
                        nome: "Presença Macabra",
                        nivel: 2,
                        descricao: processarDescricao(encontrarTraco("Presença Macabra")?.descricao || "", 2),
                    },
                    {
                        nome: "Medo",
                        nivel: 1,
                        descricao: processarDescricao(encontrarTraco("Medo")?.descricao || "", 1),
                    },
                    {
                        nome: "Armas Naturais Mortais",
                        nivel: 1,
                        descricao: processarDescricao(encontrarTraco("Armas Naturais Mortais")?.descricao || "", 1),
                    },
                ];

        const processados: Traco[] = [];

        const adicionarTracoComDependente = (traco: Traco) => {
            const tracoBase = encontrarTraco(traco.nome);
            const nivel = traco.nivel ?? tracoBase?.nivel ?? 1;

            const descricao = processarDescricao(
                tracoBase?.descricao || traco.descricao,
                nivel
            );

            if (!processados.some(t => t.nome === traco.nome)) {
                processados.push({
                    nome: traco.nome,
                    nivel,
                    descricao,
                    outroTracoFornecido: tracoBase?.outroTracoFornecido,
                });
            }

            if (tracoBase?.outroTracoFornecido) {
                const fornecidoBase = encontrarTraco(tracoBase.outroTracoFornecido);
                const nivelFornecido = fornecidoBase?.nivel ?? 1;
                if (fornecidoBase && !processados.some(t => t.nome === fornecidoBase.nome)) {
                    processados.push({
                        nome: fornecidoBase.nome,
                        nivel: nivelFornecido,
                        descricao: processarDescricao(fornecidoBase.descricao, nivelFornecido),
                    });
                }
            }
        };

        tracosIniciais.forEach(adicionarTracoComDependente);
        console.log("Traços finais:", processados);
        console.log(processarDescricao("teste ((X * 10) - 10)", 2));
        setTracosSelecionados(processados);
    }, []);

    const atualizarTalento = (index: number, campo: keyof TalentoSelecionado, valor: string) => {
        const novos = [...talentosSelecionados];
        novos[index][campo] = valor;
        setTalentosSelecionados(novos);
        onChange(novos, tracosSelecionados);
    };

    const adicionarTalento = () => {
        const novos = [...talentosSelecionados, { nome: "", descricao: "" }];
        setTalentosSelecionados(novos);
        onChange(novos, tracosSelecionados);
    };

    const removerUltimoTalento = () => {
        const novos = talentosSelecionados.slice(0, -1);
        setTalentosSelecionados(novos);
        onChange(novos, tracosSelecionados);
    };

    const atualizarTraco = (index: number, campo: keyof TracoSelecionado, valor: string | number) => {
        const novos = [...tracosSelecionados];
        (novos[index] as any)[campo] = valor;
        setTracosSelecionados(novos);
        onChange(talentosSelecionados, novos);
    };

  const adicionarTraco = () => {
        const novos = [...tracosSelecionados, { nome: "", descricao: "" }];
        setTracosSelecionados(novos);
        onChange(talentosSelecionados, novos);
  };

  const removerUltimoTraco = () => {
        const novos = tracosSelecionados.slice(0, -1);
        setTracosSelecionados(novos);
        onChange(talentosSelecionados, novos);
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
                    className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer hover:opacity-80"
                >
                    Adicionar Talento
                </button>
                <button
                    onClick={removerUltimoTalento}
                    className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:opacity-80"
                >
                    Remover Último
                </button>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-bold mb-2">Traços</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {tracosSelecionados.map((traco, index) => (
                        <div key={index} className="p-1 space-y-1">
                            <input
                                type="text"
                                value={traco.nome}
                                onChange={(e) => {
                                    const novoNome = e.target.value;
                                    const base = encontrarTraco(novoNome);
                                    const nivelAtual = traco.nivel;

                                    const novaDescricao = processarDescricao(base?.descricao || "", nivelAtual);

                                    atualizarTraco(index, "nome", novoNome);
                                    atualizarTraco(index, "descricao", novaDescricao);
                                }}
                                placeholder="Nome do Traço"
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="number"
                                value={traco.nivel ?? ""}
                                onChange={(e) => {
                                    const nivel = Number(e.target.value);
                                    const base = encontrarTraco(traco.nome);
                                    const novaDescricao = processarDescricao(base?.descricao || "", nivel);
                                    atualizarTraco(index, "nivel", nivel);
                                    atualizarTraco(index, "descricao", novaDescricao);
                                }}
                                placeholder="Nível"
                                className="w-full p-2 border rounded"
                            />
                            <textarea
                                value={traco.descricao}
                                onChange={(e) => atualizarTraco(index, "descricao", e.target.value)}
                                placeholder="Descrição do Traço"
                                className="w-full p-1 border rounded text-sm min-h-[60px]"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex gap-4 mt-4">
                    <button
                        onClick={adicionarTraco}
                        className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer hover:opacity-80"
                    >
                        Adicionar Traço
                    </button>
                    <button
                        onClick={removerUltimoTraco}
                        className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:opacity-80"
                    >
                        Remover Último
                    </button>
                </div>
            </div>
        </div>
    );
}
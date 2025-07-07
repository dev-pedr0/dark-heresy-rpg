import { sortearDivinacaoAleatoria } from "@/utils/rolarDados";
import { NOMES_FEMININOS, NOMES_MASCULINOS, TABELA_DIVINACOES } from "@/utils/tabelas";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";

type Props = {
  aptidoesOrigem: string;
  aptidoesBackground: string[];
  aptidoesFuncao: string[];
  onFinalizar: (dadosFinais: {
    aptidoes: string[];
    nomePersonagem: string;
    nomeJogador: string;
    divinacao: { texto: string; efeito: string };
    genero: "masculino" | "feminino";
    aparencia: string;
    historia: string;
  }) => void;
};

const APTIDOES_DE_CARACTERISTICAS = [
    "Habilidade de Combate",
    "Habilidade Balística",
    "Força",
    "Resistência",
    "Agilidade",
    "Inteligência",
    "Percepção",
    "Vontade",
];



export default function FinalElements({
  aptidoesOrigem,
  aptidoesBackground,
  aptidoesFuncao,
  onFinalizar,
}: Props) {
    const personagemApitidoes = useMemo(
    () => [aptidoesOrigem, ...aptidoesBackground, ...aptidoesFuncao],
    [aptidoesOrigem, aptidoesBackground, aptidoesFuncao]
  );

  const contagemApitidoes = useMemo(() => {
    const map = new Map<string, number>();
    personagemApitidoes.forEach((ap) => {
      map.set(ap, (map.get(ap) || 0) + 1);
    });
    return map;
  }, [personagemApitidoes]);

  const aptidoesUnicas = [...contagemApitidoes.entries()]
    .filter(([_, count]) => count === 1)
    .map(([ap]) => ap);

    const apitidoesRepetidas = [...contagemApitidoes.entries()]
    .filter(([_, count]) => count > 1)
    .map(([ap, count]) => ({
      aptidao: ap,
      repeticoes: count - 1,
    }));

    const [aptidoesSubstitutas, setAptidoesSubstitutas] = useState<string[]>([]);

    const aptidoesJaPossuidas = [...new Set(personagemApitidoes)];
    const aptidoesDisponiveis = APTIDOES_DE_CARACTERISTICAS.filter(
        (ap) =>
        !aptidoesJaPossuidas.includes(ap) &&
        !aptidoesSubstitutas.includes(ap)
    );

    const handleEscolherApitidoes = (nova: string) => {
        if (aptidoesSubstitutas.length < apitidoesRepetidas.reduce((acc, r) => acc + r.repeticoes, 0)) {
        setAptidoesSubstitutas((prev) => [...prev, nova]);
        }
    };

    const handleRemoverApitidoes = (remover: string) => {
        setAptidoesSubstitutas((prev) => prev.filter((ap) => ap !== remover));
    };

    const finalizarApitidoes =
        aptidoesSubstitutas.length ===
        apitidoesRepetidas.reduce((acc, r) => acc + r.repeticoes, 0);

    const aptidoesFinais = [...aptidoesUnicas, ...[...contagemApitidoes.keys()].filter((k) => contagemApitidoes.get(k)! > 1), ...aptidoesSubstitutas];

    const [divinacao, setDivinacao] = useState<{
        texto: string;
        efeito: string;
        roll: number[];
    } | null>(null);

    const [mostrarTabelaDivinacao, setMostrarTabelaDivinacao] = useState(true);
    
    const sortearDivinacao = () => {
        try {
            const resultado = sortearDivinacaoAleatoria();
            setDivinacao(resultado);
        } catch (err) {
            console.error(err);
        }
    };

    function formatRoll(roll: number[] | number): string {
        if (typeof roll === "number") return roll.toString();
        if (roll.length === 0) return "";

        const sorted = [...roll].sort((a, b) => a - b);
        const start = sorted[0];
        const end = sorted[sorted.length - 1];

        const isRange = sorted.every((n, i) => i === 0 || n === sorted[i - 1] + 1);

        return isRange ? `${start}–${end}` : sorted.join(", ");
    }

    const [nomeJogador, setNomeJogador] = useState("");
    const [nomePersonagem, setNomePersonagem] = useState("");
    const [genero, setGenero] = useState<"masculino" | "feminino">("masculino");
    const [aparencia, setAparencia] = useState("");
    const [historia, setHistoria] = useState("");

    const sortearNome = () => {
        const nomes = (genero === "masculino" ? NOMES_MASCULINOS : NOMES_FEMININOS).flat();
        const aleatorio = nomes[Math.floor(Math.random() * nomes.length)];
        setNomePersonagem(aleatorio);
    };

    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user?.name) {
            setNomeJogador(session.user.name);
        }
    }, [session]);

    return (
        <div className="max-w-3xl mx-auto p-6 rounded-lg"
            style={{ backgroundColor: "var(--color-mediumbrown)" }}
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Apitidões Repetidas</h2>

            {apitidoesRepetidas.length > 0 ? (
                <>
                    <p style={{ color: "var(--color-mustard)" }} className="italic mb-2">
                        Algumas aptidões se repetiram. Escolha novas aptidões para
                        substituir as duplicadas:
                    </p>

                    <ul className="mb-4 text-sm">
                        {apitidoesRepetidas.map(({ aptidao, repeticoes }) => (
                        <li key={aptidao}>
                            <span className="font-semibold">{aptidao}</span> apareceu{" "}
                            {repeticoes + 1} vezes — escolha {repeticoes} nova(s)
                        </li>
                        ))}
                    </ul>

                    <div className="mb-4">
                        <p className="mb-2 font-semibold">Escolha novas aptidões:</p>
                        <div className="flex flex-wrap gap-2">
                        {aptidoesDisponiveis.map((ap) => (
                            <button
                                key={ap}
                                onClick={() => handleEscolherApitidoes(ap)}
                                className="px-1 py-1 rounded hover:opacity-80 cursor-pointer"
                                style={{ backgroundColor: "var(--color-mustard)", color: "var(--color-text)"}}
                            >
                                {ap}
                            </button>
                        ))}
                        </div>
                    </div>

                    {aptidoesSubstitutas.length > 0 && (
                        <div className="mb-4">
                        <p className="font-semibold mb-2">Você escolheu:</p>
                        <ul className="flex flex-wrap gap-2">
                            {aptidoesSubstitutas.map((ap) => (
                            <li
                                key={ap}
                                className="bg-purple-500 px-2 py-1 rounded cursor-pointer hover:opacity-80"
                                onClick={() => handleRemoverApitidoes(ap)}
                                title="Clique para remover"
                            >
                                {ap}
                            </li>
                            ))}
                        </ul>
                        </div>
                    )}
                </>
            ) : (
                <p className="text-green-500 mb-4">
                    Nenhuma aptidão repetida. Você pode seguir!
                </p>
            )}

            <div className="my-6 p-4 rounded-lg flex flex-col items-center" style={{ backgroundColor: "var(--color-darkbrown)" }}>
                <h3 className="text-2xl font-bold mb-2 text-center">Divinação</h3>

                <button
                    onClick={() => setMostrarTabelaDivinacao(!mostrarTabelaDivinacao)}
                    className="mb-1 mt-4 px-1 py-1 rounded hover:opacity-80 cursor-pointer"
                    style={{ backgroundColor: "var(--color-mustard)", color: "var(--color-text)"}}
                    >
                    {mostrarTabelaDivinacao ? "Ocultar Tabela de Divinação" : "Mostrar Tabela de Divinação"}
                </button>

                {mostrarTabelaDivinacao && (
                    <table className="w-full text-sm text-white border"
                        style={{ borderColor: "var(--color-darkred)"}}>
                        <thead className="bg-yellow-900" style={{ color: "var(--color-mustard)"}}>
                            <tr>
                                <th className="px-4 py-1 border" style={{ borderColor: "var(--color-darkred)"}}>d100</th>
                                <th className="px-2 py-1 border" style={{ borderColor: "var(--color-darkred)"}}>Profecia</th>
                                <th className="px-2 py-1 border" style={{ borderColor: "var(--color-darkred)"}}>Efeito</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TABELA_DIVINACOES.map((item, i) => (
                            <tr key={i} className="odd:bg-[#2a1a14] even:bg-[#3a251d]">
                                <td className="px-2 py-1 border text-center" style={{ borderColor: "var(--color-darkred)"}}>
                                    {formatRoll(item.roll)}
                                </td>
                                <td className="px-2 py-1 border italic" style={{ borderColor: "var(--color-darkred)"}}>{item.texto}</td>
                                <td className="px-2 py-1 border" style={{ borderColor: "var(--color-darkred)"}}>{item.efeito}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                
                {!divinacao ? (
                    <button
                        onClick={sortearDivinacao}
                        className="px-3 py-3 mt-3 max-w-100 rounded hover:opacity-80 cursor-pointer"
                        style={{ backgroundColor: "var(--color-mustard)", color: "var(--color-text)"}}
                    >
                        Sortear Divinação
                    </button>
                ) : (
                    <div className="text-white text-sm space-y-2">
                    <p><span className="font-semibold italic" style={{ color: "var(--color-mustard)"}}>“{divinacao.texto}”</span></p>
                    <p><span className="italic">Efeito:</span> {divinacao.efeito}</p>
                    <button
                        onClick={sortearDivinacao}
                        className="mt-2 text-yellow-500 underline hover:opacity-80 cursor-pointer"
                    >
                        Sortear Novamente
                    </button>
                    </div>
                )}
            </div>

            <div className="space-y-4 mb-6">
                <h3 className="text-2xl font-bold mb-2 text-center">Dados Finais</h3>
                <div>
                    <label className="block text-white font-semibold">Nome do Jogador</label>
                    <input
                    type="text"
                    value={nomeJogador}
                    onChange={(e) => setNomeJogador(e.target.value)}
                    className="w-full p-2 rounded bg-gray-200 text-black"
                    />
                </div>

                <div>
                    <label className="block text-white font-semibold mb-1">Nome do Personagem</label>
                    <div className="flex gap-2">
                    <input
                        type="text"
                        value={nomePersonagem}
                        onChange={(e) => setNomePersonagem(e.target.value)}
                        className="flex-1 p-2 rounded bg-gray-200 text-black"
                    />
                    <button
                        onClick={sortearNome}
                        className="font-semibold px-3 py-1 rounded hover:opacity-80 cursor-pointer"
                        style={{ backgroundColor: "var(--color-mustard)"}}
                    >
                        Sortear Nome
                    </button>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-white font-semibold">Gênero:</span>
                    <button
                    className="bg-blue-500 text-white rounded hover:opacity-80 cursor-pointer"
                    onClick={() =>
                        setGenero((g) => (g === "masculino" ? "feminino" : "masculino"))
                    }
                    >
                    {genero === "masculino" ? "Masculino" : "Feminino"}
                    </button>
                </div>

                {genero && (
                    <table className="w-full text-sm text-white border mt-6" style={{ borderColor: "var(--color-darkred)"}}>
                        <thead className="bg-yellow-900" style={{ color: "var(--color-mustard)"}}>
                        <tr>
                            <th className="px-2 py-1 border" style={{ borderColor: "var(--color-darkred)"}}>d100</th>
                            <th className="px-2 py-1 border" style={{ borderColor: "var(--color-darkred)"}}>Primitivo</th>
                            <th className="px-2 py-1 border" style={{ borderColor: "var(--color-darkred)"}}>Baixo Gótico</th>
                            <th className="px-2 py-1 border" style={{ borderColor: "var(--color-darkred)"}}>Alto Gótico</th>
                            <th className="px-2 py-1 border" style={{ borderColor: "var(--color-darkred)"}}>Arcaico</th>
                            <th className="px-2 py-1 border" style={{ borderColor: "var(--color-darkred)"}}>Informal</th>
                        </tr>
                        </thead>
                        <tbody>
                        {(genero === "masculino" ? NOMES_MASCULINOS : NOMES_FEMININOS).map((linha, i) => (
                            <tr key={i} className="odd:bg-[#2a1a14] even:bg-[#3a251d]">
                            <td className="px-2 py-1 border text-center" style={{ borderColor: "var(--color-darkred)"}}>{String(i * 5 + 1).padStart(2, '0')}-{(i + 1) * 5}</td>
                            {linha.map((nome, j) => (
                                <td
                                key={j}
                                className="px-2 py-1 border" style={{ borderColor: "var(--color-darkred)"}}>
                                {nome}
                                </td>
                            ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}

                <div>
                    <label className="block text-white font-semibold mb-1">Aparência</label>
                    <textarea
                    value={aparencia}
                    onChange={(e) => setAparencia(e.target.value)}
                    rows={3}
                    placeholder="Descreva a aparência do personagem..."
                    className="w-full p-2 rounded bg-gray-200 text-black"
                    />
                </div>

                <div>
                    <label className="block text-white font-semibold mb-1">História</label>
                    <textarea
                    value={historia}
                    onChange={(e) => setHistoria(e.target.value)}
                    rows={4}
                    placeholder="Escreva um breve histórico do personagem..."
                    className="w-full p-2 rounded bg-gray-200 text-black"
                    />
                </div>
                </div>

            <button
                onClick={() =>
                onFinalizar({
                    aptidoes: aptidoesFinais,
                    nomePersonagem,
                    nomeJogador,
                    genero,
                    divinacao: divinacao!,
                    aparencia,
                    historia,
                })
                }
                disabled={!finalizarApitidoes || !divinacao || !nomePersonagem}
                className="bg-green-500 px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 cursor-pointer"
            >
                Finalizar Personagem
            </button>
        </div>
    );
}
import { Funcao, funcoes } from "@/data/funcoes"
import { useState } from "react";
import Image from "next/image";

type Props = {
    onNext: (funcaoSelecionada: Funcao) => void;
};

export default function FuncaoSelector({ onNext }: Props) {
  const [selecionada, setSelecionada] = useState<Funcao | null>(null);
  const [talentoSelecionado, setTalentoSelecionado] = useState<string[]>([]);
  const [aptidoesSelecionadas, setAptidoesSelecionadas] = useState<string[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCardClick = (funcao: Funcao) => {
    if (selecionada?.id !== funcao.id) {
      setSelecionada(funcao);
      setTalentoSelecionado([]);
      setAptidoesSelecionadas([]);
    }
    setExpandedId(expandedId === funcao.id ? null : funcao.id);
  };

  const handleConfirm = () => {
    if (!selecionada) return;

    if (selecionada.talentosEscolhiveis.length && talentoSelecionado.length !== 1) return;

    if (selecionada.aptidoes?.escolhas) {
      const totalEscolhas = selecionada.aptidoes.escolhas.length;
      if (aptidoesSelecionadas.length !== totalEscolhas) return;
    }

    const funcaoFinal: Funcao = {
      ...selecionada,
      talentosEscolhiveis: talentoSelecionado,
      aptidoes: {
        ...selecionada.aptidoes,
        escolhasSelecionadas: aptidoesSelecionadas,
      },
    };

    onNext(funcaoFinal);
  };

  const toggleTalento = (talento: string) => {
    setTalentoSelecionado(talentoSelecionado.includes(talento) ? [] : [talento]);
  };

  const toggleAptidao = (aptidao: string) => {
    if (aptidoesSelecionadas.includes(aptidao)) {
      setAptidoesSelecionadas((prev) => prev.filter((a) => a !== aptidao));
    } else {
      if (
        selecionada?.aptidoes?.escolhas &&
        aptidoesSelecionadas.length < selecionada.aptidoes.escolhas.length
      ) {
        setAptidoesSelecionadas((prev) => [...prev, aptidao]);
      }
    }
  };

  const renderEscolhasSelect = (
    label: string,
    categoria: "talentos" | "aptidoes",
    escolhas?: string[] | string[][]
  ) => {
    if (!escolhas || escolhas.length === 0) return null;

    const opcoes = Array.isArray(escolhas[0]) ? (escolhas as string[][]).flat() : (escolhas as string[]);

    return (
      <div className="mt-3">
        <p className="font-semibold text-sm text-yellow-300">{label}</p>
        <div className="flex flex-col space-y-1 ml-2 mt-2">
          {opcoes.map((opcao) => (
            <label key={opcao} className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
              <input
                type="checkbox"
                value={opcao}
                checked={categoria === "talentos" ? talentoSelecionado.includes(opcao) : aptidoesSelecionadas.includes(opcao)}
                onChange={() => (categoria === "talentos" ? toggleTalento(opcao) : toggleAptidao(opcao))}
                className="h-4 w-4 text-yellow-500 border-gray-700 bg-[#2F1B0F] rounded"
              />
              <span className="text-white">{opcao}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-4 font-bold">Escolha sua Função</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {funcoes.map((funcao) => {
          const isExpanded = expandedId === funcao.id;
          const isSelected = selecionada?.id === funcao.id;

          return (
            <div
              key={funcao.id}
              className={`rounded-xl overflow-hidden border-4 cursor-pointer transition duration-300 ${
                isSelected ? "border-yellow-500 scale-105" : "border-transparent"
              }`}
              onClick={() => handleCardClick(funcao)}
            >
              <Image
                src={funcao.imagem.replace("/public", "")}
                alt={funcao.nome}
                width={300}
                height={180}
                className="w-40 h-40 object-cover rounded-xl mx-auto"
              />
              <div className="bg-[#835214] p-3 text-center text-white">
                <h3 className="text-xl font-bold">{funcao.nome}</h3>
                {isExpanded && (
                  <div className="mt-2 text-sm text-left space-y-2">
                    <p>{funcao.descricao}</p>
                    <div className="bg-[#2F1B0F] p-3 rounded-lg">
                      {renderEscolhasSelect("Talentos de escolha", "talentos", funcao.talentosEscolhiveis)}

                      {funcao.aptidoes?.fixas && funcao.aptidoes.fixas.length > 0 && (
                        <p>
                          <span className="font-semibold text-purple-300">Aptidões fixas:</span>{" "}
                          {funcao.aptidoes.fixas.join(", ")}
                        </p>
                      )}
                      {renderEscolhasSelect("Aptidões de escolha", "aptidoes", funcao.aptidoes?.escolhas)}

                      <p className="mt-2 text-yellow-400 font-semibold">🎁 Bônus: {funcao.bonus}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {selecionada && (
        <div className="mt-6 bg-[#2F1B0F] p-4 rounded-lg text-white w-full max-w-xl">
          <h3 className="text-lg font-bold mb-2">Função Selecionada: {selecionada.nome}</h3>
          <button
            disabled={
              !selecionada ||
              (selecionada.talentosEscolhiveis.length > 0 && talentoSelecionado.length !== 1) ||
              (selecionada.aptidoes?.escolhas &&
                aptidoesSelecionadas.length !== selecionada.aptidoes.escolhas.length)
            }
            onClick={handleConfirm}
            className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar
          </button>
        </div>
      )}
    </div>
  );
}
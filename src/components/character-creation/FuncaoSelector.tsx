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
      <div className="mt-3 text-left">
        <p className="font-semibold text-sm text-yellow-500 mb-1">{label}</p>
        <div className="flex flex-col space-y-1">
          {opcoes.map((opcao) => (
            <label key={opcao} className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
              <input
                type="checkbox"
                value={opcao}
                checked={categoria === "talentos" ? talentoSelecionado.includes(opcao) : aptidoesSelecionadas.includes(opcao)}
                onChange={() => (categoria === "talentos" ? toggleTalento(opcao) : toggleAptidao(opcao))}
                className="h-4 w-4"
              />
              <span>{opcao}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-6 font-bold">Escolha sua Função</h2>
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
                className="w-100 h-80 object-fill rounded-t-xl mx-auto"
              />
              <div 
                style={{ backgroundColor: "var(--color-mediumbrown)", color: "var(--color-text)" }}
                className="p-3 text-center">
                <h3 className="text-xl font-bold">{funcao.nome}</h3>
                {isExpanded && (
                  <div className="mt-2 space-y-2 text-sm transition-opacity duration-300">
                    <p>{funcao.descricao}</p>
                    <p className="mt-2 text-yellow-400 italic text-center">{funcao.bonus}</p>
                    <div className="bg-[#2F1B0F] p-3 rounded-lg text-left">
                      {funcao.aptidoes?.fixas && funcao.aptidoes.fixas.length > 0 && (
                        <p>
                          <span className="font-semibold text-purple-500">Aptidões:</span>{" "}
                          {funcao.aptidoes.fixas.join(", ")}
                        </p>
                      )}
                      
                      {renderEscolhasSelect("Talentos de escolha", "talentos", funcao.talentosEscolhiveis)}

                      {renderEscolhasSelect("Aptidões de escolha", "aptidoes", funcao.aptidoes?.escolhas)}

                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {selecionada &&
        (!selecionada.talentosEscolhiveis.length || talentoSelecionado.length === 1) &&
        (!selecionada.aptidoes?.escolhas || aptidoesSelecionadas.length === selecionada.aptidoes.escolhas.length) && (
          <div 
            style={{ backgroundColor: "var(--color-mediumbrown)", color: "var(--color-text)" }}
            className="mt-8 p-4 rounded-lg w-full max-w-xl flex flex-col justify-center items-center"
          >
            <h3 className="text-lg font-bold mb-2">Função Selecionada: {selecionada.nome}</h3>
            <button
              onClick={handleConfirm}
              className="mt-4 px-4 py-2 rounded hover:opacity-80 cursor-pointer"
              style={{ backgroundColor: "var(--color-mustard)", color: "var(--color-text)"}}
            >
              Continuar Para Dados Finais
            </button>
          </div>
      )}
    </div>
  );
}
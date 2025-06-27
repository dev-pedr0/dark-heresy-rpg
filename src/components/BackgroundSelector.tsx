"use client";

import Image from "next/image";
import { useState } from "react";
import { Background, backgrounds } from "@/data/backgrounds";

interface Props {
  onSelect: (bg: Background) => void;
  backgroundSelecionado: Background | null;
  continuar: () => void;
}

export default function BackgroundSelector({
  onSelect,
  backgroundSelecionado,
  continuar,
}: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [escolhas, setEscolhas] = useState<{ [key: string]: string[] }>({});

  const bgSelecionado = backgrounds.find((bg) => bg.id === selected);

  // Update choices for a specific category and index
  function setEscolhasParaGrupo(categoria: string, indice: number, opcoesSelecionadas: string[]) {
    const key = `${categoria}-${indice}`;
    setEscolhas((prev) => ({
      ...prev,
      [key]: opcoesSelecionadas,
    }));
  }

  // Check if all required choices are made
  const isEscolhaCompleta = (bg: Background) => {
    const total =
      (bg.pericias.escolhas?.length || 0) +
      (bg.talentos.escolhas?.length || 0) +
      (bg.equipamentos.escolhas?.length || 0) +
      (bg.aptidoes.escolhas?.length || 0);

    const selecionadosCount = Object.values(escolhas).reduce(
      (acc, arr) => acc + arr.length,
      0
    );

    return selecionadosCount >= total;
  };

  // Render checkboxes for choices
  const renderEscolhasSelect = (
    label: string,
    categoria: "pericias" | "talentos" | "equipamentos" | "aptidoes",
    gruposDeEscolha?: string[][]
  ) => {
    if (!gruposDeEscolha) return null;

    return (
      <div className="mt-3">
        <p className="font-semibold text-sm text-yellow-300">{label}</p>
        {gruposDeEscolha.map((grupo, i) => {
          const key = `${categoria}-${i}`;
          const selecionados = escolhas[key] || [];

          return (
            <div key={i} className="ml-2 mt-2">
              <p className="text-sm mb-1">Escolha um ou mais:</p>
              <div className="flex flex-col space-y-1">
                {grupo.map((opcao) => (
                  <label key={opcao} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={opcao}
                      checked={selecionados.includes(opcao)}
                      onChange={(e) => {
                        const newSelecionados = e.target.checked
                          ? [...selecionados, opcao]
                          : selecionados.filter((item) => item !== opcao);
                        setEscolhasParaGrupo(categoria, i, newSelecionados);
                      }}
                      className="h-4 w-4 text-yellow-500 border-gray-700 bg-[#2F1B0F] rounded"
                    />
                    <span className="text-white">{opcao}</span>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Confirm selections and pass to parent
  const confirmarEscolhas = () => {
    if (!bgSelecionado) return;

    const bgComEscolhas: Background = {
      ...bgSelecionado,
      pericias: {
        ...bgSelecionado.pericias,
        escolhasSelecionadas: Object.entries(escolhas)
          .filter(([key]) => key.startsWith("pericias-"))
          .flatMap(([_, vals]) => vals),
      },
      talentos: {
        ...bgSelecionado.talentos,
        escolhasSelecionadas: Object.entries(escolhas)
          .filter(([key]) => key.startsWith("talentos-"))
          .flatMap(([_, vals]) => vals),
      },
      equipamentos: {
        ...bgSelecionado.equipamentos,
        escolhasSelecionadas: Object.entries(escolhas)
          .filter(([key]) => key.startsWith("equipamentos-"))
          .flatMap(([_, vals]) => vals),
      },
      aptidoes: {
        ...bgSelecionado.aptidoes,
        escolhasSelecionadas: Object.entries(escolhas)
          .filter(([key]) => key.startsWith("aptidoes-"))
          .flatMap(([_, vals]) => vals),
      },
    };

    onSelect(bgComEscolhas);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-4 font-bold">Escolha seu Background</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {backgrounds.map((bg) => (
          <div
            key={bg.id}
            className={`rounded-xl overflow-hidden border-4 cursor-pointer transition duration-300 ${
              selected === bg.id ? "border-yellow-500 scale-105" : "border-transparent"
            }`}
            onClick={() => {
              if (selected !== bg.id) {
                setSelected(bg.id);
                // Only reset escolhas for this background
                setEscolhas((prev) =>
                  Object.fromEntries(
                    Object.entries(prev).filter(
                      ([key]) =>
                        !key.startsWith("pericias-") &&
                        !key.startsWith("talentos-") &&
                        !key.startsWith("equipamentos-") &&
                        !key.startsWith("aptidoes-")
                    )
                  )
                );
              }
            }}
          >
            <Image
              src={bg.imagem.replace("/public", "")}
              alt={bg.nome}
              width={300}
              height={180}
              className="w-40 h-40 object-cover rounded-xl mx-auto"
            />
            <div className="bg-[#835214] p-3 text-center text-white">
              <h3 className="text-xl font-bold">{bg.nome}</h3>
              {selected === bg.id && (
                <div className="mt-2 text-sm text-left space-y-2">
                  <p>{bg.descricao}</p>
                  <div className="bg-[#2F1B0F] p-3 rounded-lg">
                    {bg.pericias.fixas && (
                      <p>
                        <span className="font-semibold text-green-300">Perícias fixas:</span>{" "}
                        {bg.pericias.fixas.join(", ")}
                      </p>
                    )}
                    {renderEscolhasSelect("Perícias de escolha", "pericias", bg.pericias.escolhas)}

                    {bg.talentos.fixos && (
                      <p className="mt-2">
                        <span className="font-semibold text-blue-300">Talentos fixos:</span>{" "}
                        {bg.talentos.fixos.join(", ")}
                      </p>
                    )}
                    {renderEscolhasSelect("Talentos de escolha", "talentos", bg.talentos.escolhas)}

                    {bg.equipamentos.fixos && (
                      <p className="mt-2">
                        <span className="font-semibold text-orange-300">Equipamentos fixos:</span>{" "}
                        {bg.equipamentos.fixos.join(", ")}
                      </p>
                    )}
                    {renderEscolhasSelect(
                      "Equipamentos de escolha",
                      "equipamentos",
                      bg.equipamentos.escolhas
                    )}

                    {bg.aptidoes.fixas && (
                      <p className="mt-2">
                        <span className="font-semibold text-purple-300">Aptidões fixas:</span>{" "}
                        {bg.aptidoes.fixas.join(", ")}
                      </p>
                    )}
                    {renderEscolhasSelect("Aptidões de escolha", "aptidoes", bg.aptidoes.escolhas)}

                    <p className="mt-2 text-yellow-400 font-semibold">🎁 Bônus: {bg.bonus}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selected && bgSelecionado && isEscolhaCompleta(bgSelecionado) && (
        <div className="mt-6 bg-[#2F1B0F] p-4 rounded-lg text-white w-full max-w-xl">
          <h3 className="text-lg font-bold mb-2">
            Background Selecionado: {bgSelecionado.nome}
          </h3>
          <button
            onClick={() => {
              confirmarEscolhas();
              continuar();
            }}
            className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
          >
            Continuar para Função
          </button>
        </div>
      )}
    </div>
  );
}

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
  const [escolhas, setEscolhas] = useState<{ [key: string]: string }>({});
  const [descricaoAberta, setDescricaoAberta] = useState<Background | null>(null);

  const bgSelecionado = backgrounds.find((bg) => bg.id === selected);

  const setEscolhasParaGrupo = (
    categoria: string,
    indice: number,
    opcaoSelecionada: string
  ) => {
    const key = `${categoria}-${indice}`;
    setEscolhas((prev) => ({
      ...prev,
      [key]: opcaoSelecionada,
    }));
  };

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

  const renderEscolhasSelect = (
    label: string,
    categoria: "pericias" | "talentos" | "equipamentos" | "aptidoes",
    gruposDeEscolha?: string[][]
  ) => {
    if (!gruposDeEscolha) return null;

    return (
      <div className="mt-3">
        <p className="font-semibold text-sm" style={{ color: "var(--color-mustard)" }}>
          {label}
        </p>
        {gruposDeEscolha.map((grupo, i) => {
          const key = `${categoria}-${i}`;
          const selecionado = escolhas[key] || "";

          return (
            <div key={i} className="ml-2 mt-2">
              <p className="text-sm mb-1">Escolha um:</p>
              <div className="flex flex-col space-y-1">
                {grupo.map((opcao) => (
                  <label key={opcao} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={key}
                      value={opcao}
                      checked={selecionado === opcao}
                      onChange={(e) => {
                        setEscolhasParaGrupo(categoria, i, e.target.value);
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

      {descricaoAberta && (
        <div 
            style={{ backgroundColor: "var(--color-darkblack)", color: "var(--color-text)" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-70"
        >
            <div className="p-6 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto"
                style={{ backgroundColor: "var(--color-mediumbrown)" }}
            >
                <h3 className="text-xl font-bold mb-4 text-center"
                    style={{ color: "var(--color-mustard)" }}
                >
                    {descricaoAberta.nome}
                </h3>
                <p className="text-sm whitespace-pre-line text-justify">
                {descricaoAberta.descricao} 
                </p>
                <button
                    onClick={() => setDescricaoAberta(null)}
                    className="mt-4 px-4 py-2 rounded hover:opacity-80 cursor-pointer"
                    style={{ backgroundColor: "var(--color-mustard)", color: "var(--color-text)" }}
                >
                    Fechar
                </button>
            </div>
        </div>
      )}

      <h2 className="text-2xl mb-4 font-bold">Escolha seu Background</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {backgrounds.map((bg) => (
          <div
            key={bg.id}
            className={`mt-4 rounded-xl overflow-hidden border-4 cursor-pointer transition duration-300 ${
                selected === bg.id ? "border-yellow-500 scale-105" : "border-transparent"
            }`}
            onClick={() => {
              if (selected !== bg.id) {
                setSelected(bg.id);
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
              className="w-100 h-80 object-fill rounded-t-xl mx-auto"
              onClick={() => {
                if (selected === bg.id) {
                  setSelected(null);
                }
              }}
            />
            <div 
              className="p-3 text-center"
              style={{ backgroundColor: "var(--color-mediumbrown)" }}
            >
              <h3 className="text-xl font-bold">{bg.nome}</h3>
              {selected === bg.id && (
                <div className="mt-2 text-sm text-left space-y-2">
                  <div className="flex flex-col">
                      <p className="m-0 p-0 !text-center">
                        {bg.descricao.slice(0, 300)}...
                      </p>
                      <button
                          onClick={() => setDescricaoAberta(bg)}
                          className="text-sm hover:underline font-extrabold cursor-pointer"
                      >
                          Ler mais
                      </button>
                  </div>
                  <p className="mt-2 text-yellow-400 italic text-center">
                    {bg.bonus}
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(null);
                        setEscolhas({});
                      }}
                      className="text-sm hover:underline font-extrabold cursor-pointer"
                    >
                      Fechar
                    </button>
                  </div>
                  <div className="bg-[#2F1B0F] p-3 rounded-lg">
                    {bg.pericias.fixas && (
                      <p>
                        <span className="font-semibold text-purple-500">Perícias:</span>{" "}
                        {bg.pericias.fixas.join(", ")}
                      </p>
                    )}

                    {bg.talentos.fixos && (
                      <p className="mt-2">
                        <span className="font-semibold text-blue-500">Talentos:</span>{" "}
                        {bg.talentos.fixos.join(", ")}
                      </p>
                    )}

                    {bg.equipamentos.fixos && (
                      <p className="mt-2">
                        <span className="font-semibold text-green-500">Equipamentos:</span>{" "}
                        {bg.equipamentos.fixos.join(", ")}
                      </p>
                    )}

                    {bg.aptidoes.fixas && (
                      <p className="mt-2">
                        <span className="font-semibold text-orange-500">Aptidões:</span>{" "}
                        {bg.aptidoes.fixas.join(", ")}
                      </p>
                    )}

                    {renderEscolhasSelect("Perícias de escolha", "pericias", bg.pericias.escolhas)}

                    {renderEscolhasSelect("Talentos de escolha", "talentos", bg.talentos.escolhas)}
                    
                    {renderEscolhasSelect(
                      "Equipamentos de escolha",
                      "equipamentos",
                      bg.equipamentos.escolhas
                    )}

                    {renderEscolhasSelect("Aptidões de escolha", "aptidoes", bg.aptidoes.escolhas)}

                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selected && bgSelecionado && isEscolhaCompleta(bgSelecionado) && (
        <div 
          style={{ backgroundColor: "var(--color-mediumbrown)", color: "var(--color-text)" }}
          className="mt-6 p-4 rounded-lg w-full max-w-xl flex flex-col justify-center items-center"
        >
          <h3 className="text-lg font-bold mb-2 text-center">
            Background Selecionado: {bgSelecionado.nome}
          </h3>
          <button
            onClick={() => {
              confirmarEscolhas();
              continuar();
            }}
            className="mt-4 px-4 py-2 rounded hover:opacity-80 cursor-pointer"
            style={{ backgroundColor: "var(--color-mustard)", color: "var(--color-text)"}}
          >
            Continuar para Função
          </button>
        </div>
      )}
    </div>
  );
}

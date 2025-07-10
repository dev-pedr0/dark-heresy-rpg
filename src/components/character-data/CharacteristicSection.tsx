import { CARACTERISTICAS, ABREVIACOES_CARACTERISTICAS } from "@/utils/caracteristicas";
import { useState } from "react";

type Props = {
  atributos: { [atributo: string]: number };
  dadosFinais: {
    [atributo: string]: {
      valorFinal: number;
      melhorias: number;
    };
  };
  onChange: (
    atributo: string,
    novoValorBase: number,
    novasMelhorias: number
  ) => void;
};

const CharacteristicSection = ({ atributos, dadosFinais, onChange }: Props) => {
  const [melhorias, setMelhorias] = useState<{ [atributo: string]: number }>({});

  function toggleMelhoria(atributo: string, index: number) {
    setMelhorias((prev) => {
      const atual = prev[atributo] ?? 0;
      const novoValor = index + 1 === atual ? index : index + 1;
      return {
        ...prev,
        [atributo]: novoValor,
      };
    });
  }
  
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Características</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CARACTERISTICAS.map((caracteristica) => {
          const valorBase = atributos?.[caracteristica] ?? 0;
          const melhorias = dadosFinais?.[caracteristica]?.melhorias ?? 0;
          const dezena = Math.floor(valorBase / 10);
          const abreviacao = ABREVIACOES_CARACTERISTICAS[caracteristica];

          return (
            <div
              key={caracteristica}
              className="bg-zinc-900 p-1 rounded shadow space-y-2 border border-zinc-700"
            >
              <div className="flex justify-between text-sm text-zinc-300">
                <span className="font-semibold">
                  {caracteristica} / {abreviacao}
                </span>
                <div>
                  <span className="flex items-center gap-1">
                    Valor:
                    <input
                      type="number"
                      value={valorBase}
                      min={0}
                      max={99}
                      onChange={(e) =>
                        onChange(
                          caracteristica,
                          Number(e.target.value),
                          melhorias
                        )
                      }
                      className="bg-zinc-800 text-white w-16 px-2 py-1 rounded border border-zinc-600 text-sm"
                    />
                  </span>
                  <span>
                    Bônus: <strong>{dezena}</strong>
                  </span>
                </div>                
              </div>

              <div className="text-xs text-zinc-400">
                Melhorias:
                <div className="flex gap-1 mt-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        const novoValor =
                          i + 1 === melhorias ? i : i + 1;
                        onChange(caracteristica, valorBase, novoValor);
                      }}
                      className={`w-4 h-4 rounded-full ${
                        i < melhorias ? "bg-yellow-500" : "bg-zinc-700"
                      }`}
                      title={`Melhoria ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacteristicSection;
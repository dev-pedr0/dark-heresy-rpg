import { montarPericiasComNiveis, NivelPericia, ORDEM_NIVEIS, PericiaComNivel } from "@/data/pericias";
import { useEffect, useState } from "react";

interface Props {
  ficha: any; 
  onChange: (novaLista: PericiaComNivel[]) => void;
}

const NIVEIS: NivelPericia[] = ["desconhecida", "conhecida", "+10", "+20", "+30"];

export default function PericiasSection({ ficha, onChange }: Props) {
  const [pericias, setPericias] = useState<PericiaComNivel[]>([]);
  const [mostrarEspecializacoes, setMostrarEspecializacoes] = useState<Record<string, boolean>>({});

  useEffect(() => {
        const lista =
            ficha.dadosFinais?.pericias?.length > 0
                ? ficha.dadosFinais.pericias
                : montarPericiasComNiveis(ficha.background?.pericias || []);
        setPericias(lista);
        onChange(lista);
    }, [ficha.dadosFinais?.pericias, ficha.background?.pericias]);

  function atualizarNivel(periciaNome: string, nivel: NivelPericia) {
    const novas = pericias.map((p) =>
      p.nome === periciaNome ? { ...p, nivel } : p
    );
    setPericias(novas);
    onChange(novas);
  }

  function atualizarEspecializacao(periciaNome: string, especNome: string, nivel: NivelPericia) {
    const novas = pericias.map((p) => {
      if (p.nome !== periciaNome || !p.especializacoes) return p;

      const novasEspecs = p.especializacoes.map((e) =>
        e.nome === especNome ? { ...e, nivel } : e
      );

      // Recalcula nível da perícia mãe com base na maior especialização
      const maiorNivel = [...novasEspecs]
        .sort((a, b) => ORDEM_NIVEIS.indexOf(b.nivel) - ORDEM_NIVEIS.indexOf(a.nivel))[0]?.nivel ?? "desconhecida";

      return { ...p, especializacoes: novasEspecs, nivel: maiorNivel };
    });

    setPericias(novas);
    onChange(novas);
  }

  function toggleEspecializacoes(periciaNome: string) {
    setMostrarEspecializacoes((prev) => ({
      ...prev,
      [periciaNome]: !prev[periciaNome],
    }));
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Perícias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pericias.map((pericia) => (
          <div
            key={pericia.nome}
            className="bg-zinc-900 p-4 rounded border border-zinc-700 space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-zinc-200">{pericia.nome}</span>
              <select
                value={pericia.nivel}
                onChange={(e) =>
                  atualizarNivel(pericia.nome, e.target.value as NivelPericia)
                }
                className="bg-zinc-800 text-white p-1 rounded border border-zinc-600 text-sm"
              >
                {NIVEIS.map((nivel) => (
                  <option key={nivel} value={nivel}>
                    {nivel}
                  </option>
                ))}
              </select>
            </div>

            {pericia.especializacoes && (
              <>
                <button
                  onClick={() => toggleEspecializacoes(pericia.nome)}
                  className="text-xs text-blue-400 hover:underline"
                >
                  {mostrarEspecializacoes[pericia.nome] ? "Ocultar" : "Mostrar"} especializações
                </button>

                {mostrarEspecializacoes[pericia.nome] && (
                  <div className="mt-2 space-y-1 text-sm">
                    {pericia.especializacoes
                      .sort(
                        (a, b) =>
                          ORDEM_NIVEIS.indexOf(b.nivel) -
                          ORDEM_NIVEIS.indexOf(a.nivel)
                      )
                      .map((espec) => (
                        <div
                          key={espec.nome}
                          className="flex justify-between items-center"
                        >
                          <span className="text-zinc-300">{espec.nome}</span>
                          <select
                            value={espec.nivel}
                            onChange={(e) =>
                              atualizarEspecializacao(
                                pericia.nome,
                                espec.nome,
                                e.target.value as NivelPericia
                              )
                            }
                            className="bg-zinc-800 text-white p-1 rounded border border-zinc-600 text-xs"
                          >
                            {NIVEIS.map((nivel) => (
                              <option key={nivel} value={nivel}>
                                {nivel}
                              </option>
                            ))}
                          </select>
                        </div>
                      ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
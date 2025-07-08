import { CARACTERISTICAS, ABREVIACOES_CARACTERISTICAS } from "@/utils/caracteristicas";

type Props = {
  atributos: { [atributo: string]: number };
};

const CharacteristicSection = ({ atributos }: Props) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Características</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CARACTERISTICAS.map((caracteristica) => {
          const valor = atributos?.[caracteristica] ?? 0;
          const dezena = Math.floor(valor / 10);
          const melhorias = 0;
          const abreviacao = ABREVIACOES_CARACTERISTICAS[caracteristica];

          return (
            <div
              key={caracteristica}
              className="bg-zinc-900 p-4 rounded shadow space-y-2 border border-zinc-700"
            >
              <div className="flex justify-between text-sm text-zinc-300">
                <span className="font-semibold">
                  {caracteristica} / {abreviacao}
                </span>
                <span>
                  Valor: <strong>{valor}</strong>
                </span>
                <span>
                  Bônus: <strong>{dezena}</strong>
                </span>
              </div>

              <div className="text-xs text-zinc-400">
                Melhorias:
                <div className="flex gap-1 mt-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-full ${
                        i < melhorias ? "bg-yellow-500" : "bg-zinc-700"
                      }`}
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
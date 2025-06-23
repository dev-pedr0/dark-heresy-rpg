import { Caracteristica } from "./caracteristicas";

export function gerarAtributosPorPonto(
  positivos: Caracteristica[],
  negativos: Caracteristica[],
  todasAsCaracteristicas: readonly Caracteristica[]
): {
  valoresBase: Record<Caracteristica, number>;
  pontosDisponiveis: number;
  limiteMaximo: number;
} {
  const valoresBase: Record<Caracteristica, number> = {} as any;

  todasAsCaracteristicas.forEach((caracteristica) => {
    if (positivos.includes(caracteristica)) {
      valoresBase[caracteristica] = 30;
    } else if (negativos.includes(caracteristica)) {
      valoresBase[caracteristica] = 20;
    } else {
      valoresBase[caracteristica] = 25;
    }
  });

  return {
    valoresBase,
    pontosDisponiveis: 60,
    limiteMaximo: 40,
  };
}
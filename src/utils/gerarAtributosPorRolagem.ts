import { Caracteristica } from "./caracteristicas";
import { rolar2d10, rolar3d10 } from "./rolarDados";

export function gerarAtributosPorRolagem(
  positivos: Caracteristica[],
  negativos: Caracteristica[],
  todasAsCaracteristicas: readonly Caracteristica[]
): Record<Caracteristica, number> {
  const resultado: Record<Caracteristica, number> = {} as any;

  todasAsCaracteristicas.forEach((caracteristica) => {
    let rolagem = [];

    if (positivos.includes(caracteristica)) {
      rolagem = rolar3d10().sort((a, b) => b - a).slice(0, 2); // dois maiores
    } else if (negativos.includes(caracteristica)) {
      rolagem = rolar3d10().sort((a, b) => a - b).slice(0, 2); // dois menores
    } else {
      rolagem = rolar2d10();
    }

    resultado[caracteristica] = rolagem.reduce((acc, val) => acc + val, 20);
  });

  return resultado;
}
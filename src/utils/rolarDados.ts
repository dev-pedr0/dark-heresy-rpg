import { DIVINACOES } from "./tabelas";

export function rolarD10(): number {
  return Math.floor(Math.random() * 10) + 1;
}

export function rolar3d10(): number[] {
  return [rolarD10(), rolarD10(), rolarD10()];
}

export function rolar2d10(): number[] {
  return [rolarD10(), rolarD10()];
}

export function rolarExpressaoDeVida(expressao: string): number {
  const regex = /(\d+)\s*\+\s*1d(\d+)/i;
  const match = expressao.match(regex);

  if (!match) throw new Error(`Expressão de vida inválida: ${expressao}`);

  const base = parseInt(match[1], 10);
  const dadoMax = parseInt(match[2], 10);
  const rolagem = Math.floor(Math.random() * dadoMax) + 1;

  return base + rolagem;
}

export function rolarD100(): number {
  return Math.floor(Math.random() * 100) + 1;
}

export function sortearDivinacaoAleatoria() {
  const roll = rolarD100();
  const resultado = DIVINACOES.find((d) => d.roll.includes(roll));

  if (!resultado) {
    throw new Error(`Nenhuma divinação encontrada para o roll ${roll}`);
  }

  return {
    ...resultado,
    roll: [roll],
  };
}
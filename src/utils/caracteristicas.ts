export const CARACTERISTICAS = [
  "Habilidade de Combate",
  "Habilidade Balística",
  "Força",
  "Resistência",
  "Agilidade",
  "Inteligência",
  "Percepção",
  "Vontade",
  "Socialização",
  "Influência",
] as const;

export type Caracteristica = (typeof CARACTERISTICAS)[number];

export const ABREVIACOES_CARACTERISTICAS: Record<Caracteristica, string> = {
  "Habilidade de Combate": "HC",
  "Habilidade Balística": "HB",
  "Força": "For",
  "Resistência": "Res",
  "Agilidade": "Agi",
  "Inteligência": "Int",
  "Percepção": "Per",
  "Vontade": "Von",
  "Socialização": "Soc",
  "Influência": "Inf",
};
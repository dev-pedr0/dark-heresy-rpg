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
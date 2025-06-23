import type { Caracteristica } from "@/utils/caracteristicas";

  export type PlanetaDeOrigem = {
    id: string;
    nome: string;
    imagem: string;
    descricao: string;
    modificadores: {
        positivo: Caracteristica[];
        negativo: Caracteristica[];
    };
  };

  export const planetasDeOrigem: PlanetaDeOrigem[] = [
    {
        id: "feral_world",
        nome: "Planeta Selvagem",
        imagem: "/public/planetas/Feral_World.jpg",
        descricao: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        modificadores: {
            positivo: ["Força", "Resistência"],
            negativo: ["Influência"],
        },
    },
    {
        id: "forge_world",
        nome: "Planeta Forja",
        imagem: "/public/planetas/Forge_World.jpg",
        descricao: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        modificadores: {
            positivo: ["Inteligência", "Resistência"],
            negativo: ["Socialização"],
        },
    },
    {
        id: "highborn",
        nome: "Nobre",
        imagem: "/public/planetas/Highborn.jpg",
        descricao: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        modificadores: {
            positivo: ["Socialização", "Influência"],
            negativo: ["Resistência"],
        },
    },
    {
        id: "hive_world",
        nome: "Mundo Colmeia",
        imagem: "/public/planetas/Hive_World.jpg",
        descricao: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        modificadores: {
            positivo: ["Agilidade", "Percepção"],
            negativo: ["Vontade"],
        },
    },
    {
        id: "shrine_world",
        nome: "Planeta Religioso",
        imagem: "/public/planetas/Shrine_World.jpg",
        descricao: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        modificadores: {
            positivo: ["Socialização", "Vontade"],
            negativo: ["Percepção"],
        },
    },
    {
        id: "voidborn",
        nome: "Nascido no Espaço",
        imagem: "/public/planetas/Voidborn.jpg",
        descricao: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        modificadores: {
            positivo: ["Inteligência", "Vontade"],
            negativo: ["Força"],
        },
    },
  ]
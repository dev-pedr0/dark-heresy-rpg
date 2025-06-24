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
    limiteDestino: number;
    bencao: number;
    bonus: string;
    talentosEscolhiveis?: string[];
    talentoFixo?: string;
    efeitoNaArma?: string;
    aptidoes: string;
    vida: string;
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
        limiteDestino: 2,
        bencao: 3,
        bonus: "O Caminho Antigo – qualquer Arma Arcaica perde sua qualidade Primitiva e ganha a qualidade Efetiva (3).",
        efeitoNaArma: "Armas Arcaicas perdem 'Primitiva' e ganham 'Efetiva (3)'",
        aptidoes: "Resistência",
        vida: "9 + 1d5",
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
        limiteDestino: 3,
        bencao: 8,
        bonus: "Escolhido do Omnissiah – o personagem começa com um dos talentos a seguir a escolha do jogador (Talento Técnico ou Tecnólogo de Armas).",
        talentosEscolhiveis: ["Talento Técnico", "Tecnólogo de Armas"],
        aptidoes: "Inteligência",
        vida: "8 + 1d5",
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
        limiteDestino: 4,
        bencao: 10,
        bonus: "Berço de Ouro – a qualquer momento que o personagem reduzir sua Influência ele reduz o valor indicado -1 (até o mínimo de 1).",
        aptidoes: "Socialização",
        vida: "9 + 1d5",
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
        limiteDestino: 2,
        bencao: 6,
        bonus: "Vivendo na Multidão – o personagem ignora multidões para propósitos de movimento, tratando elas como terreno aberto. Em espaços fechados ele recebe +20 em testes de Navegação (superfície).",
        aptidoes: "Percepção",
        vida: "8 + 1d5",
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
        limiteDestino: 3,
        bencao: 6,
        bonus: "Fé no Credo – quando o personagem gasta um ponto de destino ele rola 1d10. Em um valor 1, ele não reduz a pontuação de pontos de destino dele.",
        aptidoes: "Vontade",
        vida: "7 + 1d5",
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
        limiteDestino: 3,
        bencao: 5,
        bonus: "Filho do Vazio – o personagem começa com o talento Mente Fortalecida e ganha +30 para se mover em ambientes de gravidade 0.",
        talentoFixo: "Mente Fortalecida",
        aptidoes: "Inteligência",
        vida: "7 + 1d5",
    },
  ]
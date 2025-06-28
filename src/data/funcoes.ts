export type Funcao = {
    id: string;
    nome: string;
    imagem: string;
    descricao: string;
    talentosEscolhiveis: string[];
    aptidoes: {
        fixas?: string[];
        escolhas?: string[][];
        escolhasSelecionadas?: string[];
    };
    bonus: string;
}

export const funcoes: Funcao[] = [
    {
        id: "assassino",
        nome: "Assassino",
        imagem: "/roles/assassino.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        talentosEscolhiveis: ["Saturado", "De Pé"],
        aptidoes: {
            fixas: ["Agilidade", "Sobrevivência", "Sutileza", "Percepção"],
            escolhas: [
                ["Habilidade Balística", "Habilidade de Combate"],
            ]
        },
        bonus: "Morte Certa – o personagem pode gastar um ponto de destino após ser bem-sucedido em um ataque e causar dano adicional igual aos graus de sucesso no teste do ataque no primeiro acerto.",
    },
    {
        id: "cirurgiao",
        nome: "Cirurgião",
        imagem: "/roles/cirurgiao.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        talentosEscolhiveis: ["Resistente (escolha um)", "Derrubada"],
        aptidoes: {
            fixas: ["Sobrevivência", "Inteligência", "Conhecimento", "Força", "Resistência"],
        },
        bonus: "Curador Dedicado – ao falhar em um teste de Primeiros Socorros o personagem pode gastar um ponto de destino para ser bem-sucedido automaticamente com graus de sucesso iguais ao seu bônus de inteligência.",
    },
    {
        id: "rufiao",
        nome: "Rufião",
        imagem: "/roles/rufiao.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        talentosEscolhiveis: ["Queda Leve", "Reação Rápida"],
        aptidoes: {
            fixas: ["Agilidade", "Habilidade Balística", "Defensiva", "Socialização", "Sutileza"],
        },
        bonus: "Correr e Atirar – uma vez por rodada, após realizar uma ação de movimento, o personagem pode realizar um Ataque Padrão com uma arma tipo Pistola como Ação Livre.",
    },
    {
        id: "hierofante",
        nome: "Hierofante",
        imagem: "/roles/hierofante.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        talentosEscolhiveis: ["Trabalho em Equipe", "Ódio (escolha um)"],
        aptidoes: {
            fixas: ["Socialização", "Ofensiva", "Social", "Resistência", "Vontade"],
        },
        bonus: "Manipular as Massas – o personagem pode gastar um ponto de destino para ser automaticamente bem-sucedido em um teste de Charme, Comando ou Intimidação com uma quantidade de graus de sucesso igual ao seu bônus de Vontade.",
    },
    {
        id: "mistico",
        nome: "Místico",
        imagem: "/roles/mistico.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        talentosEscolhiveis: ["Resistente (Poderes Psíquicos)", "Sentido Psíquico"],
        aptidoes: {
            fixas: ["Defensiva", "Inteligência", "Conhecimento", "Percepção", "Vontade"],
        },
        bonus: "Encarar o Imaterium – o personagem começa com o Avanço de Elite Psíquico.",
    },
    {
        id: "sabio",
        nome: "Sábio",
        imagem: "/roles/sabio.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        talentosEscolhiveis: ["Ambidestria", "Pistas das Multidões"],
        aptidoes: {
            fixas: ["Inteligência", "Conhecimento", "Percepção", "Tecnologia", "Vontade"],
        },
        bonus: "Encarar o Imaterium – o personagem começa com o Avanço de Elite Psíquico.",
    },
    {
        id: "buscador",
        nome: "Buscador",
        imagem: "/roles/buscador.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        talentosEscolhiveis: ["Intuição Precisa", "Desarmar"],
        aptidoes: {
            fixas: ["Inteligência", "Socialização", "Percepção", "Tecnologia", "Social"],
        },
        bonus: "Encarar o Imaterium – o personagem começa com o Avanço de Elite Psíquico.",
    },
    {
        id: "guerreiro",
        nome: "Guerreiro",
        imagem: "/roles/guerreiro.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        talentosEscolhiveis: ["Mandíbula de Ferro", "Recarga Rápida"],
        aptidoes: {
            fixas: ["Habilidade Balística", "Defensiva", "Ofensiva", "Força", "Habilidade de Combate"],
        },
        bonus: "Expert em Violência – após um ataque bem-sucedido, mas antes de determinar número de acertos, o personagem pode gastar um ponto de destino para substituir os graus de sucesso atingidos por graus de sucesso iguais ao bônus de Habilidade de Combate (para ataques corpo a corpo) ou ao bônus de Habilidade Balística (para ataques a distância).",
    },
];
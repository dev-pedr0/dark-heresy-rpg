export type Background = {
    id: string;
    nome: string;
    imagem: string;
    descricao: string;
    pericias: {
        fixas?: string[];
        escolhas?: string[][];
    };
    talentos: {
        fixos?: string[];
        escolhas?: string[][];
    };
    equipamentos: {
        fixos?: string[];
        escolhas?: string[][]; 
    };
    bonus: string;
    aptidoes: {
        fixas?: string[];
        escolhas?: string[][];
    }
}

export const backgrounds: Background[] = [
    {
        id: "adeptus_administratum",
        nome: "Adeptus Administratum",
        imagem: "/public/backgrounds/Adeptus_Administratum.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        pericias: {
            fixas: ["Conhecimento Comum (Adeptus Administratum)", "Linguística (Alto Gótico)", "Lógica", "Conhecimento Escolástico (escolha um)"],
            escolhas: [
                ["Comércio", "Medicina"],
            ],
        },
        talentos: {
            escolhas: [
                ["Treinamento com Armas (Las)", "Treinamento com Armas (Projétil Sólido)"],
            ],
        },
        equipamentos: {
            fixos: ["Robes Imperiais", "Autocópia", "Relógio", "Tablet", "Kit Médico"],
            escolhas: [
                ["Pistola-Las", "Metralhadora Automática"],
            ],
        },
        bonus: "Mestre de Burocracia – o personagem considera a disponibilidade dos itens um nível mais disponível ou um menos mais difícil.",
        aptidoes: {
            fixas: ["Conhecimento", "Social"],
        }
    },
    {
        id: "adeptus_arbites",
        nome: "Adeptus Arbites",
        imagem: "/public/backgrounds/Adeptus_Arbites.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        pericias: {
            fixas: ["Atenção", "Conhecimento Comum (Adeptus Arbites)", "Conhecimento Comum (Submundo)", "Intimidação", "Intuição"],
            escolhas: [
                ["Investigação", "Interrogatório"],
            ],
        },
        talentos: {
            escolhas: [
                ["Treinamento com Armas (Choque)", "Treinamento com Armas (Projétil Sólido)"],
            ],
        },
        equipamentos: {
            fixos: ["Adrenalina x3", "Algemas", "Cigarro x12"],
            escolhas: [
                ["Escopeta", "Maça de Choque"],
                ["Carapaça Leve de Milicano", "Peitoral de Carapaça"],
            ],
        },
        bonus: "A Face da Lei – o personagem pode re-rolar qualquer teste de Intimidar ou Interrogar e pode substituir o bônus de Vontade pelos graus de sucesso nesses testes caso seja aplicável.",
        aptidoes: {
            fixas: ["Ofensiva", "Defensiva"],
        }
    },
    {
        id: "adeptus_astra_telephatica",
        nome: "Adeptus Astra Telepathica",
        imagem: "/public/backgrounds/Adeptus_Astra_Telephatica.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        pericias: {
            fixas: ["Atenção", "Conhecimento Comum (Adeptus Astra Telepathica)", "Conhecimento Proibido (Warp)", "Senso Psíquico", "Intuição"],
            escolhas: [
                ["Enganação", "Interrogatório"],
            ],
        },
        talentos: {
            escolhas: [
                ["Treinamento com Armas (Las)", "Treinamento com Armas (Arcaica)"],
            ],
        },
        equipamentos: {
            fixos: ["Pistola-Las",],
            escolhas: [
                ["Bastão", "Chicote"],
                ["Manto de Flak Leve", "Colete Flak"],
                ["Comunicador", "Foco Psíquico"],
            ],
        },
        bonus: "Ameaça Constante – quando o personagem ou aliado dentro de 10 metros rolar na tabela Fenômeno Psíquico, o personagem pode aumentar ou diminuir a rolagem por um valor igual ao seu bônus de Vontade.",
        aptidoes: {
            escolhas:[
                ["Defensiva", "Psíquica"],
            ],
        }
    },
    {
        id: "adeptus_mechanicus",
        nome: "Adeptus Mechanicus",
        imagem: "/public/backgrounds/Adeptus_Mechanicus.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        pericias: {
            fixas: ["Conhecimento Comum (Adeptus Mechanicus)", "Lógica", "Segurança", "Uso Tecnológico"],
            escolhas: [
                ["Atenção", "Operação (escolha um)"],
            ],
        },
        talentos: {
            fixos: ["Uso de Mecandritos (Utilidade)", "Treinamento com Armas (Projétil Sólido)"],
        },
        equipamentos: {
            fixos: ["Robes Imperiais", "Unguentos Sagrados x2"],
            escolhas: [
                ["Rifle Automático", "Canhão de Mão"],
                ["Servo Caveira Unitário (Utilidade)", "Mecandrito (Ótico)"],
            ],
        },
        bonus: "Substitua a Carne Fraca – o personagem considera qualquer item cibernético com disponibilidade 2 níveis menores (ou 2 níveis mais fácil de achar).",
        aptidoes: {
            escolhas:[
                ["Conhecimento", "Tecnologia"],
            ],
        }
    },
    
]
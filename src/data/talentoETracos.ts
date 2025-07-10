import APTIDOES_LISTA from "@/data/aptidoes";

type TalentRequirement =
    | { type: "caracteristica"; nome: string; valorMinimo: number }
    | { type: "pericia"; nome: string; nivel?: string }
    | { type: "especializacaoPericia"; pericia: string; especializacao: string }
    | { type: "talento"; nome: string }
    | { type: "traço"; nome: string }
    | { type: "psiNivel"; minimo: number }
    | { type: "especializacaoTalento"; talento: string; especializacao: string }
    | { type: "ou"; requisitos: TalentRequirement[] }
    | { type: "e"; requisitos: TalentRequirement[] };


type Aptidao = typeof APTIDOES_LISTA[number];

type AptidoesRequisito =
    | Aptidao
    | {
        type: "e";
        aptidoes: AptidoesRequisito[];
        }
    | {
        type: "ou";
        aptidoes: AptidoesRequisito[];
        };


type Talento = {
    nome: string;
    descricao: string;
    aptidoes?: AptidoesRequisito;
    especializacoes?: string[];
    requisitos?: TalentRequirement;
    nivel: number;
};

const Talentos: Talento[] =[
    {
        nome: "Ambidestria",
        descricao:
        "Não fornece bônus. Quando combinado com Combater com Duas Armas reduz a penalidade de atacar com as duas armas para -10.",
        aptidoes: {
        type: "e",
        aptidoes: ["Habilidade de Combate", "Habilidade Balística"],
        },
        requisitos: {
        type: "caracteristica",
        nome: "Agilidade",
        valorMinimo: 30,
        },
        nivel: 1,
    },
    {
        nome: "Luta às Cegas",
        descricao:
        "O personagem ignora todas as penalidades ao lutar corpo a corpo sofrendo de visão obscurecida.",
        aptidoes: {
        type: "e",
        aptidoes: ["Percepção", "Sobrevivência"],
        },
        requisitos: {
        type: "caracteristica",
        nome: "Percepção",
        valorMinimo: 30,
        },
        nivel: 1,
    },
    {
        nome: "Queda Leve",
        descricao:
        "O personagem reduz o dano de queda em metros iguais ao seu bônus de agilidade. Também adiciona +20 em testes de Acrobacia para a ação Pular.",
        aptidoes: {
        type: "e",
        aptidoes: ["Agilidade", "Sobrevivência"],
        },
        requisitos: {
        type: "caracteristica",
        nome: "Agilidade",
        valorMinimo: 30,
        },
        nivel: 1,
    },
    {
        nome: "Pistas das Multidões",
        descricao:
        "Uma vez por dia pode re-rolar um teste feito para conseguir informações de um grupo de pessoas.",
        aptidoes: {
        type: "e",
        aptidoes: ["Geral", "Social"],
        },
        requisitos: {
        type: "caracteristica",
        nome: "Socialização",
        valorMinimo: 30,
        },
        nivel: 1,
    },
    {
        nome: "Duro de Matar",
        descricao:
        "Quando o personagem for ganhar um nível de Fadiga pela condição de Perda de Sangue ele pode fazer um teste de Vontade (+0). Se for bem-sucedido não recebe o nível de Fadiga.",
        aptidoes: {
        type: "e",
        aptidoes: ["Vontade", "Defensivo"],
        },
        requisitos: {
        type: "caracteristica",
        nome: "Vontade",
        valorMinimo: 40,
        },
        nivel: 1,
    },
    {
        nome: "Desarmar",
        descricao:
        "O personagem pode usar uma ação padrão e fazer um teste contrário de Habilidade de Combate. Caso seja bem-sucedido o oponente solta a arma no chão. Caso o personagem consiga 3 graus de sucesso ele pode ter a arma desarmada em sua mão livre.",
        aptidoes: {
        type: "e",
        aptidoes: ["Habilidade de Combate", "Defensivo"],
        },
        requisitos: {
        type: "caracteristica",
        nome: "Agilidade",
        valorMinimo: 30,
        },
        nivel: 1,
    },
    {
        nome: "Trabalho em Equipe",
        descricao:
            "Caso o personagem esteja em maior número que o inimigo, além do benefício normal recebe +10 em testes de Habilidade de Combate. Se todos os personagens em maior número possuírem esse talento, o bônus passa a ser de +20.",
        aptidoes: {
            type: "e",
            aptidoes: ["Geral", "Ofensivo"],
        },
        nivel: 1,
    },
    {
        nome: "Inimigo",
        descricao:
            "O personagem tem -10 em Socialização e Influência contra o grupo selecionado da Especialização. Esse talento não pode ser escolhido, apenas fornecido pelo Mestre.",
        aptidoes: {
            type: "e",
            aptidoes: ["Geral", "Social"],
        },
        especializacoes: [
            "Administratum",
            "Adeptus Arbites",
            "Adeptus Astartes",
            "Adeptus Astra Telepathica",
            "Adeptus Mechanicus",
            "Adepta Sororitas",
            "Atropatas",
            "Capitães Mercantes",
            "Collegia Titanicus",
            "Carteis Criminosos",
            "Deathwatch",
            "Clero",
            "Cultos Hereges",
            "Guarda Imperial",
            "Marinha Imperial",
            "Inquisição",
            "Navegadores",
            "Officio Assassinorum",
            "Mercadores Nobres",
            "Schola Progenium",
            "Scholastica Psykana",
            "Legiões Traidoras",
            "Tiranos",
        ],
        nivel: 1,
    },
    {
        nome: "Invocar Ferro",
        descricao:
            "Pode atrair para si até 2 quilogramas por bônus de Vontade de metal não carregados a até 40 metros.",
        aptidoes: {
            type: "e",
            aptidoes: ["Vontade", "Tecnologia"],
        },
         requisitos: {
            type: "e",
            requisitos: [
                { type: "talento", nome: "Implantes Férricos" },
                { type: "traço", nome: "Implantes Mechanicus" },
            ],
        },
        nivel: 1,
    },
    {
        nome: "Frenesi",
        descricao:
        "O personagem deve gastar uma rodada completa sem agir, concentrando sua raiva. Na próxima rodada ele ganha +10 em testes de Habilidade de Combate, Força, Resistência e Vontade, mas recebe -20 em testes de Habilidade Balística, Inteligência e Socialização. Ele é imune a efeitos de Medo, Preso, Atordoado, Fadiga, mas não pode Bloquear, recuar, fugir ou usar poderes psíquicos. Enquanto nesse estado o personagem precisa atacar ou se aproximar do inimigo mais próximo. O efeito segue pela duração do combate. Ao finalizar o combate o personagem deve fazer um teste de Vontade, caso falhe continuar a atacar novos alvos. A cada turno falho o personagem ganha +10 no teste de Vontade. Ao ser bem-sucedido não pode entrar em Frenesi novamente por uma hora.",
        aptidoes: {
        type: "e",
        aptidoes: ["Força", "Ofensivo"],
        },
        nivel: 1,
    },
    {
        nome: "Mandíbula de Ferro",
        descricao:
        "Ao ganhar a condição Atordoado o personagem pode fazer um teste de Resistência (+0) como uma Ação Livre para ignorar os efeitos.",
        aptidoes: {
        type: "e",
        aptidoes: ["Resistência", "Defensivo"],
        },
        requisitos: {
        type: "caracteristica",
        nome: "Resistência",
        valorMinimo: 40,
        },
        nivel: 1,
    },
    {
        nome: "Saturado",
        descricao:
        "O personagem ganha pontos de Insanidade ou faz testes de Medo apenas contra efeitos não naturais (Imaterium, Demônios...).",
        aptidoes: {
        type: "e",
        aptidoes: ["Vontade", "Defensivo"],
        },
        requisitos: {
        type: "caracteristica",
        nome: "Vontade",
        valorMinimo: 40,
        },
        nivel: 1,
    },
    {
        nome: "Intuição Precisa",
        descricao:
        "Ao falhar em um teste de Investigação o personagem pode tentar novamente com penalidade de -10.",
        aptidoes: {
        type: "e",
        aptidoes: ["Percepção", "Social"],
        },
        requisitos: {
        type: "caracteristica",
        nome: "Inteligência",
        valorMinimo: 35,
        },
        nivel: 1,
    },
    {
        nome: "De Pé",
        descricao: "O personagem pode se levantar como uma Ação Livre.",
        aptidoes: {
        type: "e",
        aptidoes: ["Agilidade", "Geral"],
        },
        requisitos: {
        type: "caracteristica",
        nome: "Agilidade",
        valorMinimo: 30,
        },
        nivel: 1,
    },
    {
        nome: "Sem Ter Onde Se Esconder",
        descricao:
        "Ao causar dano em uma cobertura o personagem adiciona seus graus de sucesso no ataque para reduzir a armadura da cobertura. Caso use uma arma que não precisa de teste, adiciona 1.",
        aptidoes: {
        type: "e",
        aptidoes: ["Percepção", "Ofensivo"],
        },
        requisitos: {
        type: "caracteristica",
        nome: "Percepção",
        valorMinimo: 30,
        },
        nivel: 1,
    },
    {
        nome: "Camaradagem",
        descricao:
        "O personagem ganha +10 em testes de Socialização e Influência com o grupo selecionado. O personagem ganha +1 de Influência.",
        aptidoes: {
        type: "e",
        aptidoes: ["Socialização", "Social"],
        },
        especializacoes: [
        "Administratum",
        "Adeptus Arbites",
        "Adeptus Astartes",
        "Adeptus Astra Telepathica",
        "Adeptus Mechanicus",
        "Adepta Sororitas",
        "Atropatas",
        "Capitães Mercantes",
        "Collegia Titanicus",
        "Carteis Criminosos",
        "Deathwatch",
        "Clero",
        "Cultos Hereges",
        "Guarda Imperial",
        "Marinha Imperial",
        "Inquisição",
        "Navegadores",
        "Officio Assassinorum",
        "Mercadores Nobres",
        "Schola Progenium",
        "Scholastica Psykana",
        "Legiões Traidoras",
        "Tiranos",
        ],
        requisitos: {
        type: "caracteristica",
        nome: "Socialização",
        valorMinimo: 30,
        },
        nivel: 1,
    },
    {
        nome: "Reação Rápida",
        descricao:
        "Pode sacar uma arma da classe Pistola ou Básica, ou arma corpo a corpo de uma mão, como ação livre.",
        aptidoes: {
        type: "e",
        aptidoes: ["Agilidade", "Sutileza"],
        },
        nivel: 1,
    },
    {
        nome: "Recarga Rápida",
        descricao: "Reduz em um nível a recarga de todas as armas.",
        aptidoes: {
        type: "e",
        aptidoes: ["Agilidade", "Sobrevivência"],
        },
        nivel: 1,
    },
    {
        nome: "Resistente",
        descricao:
        "O personagem recebe +10 ao fazer testes para resistir ao elemento da especialização.",
        aptidoes: {
        type: "e",
        aptidoes: ["Resistência", "Defensivo"],
        },
        especializacoes: [
        "Frio",
        "Medo",
        "Calor",
        "Veneno",
        "Poderes Psíquicos",
        "Radiação",
        "Vácuo",
        "Outro",
        ],
        nivel: 1,
    },
    {
        nome: "Constituição Sólida",
        descricao:
        "O personagem ganha 1 ponto de vida. O talento pode ser escolhido múltiplas vezes.",
        aptidoes: {
        type: "e",
        aptidoes: ["Resistência", "Geral"],
        },
        nivel: 1,
    },
    {
        nome: "Derrubada",
        descricao:
        "Ao fazer um ataque o personagem pode informar que quer realizar uma derrubada. Caso o ataque seja bem sucedido e cause ao menos 1 de dano, o ataque não causa dano e o oponente deve fazer um teste de Resistência (+0) ou ser Atordoado por 1 rodada e ser derrubado. Ao fazer uma ação de Atordoar o personagem não recebe a penalidade de -20.",
        aptidoes: {
        type: "e",
        aptidoes: ["Habilidade de Combate", "Ofensivo"],
        },
        nivel: 1,
    },
    {
        nome: "Talento Técnico",
        descricao:
        "Uma vez por rodada o personagem pode realizar a ação de Destravar a arma como Ação Simples.",
        aptidoes: {
        type: "e",
        aptidoes: ["Inteligência", "Tecnologia"],
        },
        requisitos: {
        type: "caracteristica",
        nome: "Inteligência",
        valorMinimo: 30,
        },
        nivel: 1,
    },
    {
        nome: "Sentir o Imaterium",
        descricao:
        "O personagem pode fazer testes de Senso Psíquico como uma Ação Livre. O personagem também consegue detectar efeitos psíquicos e entidades de forma passiva.",
        aptidoes: {
        type: "e",
        aptidoes: ["Percepção", "Psíquico"],
        },
        requisitos: {
        type: "e",
        requisitos: [
            { type: "psiNivel", minimo: 1 },
            { type: "pericia", nome: "Senso Psíquico" },
            { type: "caracteristica", nome: "Percepção", valorMinimo: 30 },
        ],
        },
        nivel: 1,
    },
    {
        nome: "Tecnólogo de Armas",
        descricao:
        "Uma vez por combate, como uma Ação Livre, o personagem pode aprimorar uma arma de Melta, Plasma, Energia ou Exótico que ele esteja usando. Isso aumenta o dano e penetração igual ao BI (bônus de inteligência) até o final da rodada.",
        aptidoes: {
        type: "e",
        aptidoes: ["Inteligência", "Tecnologia"],
        },
        requisitos: {
        type: "e",
        requisitos: [
            { type: "pericia", nome: "Uso Tecnológico", nivel: "+10" },
            { type: "caracteristica", nome: "Inteligência", valorMinimo: 40 },
        ],
        },
        nivel: 1,
    },
    {
        nome: "Treinamento com Armas",
        descricao:
            "O personagem pode usar todas as armas com a classe: Pistola, Básica, Corpo a Corpo, Lançamento e Veículo dentro do grupo da Especialização.",
        aptidoes: {
            type: "e",
            aptidoes: ["Geral", "Sutileza"],
        },
        especializacoes: [
            "Bolter",
            "Corrente",
            "Incendiária",
            "Pesada",
            "Las",
            "Lançador",
            "Melta",
            "Plasma",
            "Energia",
            "Arcaica",
            "Choque",
            "Projetil Sólido"
        ],
        nivel: 1,
    },
    
];
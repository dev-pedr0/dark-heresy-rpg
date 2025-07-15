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


export type Talento = {
    nome: string;
    descricao: string;
    aptidoes?: AptidoesRequisito;
    especializacoes?: string[];
    requisitos?: TalentRequirement;
    nivel: number;
};

export const Talentos: Talento[] =[
    {
        nome: "Ambidestria",
        descricao: "Não fornece bônus. Quando combinado com Combater com Duas Armas reduz a penalidade de atacar com as duas armas para -10.",
        aptidoes: { type: "e", aptidoes: ["Habilidade de Combate", "Habilidade Balística"] },
        requisitos: { type: "caracteristica", nome: "Agilidade", valorMinimo: 30 },
        nivel: 1
    },
    {
        nome: "Luta às Cegas",
        descricao: "O personagem ignora todas as penalidades ao lutar corpo a corpo sofrendo de visão obscurecida.",
        aptidoes: { type: "e", aptidoes: ["Percepção", "Sobrevivência"] },
        requisitos: { type: "caracteristica", nome: "Percepção", valorMinimo: 30 },
        nivel: 1
    },
    {
        nome: "Queda Leve",
        descricao: "O personagem reduz o dano de queda em metros iguais ao seu bônus de agilidade. Também adiciona +20 em testes de Acrobacia para a ação Pular.",
        aptidoes: { type: "e", aptidoes: ["Agilidade", "Sobrevivência"] },
        requisitos: { type: "caracteristica", nome: "Agilidade", valorMinimo: 30 },
        nivel: 1
    },
    {
        nome: "Pistas das Multidões",
        descricao: "Uma vez por dia pode re-rolar um teste feito para conseguir informações de um grupo de pessoas.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Social"] },
        requisitos: { type: "caracteristica", nome: "Socialização", valorMinimo: 30 },
        nivel: 1
    },
    {
        nome: "Duro de Matar",
        descricao: "Quando o personagem for ganhar um nível de Fadiga pela condição de Perda de Sangue ele pode fazer um teste de Vontade (+0). Se for bem-sucedido não recebe o nível de Fadiga.",
        aptidoes: { type: "e", aptidoes: ["Vontade", "Defensivo"] },
        requisitos: { type: "caracteristica", nome: "Vontade", valorMinimo: 40 },
        nivel: 1
    },
    {
        nome: "Desarmar",
        descricao: "O personagem pode usar uma ação padrão e fazer um teste contrário de Habilidade de Combate. Caso seja bem-sucedido o oponente solta a arma no chão. Caso o personagem consiga 3 graus de sucesso ele pode ter a arma desarmada em sua mão livre.",
        aptidoes: { type: "e", aptidoes: ["Habilidade de Combate", "Defensivo"] },
        requisitos: { type: "caracteristica", nome: "Agilidade", valorMinimo: 30 },
        nivel: 1
    },
    {
        nome: "Trabalho em Equipe",
        descricao: "Caso o personagem esteja em maior número que o inimigo, além do benefício normal recebe +10 em testes de Habilidade de Combate. Se todos os personagens em maior número possuírem esse talento, o bônus passa a be +20.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Ofensivo"] },
        nivel: 1
    },
    {
        nome: "Inimigo",
        descricao: "O personagem tem -10 em Socialização e Influência contra o grupo selecionado da Especialização. Esse talento não pode ser escolhido, apenas fornecido pelo Mestre.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Social"] },
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
            "Tiranos"
        ],
        nivel: 1
    },
    {
        nome: "Invocar Ferro",
        descricao: "Pode atrair para si até 2 quilogramas por bônus de Vontade de metal não carregados a até 40 metros.",
        aptidoes: { type: "e", aptidoes: ["Vontade", "Tecnologia"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "talento", nome: "Implantes Férricos" },
                { type: "traço", nome: "Implantes Mechanicus" }
            ]
        },
        nivel: 1
    },
    {
        nome: "Frenesi",
        descricao: "O personagem deve gastar uma rodada completa sem agir, concentrando sua raiva. Na próxima rodada ele ganha +10 em testes de Habilidade de Combate, Força, Resistência e Vontade, mas recebe -20 em testes de Habilidade Balística, Inteligência e Socialização. Ele é imune a efeitos de Medo, Preso, Atordoado, Fadiga, mas não pode Bloquear, recuar, fugir ou usar poderes psíquicos. Enquanto nesse estado o personagem precisa atacar ou se aproximar do inimigo mais próximo. O efeito segue pela duração do combate. Ao finalizar o combate o personagem deve fazer um teste de Vontade, caso falhe continua a atacar novos alvos. A cada turno falho o personagem ganha +10 no teste de Vontade. Ao ser bem-sucedido não pode entrar em Frenesi novamente por uma hora.",
        aptidoes: { type: "e", aptidoes: ["Força", "Ofensivo"] },
        nivel: 1
    },
    {
        nome: "Mandíbula de Ferro",
        descricao: "Ao ganhar a condição Atordoado o personagem pode fazer um teste de Resistência (+0) como uma Ação Livre para ignorar os efeitos.",
        aptidoes: { type: "e", aptidoes: ["Resistência", "Defensivo"] },
        requisitos: { type: "caracteristica", nome: "Resistência", valorMinimo: 40 },
        nivel: 1
    },
    {
        nome: "Saturado",
        descricao: "O personagem ganha pontos de Insanidade ou faz testes de Medo apenas contra efeitos não naturais (Imaterium, Demônios...).",
        aptidoes: { type: "e", aptidoes: ["Vontade", "Defensivo"] },
        requisitos: { type: "caracteristica", nome: "Vontade", valorMinimo: 40 },
        nivel: 1
    },
    {
        nome: "Intuição Precisa",
        descricao: "Ao falhar em um teste de Investigação o personagem pode tentar novamente com penalidade de -10.",
        aptidoes: { type: "e", aptidoes: ["Percepção", "Social"] },
        requisitos: { type: "caracteristica", nome: "Inteligência", valorMinimo: 35 },
        nivel: 1
    },
    {
        nome: "De Pé",
        descricao: "O personagem pode se levantar como uma Ação Livre.",
        aptidoes: { type: "e", aptidoes: ["Agilidade", "Geral"] },
        requisitos: { type: "caracteristica", nome: "Agilidade", valorMinimo: 30 },
        nivel: 1
    },
    {
        nome: "Sem Ter Onde Se Esconder",
        descricao: "Ao causar dano em uma cobertura o personagem adiciona seus graus de sucesso no ataque para reduzir a armadura da cobertura. Caso use uma arma que não precisa de teste, adiciona 1.",
        aptidoes: { type: "e", aptidoes: ["Percepção", "Ofensivo"] },
        requisitos: { type: "caracteristica", nome: "Percepção", valorMinimo: 30 },
        nivel: 1
    },
    {
        nome: "Camaradagem",
        descricao: "O personagem ganha +10 em testes de Socialização e Influência com o grupo selecionado. O personagem ganha +1 de Influência.",
        aptidoes: { type: "e", aptidoes: ["Socialização", "Social"] },
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
            "Tiranos"
        ],
        requisitos: { type: "caracteristica", nome: "Socialização", valorMinimo: 30 },
        nivel: 1
    },
    {
        nome: "Reação Rápida",
        descricao: "Pode sacar uma arma da classe Pistola ou Básica, ou arma corpo a corpo de uma mão, como ação livre.",
        aptidoes: { type: "e", aptidoes: ["Agilidade", "Sutileza"] },
        nivel: 1
    },
    {
        nome: "Recarga Rápida",
        descricao: "Reduz em um nível a recarga de todas as armas.",
        aptidoes: { type: "e", aptidoes: ["Agilidade", "Sobrevivência"] },
        nivel: 1
    },
    {
        nome: "Resistente",
        descricao: "O personagem recebe +10 ao fazer testes para resistir ao elemento da especialização.",
        aptidoes: { type: "e", aptidoes: ["Resistência", "Defensivo"] },
        especializacoes: ["Frio", "Medo", "Calor", "Veneno", "Poderes Psíquicos", "Radiação", "Vácuo", "Outro"],
        nivel: 1
    },
    {
        nome: "Constituição Sólida",
        descricao: "O personagem ganha 1 ponto de vida. O talento pode ser escolhido múltiplas vezes.",
        aptidoes: { type: "e", aptidoes: ["Resistência", "Geral"] },
        nivel: 1
    },
    {
        nome: "Derrubada",
        descricao: "Ao fazer um ataque o personagem pode informar que quer realizar uma derrubada. Caso o ataque seja bem-sucedido e cause ao menos 1 de dano, o ataque não causa dano e o oponente deve fazer um teste de Resistência (+0) ou ser Atordoado por 1 rodada e ser derrubado. Ao fazer uma ação de Atordoar o personagem não recebe a penalidade de -20.",
        aptidoes: { type: "e", aptidoes: ["Habilidade de Combate", "Ofensivo"] },
        nivel: 1
    },
    {
        nome: "Talento Técnico",
        descricao: "Uma vez por rodada o personagem pode realizar a ação de Destravar a arma como Ação Simples.",
        aptidoes: { type: "e", aptidoes: ["Inteligência", "Tecnologia"] },
        requisitos: { type: "caracteristica", nome: "Inteligência", valorMinimo: 30 },
        nivel: 1
    },
    {
        nome: "Sentir o Imaterium",
        descricao: "O personagem pode fazer testes de Senso Psíquico como uma Ação Livre. O personagem também consegue detectar efeitos psíquicos e entidades de forma passiva.",
        aptidoes: { type: "e", aptidoes: ["Percepção", "Psíquico"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "psiNivel", minimo: 1 },
                { type: "pericia", nome: "Senso Psíquico" },
                { type: "caracteristica", nome: "Percepção", valorMinimo: 30 }
            ]
        },
        nivel: 1
    },
    {
        nome: "Tecnólogo de Armas",
        descricao: "Uma vez por combate, como uma Ação Livre, o personagem pode aprimorar uma arma de Melta, Plasma, Energia ou Exótico que ele esteja usando. Isso aumenta o dano e penetração igual ao BI (bônus de inteligência) até o final da rodada.",
        aptidoes: { type: "e", aptidoes: ["Inteligência", "Tecnologia"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "pericia", nome: "Uso Tecnológico", nivel: "+10" },
                { type: "caracteristica", nome: "Inteligência", valorMinimo: 40 }
            ]
        },
        nivel: 1
    },
    {
        nome: "Treinamento com Armas",
        descricao: "O personagem pode usar todas as armas com a classe: Pistola, Básica, Corpo a Corpo, Lançamento e Veículo dentro do grupo da Especialização.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Sutileza"] },
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
        nivel: 1
    },
    {
        nome: "Mestre de Armaduras",
        descricao: "O personagem pode gastar 1 hora por dia e receber um bônus de armadura para distribuir igual ao seu bônus de Inteligência. O bônus dura apenas enquanto o personagem estiver usando a armadura.",
        aptidoes: { type: "e", aptidoes: ["Inteligência", "Tecnologia"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "caracteristica", nome: "Inteligência", valorMinimo: 35 },
                { type: "pericia", nome: "Uso Tecnológico" },
                { type: "especializacaoPericia", pericia: "Negócio", especializacao: "Armas" }
            ]
        },
        nivel: 2
    },
    {
        nome: "Fúria de Batalha",
        descricao: "Ao usar o talento Frenesi o personagem pode Bloquear ataques e pode re-rolar uma vez testes falhos para sair ou entrar no Frenesi.",
        aptidoes: { type: "e", aptidoes: ["Força", "Defensivo"] },
        requisitos: { type: "talento", nome: "Frenesi" },
        nivel: 2
    },
    {
        nome: "Braços Fortes",
        descricao: "O personagem pode usar as formas de tiro semi-auto e auto sem realizar a ação Empunhadura ignorando a penalidade de -30. Ao usar a ação Carregar Peso, pode adicionar +20 no teste.",
        aptidoes: { type: "e", aptidoes: ["Força", "Ofensivo"] },
        requisitos: { type: "caracteristica", nome: "Força", valorMinimo: 45 },
        nivel: 2
    },
    {
        nome: "Combater Multidões",
        descricao: "Oponentes não ganham os benefícios de 'Maior Número' in combate com esse personagem.",
        aptidoes: { type: "e", aptidoes: ["Força", "Ofensivo"] },
        requisitos: { type: "caracteristica", nome: "Habilidade de Combate", valorMinimo: 30 },
        nivel: 2
    },
    {
        nome: "Vigilância Constante",
        descricao: "O personagem pode rolar iniciativa com a Característica da Especialização e rola dois dados ao invés de um selecionando o valor maior.",
        aptidoes: { type: "e", aptidoes: ["Percepção", "Defensivo"] },
        especializacoes: ["Inteligência", "Percepção"],
        requisitos: {
            type: "e",
            requisitos: [
                { type: "ou", requisitos: [
                    { type: "caracteristica", nome: "Inteligência", valorMinimo: 35 },
                    { type: "caracteristica", nome: "Percepção", valorMinimo: 35 }
                ]},
                { type: "pericia", nome: "Atenção", nivel: "+10" }
            ]
        },
        nivel: 2
    },
    {
        nome: "Rede de Contatos",
        descricao: "O personagem pode fazer um teste de Socialização ao invés de Influência em testes de Requisição.",
        aptidoes: { type: "e", aptidoes: ["Socialização", "Liderança"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "talento", nome: "Encobrir" },
                { type: "caracteristica", nome: "Inteligência", valorMinimo: 35 }
            ]
        },
        nivel: 2
    },
    {
        nome: "Interrogatório Coordenado",
        descricao: "O personagem ganha +10 em testes de Interrogação e +5 para cada outro personagem no interrogatório com este mesmo talento.",
        aptidoes: { type: "e", aptidoes: ["Inteligência", "Social"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "ou", requisitos: [
                    { type: "caracteristica", nome: "Força", valorMinimo: 40 },
                    { type: "caracteristica", nome: "Vontade", valorMinimo: 40 }
                ]},
                { type: "talento", nome: "Pistas das Multidões" }
            ]
        },
        nivel: 2
    },
    {
        nome: "Contra-Ataque",
        descricao: "Uma vez por turno, após realizar um Bloqueio pode realizar um Ataque Simples usando a arma que usou no Bloqueio com uma penalidade de -20.",
        aptidoes: { type: "e", aptidoes: ["Habilidade de Combate", "Defensivo"] },
        requisitos: { type: "caracteristica", nome: "Habilidade de Combate", valorMinimo: 40 },
        nivel: 2
    },
    {
        nome: "Encobrir",
        descricao: "Com a permissão do Mestre o personagem pode descartar pontos de Influência para aumentar sua Discrição. Cada ponto gasto aumenta o valor em 1d5.",
        aptidoes: { type: "e", aptidoes: ["Inteligência", "Conhecimento"] },
        requisitos: { type: "caracteristica", nome: "Inteligência", valorMinimo: 35 },
        nivel: 2
    },
    {
        nome: "Negar a Feitiçaria",
        descricao: "Caso um efeito ou ataque psíquico peça um teste de Esquiva o personagem pode, ao invés, fazer um teste de Vontade. Caso seja bem sucedido ele ignora os efeitos e não precisa ter saído da área de efeito da fonte do teste.",
        aptidoes: { type: "e", aptidoes: ["Vontade", "Defensivo"] },
        requisitos: { type: "caracteristica", nome: "Vontade", valorMinimo: 35 },
        nivel: 2
    },
    {
        nome: "Ataque Devastador",
        descricao: "Após fazer um Ataque Total bem-sucedido o personagem pode fazer um segundo Ataque Total como uma ação livre com os mesmos bônus e penalidades do ataque anterior.",
        aptidoes: { type: "e", aptidoes: ["Habilidade de Combate", "Ofensivo"] },
        requisitos: { type: "caracteristica", nome: "Habilidade de Combate", valorMinimo: 35 },
        nivel: 2
    },
    {
        nome: "Tiro Secundário",
        descricao: "Caso acerte um ataque a distância contra um oponente e faça um segundo ataque a distância no mesmo turno, contra o mesmo oponente, recebe +20 no teste do segundo ataque.",
        aptidoes: { type: "e", aptidoes: ["Sutileza", "Ofensivo"] },
        requisitos: { type: "talento", nome: "Combater com Duas Armas" },
        nivel: 2
    },
    {
        nome: "Treinamento em Arma Exótica",
        descricao: "O personagem recebe treinamento na arma selecionada na especialização.",
        aptidoes: { type: "e", aptidoes: ["Inteligência", "Sutileza"] },
        especializacoes: ["Pistola Grav", "Rifle Grav", "Pistola Agulha", "Rifle Agulha", "Pistola de Teia", "Lança-Teia"],
        nivel: 2
    },
    {
        nome: "Um Rosto no Povo",
        descricao: "O personagem pode usar Socialização ao invés de Furtividade em testes para seguir alguém.",
        aptidoes: { type: "e", aptidoes: ["Socialização", "Social"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "caracteristica", nome: "Socialização", valorMinimo: 35 },
                { type: "talento", nome: "Pistas das Multidões" }
            ]
        },
        nivel: 2
    },
    {
        nome: "Alvo Difícil",
        descricao: "Caso o personagem faça uma ação de Investida ou Corrida oponentes possuem -20 em testes de Habilidade Balística até o início do próximo turno do personagem.",
        aptidoes: { type: "e", aptidoes: ["Agilidade", "Defensivo"] },
        requisitos: { type: "caracteristica", nome: "Agilidade", valorMinimo: 40 },
        nivel: 2
    },
    {
        nome: "Robusto",
        descricao: "O personagem sempre é considerado Paricalmente Ferido para efeitos de recuperação de vida.",
        aptidoes: { type: "e", aptidoes: ["Resistência", "Defensivo"] },
        requisitos: { type: "caracteristica", nome: "Resistência", valorMinimo: 40 },
        nivel: 2
    },
    {
        nome: "Ódio",
        descricao: "Ao enfrentar personagens do grupo da especialização o personagem ganha +10 em testes de Habilidade de Combate contra eles e precisa fazer um teste de Vontade (+0) para fugir ou se render do combate.",
        aptidoes: { type: "e", aptidoes: ["Habilidade de Combate", "Social"] },
        especializacoes: [
            "Space Marines do Caos", "Demônios", "Mutantes", "Psíquicos", "Alien (especificar)",
            "Administratum", "Adeptus Arbites", "Adeptus Astartes", "Adeptus Astra Telepathica",
            "Adeptus Mechanicus", "Adepta Sororitas", "Atropatas", "Capitães Mercantes",
            "Collegia Titanicus", "Carteis Criminosos", "Deathwatch", "Clero", "Cultos Hereges",
            "Guarda Imperial", "Marinha Imperial", "Inquisição", "Navegadores", "Officio Assassinorum",
            "Mercadores Nobres", "Schola Progenium", "Tiranos"
        ],
        nivel: 2
    },
    {
        nome: "Tiro em Movimento",
        descricao: "Como uma Ação Padrão o personagem pode se mover todo seu movimento e fazer um único ataque com uma arma a distância. Caso o personagem possua o talento Combater com Duas Armas ele pode fazer dois ataques a distância, um com cada arma que esteja empunhando.",
        aptidoes: { type: "e", aptidoes: ["Habilidade Balística", "Sutileza"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "caracteristica", nome: "Habilidade Balística", valorMinimo: 40 },
                { type: "caracteristica", nome: "Agilidade", valorMinimo: 40 }
            ]
        },
        nivel: 2
    },
    {
        nome: "Alvos Independentes",
        descricao: "Ao atirar com duas armas em uma única ação (usando o talento Combater com Duas Armas, por exemplo) os alvos não precisam estar a um máximo de 10 metros de distância.",
        aptidoes: { type: "e", aptidoes: ["Habilidade Balística", "Sutileza"] },
        requisitos: { type: "caracteristica", nome: "Habilidade Balística", valorMinimo: 40 },
        nivel: 2
    },
    {
        nome: "Ataque Certeiro",
        descricao: "Ao fazer um ataque bem-sucedido (a distância ou corpo a corpo de acordo com a especialização) como parte de um Ataque Total, Investida, Ataque Normal, Atordoar, Tiro de Precisão o personagem impõe penalidades em testes de Esquiva e Bloqueio igual 10 * graus de sucesso no ataque.",
        aptidoes: {
            type: "e",
            aptidoes: [
                "Sutileza",
                { type: "ou", aptidoes: ["Habilidade Balística", "Habilidade de Combate"] }
            ]
        },
        especializacoes: ["corpo a corpo", "a distância"],
        requisitos: {
            type: "e",
            requisitos: [
                { type: "ou", requisitos: [
                    { type: "caracteristica", nome: "Habilidade Balística", valorMinimo: 40 },
                    { type: "caracteristica", nome: "Habilidade de Combate", valorMinimo: 40 }
                ]},
                { type: "caracteristica", nome: "Percepção", valorMinimo: 35 }
            ]
        },
        nivel: 2
    },
    {
        nome: "Ataque Inescapável",
        descricao: "No início de cada turno o personagem pode gastar um Ponto de Destino para impedir que seus ataques corpo a corpo daquele turno não possam ser desviados ou bloqueados.",
        aptidoes: { type: "e", aptidoes: ["Habilidade de Combate", "Ofensivo"] },
        requisitos: { type: "caracteristica", nome: "Habilidade de Combate", valorMinimo: 50 },
        nivel: 2
    },
    {
        nome: "Choque de Luminens",
        descricao: "O personagem sempre conta como tendo uma arma corpo a corpo que causa (1d10 + bônus de Vontade) de dano de Energia, com Penetração 0 e a qualidade Chocante. O personagem conta como tendo treinamento nessa arma e após cada ataque deve fazer um teste de Resistência para não sofrer 1 nível de Fadiga.",
        aptidoes: { type: "e", aptidoes: ["Habilidade de Combate", "Tecnologia"] },
        requisitos: {
            type: "e",
            requisitos:
            [
                { type: "traço", nome: "Implantes Mechanicus" },
                { type: "talento", nome: "Capacitores de Luminen" }
            ]
        },
        nivel: 2
    },
    {
        nome: "Transcendência Maglev",
        descricao: "O personagem pode pairar no ar por (1d10 + (2 * bônus de Vontade)) minutos. Ele pode se mover na sua velocidade de corrida usando uma Ação Simples e não sofre dano de queda caso as bobinas estejam ativas. As bobinas podem ser ativadas 2 vezes e então devem ser recarregadas.",
        aptidoes: { type: "e", aptidoes: ["Inteligência", "Tecnologia"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "traço", nome: "Implantes Mechanicus" },
                { type: "talento", nome: "Bobinas Maglev" }
            ]
        },
        nivel: 2
    },
    {
        nome: "Pontaria Precisa",
        descricao: "O personagem não sofre as penalidades por atirar em distâncias Longas ou Extremas.",
        aptidoes: { type: "e", aptidoes: ["Habilidade Balística", "Sutileza"] },
        requisitos: { type: "caracteristica", nome: "Habilidade Balística", valorMinimo: 35 },
        nivel: 2
    },
    {
        nome: "Uso de Mecandritos",
        descricao: "O personagem ganha o Talento Treinamento com Arma (Mecandrito – Arma) ou Treinamento com Arma (Mecandrito – Utilidade) de acordo com a especialização escolhida.",
        aptidoes: { type: "e", aptidoes: ["Inteligência", "Tecnologia"] },
        especializacoes: ["Arma", "Utilidade"],
        requisitos: { type: "traço", nome: "Implantes Mechanicus" },
        nivel: 2
    },
    {
        nome: "Assassino Preciso",
        descricao: "Ao fazer a ação Tiro/Golpe Preciso com a especialização selecionada o personagem não sofre a penalidade de -20 no teste.",
        aptidoes: {
            type: "e",
            aptidoes: [
                "Sutileza",
                { type: "ou", aptidoes: ["Habilidade Balística", "Habilidade de Combate"] }
            ]
        },
        especializacoes: ["a distância", "corpo a corpo"],
        requisitos: {
            type: "ou",
            requisitos: [
                { type: "caracteristica", nome: "Habilidade Balística", valorMinimo: 40 },
                { type: "caracteristica", nome: "Habilidade de Combate", valorMinimo: 40 }
            ]
        },
        nivel: 2
    },
    {
        nome: "Prosanguíneo",
        descricao: "O personagem precisa gastar 10 minutos e um teste de Uso Tecnológico (+0). Caso seja bem-sucedido ele recupera 1d5 pontos de vida. Se rolar o valor 96 ou maior no teste seu Auto Sanguíneo fica sem funcionar por uma semana.",
        aptidoes: { type: "e", aptidoes: ["Resistência", "Tecnologia"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "traço", nome: "Implantes Mechanicus" },
                { type: "talento", nome: "Implantes Auto Sanguíneos" }
            ]
        },
        nivel: 2
    },
    {
        nome: "Mente Fortalecida",
        descricao: "O personagem pode re-rolar uma vez um teste de Vontade falho para resistir a Poderes Psíquicos que afetam a mente.",
        aptidoes: { type: "e", aptidoes: ["Vontade", "Defensivo"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "caracteristica", nome: "Vontade", valorMinimo: 30 },
                { type: "especializacaoTalento", talento: "Resistente", especializacao: "Poderes Psíquicos" }
            ]
        },
        nivel: 2
    },
    {
        nome: "Ataque Veloz",
        descricao: "O personagem pode realizar a ação Ataque Veloz.",
        aptidoes: { type: "e", aptidoes: ["Habilidade de Combate", "Sutileza"] },
        requisitos: { type: "caracteristica", nome: "Habilidade de Combate", valorMinimo: 30 },
        nivel: 2
    },
    {
        nome: "Combater Com Duas Armas",
        descricao: "Caso o personagem esteja usando duas armas de uma mão corpo a corpo ou a distância (de acordo com a especialização), ao fazer um ataque que custa uma Ação Simples (Ataque Simples, Ataque Veloz, Ataque Relâmpago, Tiro Simples, Tiro Semiautomático, Tiro Automático) o personagem pode fazer um segundo ataque como ação livre com os mesmos parâmetros do primeiro com sua segunda arma. Os dois ataques são feitos com uma penalidade de -20.",
        aptidoes: {
            type: "e",
            aptidoes: [
                "Sutileza",
                { type: "ou", aptidoes: ["Habilidade Balística", "Habilidade de Combate"] }
            ]
        },
        especializacoes: ["corpo a corpo", "a distância"],
        nivel: 2
    },
    {
        nome: "Especialista Desarmado",
        descricao: "Os ataques desarmados do personagem ganham o traço Arma Natural Mortal e o personagem conta como sempre estando armado. Ao lutar desarmado o personagem pode re-rolar uma vez o dano que ele causar.",
        aptidoes: { type: "e", aptidoes: ["Força", "Ofensivo"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "talento", nome: "Ambidestria" },
                { type: "caracteristica", nome: "Agilidade", valorMinimo: 35 },
                { type: "caracteristica", nome: "Habilidade de Combate", valorMinimo: 35 }
            ]
        },
        nivel: 2
    },
    {
        nome: "Conduíte do Imaterium",
        descricao: "Ao Sobrecarregar, antes de rolar seu teste de Poder de Foco o personagem pode gastar 1 Ponto de Destino e adicionar 1d5 no seu Psi-nível efetivo. Ao fazer isso o personagem adiciona +30 na rolagem da tabela Fenômeno Psíquico.",
        aptidoes: { type: "e", aptidoes: ["Vontade", "Psíquico"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "psiNivel", minimo: 1 },
                { type: "talento", nome: "Mente Fortalecida" },
                { type: "caracteristica", nome: "Vontade", valorMinimo: 50 }
            ]
        },
        nivel: 2
    },
    {
        nome: "Tornado de Morte",
        descricao: "Como Ação Simples o personagem pode realizar um Ataque Simples com uma arma corpo a corpo contra todos os oponentes na distância dele até um máximo de 1 * (bônus de Habilidade de Combate).",
        aptidoes: { type: "e", aptidoes: ["Habilidade de Combate", "Sutileza"] },
        requisitos: { type: "caracteristica", nome: "Habilidade de Combate", valorMinimo: 40 },
        nivel: 2
    },
    {
        nome: "Fé de Adamante",
        descricao: "O personagem pode reduzir seus graus de falhas em testes de Medo ou Preso pelo seu bônus de Vontade. Se reduzir para zero ou menos conta como se tivesse sido bem-sucedido com 1 grau de sucesso.",
        aptidoes: { type: "e", aptidoes: ["Vontade", "Defensivo"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "talento", nome: "Saturado" },
                { type: "especializacaoTalento", talento: "Resistente", especializacao: "Medo" },
                { type: "caracteristica", nome: "Vontade", valorMinimo: 45 }
            ]
        },
        nivel: 3
    },
    {
        nome: "Movimento Assassino",
        descricao: "Após fazer um ataque corpo a corpo, pode fazer um teste moderado (+0) de Acrobacia para se mover metade do deslocamento como Ação Livre uma vez por rodada. Essa ação não causa Ataques de Oportunidade.",
        aptidoes: { type: "e", aptidoes: ["Habilidade de Combate", "Sobrevivência"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "caracteristica", nome: "Agilidade", valorMinimo: 40 },
                { type: "pericia", nome: "Acrobacia" }
            ]
        },
        nivel: 3
    },
    {
        nome: "Bastião da Vontade de Ferro",
        descricao: "O personagem adiciona 5 * Psi-nível em qualquer teste para resistir a poderes psíquicos.",
        aptidoes: { type: "e", aptidoes: ["Vontade", "Psíquico"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "psiNivel", minimo: 1 },
                { type: "talento", nome: "Mente Fortalecida" },
                { type: "caracteristica", nome: "Vontade", valorMinimo: 40 }
            ]
        },
        nivel: 3
    },
    {
        nome: "Mestre da Lâmina",
        descricao: "Ao atacar com uma arma laminada (espadas, machados e suas versões de corrente) o personagem pode re-rolar um ataque falho por rodada.",
        aptidoes: { type: "e", aptidoes: ["Habilidade de Combate", "Sutileza"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "caracteristica", nome: "Habilidade de Combate", valorMinimo: 30 },
                { type: "talento", nome: "Treinamento com Armas" }
            ]
        },
        nivel: 3
    },
    {
        nome: "Golpe Esmagador",
        descricao: "O personagem causa metade de seu bônus de Habilidade de Combate, arredondado para cima, como dano extra em seus ataques corpo a corpo.",
        aptidoes: { type: "e", aptidoes: ["Habilidade de Combate", "Ofensivo"] },
        requisitos: { type: "caracteristica", nome: "Habilidade de Combate", valorMinimo: 40 },
        nivel: 3
    },
    {
        nome: "Anjo da Morte",
        descricao: "Quando o personagem causar dano Crítico com uma arma corpo a corpo ou a distancia (dependendo da especilização) ele adiciona o seu bônus de Percepção ao dano.",
        aptidoes: { type: "e", aptidoes: ["Percepção", "Sutileza"] },
        especializacoes: ["Habilidade de Combate", "Habilidade Balística"],
        requisitos: {
            type: "ou",
            requisitos: [
                { type: "caracteristica", nome: "Habilidade de Combate", valorMinimo: 45 },
                { type: "caracteristica", nome: "Habilidade Balística", valorMinimo: 45 }
            ]
        },
        nivel: 3
    },
    {
        nome: "Interrogatório Delicado",
        descricao: "Caso um interrogatório fosse causar perda de Discrição, a perda é reduzida em 1d5. Se o resultado for um número negativo a Discrição aumenta em 1 ponto.",
        aptidoes: { type: "e", aptidoes: ["Inteligência", "Sutileza"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "caracteristica", nome: "Socialização", valorMinimo: 50 },
                { type: "talento", nome: "Interrogatório Coordenado" }
            ]
        },
        nivel: 3
    },
    {
        nome: "Olhar Vingativo",
        descricao: "Antes de fazer um Ataque Simples o personagem pode gastar um Ponto de Destino. Ele adiciona seus graus de sucesso do ataque no dano e no valor de penetração.",
        aptidoes: { type: "e", aptidoes: ["Habilidade Balística", "Ofensivo"] },
        requisitos: { type: "caracteristica", nome: "Habilidade Balística", valorMinimo: 50 },
        nivel: 3
    },
    {
        nome: "Favorecido Pelo Imaterium",
        descricao: "Quando o personagem rola na tabela Fenômeno Psíquico, contanto que ele não receba um resultado de Perigos do Imaterium, ele pode rolar novamente e escolher qual resultado usar.",
        aptidoes: { type: "e", aptidoes: ["Vontade", "Psíquico"] },
        requisitos: { type: "caracteristica", nome: "Vontade", valorMinimo: 35 },
        nivel: 3
    },
    {
        nome: "Flash de Intuição",
        descricao: "O personagem pode gastar 1 Ponto de Destino e receber uma informação do mestre para ajudar a proceguir na investigação.",
        aptidoes: { type: "e", aptidoes: ["Percepção", "Conhecimento"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "caracteristica", nome: "Inteligência", valorMinimo: 40 },
                { type: "talento", nome: "Rede de Contatos" },
                { type: "talento", nome: "Interrogatório Coordenado" }
            ]
        },
        nivel: 3
    },
    {
        nome: "Coroa de Comando",
        descricao: "Ao interagir com NPC’s usando perícias com as aptidões Social ou Liderança o peronsagem pode afetar pessoas a uma quantidade de metros igual a 100 * bônus de Socialização.",
        aptidoes: { type: "e", aptidoes: ["Socialização", "Liderança"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "caracteristica", nome: "Socialização", valorMinimo: 40 },
                { type: "caracteristica", nome: "Vontade", valorMinimo: 40 }
            ]
        },
        nivel: 3
    },
    {
        nome: "Martelada",
        descricao: "Ao usar a ação Ataque Total para fazer um único ataque o personagem adiciona metade do seu bônus de Força na penetração da arma e o ataque conta como tendo a qualidade Concussiva (2).",
        aptidoes: { type: "e", aptidoes: ["Força", "Ofensivo"] },
        requisitos: { type: "talento", nome: "Golpe Esmagador" },
        nivel: 3
    },
    {
        nome: "Conhecimento Infundido",
        descricao: "O personagem ganha todas as especializações de Conhecimento Comum e Conhecimento Escolástico no nível 'Conhecida'. Em testes bem-sucedidos desses conhecimentos o personagem sempre adiciona mais um grau de sucesso.",
        aptidoes: { type: "e", aptidoes: ["Inteligência", "Conhecimento"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "caracteristica", nome: "Inteligência", valorMinimo: 40 },
                { type: "ou", requisitos: [
                    { type: "pericia", nome: "Conhecimento Escolástico" },
                    { type: "pericia", nome: "Conhecimento Proibido" }
                ]}
            ]
        },
        nivel: 3
    },
    {
        nome: "Ataque Relâmpago",
        descricao: "O personagem pode realizar a ação Ataque Relâmpago.",
        aptidoes: { type: "e", aptidoes: ["Habilidade de Combate", "Sutileza"] },
        requisitos: { type: "talento", nome: "Ataque Veloz" },
        nivel: 3
    },
    {
        nome: "Explosão de Luminens",
        descricao: "O personagem sempre conta como possuindo uma arma tipo Pistola com distância de tiro de 10m. Essa arma pode fazer apenas Tiros Únicos e causa 1d10 + (2 * seu bônus de Vontade) de dano de Energia, com Penetração 0 e a qualidade Chocante. O personagem conta como possuindo treinamento nessa arma e após cada ataque deve fazer um teste de Resistência para não sofrer 1 nível de Fadiga.",
        aptidoes: { type: "e", aptidoes: ["Habilidade Balística", "Tecnologia"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "talento", nome: "Choque de Luminens" },
                { type: "talento", nome: "Capacitores de Luminen" },
                { type: "traço", nome: "Implantes Mechanicus" }
            ]
        },
        nivel: 3
    },
    {
        nome: "Maestria",
        descricao: "O personagem pode gastar um Ponto de Destino para automaticamente obter sucesso na Perícia da especialização contanto que sua dificuldade seja +0 ou melhor. A quantidade de graus de sucesso é igual ao bônus da habilidade relacionada a perícia. Esse talento pode ser escolhido mais de uma vez, cada vez para uma perícia diferente.",
        aptidoes: { type: "e", aptidoes: ["Inteligência", "Conhecimento"] },
        especializacoes: [
            "Acrobacia", "Atletismo", "Atenção", "Charme", "Comando", "Comércio",
            "Conhecimento Comum", "Enganação", "Esquiva", "Conhecimento Proibido",
            "Investigação", "Interrogatório", "Intimidação", "Linguística", "Lógica",
            "Medicina", "Navegação", "Operação", "Bloqueio", "Senso Psíquico",
            "Conhecimento Escolástico", "Intuição", "Segurança", "Prestidigitação",
            "Furtividade", "Sobrevivência", "Uso Tecnológico", "Negócio"
        ],
        requisitos: {
            type: "ou",
            requisitos: [
                { type: "pericia", nome: "Acrobacia", nivel: "+30" },
                { type: "pericia", nome: "Atletismo", nivel: "+30" },
                { type: "pericia", nome: "Atenção", nivel: "+30" },
                { type: "pericia", nome: "Charme", nivel: "+30" },
                { type: "pericia", nome: "Comando", nivel: "+30" },
                { type: "pericia", nome: "Comércio", nivel: "+30" },
                { type: "pericia", nome: "Conhecimento Comum", nivel: "+30" },
                { type: "pericia", nome: "Enganação", nivel: "+30" },
                { type: "pericia", nome: "Esquiva", nivel: "+30" },
                { type: "pericia", nome: "Conhecimento Proibido", nivel: "+30" },
                { type: "pericia", nome: "Investigação", nivel: "+30" },
                { type: "pericia", nome: "Interrogatório", nivel: "+30" },
                { type: "pericia", nome: "Intimidação", nivel: "+30" },
                { type: "pericia", nome: "Linguística", nivel: "+30" },
                { type: "pericia", nome: "Lógica", nivel: "+30" },
                { type: "pericia", nome: "Medicina", nivel: "+30" },
                { type: "pericia", nome: "Navegação", nivel: "+30" },
                { type: "pericia", nome: "Operação", nivel: "+30" },
                { type: "pericia", nome: "Bloqueio", nivel: "+30" },
                { type: "pericia", nome: "Senso Psíquico", nivel: "+30" },
                { type: "pericia", nome: "Conhecimento Escolástico", nivel: "+30" },
                { type: "pericia", nome: "Intuição", nivel: "+30" },
                { type: "pericia", nome: "Segurança", nivel: "+30" },
                { type: "pericia", nome: "Prestidigitação", nivel: "+30" },
                { type: "pericia", nome: "Furtividade", nivel: "+30" },
                { type: "pericia", nome: "Sobrevivência", nivel: "+30" },
                { type: "pericia", nome: "Uso Tecnológico", nivel: "+30" },
                { type: "pericia", nome: "Negócio", nivel: "+30" }
            ]
        },
        nivel: 3
    },
    {
        nome: "Tiro Potente",
        descricao: "O personagem adiciona metade do seu bônus de Combate Balístico no dano de ataques usando armas a distância.",
        aptidoes: { type: "e", aptidoes: ["Habilidade Balística", "Ofensivo"] },
        requisitos: { type: "caracteristica", nome: "Habilidade Balística", valorMinimo: 40 },
        nivel: 3
    },
    {
        nome: "Imortal",
        descricao: "O personagem pode gastar um Ponto de Destino para, durante o combate, ignorar efeitos de ferimentos (como Dano Crítico), Fadiga e Atordoamento, contanto que o efeito não o mate imediatamente. O personagem não ignora o dano, apenas os efeitos negativos dele. Ao final do combate os efeitos são sentidos como normal.",
        aptidoes: { type: "e", aptidoes: ["Resistência", "Defensivo"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "caracteristica", nome: "Vontade", valorMinimo: 50 },
                { type: "caracteristica", nome: "Resistência", valorMinimo: 50 }
            ]
        },
        nivel: 3
    },
    {
        nome: "Velocidade Sobrenatural",
        descricao: "Ao fazer a ação de Disparada o personagem pode andar o dobro da velocidade indicada na ação.",
        aptidoes: { type: "e", aptidoes: ["Agilidade", "Ofensivo"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "caracteristica", nome: "Habilidade de Combate", valorMinimo: 40 },
                { type: "caracteristica", nome: "Agilidade", valorMinimo: 50 }
            ]
        },
        nivel: 3
    },
    {
        nome: "Arrancada",
        descricao: "Ao realizar a ação Movimento Completo, o personagem pode se mover um número extra de metros igual ao seu bônus de Agilidade. Ao usar uma ação de Corrida, ele pode se mover o dobro do deslocamento indicado na ação. Caso use esse talento em duas rodadas consecutivas o personagem sofre um nível de Fadiga.",
        aptidoes: { type: "e", aptidoes: ["Agilidade", "Sobrevivência"] },
        nivel: 3
    },
    {
        nome: "Evasão Extra",
        descricao: "O personagem pode fazer um teste extra de Bloqueio e Esquiva uma vez por rodada.",
        aptidoes: { type: "e", aptidoes: ["Agilidade", "Defensivo"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "caracteristica", nome: "Agilidade", valorMinimo: 40 },
                { type: "ou", requisitos: [
                    { type: "pericia", nome: "Esquiva" },
                    { type: "pericia", nome: "Bloqueio" }
                ]}
            ]
        },
        nivel: 3
    },
    {
        nome: "Cirurgião Superior",
        descricao: "O personagem ganha um bônus de +20 em todos os testes de Medicina. Ao realizar primeiros socorros o personagem ignora penalidades de Muito Ferido em pacientes e sofre apenas -10 de penalidade nos testes ao tratar pacientes com Feridas Críticas.",
        aptidoes: { type: "e", aptidoes: ["Inteligência", "Sobrevivência"] },
        requisitos: { type: "pericia", nome: "Medicina", nivel: "+10" },
        nivel: 3
    },
    {
        nome: "Seleção de Alvo",
        descricao: "O personagem pode atirar em alvos em combate corpo a corpo. Caso realize a ação Mirar antes de atacar, as chances de acertar um aliado se tornam 0.",
        aptidoes: { type: "e", aptidoes: ["Habilidade Balística", "Sutileza"] },
        requisitos: { type: "caracteristica", nome: "Habilidade Balística", valorMinimo: 50 },
        nivel: 3
    },
    {
        nome: "Atropelamento Devastador",
        descricao: "Ao fazer uma ação de Disparada o personagem pode fazer um teste oposto de Força contra qualquer um em seu caminho. Caso os alvos falhem eles são derrubados.",
        aptidoes: { type: "e", aptidoes: ["Força", "Ofensivo"] },
        requisitos: { type: "caracteristica", nome: "Força", valorMinimo: 50 },
        nivel: 3
    },
    {
        nome: "Resistência Verdadeira",
        descricao: "Ao sofrer Dano Crítico, o perosnagem reduz o dano pelo seu bônus de resistência (para o mínimo de 1 de dano crítico).",
        aptidoes: { type: "e", aptidoes: ["Resistência", "Defensivo"] },
        requisitos: { type: "caracteristica", nome: "Resistência", valorMinimo: 40 },
        nivel: 3
    },
    {
        nome: "Maestria Com Duas Armas",
        descricao: "Ao lutar com duas armas (cada uma sendo armas de uma mão) o personagem ignora a penalidade de -20 nos testes.",
        aptidoes: { type: "e", aptidoes: ["Sutileza", "Ofensivo"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "caracteristica", nome: "Agilidade", valorMinimo: 45 },
                { type: "talento", nome: "Ambidestria" },
                { type: "especializacaoTalento", talento: "Combater Com Duas Armas", especializacao: "corpo a corpo" },
                { type: "especializacaoTalento", talento: "Combater Com Duas Armas", especializacao: "a distância" },
                { type: "ou", requisitos: [
                    { type: "caracteristica", nome: "Habilidade de Combate", valorMinimo: 40 },
                    { type: "caracteristica", nome: "Habilidade Balística", valorMinimo: 40 }
                ]}
            ]
        },
        nivel: 3
    },
    {
        nome: "Trava do Imaterium",
        descricao: "Uma vez por sessão o personagem pode ignorar um efeito da tabela Fenômeno Psíquico. O personagem sofre 1d5 de dano de Energia na Cabeça e não pode fazer testes de Poder de Foco ou manter poderes psíquicos até o início do seu próximo turno.",
        aptidoes: { type: "e", aptidoes: ["Vontade", "Psíquico"] },
        requisitos: {
            type: "e",
            requisitos: [
                { type: "psiNivel", minimo: 1 },
                { type: "talento", nome: "Mente Fortalecida" },
                { type: "caracteristica", nome: "Vontade", valorMinimo: 50 }
            ]
        },
        nivel: 3
    },
    {
        nome: "O Caminho Antigo",
        descricao: "Qualquer arma arcaica (low-tech) perde sua qualidade Primitiva (primitive) e ganha a qualidade Efetiva 3 (Proven 3) para esse peronagem",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Escolhido do Omnissiah",
        descricao: "O personagem começa com um dos talentos a seguir a escolha do jogador (Talento Técnico ou Tecnólogo de Armas).",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Berço de Ouro",
        descricao: "A qualquer momento que o personagem reduzir sua Influência ele reduz o valor indicado -1 (até o mínimo de 1).",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Vivendo na Multidão",
        descricao: "O personagem ignora multidões para propósitos de movimento, tratando elas como terreno aberto. Em espaços fechados ele recebe +20 em testes de Navegação (superfície).",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Fé no Credo",
        descricao: "Quando o personagem gasta um Ponto de Destino ele rola 1d10. Em um valor 1, ele não reduz a pontuação de pontos de destino dele.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Filho do Vazio",
        descricao: "O personagem começa com o talento Mente Fortalecida e ganha +30 em testes para se mover em ambientes de gravidade 0.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Mestre da Burocracia",
        descricao: "O personagem considera a disponibilidade dos itens um nível mais disponível ou um menos mais difícil.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "A Face da Lei",
        descricao: "O personagem pode re-rolar uma vez qualquer teste de Intimidação ou Interrogatório e pode substituir seu bônus de Vontade pelos graus de sucesso nesses testes caso seja aplicável.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Ameaça Constante",
        descricao: "Quando o personagem ou aliado dentro de 10 metros rolar na tabela Fenômeno Psíquico, o personagem pode aumentar ou diminuir a rolagem por um valor igual ao seu bônus de Vontade. Além disso se ele escolher ou receber o Avanço de Elite Psíquico durante a crição de personagem ele recebe o traço Sancionado.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Substitua a Carne Fraca",
        descricao: "O personagem considera qualquer item cibernético com disponibilidade 2 níveis menores (ou 2 níveis mais fácil de achar). Além disso ele recebe o traço Implantes Mechanicus.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Fé é Tudo",
        descricao: "Ao gastar pontos de destino para receber um bônus em um teste ele recebe +20 ao invés de +10.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Martelo do Imperador",
        descricao: "Quando atacar um alvo que foi atacado por um aliado desde o final do seu último turno o personagem pode re-rolar valores 1 e 2 de dano.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Desistir Jamais",
        descricao: "O personagem utiliza seu bônus de Resistência + 2 para determinar fadiga.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Morte Certa",
        descricao: "O personagem pode gastar um ponto de destino após ser bem-sucedido em um ataque e causar dano adicional igual aos graus de sucesso no teste do ataque no primeiro acerto.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Curador Dedicado",
        descricao: "Ao falhar em um teste de Primeiros Socorros o personagem pode gastar um ponto de destino para ser bem-sucedido automaticamente com graus de sucesso iguais ao seu bônus de Inteligência.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Correr e Atirar",
        descricao: "Uma vez por rodada, após realizar uma ação de movimento, o personagem pode realizar um Ataque Padrão com uma arma tipo Pistola como Ação Livre.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Manipular as Massas",
        descricao: "O personagem pode gastar um ponto de destino para ser automaticamente bem-sucedido em um teste de Charme, Comando ou Intimidação com uma quantidade de graus de sucesso igual ao seu bônus de Vontade.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Encarar o Imaterium",
        descricao: "O personagem começa com o Avanço de Elite Psíquico.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Busca por Conhecimento",
        descricao: "O personagem pode gastar pontos de destino para ser automaticamente bem-sucedido em testes de Lógica ou de qualquer tipo de conhecimento com um número de graus de sucesso igual ao seu bônus de Inteligência.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Nada me Escapa",
        descricao: "O personagem pode gastar pontos de destino para ser automaticamente bem-sucedido em testes de Atenção ou Investigação com uma quantidade de graus de sucesso igual ao seu bônus de Percepção.",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
    {
        nome: "Expert em Violência",
        descricao: "Após um ataque bem-sucedido, mas antes de determinar número de acertos, o personagem pode gastar um ponto de destino para substituir os graus de sucesso do ataque por graus de sucesso iguais ao bônus de Habilidade de Combate (para ataques corpo a corpo) ou ao bônus de Habilidade Balística (para ataques a distância).",
        aptidoes: { type: "e", aptidoes: ["Geral", "Geral"] },
        nivel: 0
    },
];

export type Traco = {
    nome: string;
    nivel?: number;
    descricao: string;
    outroTracoFornecido?: string;
};

export const Tracos: Traco[] = [
    {
        nome: "Amorfo",
        descricao: "O personagem pode aumentar ou diminuir seu traço de Tamanho em 1 como uma Ação Livre. O personagem também ganha o traço Rastejador.",
        outroTracoFornecido: "Rastejador"
    },
    {
        nome: "Anfíbio",
        descricao: "O personagem pode respirar ar e líquidos."
    },
    {
        nome: "Auto Estabilização",
        descricao: "O personagem sempre conta como realizando a Ação Empunhadura."
    },
    {
        nome: "Presença Macabra",
        nivel: undefined,
        descricao: `Todos em até (X) metros do personagem sofrem -10 em testes de Vontade.`
    },
    {
        nome: "Bestial",
        descricao: "O personagem não precisa fazer um teste de Sobrevivência enquanto estiver no seu habitat natural. A criatura deve fazer um teste de Vontade (+0) caso esteja com medo, ou ferido. Se falhar foge."
    },
    {
        nome: "Cego",
        descricao: "O personagem falha todos os testes baseados em visão e de Habilidade Balística. Recebe -30 em testes de habilidade de Combate. O talento Luta às Cegas reduz a penalidade para -15."
    },
    {
        nome: "Disparada Brutal",
        nivel: undefined,
        descricao: "Ao fazer disparada o personagem causa (X) dano adicional em cada acerto."
    },
    {
        nome: "Escavador",
        nivel: undefined,
        descricao: "A criatura possui deslocamento em sólidos que possam ser escavados igual a (X) metros. Criaturas com tamanho menor podem entrar no túnel gerado. A cada rodada 1d10 é rolado, com 5 ou menor o túnel colapsa."
    },
    {
        nome: "Rastejador",
        descricao: "O movimento do personagem é metade do seu valor normal, arredondado para cima, mas ele não recebe penalidade ao se deslocar por terreno difícil."
    },
    {
        nome: "Demoníaco",
        nivel: undefined,
        descricao: "Aumenta sua Resistência para reduzir dano em um valor igual a (X). Esse valor é negado caso o dano for causado por uma Arma de Energia, Poderes Psíquicos, Ataques Divinos ou de outras criaturas com esse traço. O personagem também ganha o traço Imortal.",
        outroTracoFornecido: "Imortal"
    },
    {
        nome: "Visão no Escuro",
        descricao: "O personagem vê em áreas sem luz e não é penalizado por falta de luz."
    },
    {
        nome: "Armas Naturais Mortais",
        descricao: "A criatura ganha todos os benefícios do traço Armas Naturais, e essas armas perdem a qualidade primitiva.",
        outroTracoFornecido: "Armas Naturais"
    },
    {
        nome: "Medo",
        nivel: undefined,
        descricao: "Ao encontrar o personagem todos devem fazer um teste de Vontade com penalidade de ((X * 10) – 10 ). Se falhar deve rolar na tabela Choque, somando +10 para cada grau de falha."
    },
    {
        nome: "Voador",
        nivel: undefined,
        descricao: "A criatura se move pelo ar (X) metros."
    },
    {
        nome: "Do Além",
        descricao: "O personagem é imune a Medo, Alvejado, Pontos de Insanidade e Poderes Psíquicos que afetam a mente."
    },
    {
        nome: "Pairar",
        nivel: undefined,
        descricao: "A criatura pode pairar por no máximo 2 metros do solo e se mover (X) metros."
    },
    {
        nome: "Incorpóreo",
        descricao: "A criatura ganha o traço Pairar 6 e +30 em testes de Furtividade. É imune a armas normais, sendo ferido apenas por demônios, criaturas do Imaterium, Poderes Psíquicos e outras criaturas incorpóreas. A criatura não pode afetar o mundo material normalmente e não pode ultrapassar Escudos Vazios e Campos Gellar.",
        outroTracoFornecido: "Pairar"
    },
    {
        nome: "Máquina",
        nivel: undefined,
        descricao: "Maquinas não precisam respirar, são imunes ao vácuo, frio e Poderes Psíquicos que afetam a mente. Possui (X) pontos de armadura que podem ser danificados por fogo."
    },
    {
        nome: "Trava Mental",
        descricao: "A criatura não pode realizar atividades fora de suas ordens. Caso não possua ordens a criatura tem de fazer um teste de Inteligência +20 para realizar outra atividade ou ficar atordoada por 1 rodada."
    },
    {
        nome: "Braços Múltiplos",
        nivel: undefined,
        descricao: "A criatura possui (X) braços. Ganha +10 em testes de Atletismo para escalar e nadar. Para cada par de braços a criatura pode fazer 1 ataque a mais usando o talento Combater com Duas Armas."
    },
    {
        nome: "Armadura Natural",
        nivel: undefined,
        descricao: "A criatura ganha armadura extra em todas as partes do corpo igual a (X)."
    },
    {
        nome: "Armas Naturais",
        descricao: "A criatura conta como sempre estando armada, ataques desarmados causando 1d10 + bônus de Força com a qualidade Primitiva 7. A criatura ataca com o atributo Habilidade de Combate, mas não pode bloquear ataques. Os ataques são imunes aos efeitos de Campos de Energia."
    },
    {
        nome: "Faseamento",
        descricao: "Como Ação Simples a criatura pode ganhar ou retirar o traço Incorpóreo.",
        outroTracoFornecido: "Incorpóreo"
    },
    {
        nome: "Psíquico",
        descricao: "Permite comprar a perícia Senso Psíquico e Poderes Psíquicos."
    },
    {
        nome: "Quadrupede",
        descricao: "O movimento da criatura é dobrado."
    },
    {
        nome: "Regeneração",
        nivel: undefined,
        descricao: "No início de cada um dos turnos a criatura pode fazer um teste de Resistência e recuperar (X) pontos de vida."
    },
    {
        nome: "Sancionado",
        descricao: "Se a possuir o Avanço de Elite Psíquico o personagem não ganha a corrupção indicada e começa com um Psi-nível de 2."
    },
    {
        nome: "Tamanho",
        nivel: undefined,
        descricao: "Seu tamanho é de (X). Cheque a tabela de tamanho para verificar bônus ou penalidades."
    },
    {
        nome: "Sonar",
        descricao: "Pode localizar qualquer objeto sólido dentro de um raio de 30 metros. Criaturas dentro dos 30 metros podem fazer um teste de Atenção (-10) para notar o som e direção do sonar."
    },
    {
        nome: "Conexão de Alma",
        descricao: "A criatura rola um dado a mais ao rolar na tabela Perigos do Imaterium e pode substituir qualquer um dos dados pelo dado extra. Ao ganhar o traço a criatura deve escolher: ganhar 3d10 pontos de Insanidade, ganhar o traço Cego, perder 1d10 pontos em uma característica a escolha ou uma mutação aleatória.",
    },
    {
        nome: "Estampido",
        descricao: "Toda vez que uma criatura com esse traço falha em um teste de Vontade ela anda em linha reta passando por cima de qualquer um no caminho. Todos no caminho sofrem 1d5 + bônus de Força de dano de Impacto. Uma criatura com esse traço aciona o estampido de qualquer outra. O estampido dura 1d10 minutos ou até a ameaça ser eliminada."
    },
    {
        nome: "Ser de Pesadelos",
        descricao: "A criatura ganha o traço Eterno e é imune a qualquer perigo natural, perda de sangue, e ser atordoada. Ignora dano crítico (a menos que o dano cause morte imediata) a menos que causado por Poderes Psíquicos, Armas de Energia ou Ataque Divino.",
        outroTracoFornecido: "Eterno"
    },
    {
        nome: "Implantes Mechanicus",
        descricao: "A criatura com esse traço ganha os seguintes implantes: Circuito Craniano, Ciber Manto, Enxerto Elétrico, Indutores Elétricos, Bobina de Potência.",
    },
    {
        nome: "Pesado",
        descricao: "Ganha +20 em testes de Agarrar e Derrubar e em usos do talento Derrubada."
    },
    {
        nome: "Tocado pelo Destino",
        nivel: undefined,
        descricao: "A criatura possui (X) Pontos de Destino e pode usa-los normalmente. Também ganha os benefícios de Fúria Justiceira.",
    },
    {
        nome: "Tóxico",
        nivel: undefined,
        descricao: "Ao ser atingindo por um ataque corpo a corpo o atacante deve fazer um teste de Resistência com penalidade igual a (-10*(X)) para não sofrer 1d10 pontos de dano de energia que não é reduzido por Armadura ou Resistência."
    },
    {
        nome: "Eterno",
        descricao: "A criatura é imune a doenças, venenos, toxinas e não precisa respirar."
    },
    {
        nome: "Característica Sobrenatural",
        nivel: undefined,
        descricao: "A criatura ganha um bônus extra a uma característica igual a (X). Ao fazer um teste que usa essa característica a criatura ganha um número de graus de sucesso igual a ((X)/2)."
    },
    {
        nome: "Sentidos Sobrenaturais",
        nivel: undefined,
        descricao: "A criatura pode perceber qualquer coisa dentro de (X) metros."
    },
    {
        nome: "Instabilidade do Imaterium",
        descricao: "Se uma criatura com esse traço sofrer dano, e não causar dano ou pontos de insanidade até o fim da rodada ela deve fazer um teste de Vontade. Se falhar sofre 1 ponto de dano + 1 ponto para cada grau de falha. Se isso reduzir a vida da criatura a zero ou menos ela retornar ao Imaterium."
    },
    {
        nome: "Armas do Imaterium",
        descricao: "Ataques da criatura ignoram armadura a não ser que ela tenha sido feita com elementos Psicoativos ou abençoada contra as forças do Imaterium. Campos de Força funcionam normalmente contra esses ataques."
    }
];
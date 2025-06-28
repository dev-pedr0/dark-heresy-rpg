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
        descricao: `A classificação de planeta selvagem é abrangente, indicando planetas com desenvolvimento tecnológico muito baixo. Isso varia desde civilizações nômades e primitivas até civilizações que iniciaram seu uso de metal. Além deste espectro também são classificadas assim civilizações antes muito desenvolvidas, mas cuja catástrofes como: desastres naturais, ataques xenos, guerra nuclear foram reduzidas novamente ao estado bárbaro. Essa população pode ainda ter acesso a alta tecnologia sobrevivente, mas muito provavelmente não tem meios de utiliza-la corretamente, entende-la ou repara-la (sendo assim denominados tecno-bárbaros). Nativos desses planetas são vistos como ignorantes e primitivos, mas sua natureza não é muito diferente do resto do império. Eles vivem sob uma névoa de misticismo, com crenças nos deuses do céu e rituais para garantir sua sobrevivência em ambientes geralmente hostis e perigosos, da mesma forma que um habitante de um mundo colmeia utiliza o maquinário pesado de uma fábrica entoando preces que foram ensinadas a ele pelos adeptus mechanicus para um período de trabalho sem acidentes.
                    
                    Esses planetas são tão importantes quanto qualquer outro e geralmente sua “administração” é feita por membros do Império para garantir que a taxa de pessoas e recursos seja enviada. A população desses planetas é mantida propositalmente na ignorância com a única exeção sendo a instituição do Credo Imperial. O Clero se responsabiliza em adaptar a religião local no culto do Imperador (que é tratado com outros nomes – O Grande Sol, o Deus das Estrelas, Pai das Tempestades) e qualquer sinal de heresia ou outro culto é removido imediatamente.
                    
                    A geografia e cultura de um planeta desses também pode variar drasticamente. Uma civilização pode viver em uma selva alienígena de tundra vulcânica, em um sistema de tribos de idolatram efigies do Imperador, que eles chamam de Pai do Trovão, caçam lagartos voadores por desertos de cinzas e poeira, usando armas feitas de vidro vulcânico, esperando o momento em que os homens do céu irão chamar seus melhores guerreiros para servir ao seu Deus. Outro planeta pode ser um pântano sem fim, povoado por tribos nômades que que vestem ossos e pele de animais imensos e estão em constante guerra. Para aquelas civilizações alguma tecnologia seu povo pode viver em “cavernas” que nada mais são que bunkers abandonados ou estações espaciais caídas, utilizando lanças feitas do metal das paredes de um antigo maquinário e se defendendo de animais de estimação mutantes. Alguns habitantes podem ver naves e a tecnologia que trazem como um evento divino de grande iluminação, outros entendem que esse apega a essa tal de “tecnologia” como uma fraqueza e dependência que diminui o ser.
                    
                    Planeta Selvagem de Exemplo – Gregorn:
                    Este é um mundo de violência onde as tribos primitivas lutam entre si, contra o ambiente e sua atividade tectônica e a megafauna que busca devorar a todos. Os nativos utilizam peles resistentes de animais e capacetes de ossos. Seus costumes parecem errádicos e difíceis de entender, o que levou mais de uma expedição do Império a ser exterminada. Todo povo do planeta parece ter um instintivo medo de armamentos de plasma, mesmo não havendo registros desse tipo de desenvolvimento em nenhum momento da história de Gregorn. A teoria é que eles associação essas armas as grandes erupções vulcânicas que assolam todos os continentes.
                    `,
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
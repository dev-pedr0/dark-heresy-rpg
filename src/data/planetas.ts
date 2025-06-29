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
        descricao: `A classificação de "planeta selvagem" é abrangente, englobando mundos com desenvolvimento tecnológico extremamente limitado. Isso inclui desde sociedades nômades e tribais até culturas que começaram a trabalhar com metais. Além disso, também recebem essa designação civilizações outrora avançadas, mas que, após catástrofes como desastres naturais, invasões xenos ou guerras nucleares, regrediram a um estado bárbaro.
                    
                    Essa população pode até manter acesso à tecnologia avançada remanescente, mas geralmente carece de meios para compreendê-la, utilizá-la corretamente ou repará-la — sendo, por isso, chamados de tecno-bárbaros. Os nativos desses mundos são frequentemente vistos como ignorantes e primitivos, embora sua natureza não seja tão diferente da de outros cidadãos do Império. Vivem imersos em misticismo, acreditando em deuses celestes e realizando rituais para garantir sua sobrevivência em ambientes hostis — assim como um trabalhador de um mundo-colmeia recita preces ensinadas pelos Adeptus Mechanicus ao operar maquinário pesado, esperando por um turno sem acidentes.
                    
                    Esses planetas têm importância estratégica comparável à de qualquer outro. Sua "administração" é geralmente realizada por agentes do Império, encarregados de garantir a extração de recursos e o recrutamento de pessoal. A população é mantida intencionalmente na ignorância, com exceção da doutrina do Credo Imperial. O Clero se encarrega de adaptar as religiões locais ao culto do Imperador, muitas vezes reverenciado com nomes distintos — como "O Grande Sol", "Deus das Estrelas" ou "Pai das Tempestades". Qualquer sinal de heresia ou culto alternativo é eliminado com rapidez.
                    
                    A geografia e a cultura desses mundos podem variar drasticamente. Uma civilização pode habitar uma selva de tundra vulcânica, organizada em tribos que idolatram efigies do Imperador — a quem chamam de Pai do Trovão — enquanto caçam répteis voadores por desertos de cinzas com armas de vidro vulcânico, à espera do dia em que os homens do céu virão buscar seus guerreiros para servir ao Deus. Outro planeta pode ser um pântano interminável, habitado por tribos nômades que usam peles e ossos de criaturas gigantescas e vivem em guerra constante.
                    
                    Em alguns casos, a população vive em "cavernas" que na verdade são antigos bunkers ou estações espaciais caídas. Usam lanças feitas do metal de antigas máquinas e enfrentam criaturas mutantes deixadas para trás por eras passadas. Alguns veem as naves e tecnologias imperiais como manifestações divinas; outros consideram a dependência da tecnologia uma fraqueza que corrompe a essência do ser.
                    
                    Exemplo de Planeta Selvagem – Gregorn
                    Gregorn é um mundo marcado pela violência. Tribos primitivas lutam entre si, contra a geografia instável e contra a megafauna predadora que os ameaça constantemente. Os nativos vestem peles espessas e usam capacetes feitos de ossos. Seus costumes são erráticos e difíceis de compreender, o que resultou na aniquilação de mais de uma expedição imperial.
                    Curiosamente, todo o povo do planeta demonstra um temor instintivo por armamentos de plasma, apesar de não haver registros históricos de tal tecnologia em Gregorn. A principal teoria é que associam essas armas às frequentes erupções vulcânicas que assolam os continentes — eventos tão destrutivos quanto uma rajada de plasma.
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
        descricao: `Planetas com essa classificação constituem o arsenal do Império e abrigam vastas linhas de produção industrial. Seus habitantes trabalham incessantemente para fabricar armamentos, armaduras e diversos equipamentos essenciais para as forças imperiais e a população de outros mundos. Em razão das condições extremas — temperaturas elevadas, ambientes tóxicos e pressão constante —, muitos possuem modificações tecnológicas em seus corpos, desenvolvidas tanto para facilitar o trabalho quanto para garantir sua sobrevivência.
                    
                    Nesses mundos, as pessoas nascem e morrem realizando tarefas específicas, transmitidas de geração em geração. Existem famílias inteiras especializadas em uma única função, como a fabricação de um único componente de uma arma ou o refinamento de um combustível específico. Trata-se de uma sociedade rigidamente hierarquizada, dominada pelo Culto à Máquina e governada pelos Tech-Padres dos Adeptus Mechanicus. Enquanto muitos vivem como meros autômatos, outros — por mérito, seleção ou acaso — são acolhidos pelo culto e passam a servir ao Omnissiah.
                    
                    Esses planetas são vitais para o Império e, por isso, recebem manutenção e vigilância excepcionais. São locais onde tecnologias raramente vistas em outros mundos são utilizadas: cidades móveis que arrastam consigo nuvens de resíduos tóxicos, vastas estações orbitais com elevadores que descem até o manto do planeta, entre outros prodígios. Além dos trabalhadores humanos, hordas de servitors — pessoas lobotomizadas e mecanicamente modificadas — executam tarefas perigosas ou repetitivas, reforçando a força de trabalho com obediência cega.
                    
                    Em todo o Império, a tecnologia é tanto venerada quanto temida. Muito do conhecimento por trás do que se usa foi perdido ou é rigidamente controlado. Para a maioria dos cidadãos imperiais, dispositivos eletrônicos funcionam por meio de rituais e mistérios incompreensíveis. No caso dos Adeptus Mechanicus, essa visão não é muito diferente: embora sejam os guardiões do saber tecnológico, também veem as máquinas como manifestações divinas — expressões vivas do Deus-Máquina e de seu avatar, o Omnissiah (identificado como o próprio Imperador).
                    
                    Por isso, mesmo em um planeta forja, onde a tecnologia está por toda parte, o uso de equipamentos permanece envolto em misticismo. Os rituais de ativação, as unções com unguentos sagrados e as preces para acalmar os espíritos das máquinas são partes essenciais da rotina. Um erro de conduta diante de uma máquina pode não apenas provocar uma falha, mas também ser interpretado como blasfêmia.
                    
                    Geograficamente, planetas forja são cobertos por estruturas metálicas colossais. Suas fábricas são tão vastas que se confundem com cidades. Os recursos naturais são explorados até o esgotamento, e muitas vezes tanto a superfície quanto o subterrâneo são densamente povoados. A atmosfera é densa com gases tóxicos e fumaça industrial; rios foram substituídos por fluxos de óleo e lubrificantes que escorrem das máquinas incessantes. Para um forasteiro, esse ambiente artificial pode ser tão letal quanto uma selva alienígena.
                    
                    Exemplo de Planeta Forja – Rhodin IV
                    Rhodin IV foi cedido aos Adeptus Mechanicus como recompensa por sua atuação decisiva durante uma invasão Ork no setor. Rico em prometium e diversos minérios valiosos, o planeta se mostrou ideal para a construção de forjas.
                    Antigamente coberto por florestas densas, Rhodin IV hoje é uma paisagem de metal, plastil e poluentes. Suas fábricas se estendem por centenas de quilômetros em largura e dezenas em altura, consumindo todos os recursos que a mineração intensiva consegue extrair. Os túneis escavados pelo Mechanicus são tão profundos e intricados que muitos habitantes passam a vida inteira sem jamais ver a superfície. Para esses trabalhadores das profundezas, o céu é apenas uma lenda, e o único deus é aquele que canta com voz metálica por entre os motores.
                    `,
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
        descricao: `Independentemente do planeta em que alguém nasce, vir ao mundo como um nobre significa ocupar um patamar social, econômico e político incomparável. Ser nobre não é simplesmente reinar sobre um castelo em um mundo agrícola distante — é pertencer à elite dos mundos imperiais: governadores de planetas, setores e sub-setores, membros das casas de mercadores nobres, navegadores e outras famílias aristocráticas. Esses são os verdadeiros nobres do Império: a casta dominante. Ser nobre é ter acesso ao melhor que qualquer planeta pode oferecer — roupas finas, alimentos raros, tecnologia avançada — e, ao mesmo tempo, viver com a certeza de que desde o nascimento há centenas dispostas a matar por uma chance de ocupar seu lugar.
                    
                    A vida nobre não se mistura com a das massas. Eles habitam torres elevadas, cidades flutuantes ou fortalezas isoladas, longe do cheiro de suor e metal das cidades colmeia ou dos campos tóxicos das fábricas. Acreditam ter a bênção hereditária do Imperador e a convicção de que são peças indispensáveis para a administração da humanidade. Desde cedo, são moldados para comandar: recebem educação refinada, são treinados em etiqueta, administração, política e, às vezes, no uso das armas — não para a guerra real, mas para os duelos cerimoniais que decidem o destino de famílias inteiras.
                    
                    Contudo, essa vida de luxo e isolamento quase sempre distorce sua percepção do Império real. Enquanto populações inteiras vivem sob racionamento severo ou em zonas de guerra, muitos nobres passam os dias em retiros de prazer, preocupados não com a fome ou a fé do povo, mas com sua maior ameaça: outros nobres. O jogo político da aristocracia imperial pode ser tão letal quanto sobreviver em um mundo selvagem — e muito mais sutil.
                    
                    A forma de governo entre as nobrezas imperiais varia tanto quanto os planetas que habitam. Em alguns mundos, o controle pode vir de um corpo político como o Administratum, o Ministorum ou o Adeptus Mechanicus; em outros, linhagens de governantes podem ser traçadas diretamente até a Terra (a Sagrada Terra). Existem mundos dominados por guildas rivais, conselhos secretos ou cartéis poderosos, todos travando guerras silenciosas por influência. Nesses círculos, riqueza em créditos tem pouco valor — muito mais valiosos são o status, as informações, os favores e as promessas seladas com sangue.
                    
                    Para alguém nascido nesse meio, não há como escapar totalmente do jogo. Seu nome e linhagem o seguirão para onde for. Mesmo aqueles que abandonam a vida aristocrática e buscam aventura ou anonimato acabam, de forma intencional ou não, influenciando o poder de sua casa — para o bem ou para o mal.
                    
                    Exemplo de Nobreza – O Palácio de Platina de Snope
                    No topo da principal metrópole do planeta Snope, ergue-se o Palácio de Platina — uma estrutura monumental feita de metais iridescentes, refletindo uma infinidade de cores e formas a depender do ângulo e da luz. É a morada das casas nobres do planeta, isoladas do restante do mundo por quilômetros de atmosfera tóxica e pântanos poluídos.
                    Lá, famílias aristocráticas vivem em esplendor absoluto, ignorando deliberadamente a miséria que assola o mundo abaixo. Cada casa dedica-se não à administração do planeta, mas à intriga, tramando a queda das rivais com rumores cuidadosamente plantados, chantagens veladas e alianças frágeis. Conflitos diretos são evitados, não por nobreza ou honra, mas pelo temor de que uma intervenção imperial possa lhes custar seus títulos. No alto do Palácio de Platina, a guerra é silenciosa, mas constante.
                    `,
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
        descricao: ` A classificação de mundo colmeia refere-se a planetas cujo recurso mais abundante é a própria população. São mundos cobertos por cidades colossais que se erguem por quilômetros acima da superfície devastada, isoladas do exterior por camadas de blindagem, filtros e campos de contenção que protegem contra os gases tóxicos e fluidos corrosivos acumulados ao longo de milênios de exploração e poluição. As colmeias são divididas verticalmente em níveis sociais — quanto mais alto se vive, maior o status, o acesso ao ar puro e à luz solar, mesmo que artificial. Quanto mais se desce, mais degradante se torna a vida.
                    
                    Nascer em um mundo colmeia é viver, trabalhar e morrer sem jamais ver o céu. A luz natural é um mito contado em sussurros, o espaço pessoal uma ficção, e o ar respirável, um privilégio instável. A superpopulação é constante, e a sobrevivência exige esperteza, força ou algum tipo de influência — quando não todas essas qualidades ao mesmo tempo. Nos níveis mais baixos, a criminalidade deixa de ser exceção e se torna a norma, com a violência sendo aceita como parte natural da existência. Nesses andares esquecidos, o Império é apenas uma lenda distante.
                    
                    As cidades colmeia são construções antigas, muitas com raízes que remontam à Era Sombria da Tecnologia. Com o tempo, foram sendo ampliadas, reforçadas, expandidas para os lados e para cima, numa tentativa constante de acomodar sua população crescente e manter-se à tona em meio ao caos ambiental que domina a superfície do planeta. Tudo nelas é reciclado — o ar, a água, os alimentos, os materiais, e até os mortos. Os corpos dos falecidos são levados às fornalhas para alimentar as máquinas; seus pertences, imediatamente reaproveitados por outro cidadão. A manutenção dessa existência em estado semi-sustentável exige um equilíbrio cruel e impiedoso.
                    
                    Assim como nos mundos forja, muitos cidadãos colmeia seguem o ofício de seus antepassados, passando funções específicas por gerações: manutenção de maquinário, montagem de peças, purificação de gases, entre outras tarefas. Mas a qualidade de vida varia enormemente conforme o nível em que se vive. Nos andares superiores, gestores, nobres e grandes comerciantes vivem com acesso a luxos e recursos impensáveis para os habitantes dos níveis inferiores. Quanto mais se desce, mais a escassez domina — até que a ordem desaparece por completo, e apenas as leis das gangues e do mais forte permanecem. Nessas zonas profundas, a morte é uma constante, e o Império, um conceito abstrato.
                    
                    Exemplo de Mundo Colmeia – Hulee V
                    Hulee V é um planeta coberto por diversas cidades colmeia, sendo Krakex a maior e mais notória. No horizonte, ela mais se assemelha a uma montanha artificial do que a uma construção feita por mãos humanas. Seus níveis foram continuamente ampliados por gerações, alargando-se em todas as direções e consumindo vorazmente a paisagem ao redor. Bilhões de habitantes vivem ali, dedicando suas existências à transformação incessante de metais em blindagens para tanques, couraças e fortificações de guerra.
                    Para a maioria, a realidade se resume a alguns poucos quilômetros entre seu cubículo de descanso e o posto de trabalho — um ciclo ininterrupto entre máquina e multidão. Muitos jamais viram o céu, e alguns sequer conseguem imaginar um mundo fora dos túneis abafados, da luz artificial constante e do ar saturado que respiram. Ainda assim, para o Império, Hulee V é uma joia valiosa: um mundo que não para de produzir, com sua população servindo como o combustível humano da guerra eterna.
                    `,
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
        descricao: `Planetas religiosos são mundos em que a fé não é apenas uma prática espiritual, mas a essência da própria existência. Nessas localidades, o Culto Imperial domina cada aspecto da vida cotidiana, e o Imperador é adorado com uma devoção absoluta. A fé é a lei, a cultura, a moral e a única verdade permitida. O Ministorum — braço eclesiástico do Império — governa com mão firme, assegurando que cada cidadão conheça, respeite e repita diariamente os dogmas sagrados.
                    
                    Esses planetas são marcados por locais sagrados — túmulos de santos imperiais, ruínas de batalhas heroicas, fragmentos de armas sagradas, ou mesmo simples locais onde uma visão do Imperador foi testemunhada por um mártir. Independentemente de sua origem, esses locais atraem multidões de peregrinos vindos de todas as partes do setor. Esses viajantes buscam cura, redenção, inspiração ou apenas um vislumbre da glória do Imperador. A constante peregrinação molda a economia e a cultura dos planetas religiosos, tornando-os centros fervorosos de devoção, comércio de relíquias e histórias milenares.
                    
                    Viver em um planeta religioso é nascer sob os olhos vigilantes do clero. Os ensinamentos do Imperador não são apenas lidos — são repetidos em voz alta, diariamente, por alto-falantes sagrados, por missionários nas ruas e por estátuas que recitam passagens santas. Crianças aprendem orações antes de aprender a falar. Adultos consagram cada ato à vontade divina. A fé é ensinada desde o berço até o túmulo — e muitas vezes além dele.
                    
                    No entanto, onde há fé, há aqueles que se aproveitam dela. A movimentação constante de caravanas e multidões faz desses mundos terreno fértil para criminosos: contrabandistas disfarçados de sacerdotes, vendedores de relíquias falsas, fanáticos manipuladores. Muitos dos habitantes vivem de administrar os fluxos de visitantes, guiando peregrinos, mantendo as instalações sagradas ou vendendo itens de devoção. Alguns são levados pela fé a abandonar tudo e peregrinar. Outros, seduzidos pelo submundo, acabam se envolvendo com organizações ilegais. Mas, mesmo os mais desviados, raramente conseguem escapar por completo da marca profunda que a fé deixa em suas almas.
                    
                    A origem de um planeta religioso quase sempre está atrelada a um evento milagroso: o sacrifício de um santo, uma intervenção divina, ou uma revelação profética. Muitos desses planetas já foram mundos colmeia decadentes, desertos esquecidos ou zonas de guerra, até que algo sagrado os transformou para sempre. A fé os remodelou — não apenas em estrutura, mas em propósito.
                    
                    Exemplo de Planeta Religioso – Ossuar
                    Ossuar está localizado no sistema Pollom e é governado diretamente pelo Credo de Remembrança, uma seita do Ministorum dedicada à preservação das memórias e restos dos santos imperiais. O continente principal é quase inteiramente ocupado por uma estrutura monumental: um vasto mausoléu que abriga os corpos criogenicamente preservados de dezenas de santos que ajudaram a fundar o Setor Askellon.
                    A manutenção dessas câmaras é uma tarefa sagrada e incessante. Multidões trabalham sem parar, limpando, lubrificando, recitando cânticos e realizando rituais para manter a integridade dos sarcófagos. A mera ideia de que esses corpos possam se deteriorar é considerada uma heresia intolerável. A peregrinação até Ossuar é longa e árdua. Muitos fiéis gastam suas vidas inteiras tentando chegar ao planeta e, ao alcançá-lo, enfrentam as últimas provações: labirintos de catacumbas, atmosferas hostis e filas de semanas para poder simplesmente tocar uma lápide sagrada. Muitos morrem nessa travessia final, mas sua morte é celebrada como um sacrifício de fé — uma oferenda direta ao Imperador.
                    `,
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
        descricao: `Aqueles que nascem e vivem em estações orbitais, portos espaciais, naves mercantes ou geracionais são moldados pelo vazio entre as estrelas. Criados entre metal, radiação e frio constante, diferem profundamente daqueles que pisam na terra firme de um planeta. Um nascido no espaço se torna parte da nave em que vive, compreendendo seu funcionamento de forma quase instintiva — sendo por isso membros extremamente valiosos em qualquer tripulação. No entanto, os efeitos da gravidade reduzida e da exposição prolongada à radiação os tornam visualmente distintos: corpos esguios, magros, pele pálida e escassez de pelos. Para alguns, sua aparência é desconcertante.
                    
                    Resultado da necessidade de expansão imperial e das longas jornadas pelo imaterium, os filhos do vazio vivem e morrem dentro de cascos de metal, transportando recursos e pessoas entre os mundos. São uma população que, muitas vezes, jamais colocou os pés em um planeta. Mesmo a mais experiente tripulação de um mercador-nobre não compartilha dessa relação com o espaço — os nascidos do vazio vivem em simbiose com sua nave, como se ela fosse um organismo vivo do qual são órgãos vitais. Muitos sequer reconhecem o conceito de "estar no espaço", pois tudo o que conhecem são corredores, câmaras e motores.
                    
                    Em alguns casos, naves geracionais se tornam verdadeiras civilizações isoladas. Ao longo dos séculos, esses grupos desenvolvem rotinas, crenças e conhecimentos centrados em manter o funcionamento básico da nave, mesmo que seu destino original tenha sido esquecido. Crianças crescem ouvindo códigos de manutenção como prece; adultos morrem após vidas dedicadas a manter a estação respirando. Qualquer falha, qualquer erro, pode custar a vida de muitos — e é por isso que a disciplina é ensinada com fervor quase religioso.
                    
                    Há também algo mais sutil — e mais perigoso. O longo tempo no vazio aproxima essas pessoas das forças do Imaterium. Seus sonhos são muitas vezes perturbados, suas almas parecem marcadas. É comum que psíquicos surjam entre eles em número maior do que em outras populações, atraindo a atenção do Adeptus Astra Telepathica e, por vezes, da Inquisição.
                    
                    Estação Espacial de Exemplo – Echonis Augurio
                    Isolada das principais rotas estelares, Echonis Augurio foi outrora uma estação de pesquisa dos Adeptus Mechanicus. Centenas de tech-padres e servitors trabalharam por séculos em projetos obscuros — até o dia em que uma nave de suprimentos a encontrou completamente deserta. Nenhum sinal de combate, contaminação ou falha estrutural foi registrado. Desde então, a estação foi reutilizada como ponto de reabastecimento e comércio para mercadores e tripulações errantes. Milhares vivem hoje em seus corredores, mantendo-a operante, adaptando antigas seções e se perguntando — ainda que em sussurros — o que aconteceu com seus ocupantes originais.
                    `,
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
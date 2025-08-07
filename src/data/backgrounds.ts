export type Background = {
    id: string;
    nome: string;
    imagem: string;
    descricao: string;
    pericias: {
        fixas?: string[];
        escolhas?: string[][];
        escolhasSelecionadas?: string[];
    };
    talentos: {
        fixos?: string[];
        escolhas?: string[][];
        escolhasSelecionadas?: string[];
    };
    equipamentos: {
        fixos?: string[];
        escolhas?: string[][]; 
        escolhasSelecionadas?: string[];
    };
    bonus: string;
    aptidoes: {
        fixas?: string[];
        escolhas?: string[][];
        escolhasSelecionadas?: string[];
    };
}

export const backgrounds: Background[] = [
    {
        id: "adeptus_administratum",
        nome: "Adeptus Administratum",
        imagem: "/public/backgrounds/Adeptus_Administratum.jpg",
        descricao: `O Império Humano é tão imenso que é necessária uma legião incontável de escribas, oficiais e burocratas para mantê-lo. O administratum é um colosso cambaleante, operando em uma velocidade apenas um pouco maior do que o total repouso, enquanto garante que cada planeta pague seu tributo e contribua para a continuidade da supremacia dos homens. Sem o administratum, tudo se dissolveria em loucura e caos. Mantimentos não chegariam a tempo, exércitos se veriam sem munição novas colônias sem ferramentas e fundos. O administratum garante que todos tenham o que precisam (as vezes) e que tudo seja catalogado, escrito e informado. 
                    
                    O adeptus administratum, administra as operações do Império. O mesmo sobrevive através de um sistema de tributos, no qual cada mundo oferece homens e recursos ao Imperador pela proteção de toda a humanidade. Essa administração decide como usar os bens arrecadados, seja para formar um exército, evacuar um mundo ou erradicar uma espécie xenos — tudo para o benefício da humanidade. Tão entrelaçado está o funcionamento do deste corpo do governo com o tecido político que ninguém escapa de sua atenção, e cada mundo possui centenas, senão milhares, de oficiais e adeptos devotados a supervisionar suas obrigações.
                    
                    Essa organização possui uma rígida hierarquia em suas fileiras para realizar tarefas infinitas. Alguns adeptos são encarregados de manter registros, vivendo suas vidas em enormes tumbas de dados. Lá, podem passar seus dias catalogando textos infindáveis, registrando cuidadosamente tudo para que, após sua morte, outro possa catalogar seus catálogos — e assim por diante, em um ciclo eterno. Outros fazem o oposto, queimando registros considerados hereges ou que não estão mais em conformidade com a verdade imperial. A maioria dos adeptos do administratum passa seu tempo peneirando montes de informações ou preenchendo relatórios intermináveis. Esses relatórios são repassados a outros adeptos, todos contribuindo de pequenas formas para o entendimento maior — ainda que muito limitado — do Império e de seu estado.
                    
                    Como seus adeptos atuam em todos os níveis da sociedade e processam quantidades enormes de informação, seus membros às vezes adquirem um entendimento do funcionamento do Império que ninguém mais tem. No entanto, isso pode ser tão incorreto ou antiquado quanto os dados que processam. Frequentemente possuindo talentos desconhecidos por outros — como o conhecimento de línguas arcanas, cifras de dados e manipulações numéricas — um adepto do administratum pode detectar significado onde outros veem apenas rabiscos aleatórios. Isso se deve em parte à lenta decadência do conhecimento em simples repetição mecânica em muitos mundos imperiais, mas também à natureza secreta de seus funcionários. Eles guardam seus arquivos, usando códigos especializados, léxicos isolados e jargões técnicos. Um adepto é a chave para desbloquear esse mundo secreto de registros e informações, e mobilizar seu imenso poder pode ser vital para encontrar um único cidadão entre milhões, liberar uma carga importante da quarentena, desvendar um estranho padrão climático local ou realizar qualquer uma de mil outras tarefas.
                    
                    Exemplo do Adeptus Administratum – Regimento Infro-cripto de Jovus:
                    Situado nas profundezas da cidade principal de jovus, esta organização é devotada à manutenção de um dos maiores bancos encriptados do planeta. Aqui, informações que datam de milênios são armazenadas, alguns registros talvez originários dos dias míticos da fundação do setor. Os trabalhadores leais labutam incessantemente para preservar e organizar incontáveis pergaminhos, tablets e rolos. A cada dia, toneladas de informação são depositadas aqui, mas também a cada dia montanhas de pergaminhos são perdidos para o fogo ou mofo. Vermes e invasores destroem séculos de registros; pilhas de tablets falham ou se desintegram; e tomos tornam-se inúteis à medida que suas línguas desaparecem. Mesmo assim, o regimento continua sua batalha interminável em nome do adeptus administratum.
                    
                    Funções Recomendadas:
                    Cirurgião, Hierofante, Sábio, Buscador.
                    `,
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
        bonus: "Mestre da Burocracia – o personagem considera a disponibilidade dos itens um nível mais disponível ou um menos mais difícil.",
        aptidoes: {
            fixas: ["Conhecimento", "Social"],
        }
    },
    {
        id: "adeptus_arbites",
        nome: "Adeptus Arbites",
        imagem: "/public/backgrounds/Adeptus_Arbites.jpg",
        descricao: `Somente através de vigilância constante e da execução de leis brutais o Império pode sobreviver, e o adeptus arbites cumpre essa função. Enquanto os exércitos da guarda imperial lutam para conter a agressão de forças alienígenas e proteger os mundos de ameaças externas, o adeptus arbites elimina rebeldes, reincidentes e ameaças à estabilidade vindas de dentro. Seus agentes, coletivamente conhecidos como árbitros, operam da maneira que julgarem mais eficaz, utilizando seu treinamento avançado e armamentos superiores para lidar com inimigos que podem estar além da capacidade das agências locais — ou, em muitos casos, para enfrentar um governo que se corrompeu. Impiedosos e obstinados, eles não perdoam ou esquecem nenhum crime, perseguindo seus alvos incansavelmente até que a Justiça do Imperador seja cumprida.
                    
                    As leis do Império são uma teia complexa de tradição, obrigação e costumes locais. Por isso, podem variar de mundo para mundo ou de setor para setor, com cada governador planetário, prefeito local ou chefe declarando suas próprias leis. Os árbitros pouco se importam com tais trivialidades, e impõem punição apenas aos crimes contra o Império, deixando os assuntos menores para os oficiais locais. Assassinato ou roubo, por exemplo, são considerados inconsequentes, a menos que afetem diretamente o governo, sejam cometidos contra oficiais imperiais ou ameacem de alguma forma a segurança de um mundo. Os árbitros têm pouca piedade ou compaixão pelos pecados dos cidadãos imperiais. Anos lidando com a escória da galáxia tornaram muitos deles cínicos e amargos. Outros tornaram-se fanáticos, vendo a mão do Imperador na própria letra da lei e acreditando que qualquer um que a quebre merece apenas a morte. Alguns poucos ainda mantêm noções idealistas de trazer a ordem, mas a realidade de crimes intermináveis — muitas vezes horríveis — corrói rapidamente tais ideias. A chegada de uma patrulha de árbitros raramente é bem-vinda, dada a brutalidade com que operam durante investigações, prisões e execuções, mesmo que isso possa significar o fim de empreendimentos criminosos violentos.
                    
                    Nos mundos imperiais, o adeptus arbites é a última e mais absoluta instância da lei, respondendo apenas aos seus comandantes e Juízes de sistemas e setores — e não às autoridades locais. É uma tarefa ingrata, pois o árbitro, anônimo sob seu elmo, geralmente recebe apenas medo e ódio por suas ações. Ele e seus companheiros são a última linha de defesa contra levantes heréticos e outras grandes ameaças. Sua fortaleza-precinto é frequentemente o último bastião da autoridade imperial durante revoluções ou invasões, resistindo até o fim enquanto alerta outras agências sobre a situação desesperadora. Cada membro sabe que, se cair, o planeta cairá com ele. Para simplesmente sobreviver em um ambiente tão hostil, os árbitros não podem mostrar hesitação, arrependimento ou compaixão por aqueles que protegem — e devem considerar todo cidadão culpado até que prove sua inocência.
                    
                    Exemplo do Adeptus Arbites – Precinto Delta, Colmeia Desoleum:
                    Um dos vários precintos do Adeptus Arbites dentro desta imensa cidade-colmeia, Delta é cuidadosamente escondido e ainda mais fortificado que o normal. Em seu interior encontram-se as armas mais poderosas, como canhões las móveis e bombas de plasma, além de um pequeno estoque de granadas arqueo-tech inestimáveis — normalmente desnecessárias, a menos que a colmeia enfrente uma insurreição ou algo pior. Como nenhum dos árbitros ali designados é nativo do planeta, muito menos dessa colmeia, alguns levam tempo para se acostumar às condições superlotadas. Nenhum deles, porém, ousa baixar a guarda por um instante, sabendo das armas e outros segredos armazenados atrás das pesadas portas de plastil de seu precinto. Essa fortaleza-precinto, assim como outra cuidadosamente oculta dentro da colmeia que abriga seu coro astropático, representa a última linha de defesa caso Desoleum comece a cair.
                    
                    Funções Recomendadas:
                    Assassino, Mercenário, Buscador, Guerreiro.
                    `,
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
        bonus: "A Face da Lei – o personagem pode re-rolar qualquer teste de Intimidação ou Interrogatório e pode substituir o bônus de Vontade pelos graus de sucesso nesses testes caso seja aplicável.",
        aptidoes: {
            fixas: ["Ofensiva", "Defensiva"],
        }
    },
    {
        id: "adeptus_astra_telephatica",
        nome: "Adeptus Astra Telepathica",
        imagem: "/public/backgrounds/Adeptus_Astra_Telephatica.jpg",
        descricao: `Psíquicos são uma parte vital do Império, conectando seus mundos, ajudando seus soldados em batalha e guiando suas naves pelas estrelas. Eles também são perigosos, pois o mesmo dom que lhes permite extrair poder do Imaterium — esse reino sobrenatural que existe além da realidade — também pode torná-los portais para demônios. O Império possui uma estrutura rígida para vigiar qualquer um que demonstre mesmo o menor indício de talento psíquico e removê-lo da sociedade — geralmente à força. Uma vez sob custódia, o indivíduo é treinado para servir ao Imperador ou ser destruído. O adeptus astra telepathica supervisiona esses psíquicos, vasculhando a galáxia em busca de novos talentos e, então, examinando e treinando os que captura.
                    
                    Para garantir a segurança da população, o adeptus astra telepathica supervisiona o recrutamento desses indivíduos perigosos. Sua frota de Naves Negras viaja incessantemente de mundo em mundo, reunindo qualquer um que demonstre o “toque” do talento psíquico para levá-lo de volta à Terra para testes. Apenas uma fração dos levados sobrevive para servir aos adeptus astra telepathica. A maioria é sacrificada para sustentar o Imperador — talvez o psíquico mais poderoso já conhecido.
                    
                    Outros sucumbem durante o treinamento, com suas mentes ou corpos destroçados pelas criaturas do Warp, ou são executados se seus poderes se mostrarem incontroláveis ou suas mentes inadequadas. Somente após anos de rigoroso aprendizado na scholastia psykana — os centros de treinamento do adeptus astra telepathica — é que um psíquico é considerado apto a servir ao Império, seja entre seus exércitos ou como parte da grande rede de Astropatas, que transmitem mensagens através das estrelas.
                    
                    Esses psíquicos sancionados podem acabam trabalhando a bordo das Naves Negras. Outros se tornam instrutores, repassando seu conhecimento para novas gerações de psíquicos. Alguns servem em outros locais, lutando nas guerras constantes da humanidade, usando seus poderes contra os inimigos do Imperador. Alternativamente, podem encontrar segurança relativa nos palácios de um governador planetário, uma excentricidade da nobreza ociosa, enviando e recebendo mensagens para seu senhor.
                    
                    Exemplo do Adeptus Astra Telepathica – Destacamento de Primaris 14:
                    Designado à 237ª Infantaria Pesada de Havarth, um dos maiores regimentos da Guarda Imperial de Askellon, essa organização é composta por várias dezenas de psíquicos preparados para o combate. Muitos são veteranos de incontáveis batalhas e até possuem certa habilidade no uso de armas secundárias. Embora a maioria seja designada a funções de combate, para auxiliar as tropas conforme a direção dos oficiais táticos, é costume que um psíquico especialmente selecionado seja incorporado ao estado-maior de comandante do regimento. Este não fornece poder de combate direto, mas utiliza suas habilidades para divinar as ações do inimigo — uma prática que provocou certa zombaria entre outros regimentos do setor.
                    
                    Funções Recomendadas:
                    Cirurgião, Místico, Sábio, Buscador.
                    `,
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
        bonus: "Ameaça Constante – quando o personagem ou aliado dentro de 10 metros rolar na tabela Fenômeno Psíquico, o personagem pode aumentar ou diminuir a rolagem por um valor igual ao seu bônus de Vontade. Além disso se ele escolher ou receber o Avanço de Elite Psíquico durante a crição de personagem ele recebe o traço Sancionado.",
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
        descricao: `Grande parte do domínio da humanidade sobre a tecnologia foi esquecida, e o que resta são segredos rigidamente guardados, mantidos pelas mãos ciumentas do adeptus mechanicus. Envolvido em crenças supersticiosas e rituais, o conhecimento de como operar os dispositivos mais avançados do Império é responsabilidade desses devotos do Deus-Máquina. Essa organização protege e supervisiona esse saber antigo e os mistérios de fazer a tecnologia funcionar — pois mesmo suas compreensões dogmáticas e supersticiosas estão muito além de qualquer outra pessoa. Eles abraçam a tecnologia de tal maneira que buscam transcender a carne de seus corpos com a pureza do metal. Para aqueles de fora do mechanicum, eles podem parecer insensíveis e frios, mais semelhantes às suas máquinas abençoadas do que a outros humanos — e para os tech-padres isso não é um defeito, mas um benefício.
                    
                    O adeptus mechanicus é o guardião de toda a tecnologia imperial. A partir do planeta vermelho Marte, eles mantêm um império paralelo que venera o Imperador sob a forma do Omnissiah. Suas crenças conferem à tecnologia um poder místico que deve ser respeitado e mantido com orações, rituais e cerimônias precisas. Em sua adoração ao Deus-Máquina, os tech-padres tentam se tornar mais semelhantes ao seu mestre divino. Seus anciões são mais máquina do que homem, com a maior parte do cérebro substituída por circuitos lógicos frios e cogitadores zumbindo. Esta é a ambição final de qualquer verdadeiro devoto: ascender pelas fileiras até se tornar um magus, com pele de metal e coração de ferro. O mechanicum também guarda as maiores armas conhecidas pela humanidade. As principais entre elas são os Titãs do adeptus titanicus — colossais máquinas de guerra humanoides, tão altas quanto blocos habitacionais, com armamentos capazes de arrasar cidades inteiras. São implantadas apenas contra os inimigos mais perigosos. Cada titã é uma peça sagrada e antiga de tecnologia, venerada como uma expressão viva do poder do Omnissiah.
                    
                    Não há quase nenhuma inovação ou progresso dentro do Império. Os princípios de sistemas de energia, armamentos e naves estelares são baseados em padrões de projeto que datam de milhares de anos atrás. Isso se deve, em parte, aos perigos do avanço tecnológico descontrolado, que no passado trouxe máquinas pensantes e armas destruidoras de planetas que devastaram a galáxia. Mas também se deve ao próprio adeptus mechanicus, que trata esses diagramas como textos sagrados que não podem ser modificados. Mas como são eles que detém esse conhecimento, mesmo sem grandes avanços essa facção é muito poderosa. Os tech-padres governam mundos, possuem frotas e levantam suas próprias forças militares para proteger suas forjas e postos de pesquisa. Os que servem ao Culto da Máquina são frequentemente obcecados por tecnologia, vendo a glória divina do Omnissiah em cada circuito e parafuso, e tratando o uso e a manutenção desses dispositivos como um dever sagrado. Sua aparência os destaca: mesmo em um Império onde cibernéticos são comuns, seus corpos fortemente modificados beiram o inumano.
                    
                    Exemplo de Adeptus Mechanicus: Regimento Affirmator de Cerix Magnus:
                    Cerix magnus é, talvez, o maior planeta forja de askellon, e é rigoroso em seguir apenas os padrões tecnológicos mais santificados. Os tech-padres do regimento affirmator trabalham ali para garantir que nenhuma forja se desvie dos ditames corretos do Omnissiah, e que todas as devidas reverências sejam realizadas. Este ofício verifica cuidadosamente se cada oferta de óleo sagrado está na temperatura e consistência corretas antes de ser usada para ungir um novo espírito da máquina. Monitora os níveis de oração binária para garantir a frequência apropriada, inspeciona as liturgias de manufatura para confirmar que nenhuma ação não consagrada foi tentada, entre outras tarefas. Por meio dessas ações, garante que a heresia tecnológica nunca encontre espaço para prosperar.
                    
                    Funções Recomendadas:
                    Cirurgião, Hierofante, Sábio, Buscador.
                    `,
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
        bonus: "Substitua a Carne Fraca – o personagem considera qualquer item cibernético com disponibilidade 2 níveis menores (ou 2 níveis mais fácil de achar). Além disso ele recebe o traço Implantes Mechanicus.",
        aptidoes: {
            escolhas:[
                ["Conhecimento", "Tecnologia"],
            ],
        }
    },
    {
        id: "adeptus_ministorum",
        nome: "Adeptus Ministorum",
        imagem: "/public/backgrounds/Adeptus_Ministorum.jpg",
        descricao: `O adeptus ministorum, também conhecido como eclesiarquia ou o clero, é a religião que venera o Imperador da Humanidade. Poderosa e antiga, ela incorpora o Credo Imperial, os inúmeros sistemas de crença que unem a humanidade, lhe dão propósito e a mantêm segura de ameaças que colocam sua alma em perigo, tanto internas quanto externas. Seus membros são servos devotos do Imperador, dedicados a levar Sua palavra aos fiéis e eliminar todos os que se opõem a Ele.
                    
                    De acordo com a crença imperial, há dez mil anos o Imperador caiu após encerrar a maior guerra civil que a galáxia já conheceu. Como o Ele foi o unificador e pai do Império, não demorou para que surgisse um culto em sua adoração, idolatrando-O por ter salvado a humanidade e impedido sua extinção. Esse culto se espalhou, amadurecendo até se tornar uma religião. Com o passar dos séculos, tornou-se o credo unificador do Império, até que todo cidadão pudesse olhar para o céu escuro e temeroso da noite e saber que era o Imperador quem os mantinha seguros. Essa religião está presente em todos os níveis da sociedade, embora os detalhes desse culto variem em cada mundo e cultura. Isso importa pouco para o ministorum, pois desde que um cidadão reconheça o Imperador como seu deus, ele é um fiel leal. Missionários fanáticos, santos abençoados e pregadores asseguram a propagação do Culto Imperial para manter o clero e sua ordem. Este grupo também serve para purgar os inimigos da humanidade, assegurando que apenas os de espírito puro e fé verdadeira sobrevivam. Isso inclui manter a fé entre os soldados do Imperador enquanto combatem xenos e outras ameaças. A maioria das forças imperiais possui regimentos de clérigos devotos para cuidar de suas almas e incitá-los à fúria justa. O ministorum também converte bolsões recém-descobertos de humanidade e transforma quaisquer crenças nativas no Credo Imperial.
                    
                    O ministorum desfruta de vasto poder e influência devido à sua integração com quase todas as agências imperiais. Praticamente não existe lugar no Império onde se possa estar completamente livre de sua presença, e a maioria dos senhores e governadores têm ao menos um membro por perto para aconselhá-los. Para alguns, a presença deles é bem-vinda — uma mão firme para reforçar sua própria fé e auxiliá-los em suas decisões. Para outros, é um lembrete odioso das limitações de seu poder. Porém, essa é uma batalha perdida até para o senhor mais poderoso, pois nenhum planeta ou setor pode resistir por muito tempo à influência da eclesiarquia, dado seu poder para acusar e julgar qualquer homem — ou até mesmo qualquer mundo — pela mancha da heresia.
                    
                    Exemplo de Adeptus Ministorum – O Abençoado Mortuário de Thaur:
                    O mundo santuário de thaur é o local de descanso de bilhões, repleto dos restos mortais de poderosos e santos. Milhões a mais entre os humildes e pobres se esforçam para garantir que seus restos também encontrem lugar nesse mundo sagrado, organizando em vida o envio de seus corpos para lá. Suas toneladas incontáveis chegam ao mortuário abençoado, onde os ossos são preparados para o descanso final. Os osseíatas inscrevem uma oração única em cada osso antes de utilizá-lo para reforçar uma basílica ou pavimentar uma das passarelas com quilômetros de largura que circundam o mundo. Nenhum osso é desperdiçado, e cada um torna-se uma oferenda eterna ao Imperador.
                    
                    Funções Recomendadas:
                    Cirurgião, Hierofante, Buscador, Guerreiro.
                    `,
        pericias: {
            fixas: ["Charme, Comando, Conhecimento Comum (Adeptus Ministorum)", "Linguística (Alto Gótico)"],
            escolhas: [
                ["Investigação", "Intuição"],
            ],
        },
        talentos: {
            fixos: ["Treinamento com Armas (Arcaica)"],
            escolhas: [
                ["Treinamento com Armas (Incendiária)", "Treinamento com Armas (Projétil Sólido)"],
            ],
        },
        equipamentos: {
            fixos: ["Mochila", "Globo de Luz", "Servo Caveira Unitário (Megafone)"],
            escolhas: [
                ["Lança Chamas de Mão", "Martelo de Guerra, Revolver"],
                ["Robes Imperiais", "Colete Flak"],
            ],
        },
        bonus: "Fé é Tudo – ao gastar pontos de destino para receber um bônus em um teste ele recebe +20 ao invés de +10.",
        aptidoes: {
            escolhas:[
                ["Liderança", "Social"],
            ],
        }
    },
    {
        id: "astra_militarum",
        nome: "Astra Militarum",
        imagem: "/public/backgrounds/Astra_Militarum.jpg",
        descricao: `Para proteger o Império de seus inúmeros inimigos, é mantida uma força de combate colossal conhecida como a guarda imperial. Recrutada através de taxas imperiais de mundos espalhados pela galáxia, a essa é uma força imensa composta por incontáveis bilhões, em guerra constante. Não existem registros precisos sobre seu tamanho ou força exatos, e sua natureza é de constante fluxo, com tropas se deslocando de sistema em sistema ou espalhadas pelas estrelas lutando em guerras há muito esquecidas. Muitos soldados não sobrevivem sequer um único dia após entrarem em combate, mas os que conseguem tornam-se veteranos endurecidos pela guerra, hábeis em causar a morte e enfrentar os piores inimigos que a galáxia pode oferecer. Marcados e quebrados, tais guerreiros pouco podem esperar de conforto fora do campo de batalha, mas podem encontrar serviço em outras partes da máquina de guerra imperial ou em missões mais secretas em guerras menos visíveis. Os soldados da astra militarum formam a linha tênue contra um universo violento, ansioso por eliminar qualquer vestígio da humanidade das estrelas. Quando raças alienígenas ou levantes planetários surgem, é o peso da guarda imperial que é usado como um golpe de martelo, esmagando toda resistência ao domínio do Imperador. Mesmo assim, os combates podem durar anos, décadas ou mais, em guerras aparentemente intermináveis de atrito, nas quais gerações lutam e morrem pela promessa de uma vitória futura.
                    
                    O serviço na astra militarum segue muitos caminhos. Alguns seguem as tradições de seus mundos e se juntam a regimentos famosos, como milhões antes deles. Outros entram por sorteio, conscrição, punição ou puro acaso. Cada mundo é responsável por oferecer uma porcentagem de sua população a esse serviço, e um que relaxa nesse dever frequentemente enfrenta a fúria da guarda imperial, que o força a cumprir suas obrigações. Uma vez que um homem se torna soldado, geralmente nunca mais vê seu mundo natal, sendo enviado através da galáxia para lutar em guerras em mundos distantes, por povos estranhos e senhores desconhecidos. Todo soldado sabe, no entanto, que não há escapatória real do serviço — somente na morte ele é libertado desse dever sagrado para com o Imperador.
                    
                    Por sua vez, os regimentos da astra militarum combinam tanto aqueles dedicados e fanáticos pela causa quanto os que servem apenas por medo ou penitência. Assim, um soldado da pode ser desde um herói coberto de glórias ou um fanático pronto para morrer por mestres invisíveis, até um covarde egoísta tentando apenas sobreviver ou um criminoso fugindo de seus crimes — e tudo mais entre esses extremos. Todos têm seu lugar no plano da guarda imperial, às vezes servindo apenas como bucha de canhão para proteger recursos mais valiosos. No entanto, mesmo os melhores soldados podem ser desperdiçados nas mãos de um comandante cruel ou incompetente — e o exército tem mais do que sua cota desses. Os raros veteranos que sobrevivem para ver a vida além da Guarda Imperial são combatentes endurecidos, fruto de incontáveis guerras e batalhas. Frequentemente treinados no uso de diversas armas letais do Império e veículos blindados, suas habilidades estão sempre em demanda. Cada um é único, mas todos compartilham a característica comum de serem sobreviventes, tendo passado pelo moedor de carne que é a guerra imperial — e sobrevivido onde milhões não conseguiram.
                    
                    Exemplo de Guarda Imperial – Esquadrão de Demolições do 33º Regimento de Hrax:
                    Parte do batalhão das Facas de Sangue de hrax, esta unidade se especializa em infiltração e destruição, tendo rompido fortificações consideradas intransponíveis e paralisado formações blindadas. Como em todas as forças hraxianas, os rifles las da unidade são equipados com serras elétricas para combate corpo a corpo. Acompanhados por tecnh-padres enginseers, os esquadrões de demolição se aventuram profundamente atrás das linhas inimigas para plantar explosivos e minas, e o 33º é bem conhecido por sempre encontrar unidades inimigas para utilizar suas serras elétricas silenciadas.
                    
                    Funções Recomendadas:
                    Assassino, Mercenário, Hierofante, Guerreiro.
                    `,
        pericias: {
            fixas: ["Atletismo, Comando, Conhecimento Comum (Astra Militarum)", "Navegação (Superfície)"],
            escolhas: [
                ["Medicina", "Operação (Superfície)"],
            ],
        },
        talentos: {
            fixos: ["Treinamento com Armas (Las)", "Treinamento com Armas (Arcaico)"],
        },
        equipamentos: {
            fixos: ["Colete Utilitário", "Armadura Flak da Guarda Imperial", "Arpão e Linha", "Cigarro x12", "Magnóculo"],
            escolhas: [
                ["Rifle Las", "Pistola Las, Espada"],
            ],
        },
        bonus: "Martelo do Imperador – quando atacar um alvo que foi atacado por um aliado desde o final do seu último turno o personagem pode re-rolar valores 1 e 2 de dano.",
        aptidoes: {
            escolhas:[
                ["Sobrevivência", "Liderança"],
            ],
        }
    },
    {
        id: "desgarrado",
        nome: "Desgarrado",
        imagem: "/public/backgrounds/Desgarrado.jpg",
        descricao: `Mesmo dentro do Império, onde a maioria nasce e morre na mesma posição, existem aqueles que lutam para se libertar e viver por seus próprios termos. Alguns podem ter abandonado deliberadamente o papel que lhes foi designado, ou escorregado pelas rachaduras de uma civilização engessada. Eles existem como criminosos, vagabundos e renegados nas margens da vida imperial. Esses desgarrados vivem nas sombras da sociedade, sobrevivendo com sua astúcia e charme. São ladrões habilidosos, assassinos e caçadores de recompensas; a suspeita e o medo frequentemente os acompanham, pois todos sabem que onde eles passam, o crime os segue. Apesar disso, párias podem estar conectados a todos os níveis da vida imperial, e embora geralmente pensem apenas em si mesmos, podem ser recrutados para propósitos maiores. Eles têm conexões, conhecimentos e habilidades impensáveis para cidadãos imperiais comuns, e estão dispostos a usá-los através de suborno, coerção ou outras formas mais vis de persuasão — muitas vezes mais eficazes do que simples apelos ao dever imperial. Também podem manter laços com suas vidas e organizações anteriores, permitindo-lhes atuar em várias camadas da sociedade imperial.
                    
                    Toda sociedade tem suas margens, seu submundo e seus esquecidos. Esse é o domínio do desgarrado, onde nenhuma verdadeira lei reina, onde não há justiça além da feita pela arma, onde apenas os fortes — ou os insanos — prosperam. Nos mundos-colmeia e em outros com densas populações, esses elementos geralmente são de natureza criminosa, escondendo-se entre os cidadãos comuns. Em mundos menos povoados ou nos confins do Império, eles podem simplesmente estar tentando manter sua independência do domínio imperial distante. Mais provavelmente, esses lugares são refúgios para o crime, cheios de organizações ilícitas e cultos hereges empurrados para os cantos do setor para escapar da ira das autoridades imperiais. Embora poucos admitam, a maioria dos mundos precisa desses párias. Eles contrabandeiam bens ilegais, mas muito procurados, e mantêm uma aparência de ordem em regiões abandonadas e esquecidas. Muitos mundos dependem deles como força de trabalho principal — especialmente para tarefas inapropriadas até mesmo para os cidadãos mais baixos. Embora desprezados e odiados, desgarrados mutantes às vezes são recrutados (ou forçados) a trabalhar em fábricas tóxicas, minerar minérios radioativos ou cultivar campos agrícolas que cobrem continentes em mundos com atmosferas perigosas ou gravidade intensa.
                    
                    Enquanto o ministorum quer fazer os cidadãos acreditarem que todos os Párias são renegados e hereges, na realidade muitos apenas ousam existir fora do peso do Império. Aos olhos da maioria das autoridades, no entanto, todos que desafiam a Lei do Imperador são iguais. Em alguns casos, desgarrados enfrentam ameaças à humanidade — como caçadores de xenos impedindo o avanço de raças alienígenas em mundos fronteiriços, ou justiceiros executores levando uma forma de justiça a regiões sem lei dentro de mundos “civilizados”. Párias não vêm apenas das camadas mais baixas do Império, nem apenas daqueles que vivem além de sua luz. Algumas casas nobres, ou grandes partes delas, podem essencialmente se tornar desgarradas — por escolha ou imposição. Esses nobres às vezes se apegam ao seu poder, mesmo diante da desgraça e do exílio, criando seus próprios reinos privados onde ainda mantêm corte. Inevitavelmente, tais preocupações tornam-se empreendimentos criminosos em busca de enriquecimento ou vingança. Costumam justificar o abandono da sociedade “legal” dizendo que foi essa própria sociedade que permitiu sua queda. Na periferia imperial, a distinção entre esse tipo de desgarrado, um governador planetário legítimo ou senhor da guerra é extremamente tênue — e, para viajantes humanos, muitas vezes sem qualquer importância. O poder local é aceito na forma que se apresenta.
                    
                    Exemplo de Grupo Desgarrado – A Liga Pálida do Porto Aquila:
                    Enquanto o grande consórcio comercial de Askellon mantém um controle sufocante sobre o comércio nos asteroides que compõem o porto, a liga pálida atua pelo cinturão como uma das principais operações de contrabando da região. Formada por comerciantes fracassados e, às vezes, até por mercadores nobres que perderam sua fortuna em expedições catastróficas ou ataques piratas, é uma organização relativamente recente, mas em rápido crescimento. À medida que a Liga começa a traficar relíquias xenos e outros tesouros proibidos, ela fez inimigos entre outros grupos ilegítimos, como o comércio negro de Desoleum.
                    
                    Funções Recomendadas:
                    Assassino, Mercenário, Buscador.
                    `,
        pericias: {
            fixas: ["Conhecimento Comum (Submundo)", "Enganação", "Esquiva", "Furtividade"],
            escolhas: [
                ["Acrobacia", "Prestidigitação"],
            ],
        },
        talentos: {
            fixos: ["Treinamento com Armas (Corrente)"],
            escolhas:[
                ["Treinamento com Armas (Las)", "Treinamento com Armas (Projetil Sólido)"],
            ],
        },
        equipamentos: {
            fixos: ["Espada Corrente", "Injetor"],
            escolhas: [
                ["Pistola Automática", "Pistola Las"],
                ["Colete Corporal", "Colete Flak"],
                ["Obscura x2", "Estilhaço x2"]
            ],
        },
        bonus: "Desistir Jamais – o personagem utiliza seu bônus de Resistência + 2 para determinar fadiga.",
        aptidoes: {
            escolhas:[
                ["Sobrevivência", "Social"],
            ],
        }
    },
]
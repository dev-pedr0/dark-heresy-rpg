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
        id: "assassin",
        nome: "Assassino",
        imagem: "/roles/assassino.jpg",
        descricao: `Mesmo em um universo saturado de sangue e morte, existem aqueles que transformam o assassinato em uma forma sublime de arte. O assassino é esse tipo de ser, dedicando sua vida ao aperfeiçoamento das técnicas de matar, alcançando níveis mais elevados a cada vida que tira. Embora muitos que servem ao Imperador sejam proficientes em combate, os assassinos deleitam-se apenas no ato de matar e frequentemente pouco se importam com combates comuns. Impulsionados por uma sede doentia pelo sangue alheio ou por um desapego frio que os priva da humanidade, eles podem surgir de diversas formas, unidas apenas pelo desejo de entregar a morte da forma mais eficiente ou grandiosa possível. Inevitavelmente, são atraídos por organizações que veneram o assassinato tanto quanto eles ou que necessitam de assassinos artísticos. Muitos se juntam a cultos à morte, sociedades devotadas ao ato de matar. Outros podem ser recrutados por misteriosas organizações imperiais dedicadas à arte da morte sancionada. Em todos os casos, é o desejo de tirar vidas e desenvolver as habilidades para isso que define o assassino — uma jornada que termina apenas quando ele mesmo sucumbe à morte.
                    
                    Nessa função eles frequentemente não são apenas mestres em matar, mas também em se aproximar de sua presa e atacar sem aviso. Como predadores mortais, um assassino persegue sua presa antes de atacar, escolhendo o momento exato para causar o máximo de dano com a melhor chance de matar. Essas técnicas são resultado de suas habilidades em furtividade e infiltração, passando despercebido por sentinelas ou guardas e encontrando entradas em fortalezas aparentemente impenetráveis. Como fantasmas, surgem do nada para abater silenciosamente seus alvos antes de desaparecer novamente. Um assassino verdadeiramente mestre pode matar sem ser detectado, deixando apenas terror, confusão e um cadáver em seu rastro. Nessa função, ele pode é um excelente batedor ou combatentes leves, reunindo informações e espalhando discórdia entre seus inimigos enquanto seus companheiros cumprem a missão.
                    
                    Parte de suas habilidades se estende às artes do engano e do disfarce. Quando não pode se mover sem ser visto ou encontra uma barreira que não consegue ultrapassar, às vezes pode se esconder à vista de todos. Embora não seja o foco principal do papel, os melhores assassinos são camaleões habilidosos, mudando de aparência para se misturar ao ambiente e imitando seus inimigos para se esconder entre eles. Podem tornar-se mentirosos talentosos, aprendendo a imitar a fala e os modos de seus inimigos para infiltrar-se em suas fileiras sem ser notados. Esses métodos são formas excelentes de se aproximar do alvo, passar livremente por pontos de verificação de segurança e outras barreiras antes de atacar uma presa desprevenida e desaparecer na confusão sem ser detectado. Assassinos também são especialistas na aplicação de violência precisa, eliminando alvos específicos que, de outra forma, poderiam se considerar seguros. Seja de perto com lâminas e venenos, ou à distância com rifles de precisão e explosivos remotos, o assassino pode atingir o inimigo de forma rápida e súbita. Enquanto um acólito menos sutil pode ser forçado a usar grandes quantidades de munição ou saturar uma área com explosivos para eliminar um alvo, esses precisam de apenas um disparo ou uma estocada de lâmina para cumprir seu propósito. Esse talento para assassinato preciso é útil quando os danos colaterais devem ser mínimos ou quando apenas uma figura-chave precisa ser removida para esmagar uma rebelião ou culto. Além das habilidades de se mover sem ser visto, contornar sistemas de segurança e alcançar alvos difíceis, o assassino também é um excelente combatente de apoio. Ao lado de aliados mais pesadamente armados e blindados, ele pode oferecer suporte de longo alcance com disparos de precisão, ou se esgueirar pelas laterais para eliminar retardatários e inimigos feridos. Usando suas habilidades mortais, um assassino pode causar estragos nas condições certas e abrir caminho para que seus companheiros concluam seus objetivos. Isso pode incluir eliminar combatentes a quilômetros de distância com um único disparo, sendo a única evidência de sua presença as cabeças explodindo. Ou pode ser de perto e sangrento, com lâminas e pistolas, surgindo de repente para cortar gargantas e articulações expostas antes de retornar às sombras.
                    
                    Por baixo da máscara:
                    Assassinos geralmente veem a maioria dos problemas como solucionáveis por meio da aplicação precisa e letal de força, moldando corpo e mente para executar essa tarefa da melhor forma. Muitos se deleitam nessa aplicação e a buscam ativamente, ou a veem como um ato de devoção, parte de sua veneração ao Imperador. Os mundos do Império abrigam inúmeros cultos à morte, guildas de assassinos, ordens de matadores e outras instituições de treinamento nas artes do assassinato. Cercados por tanta morte e destruição, vivendo sob a sombra do perigo constante, algumas seitas reverenciam a morte como uma força da natureza, um deus vingativo ou um aliado caprichoso.
                    
                    Um personagem assassino pode ter origem em qualquer uma dessas fontes diversas — ou até ter aprendido suas habilidades sozinho, após longos anos difíceis vendendo seus talentos como mercenário. Aqueles nascidos em mundos-colmeia ou nas fábricas de um planeta forja geralmente preferem armas de fogo e métodos tecnológicos de matar. Os cultos desses mundos frequentemente defendem o treinamento com armamentos avançados e exóticos, como micro explosivos elaborados. Em contraste, os nascidos de um planeta selvagem preferem de meios mais primitivos. Mesmo que depois troquem uma espada metálica por uma espada de energia, sua tendência e talento para se aproximar e eliminar seus inimigos de perto normalmente é mantida. Viver nessas condições também confere um maior entendimento do ambiente natural, tornando esses assassinos hábeis no uso de venenos nativos de seu mundo de origem. Os de origem nobre representam outro aspecto da morte, utilizando não apenas os recursos dos mundos desenvolvidos, mas também explorando os caminhos sutis do conflito social, e dominando as artes do disfarce e da enganação. Também podem acessar recursos que seus aliados mais humildes não possuem. As casas nobres do Império às vezes cultivam esses homens e mulheres para manter assassinos de confiança ligados à família por laços de sangue. Muitos cultos à morte veneram santos Imperiais, e assassinos oriundos de planetas religiosos podem ver sua arte como parte essencial da vida devota, reforçando sua fé no Imperador a cada morte. Assassinos em todo o Império estão unidos por sua devoção comum à morte e ao assassinato — suas origens diversas pouco importam para os mortos que deixam para trás.

                    Exemplo de Assassino – Karris Tarydro:
                    Karris foi membro dos anjos de lâminas, uma das gangues mais mortais da colmeia desoleum. Ele os deixou em uma busca por sua irmã igualmente letal, Karinne, que desapareceu após o grupo que fazia parte, a linhagem, ter sido massacrada anos atrás. Sua busca o levou por toda a cidade. A cada nova morte durante essa jornada, ele se apaixonava mais pelo ato em si, até que isso se tornou tão importante quanto sua missão. Atualmente, viaja por todo o setor, matando conforme ordenado, mas sempre encontrando oportunidade para assassinatos pessoais em sua busca por Karinne.

                    Exemplo de Caminho Modelo (1):
                    Assassino focado em mortes com armas a distância e furtividade.
                    Recomendado aprimorar as seguintes características: Agilidade, Habilidade Balística, Percepção.
                    Recomendado aprimorar as seguintes perícias: Acrobacia, Atletismo, Segurança, Furtividade.
                    Talentos Recomendados: Anjo da Morte, Tiro Secundário, Treinamento em Arma Exótica, Olhar Vingativo, Pontaria Precisa, Tiro Potente, Sem Ter Onde Se Esconder, Assassino Preciso, Seleção de Alvo, Treinamento com Armas (Las, Projétil Sólido).

                    Exemplo de Caminho Modelo (2):
                    Assassino focado em mortes com armas corpo a corpo e uso de venenos.
                    Recomendado aprimorar as seguintes características: Inteligência, Força, Habilidade de Combate.
                    Recomendado aprimorar as seguintes perícias: Conhecimento Escolástico (Química), Medicina, Negócio (Química), Negócio (Morticador).
                    Talentos Recomendados: Movimento Assassino, Mestre da Lâmina, Luta às Cegas, Anjo da Morte, Ataque Certeiro, Ataque Inescapável, Assassino Preciso, Especialista Desarmado, Treinamento com Armas (Arcaica).
                    `,
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
        id: "chirurgion",
        nome: "Cirurgião",
        imagem: "/roles/cirurgiao.jpg",
        descricao: `Os segredos da carne são conhecimentos cuidadosamente guardados dentro do Império. Assim como o adeptus mechanicus protegem zelosamente os ritos e rituais que regem sua tecnologia, outros também acumulam conhecimento sobre a forma humana. Cirurgiões foram conduzidos por esses caminhos ocultos, descascando a pele da ciência biológica para contemplar seus órgãos crus, úmidos e pulsantes. Eles veem a compreensão da forma abençoada do Homem — e de outros seres biológicos — como fundamental para a vida, seja para preservá-la ou controlá-la, podendo tornar-se obcecados em aperfeiçoar sua compreensão sobre tais assuntos.
                    
                    Alguns podem vir das fileiras do adeptus mechanicus biologis, outros servem como médicos de campo da guarda imperial ou como irmãs da ordem hospitaleira do adepta sororitas. Alguns podem ter atuado como hab-docs sem guilda, xamãs-curandeiros de mundos selvagens ou médicos pessoais de governantes. Suas habilidades os colocam numa posição de grande poder, dotados do talento de curar ou ferir, conforme seus próprios caprichos ou os de seus senhores. Assim, um bom cirurgião sempre encontra espaço como torturador e interrogador, sua habilidade de causar dor sendo uma mercadoria vital na hierarquia da sociedade imperial.
                    
                    Mais do que um talento para a tortura ou uma habilidade para consertar corpos mutilados, o cirurgião é definido por sua sede de conhecimento e impulso para a experimentação — muitas vezes às custas de seus pacientes e de seu bem-estar. É uma obsessão que pode levar a grandes descobertas e triunfos, mas também à criação de abominações que jamais deveriam ter existido.
                    
                    A ciência do corpo e da mente é envolta em mistério dentro do Império, segredo reservado a poucos. Como um acólito, o cirurgião ganha liberdade para praticar sua arte e não encontra escassez de sujeitos — seja para curar, seja para ferir.
                    
                    Entre os principais dons do cirurgião está a capacidade de reparar carne ferida, ossos quebrados e mentes distorcidas, seja substituindo-os por enxertos e aumentos, seja por meio de cirurgias complexas. Enquanto um soldado de campo pode conhecer o básico de cauterização ou de como estancar um sangramento, o cirurgião transcende esses métodos, com devoção e habilidades dedicadas à preservação e à cura. Em suas mãos, a carne pode ser melhor do que era antes. O que o cirurgião faz muitas vezes não é apenas medicina, mas arte — manipulando a carne em novas e superiores configurações.
                    
                    Curandeiros existem em todos os mundos, embora sua forma e capacidade variem enormemente conforme fatores sociais e tabus locais. Os biologis do adeptus mechanicus abrigam cirurgiões especializados, que detêm os segredos da forma humana. Lá, aprendem a mecânica da carne e como emulá-la com tecnologia abençoada — embora alguns possam hereticamente tentar aprimorá-la quando possível. A Guarda Imperial talvez tenha os maiores números de cirurgiões, simplesmente pelo tamanho de seus exércitos espalhados pela galáxia, com cada regimento contendo muitos médicos de campo. Com o talento para curar vem também o talento para ferir, e os Inquisidores frequentemente os requisitam e suas habilidades para extrair a verdade de seus prisioneiros. Muitos Inquisidores têm uma habilidade bruta para interrogar, trocando dor por verdade. O cirurgião, contudo, pode manter um sujeito vivo quase indefinidamente, em dor constante e excruciante.
                    
                    Eles não apenas curam feridos ou interrogam prisioneiros; também podem ser intelectuais e pesquisadores, mergulhando em segredos profundos ou preservando saberes antigos. Aqueles que operam fora dos limites do culto a máquina devem proceder com cautela, pois o mechanicum tem pouca paciência com quem se aventura nos mistérios da ciência. Isso geralmente significa que devem conduzir suas pesquisas em segredo, escondidos dos olhos do Império, protegidos por seu serviço a um Inquisidor.

                    Por baixo da máscara:
                    O adeptus mechanicus é uma das fontes de onde pode vir um cirurgião, arrancando-o de sua criação para servir ao Omnissiah e mergulhar nos segredos dos biologis. Isso é especialmente comum se ele vier de um mundo colmeia ou forja, trabalhando diariamente ao lado daqueles que juraram lealdade ao Deus-Máquina. Quando um cirurgião passa a servir um Inquisidor, a marca do culto a máquina geralmente já está firmemente impressa nele — apenas a sombra de sua vida anterior permanece, oculta sob membros aumentados e órgãos artificiais.
                    
                    Um personagem que aprende as habilidades de cura e tortura fora das rígidas estruturas do mechanicus costuma ser mais uma expressão do mundo que o criou. Cirurgiões de planetas religiosos dominam as artes da cura como um caminho divinamente inspirado, cuidando dos fiéis. Como a Inquisição, o ministorum também faz grande uso dessas pessoas como torturadores, embora por razões diferentes. Um cirurgião habilidoso pode ganhar fama como redentor, usando a dor não para extrair a verdade, mas para purificar a alma, cauterizando o pecado com precisão agonizante.
                    
                    Mesmo sem o uso de tecnologias avançadas, um cirurgião pode encontrar lugar na sociedade. Muitos xamãs de mundos selvagens, curandeiros tribais e doutores espirituais representam mentes dotadas. Embora seus métodos pareçam antiquados e seus meios primitivos, essas pessoas podem ainda realizar feitos maravilhosos com a carne humana — suas lâminas de pedra e poções fétidas tão eficazes quanto muitas tecnologias.
                    
                    Muitos desses também encontram lar na guarda imperial, como oficiais médicos dos regimentos recrutados em seus mundos, recebendo treinamento básico de campo de batalha e sendo então lançados no fogo da guerra para cuidar dos mutilados. Para os acólitos que desejam permanecer vivos em seu serviço ao Imperador, um cirurgião é um membro essencial e valorizado do grupo, independentemente de sua origem.

                    Exemplo de Cirurgião – Jol Pollux:
                    Tech-padre Pollux é um magus biologis em core theta há cinco décadas, dedicada desde a juventude aos mistérios da carne. Como muitos de seus colegas nesse mundo forja extremo, ela trabalhou na fronteira da tecno-heresia; no seu caso, investigando os limites do orgânico e não do tecnológico. A constante experimentação sobre os rigores da carne e os limites da vida fizeram dela também uma excelente médica — uma prática que frequentemente despreza, mas da qual seus colegas dependem cada vez mais.

                    Exemplo de Caminho Modelo (1):
                    Cirurgião focado em medicina de campo e resistência.
                    Recomendado aprimorar as seguintes características: Inteligência, Percepção, Resistência.
                    Recomendado aprimorar as seguintes perícias: Atenção, Medicina, Conhecimento Escolástico (Química), Intuição, Negócio (Química).
                    Talentos Recomendados: Robusto, Conhecimento Infundido, Intuição Precisa, Maestria (Medicina), Resistente (Venenos), Constituição Sólida, Arrancada, Cirurgião Superior.

                    Exemplo de Caminho Modelo (2):
                    Cirurgião focado em tortura e percepção.
                    Recomendado aprimorar as seguintes características: Inteligência, Força, Habilidade de Combate.
                    Recomendado aprimorar as seguintes perícias: Atletismo, Conhecimento Proibido (Heresia), Interrogatório, Intimidação, Medicina, Intuição.
                    Talentos Recomendados: Fúria de Batalha, Pistas das Multidões, Interrogatório Coordenado, Encobrir, Interrogatório Delicado, Frenesi, Especialista Desarmado.
                    `,
        talentosEscolhiveis: ["Resistente (escolha um)", "Derrubada"],
        aptidoes: {
            fixas: ["Sobrevivência", "Inteligência", "Conhecimento", "Força", "Resistência"],
        },
        bonus: "Curador Dedicado – ao falhar em um teste de Primeiros Socorros o personagem pode gastar um ponto de destino para ser bem-sucedido automaticamente com graus de sucesso iguais ao seu bônus de inteligência.",
    },
    {
        id: "desperado",
        nome: "Mercenário",
        imagem: "/roles/rufiao.jpg",
        descricao: `Todo mundo tem homens e mulheres que vivem nas margens da sociedade ou sobrevivem com base em suas habilidades com uma arma, vendendo seus talentos para quem puder pagar — sem fazer muitas perguntas. Mercenários são um grupo heterogêneo: escória, caçadores de recompensas, escravagistas, piratas e renegados — todos vivendo na fronteira da lei ou completamente à margem dela. Podem ser sedutores que usam charme canalha para aplicar seus golpes, ou brutamontes que só conhecem a linguagem da violência. A maioria são indivíduos solitários, leais apenas à melhor oferta do momento. Alguns transitam entre empregos semilegítimos como guarda-costas ou capangas até ações criminosas como roubo e assassinato. Aqueles que sobrevivem tempo suficiente tornam-se hábeis em detectar perigos, lidar com gente da mesma laia e saber a hora certa de fugir. Também podem se tornar pistoleiros talentosos, usando suas armas tanto para proteger suas vidas quanto para eliminar quem estiver em seu caminho. Mercenários são definidos por sua natureza egoísta e desprezo pela autoridade — escolhem o caminho do fora-da-lei se isso significar viver livres e garantir mais um dia com vida e lucro no bolso.
                    
                    Mercenários prosperam nos níveis mais duros e implacáveis da sociedade imperial, onde é preciso sobreviver com astúcia tanto quanto com armas. Enquanto a maioria dos cidadãos do Império nasce com um papel definido — seja nas fábricas tóxicas ou em rotinas mecânicas e entorpecentes —, o mercenário é alguém que escapou de seu destino social e busca algum grau de liberdade nas bordas da sociedade. Essa vida força o desenvolvimento de habilidades valiosas para acólitos, que muitas vezes precisam adentrar esses meios para investigar crimes, heresias ou capturar alvos escondidos nas sombras.
                    
                    Sem restrições legais, um mercenário pode fazer quase qualquer coisa: invadir prédios seguros, negociar mercadorias ilícitas, subornar autoridades ou acessar redes e contatos que só existem para quem conhece os caminhos da clandestinidade. Quando os acólitos operam à margem da lei — como tantas vezes acontece —, essas habilidades podem ser a diferença entre o fracasso e a infiltração bem-sucedida num covil criminoso.
                    
                    Fora das zonas “seguras” da sociedade imperial, esses são especialistas em sobreviver. Num mundo colmeia superpovoado, sabem onde encontrar água potável, quais fungos são comestíveis, ou que setores da subcolmeia devem ser evitados por risco de desabamento ou gangues. Em mundos fronteiriços e selvagens, um mercenário sabe bem quais cidades são hospitaleiras e quais atiram primeiro e perguntam depois. A habilidade mais preciosa que possuem é saber em quem confiar — e até onde confiar. Isso o torna valioso em interações sociais, especialmente quando engano e manipulação são necessários. Com essas habilidades, é capaz de transformar verdades inconvenientes em vantagens úteis.
                    
                    A sobrevivência para um mercenário está atrelada ao instinto e à ação rápida. Lutar sujo e reagir com presteza são essenciais. Diferente de um oficial da guarda imperial, que se preocupa com estratégias e táticas em larga escala, o mercenário tenta acabar com a luta o mais rápido possível — e sair vivo. Pode sacar e atirar em um inimigo desarmado se achar que é uma ameaça. Em zonas onde só um gatilho rápido e uma mente ainda mais ágil garantem a sobrevivência, essas características são fundamentais.
                    
                    Por baixo da máscara:
                    O Império está infestado de criminosos em todos os níveis, de nobres corruptos que usam leis para oprimir até miseráveis que se esfaqueiam por migalhas. Mercenários vagam entre esses mundos, transformando adversidade em oportunidade. Em mundos desenvolvidos, vivem nas sombras: entre gangues e bandidos, ganhando moedas onde der. São homens e mulheres perigosos, endurecidos por traições e pelo pior da natureza humana. Os que se destacam podem subir na hierarquia social pela força, astúcia e lábia — sempre acompanhados de pistolas fumegantes.
                    
                    Mercenários de mundos natais distintos desenvolvem habilidades diferentes. Aqueles nascidos no espaço ou vindo de mundos selvagens podem se tornar bandidos em territórios inóspitos, senhores do crime ou piratas estelares. Quando notados por um Inquisidor, podem redirecionar seus talentos para servir ao Imperador. Outros nascidos nobres são altamente engenhosos, usam influência e recursos herdados para alimentar seus esquemas ilícitos. Quando caem em desgraça, fogem para outros sistemas e às vezes são recrutados pela Inquisição — que pouco se importa com o passado, desde que provem sua utilidade.

                    Exemplo de Mercenário – Timo Sar’se:
                    Timo passou anos servindo na vigilância em Juno, fazendo cumprir as inúmeras leis da capital. Após investigar um assassinato, descobriu um carregamento de artefatos xenos contrabandeados — e logo percebeu o quanto poderiam valer. Fez um acordo que lhe rendeu mais do que ganharia em toda a vida, abandonou seu posto (mas não suas armas) e partiu do planeta para evitar a fúria de seus antigos colegas. Como contrabandista e agente de aquisição, lidou tanto com o comércio negro quanto com a nascente liga pálida, até tentar passar a perna na pessoa errada. Agora, como um acólito relutante, seus contatos no mercado negro e seu faro para atividades ilegais servem a um propósito maior.

                    Exemplo de Caminho Modelo (1):
                    Mercenário focado com combate com duas armas e sobrevivência.
                    Recomendado aprimorar as seguintes características: Agilidade, Habilidade Balística, Resistência.
                    Recomendado aprimorar as seguintes perícias: Acrobacia, Esquiva, Operação, Furtividade.
                    Talentos Recomendados: Ambidestria, Tiro Secundário, Alvo Difícil, Tiro em Movimento, De Pé, Reação Rápida, Maestria Com Duas Armas, Combater Com Duas Armas, Treinamento com Armas (qualquer a distância).

                    Exemplo de Caminho Modelo (2):
                    Mercenário focado em manipulação e furtividade.
                    Recomendado aprimorar as seguintes características: Agilidade, Socialização, Percepção.
                    Recomendado aprimorar as seguintes perícias: Atenção, Charme, Enganação, Investigação, Conhecimento Escolástico (Submundo), Prestidigitação, Furtividade.
                    Talentos Recomendados: Queda Leve, Pistas das Multidões, Vigilância Constante, Rede de Contatos, Encobrir, Um Rosto no Povo, Intuição Precisa, De Pé.
                    `,
        talentosEscolhiveis: ["Queda Leve", "Reação Rápida"],
        aptidoes: {
            fixas: ["Agilidade", "Habilidade Balística", "Defensiva", "Socialização", "Sutileza"],
        },
        bonus: "Correr e Atirar – uma vez por rodada, após realizar uma ação de movimento, o personagem pode realizar um Ataque Padrão com uma arma tipo Pistola como Ação Livre.",
    },
    {
        id: "hierophant",
        nome: "Hierofante",
        imagem: "/roles/hierofante.jpg",
        descricao: `O Culto ao Imperador existe em todo o Império. A glória do Mestre da Humanidade se manifesta nos ensinamentos do ministorum, nos antigos segredos do Deus-Máquina e em um milhão de outras fés — todas ligadas à veneração do abençoado Imperador. Hierofantes são aqueles dedicados ao Credo Imperial — como sacerdotes e confessores, clérigos e sábios, ou oradores e demagogos — propagando Sua palavra e impondo os preceitos da fé às multidões humanas. Como homens do Imperador, há um aspecto divino em todo hierofante — uma centelha de fervor convicto que os impulsiona contra as trevas e mantém viva a alma do Império, mesmo enquanto ele se fragmenta por dentro e por fora. Com fogo e justiça rápida, o ele se ergue com dez mil anos de fé às suas costas, pronto para destruir qualquer um que se oponha a ele e a seu deus. Ele é definido, acima de tudo, por sua certeza inabalável e seu relacionamento com sua divindade — este é seu escudo e sua espada contra os inimigos da humanidade. Onde outros sucumbem à dúvida e ao medo, o hierofante avança, com a palavra do Imperador em seus lábios e uma verdade inquebrantável em seu coração.
                    
                    Essa religião é o que une o Império e lhe dá propósito diante da corrupção e da agressão impiedosa dos xenos. O hierofante encarna essa fé e a leva consigo em seu serviço como acólito. O Imperador é adorado sob infinitos aspectos por toda a galáxia, e um devoto pode seguir qualquer uma das muitas vertentes do Credo Imperial. Mais do que palavras ou ações, o Credo é algo vivo — com o poder de inspirar, fortalecer a alma humana e protegê-la dos horrores do universo. É dever do hierofante cuidar das almas ao seu redor, mantê-las puras e protegidas da corrupção do Imaterium ou das mentiras insidiosas dos emissários alienígenas. Com frequência, são a única barreira contra o medo e a insanidade que aguardam os acólitos nas estrelas. Diante de inimigos cuja mera existência desafia a compreensão humana, só a fé os mantém vivos — e lhes dá resistência para continuar em seu dever sagrado. Assim, o hierofante torna-se um farol de luz para seus companheiros, portador da palavra do Imperador, que oferece graça mesmo nas horas mais sombrias.
                    
                    Assim como um psíquico ou um tech-padre têm seus usos, há inimigos contra os quais o hierofante é a arma ideal: seres que usam o warp como arma ou criaturas que se desfazem diante da luz flamejante da fé. Dessa forma o devoto é uma arma viva do Imperador, um anátema para tudo que vem do imaterium. Sua convicção pode queimar a carne de um demônio, fechar fendas entre os mundos e derrubar bruxas — entre outros milagres igualmente gloriosos. Sua fé também é escudo contra o medo semeado pelas raças xenos, que se alimentam do terror primordial. O Hierofante pode fortalecer a alma de um homem contra tais terrores e substituir o medo da morte por inspiração em nome do Imperador e da glória de servi-Lo. Como guia e doutrinador, ele é frequentemente um orador magistral, tecendo palavras e discursos em redes de influência que enredam todos à sua volta. Um Hierofante habilidoso pode mudar o humor de uma multidão com poucas frases bem escolhidas — ou levá-la ao assassinato em nome da fé. Anos de treinamento no ministorum (ou em outras instituições do Credo) lhe concedem um conhecimento profundo sobre a alma humana — e como dirigir a vontade de uma massa. Poucos cidadãos imperiais resistem a esse tipo de persuasão, especialmente vinda de um membro do adeptus ministorum. Algo profundo em suas almas desperta ao som do sermão do Imperador, plantado por anos de doutrinação e ensinamentos eclesiásticos.
                    
                    Hierofantes são muitas vezes essenciais ao lidar com outros membros da igreja, pois conhecem os métodos e modos de se comunicar — ou manipulá-los, como só quem serviu entre eles é capaz. Onde quer que os acólitos estejam, a sombra do ministorum nunca está longe — seus sacerdotes e clérigos entrelaçados na estrutura do Império, mantendo-o coeso pela fé do Credo Imperial.
                    
                    Por baixo da máscara:
                    A adoração ao Imperador assume muitas formas, e cada mundo O reverencia de forma diferente. Hierofantes representam essa diversidade no Império — desde os homens sagrados primitivos de mundos selvagens até os sacerdócios complexos de planetas religiosos. Como mensageiros da palavra do Imperador, existem para espalhar Sua fé. Desde que o Credo Imperial e sua veneração sejam sua motivação, o ministorum raramente se importa com a presença de crenças locais. Assim, um hierofante pode ter interpretações próprias e complexas do Credo, entrelaçadas aos antigos dogmas de seu mundo natal. O Imperador pode ser representado pelo sol e estrelas do planeta, e seus santos, por criaturas marinhas gigantescas ou vulcões em chamas. O Hierofante frequentemente carrega os símbolos de sua fé local — vestimentas, insígnias ou realiza rituais sagrados de seu povo. Enquanto sua fé vinda de mundo selvagem pode envolver fenômenos naturais e feras poderosas, a de um nascido em mundo-colmeia ou no vazio do espaço pode se traduzir no espírito da nave ou da cidade. Tais locais são tão antigos que seus habitantes frequentemente os veem como entidades vivas, deuses que os observam — e interpretam seus sons e tremores como sinais divinos. Quando o Culto Imperial se estabelece nesses mundos, essas superstições locais são absorvidas pelo Credo, e a mão do Imperador passa a ser vista por trás dessas entidades já presentes. Assim, um Hierofante desses locais pode enxergar o sagrado em qualquer cidade ou embarcação que visite, tratando-as como lugares santos e cuidando para não ofender seus “espíritos”. Embora estranho para quem nunca viveu assim, há sabedoria comum nesses ensinamentos — e é prudente ouvir o hierofante quando ele diz para não abrir certas portas ou respeitar a cor de um glifo que brilha. Tudo isso é sagrado para ele. E para o Hierofante, nada é mais importante que sua fé.

                    Exemplo de Hierofante – Eizeil Voz-dos-Céus:
                    Quando o missionarus galaxia pousou no mundo selvagem de rund, Eizeil foi a primeira de sua tribo a ter coragem de se aproximar do cometa ainda fumegante e das criaturas maravilhosas que dele emergiram. Em poucos meses, ela abandonou seu povo para espalhar a palavra do Pai Celeste por todo rund — seus olhos queimando como o sol do meio-dia com convicção inabalável. Agora, Eizeil serve ao Pai Celeste numa escala ainda maior — tão extasiada ao iluminar e pregar quanto ao queimar e destruir qualquer um que ameace seu novo deus.

                    Exemplo de Caminho Modelo (1):
                    Hierofante focado em resistência mental e física.
                    Recomendado aprimorar as seguintes características: Resistência, Habilidade em Combate, Vontade.
                    Recomendado aprimorar as seguintes perícias: Conhecimento Proibido (Demonologia), Conhecimento Proibido (Mutantes) Medicina, Bloqueio, Sobrevivência.
                    Talentos Recomendados: Fé de Adamante, Bastião da Vontade de Ferro, Contra-Ataque, Negar a Feitiçaria, Saturado, Imortal, Resistente (Poderes Psíquicos), Constituição Sólida, Mente Fortalecida, Resistência Verdadeira.

                    Exemplo de Caminho Modelo (2):
                    Hierofante focado em oratória e combate.
                    Recomendado aprimorar as seguintes características: Socialização, Força, Vontade.
                    Recomendado aprimorar as seguintes perícias: Comando, Intimidação, Linguística, Conhecimento Escolástico (Credo Imperial), Intuição.
                    Talentos Recomendados: Fúria de Batalha, Combater Multidões, Ataque Devastador, Frenesi, Coroa de Comando, Ódio (Cultos Hereges), Ataque Certeiro, Camaradagem (Adeptus Ministorum), Resistente (Medo), Resistente (Calor), Atropelamento Devastador, Treinamento com Armas (Incendiária).
                    `,
        talentosEscolhiveis: ["Trabalho em Equipe", "Ódio (escolha um)"],
        aptidoes: {
            fixas: ["Socialização", "Ofensiva", "Social", "Resistência", "Vontade"],
        },
        bonus: "Manipular as Massas – o personagem pode gastar um ponto de destino para ser automaticamente bem-sucedido em um teste de Charme, Comando ou Intimidação com uma quantidade de graus de sucesso igual ao seu bônus de Vontade.",
    },
    {
        id: "mystic",
        nome: "Místico",
        imagem: "/roles/mistico.jpg",
        descricao: `Milênios de evolução humana deram origem a gerações inteiras de psíquicos dentro do Império, almas dotadas com o talento de manipular poderes potentes, porém imprevisíveis. Místicos são aqueles que foram tocados de alguma forma pelo imaterium, ganhando certo controle sobre suas marés antinaturais e um vislumbre de como usá-las. Seja como psíquicos primaris, videntes primitivos do warp ou feiticeiros renegados, os místicos representam a conexão da humanidade com o mar das almas e os poderes e criaturas que nele habitam.
                    
                    Seus dons amaldiçoados fazem com que muitos vejam todas as coisas como interligadas. Mesmo o menor dos eventos pode ser interpretado como sinais do além, e a tecnologia como um apoio pouco confiável contra terrores invisíveis. Vislumbrar o que existe além do véu é enxergar a natureza frágil da realidade — e conhecer horrores que nenhum cidadão comum do Império poderia suportar. O uso do Warp pode oferecer salvação ao homem em seu momento de maior necessidade, uma arma contra seus inimigos ou um vislumbre do futuro que o guie. No entanto, como os antigos mares da Terra, ela é imprevisível, indomável e pode mudar num piscar de olhos. Esse é o perigo com o qual todos os místicos devem conviver: saber que, por mais poder que seus dons tragam e por mais prestígio que isso possa oferecer, no fim das contas, isso provavelmente os destruirá. Esse indivíduo pode ser a única verdadeira defesa da humanidade contra as entidades terríveis que aguardam do outro lado dessa brecha na realidade.
                    
                    Os psíquicos são uma constante dentro do Império: usados para se comunicar através do Imaterium, lutar guerras e vasculhar as mentes dos cidadãos. Os místicos compreendem a natureza desses poderes psíquicos melhor do que a maioria, possuindo eles mesmos tais dons ou alguma rara percepção dessas energias.
                    
                    Muitos Inquisidores são psíquicos ou empregam místicos como acólitos, usando seus poderes para vasculhar mentes em busca de informação. Esse entende que a galáxia não é apenas um aglomerado de estrelas e planetas, mas uma camada sobre um outro reino de energia mental, no qual as almas dos homens queimam como chamas vacilantes. Aqueles que compreendem isso podem aprender a ver essas energias — e eventualmente manipulá-las — até que a própria realidade se torne uma substância fluida e mutável, como uma névoa densa. A ajuda que um místico pode oferecer é limitada apenas pela força com que consegue manipular essas energias. Infelizmente, com grande poder vem um preço: esses usuários podem se tornar vítimas de seu próprio conhecimento proibido e poder arcano. Num instante, podem perder o controle e se tornar um portal aberto entre a realidade e o Imaterium, liberando energias desenfreadas, demônios selvagens — ou algo ainda pior. Na melhor das hipóteses, isso se manifesta como fenômenos psíquicos: vozes fantasmagóricas, espelhos se quebrando ou geada se espalhando incontrolavelmente ao seu redor. No pior cenário, pode significar possessão ou a destruição completa de tudo e todos ao redor. Naturalmente, isso deixa outros acólitos nervosos na presença de místicos, mesmo daqueles com total controle e histórico estável. É difícil ignorar a possibilidade de que um deles possa, mesmo sem querer, voltar seus poderes contra seus aliados.
                    
                    Apesar dos riscos, o valor de um místico é inegável — e vai além da defesa contra feitiçaria. Ele poder atuar como uma fonte de conhecimento oculto: seja sondando os pensamentos dos outros, testando suas almas em busca de corrupção ou buscando vislumbres do futuro, ele pode prover respostas quando meios normais falham. Como o tempo é um conceito fluido dentro do warp, um místico pode acessar eventos do passado distante ou vislumbrar acontecimentos futuros. Tais tentativas são perigosas, como todas as interações com essa dimensão. Mas o risco muitas vezes vale a recompensa — e muitos Inquisidores não hesitam em recorrer a esses métodos para derrotar seus inimigos.
                    
                    O preço de seus dons é que os místicos costumam ser mantidos à distância entre outros acólitos. É natural temer aquilo que não se entende, e psíquicos encarnam o desconhecido — com seu acesso a conhecimento proibido e sua habilidade de distorcer a realidade, muitas vezes de formas perturbadoras ou violentas. Poucos desejam passar tempo com alguém capaz de ler pensamentos ou dobrar a realidade, mesmo sendo um aliado do Imperador. Eles frequentemente emanam uma sensação incômoda inconsciente nos que estão ao redor. Como resultado, o caminho do místico geralmente é solitário — acompanhado apenas pelas vozes em sua mente e pela sombra crescente de sua perdição inevitável.
                    
                    Por baixo da máscara:
                    O dom psíquico é indiscriminado — um homem ou mulher pode desenvolver poderes psíquicos em qualquer parte do Império. Alguns veem isso como uma mutação, e supõem que áreas com maior incidência de mutantes gerem mais psíquicos. Na realidade, esse fenômeno segue os caprichos do destino ou de forças além da compreensão humana.
                    
                    Místicos são tratados de forma diferente dependendo da sociedade onde nascem: podem ser vistos como abominações e caçados até os limites da civilização, ou receber posição de destaque como indivíduos abençoados com o dom da visão. Eles sempre se destacam, mas mesmo que sejam tolerados — há poucos lugares no Império onde são realmente bem-vindos.
                    
                    Personagens Místicos geralmente se encaixam em dois grupos: psíquicos sancionados, treinados em Terra e autorizados a usar seus dons; psíquicos não sancionados, que vivem na clandestinidade. Os sancionados podem vir de diversas origens e servir na guarda imperial, atuar como astropatas ou conselheiros de governos. Mesmo em tais posições, sempre há alguém pronto para agir caso seus poderes saiam do controle. Já os não sancionados vivem em constante perigo — para si e para os outros. Aprendem com xamãs, bruxos ou tomos mal compreendidos, vivendo com o medo constante de serem descobertos. Em mundos fronteiriços ou selvagens, podem viver anos escondidos, mantendo-se seguros com reputações temíveis como feiticeiros sombrios. Apenas os mais fortes sobrevivem até a idade adulta, sua força de vontade suficiente para resistir à possessão demoníaca e manter a sanidade.

                    Exemplo de Místico – Eos Du, de Aquila-14:
                    Eos vivia entre os asteroides de porto aquila, trabalhando em um dos muitos postos de comércio espalhados pelo cinturão. Era fascinada por qualquer chama que encontrasse na estação. Dezenas de velas pingavam cera ao redor de sua barraca, oferecendo calor quando o frio inexplicável se espalhava ao redor. Ela descobriu que olhar fixamente para as chamas revelava segredos — pistas de eventos futuros. Assim, não foi surpresa quando estranhos bem-vestidos chegaram em órbita, liderados por alguém cujo rosto ela já havia visto incontáveis vezes entre as chamas. Levaram-na consigo, para garantir que o fogo do Imperador jamais se apague.

                    Exemplo de Caminho Modelo (1):
                    Místico focado em obter informações e visões.
                    Recomendado aprimorar as seguintes características: Socialização, Percepção, Vontade.
                    Recomendado aprimorar as seguintes perícias: Atenção, Charme, Conhecimento Proibido (Ocultismo), Conhecimento Proibido (Imaterium), Negócio (Vidência).
                    Talentos Recomendados: Luta às Cegas, Pistas das Multidões, Vigilância Constante, Flash de Intuição, Intuição Precisa, Sem Ter Onde Se Esconder.
                    Poderes Psíquicos Recomendados: Prevenir, Presságio, Pré Cognição, Pré Percepção, Percepção Imaterial.
    
                    Exemplo de Caminho Modelo (2):
                    Místico focado em poderes destrutivos e resistência mental.
                    Recomendado aprimorar as seguintes características: Agilidade, Resitência, Vontade.
                    Recomendado aprimorar as seguintes perícias: Atenção, Esquiva, Medicina, Senso Psíquico.
                    Talentos Recomendados: Vigilância Constante, Duro de Matar, Favorecido Pelo Imaterium, Resistente (Poderes Psíquicos), Mente Fortalecida, Trava do Imaterium.
                    Poderes Psíquicos Recomendados: Regeneração, Revigorar, Domo Telecinético, Escudo Telecinético.
                    `,
        talentosEscolhiveis: ["Resistente (Poderes Psíquicos)", "Sentido Psíquico"],
        aptidoes: {
            fixas: ["Defensiva", "Inteligência", "Conhecimento", "Percepção", "Vontade"],
        },
        bonus: "Encarar o Imaterium – o personagem começa com o Avanço de Elite Psíquico.",
    },
    {
        id: "sage",
        nome: "Sábio",
        imagem: "/roles/sabio.jpg",
        descricao: `Tamanha é a inimaginável profundidade de informações com as quais o Império lida que apenas acólitos especialmente treinados ou aprimorados para compreendê-las podem sequer esperar usá-las com algum grau de habilidade. Sábios são indivíduos talentosos conhecidos por muitos nomes, como autosábios, lexmecânicos e lógicos de cálculo. Eles são frequentemente membros do adeptus administratum ou do adeptus mechanicus, sendo responsáveis por armazenar e catalogar imensas quantidades de dados. Composto por milhões de mundos e bilhões de almas, o Império existe, de muitas formas, apenas nos pergaminhos amarelados das planilhas de escribas, tablets empoeirados empilhados em prateleiras esquecidas e criptas de dados gigantescas, maiores do que muitas cidades.
                    
                    Os sábios registram, armazenam e navegam pelas montanhas de dados que os setores acumulam todos os dias. Eles conseguem enxergar padrões que outros não veem, estabelecendo conexões para recuperar ou descobrir informações consideradas perdidas ou inacessíveis, e traduzi-las em conhecimento útil para os que estão ao seu redor. É um processo que exige grande força mental e habilidade, e frequentemente o auxílio de implantes como matrizes de cogitadores artificiais ou circuitos lógicos que oferecem raciocínio mais rápido e melhor retenção de conhecimento. Os sábios têm a capacidade de acessar milhares de anos de dados organizados para encontrar segredos esquecidos — ou fazer saltos lógicos para identificá-los quando permanecem elusivos.
                    
                    Conhecimento é poder, e um Sábio é um repositório de muita informação do Império, tendo passado sua vida peneirando montanhas de dados e rastreando os padrões que conectam as grandes organizações e setores. Enquanto o hierofante preocupa-se com os ensinamentos do Credo Imperial, e o místico busca respostas além do véu, o sábio sabe que a verdade já existe — só é preciso saber onde procurá-la. Poucos acólitos possuem uma mente tão afiada quanto a deles, capazes de processar enormes quantidades de dados e separar as gemas de verdade das torrentes de mentiras. Um sábio não apenas sabe ler e compreender fluxos intermináveis, mas também entende de onde vieram e aonde levam. O resultado dessas habilidades é, às vezes, a capacidade de usar a lógica para resolver enigmas que aparentemente não têm solução, decifrando uma língua alienígena ou prevendo o próximo movimento de uma organização inimiga.
                    
                    Para um Sábio, tudo é um quebra-cabeça, um código a ser decifrado e derrotado peça por peça. Ele torna-se um repositório de informação e uma fonte de conhecimento, usando sua astúcia e inteligência para guiar os instrumentos brutos daqueles mais focados no combate. Mesmo em meio ao conflito, pode ser encontrado direcionando o fogo e identificando fraquezas nos inimigos — provando que um pouco de conhecimento, aplicado no momento certo, pode ter consequências devastadoras. Agora o seu campo de batalha é a burocracia do administratum, dos governos planetários e das autoridades locais. Onde outros se perdem nos emaranhados administrativos, ele os atravessa e vai direto ao cerne das questões. Aliado ao poder da Inquisição, há poucas coisas que ele não possa conseguir dentro da estrutura de autoridade imperial — seja convocando reforços, desviando suprimentos ou até trancando cidades inteiras por meio da manipulação de agências planetárias.
                    
                    Os Sábios tendem a saber um pouco sobre tudo; mesmo que não tenham estudado profundamente determinado assunto, há boas chances de já terem se deparado com ele em alguma de suas pesquisas. Mesmo diante de um tema totalmente novo, eles processam a informação rapidamente ou engajam-se em pesquisas extensas com facilidade.
                    
                    A obsessão deles por dados e informação quase nunca se sacia. Sábios estão sempre em busca da próxima peça de sabedoria ou do próximo fato oculto para adicionar ao seu vasto arsenal de segredos. Esse impulso os faz vasculhar dados insignificantes e trivialidades inúteis, lendo e pesquisando incessantemente — frequentemente em detrimento da tarefa em mãos. A vastidão de conhecimento que mantêm em suas mentes também pode torná-los alheios a preocupações imediatas, confundindo passado e presente ou desviando conversas para temas e lugares desconhecidos. É uma espécie de enfermidade sem cura, acalmada apenas por um fluxo constante de nova informação e por uma sequência interminável de tarefas para ocupar suas mentes hiperativas.
                    
                    Por baixo da máscara:
                    
                    A informação está em toda parte, gravada pelos muitos mundos do Império nos movimentos e estruturas de suas sociedades e nos impressionantes bancos de dados do adeptus administratum. Sábios podem extrair dessa informação, sejam eles membros dessa organização ou de outro grande grupo do Império.
                    
                    Sábios do adeptus mechanicus em mundos-colmeia ou forja estão constantemente conectados ao fluxo de dados que percorre suas cidades — toneladas de pergaminhos ou mesmo fluxos energéticos de dados sem forma física. Enredados nessa teia de informações, existem apenas para aprender e alcançar as camadas mais profundas do saber imperial. Após atraírem a atenção de um Inquisidor, eles podem avançar para pastagens mais valiosas de conhecimento, e se forem mentalmente fortes o bastante, podem se aprofundar no poço infinito de segredos sobre o qual a Inquisição detém autoridade.
                    
                    Outros de origens diferentes desempenham funções distintas — tornando-se cronistas e guardiões do saber histórico de seus mundos. Um Sábio nascido no espaço pode ter absorvido tudo que há para saber sobre a classe da nave ou estação onde sua família vive, além de muitos conhecimentos sobre o movimento das estrelas. Outro de um mundo selvagem pode ser um contador de histórias ou bardo de seu povo, colecionando séculos de lendas, além de vasto conhecimento sobre plantas, animais e padrões climáticos locais. Aqueles de planetas religiosos provavelmente serviram como estudiosos do Credo Imperial, conhecendo profundamente o santo pelo qual seu mundo é famoso — a ponto de seu saber superar até o da hierarquia local do ministorum.
                    
                    Em todas essas formas, um sábio é o mais erudito de seu povo — conhecido, embora nem sempre respeitado, por seu dom obsessivo de analisar e extrair os dados intermináveis que definem o Império.

                    Exemplo de Sábio – Harlon Onnis:
                    Antes apenas um humilde escrivão da mobilização, Harlon passou toda a sua vida em laran 9k, trabalhando em várias das maiores convocações regimentais do setor. Dezenas de milhares de homens, tanques e veículos de apoio eram regularmente preparados para embarque e equipagem, ali ele registrava cada detalhe cuidadosamente, além de gravar o nome de cada regimento no grande arco por onde marchavam rumo às suas naves. Sua vida era imutável, até que um homem emergiu das sombras de seu minúsculo escritório, junto ao alto lorde da mobilização, exigindo informações que nenhum dos escribas seniores conseguia fornecer. A rápida memória de Harlon, bem como sua habilidade de sequenciar e extrair os dados exigidos pelo homem misterioso, logo encerraram seu tempo em Laran — e iniciaram uma vida mais emocionante do que ele jamais desejou.

                    Exemplo de Caminho Modelo (1):
                    Sábio focado em conhecimentos locais, lendas e mistérios.
                    Recomendado aprimorar as seguintes características: Agilidade, Inteligência, Socialização.
                    Recomendado aprimorar as seguintes perícias: Acrobacia, Conhecimento Comum (Setor Askellon), Conhecimento Comum (Império), Conhecimento Proibido (Lendas), Linguística (Gótico Alto), Linguística (Gótico Baixo), Conhecimento Escolástico (Heraldica), Conhecimento Escolástico (Lendas), Negócio (História), Negócio (Performance).
                    Talentos Recomendados: Saturado, Coroa de Comando, Conhecimento Infundido.

                    Exemplo de Caminho Modelo (2):
                    Sábio focado em espionagem e quebra de segurança.
                    Recomendado aprimorar as seguintes características: Agilidade, Inteligência, Percepção.
                    Recomendado aprimorar as seguintes perícias: Lógica, Conhecimento Escolástico (Criptologia), Segurança, Furtividade, Negócio (Criptografia).
                    Talentos Recomendados: Bastião da Vontade de Ferro, Rede de Contatos, Encobrir, Um Rosto no Povo, Resistente (Poderes Psíquicos), Mente Fortalecida.
                    `,
        talentosEscolhiveis: ["Ambidestria", "Pistas das Multidões"],
        aptidoes: {
            fixas: ["Inteligência", "Conhecimento", "Percepção", "Tecnologia", "Vontade"],
        },
        bonus: "Busca por Conhecimento – o personagem pode gastar pontos de destino para ser automaticamente bem-sucedido em testes de Lógica ou de qualquer tipo de conhecimento com um número de graus de sucesso igual ao seu bônus de Inteligência.",
    },
    {
        id: "seeker",
        nome: "Buscador",
        imagem: "/roles/buscador.jpg",
        descricao: `Um acólito que trilha o caminho do buscador é movido pela caçada, incansável em suas investigações. Onde outros recorrem à violência fácil ou desistem da perseguição, ele vê sinais e pistas — seja de um indivíduo fugindo da justiça Imperial ou de um segredo oculto por mentiras. O buscador pode se tornar obcecado pelo desconhecido, incapaz de descansar até resolver o enigma ou capturar seu alvo. Naturalmente um detetive e interrogador, ele descobre verdades ocultas nas estruturas labirínticas do Império, encontrando pistas onde outros só veem becos sem saída. Essa obsessão pelos detalhes o define, levando-o constantemente à próxima verdade, à próxima mentira desfeita, à próxima presa capturada.
                    
                    Para que um Inquisidor elimine os inimigos da Humanidade, primeiro precisa encontrá-los. O buscador é especialista nisso, rastreando verdades ocultas e desvendando segredos. Caçador experiente, aprende os padrões e fraquezas de seu alvo, desde os pináculos de uma cidade-colmeia decadente até instalações orbitais antigas. Sua capacidade de adaptação o torna um excelente guia e batedor, liderando seu grupo por terrenos hostis ou ambientes alienígenas, confiando em seus instintos. Costuma ser o primeiro a detectar emboscadas ou perceber ameaças iminentes, seja em selvas, onde age como rastreador e caçador, ou em zonas urbanas, onde se torna investigador e agente inquisitorial. Mas essa motivação pode ser tanto bênção quanto maldição. Sua obsessão pode levá-lo a investigar perigos além de sua capacidade, mergulhando em ruínas antigas ou mundos esquecidos que abrigam horrores inomináveis. Onde cidadãos sensatos evitam tais lugares, o buscador segue até o fim da trilha — sua busca pela verdade o conduz ao risco constante. Sobreviventes desses encontros muitas vezes são notados pela Inquisição.
                    
                    Por baixo da máscara:
                    Onde há criminosos, há quem os cace. Seja como miliciano em um bloco habitacional de mundo-colmeia ou caçador em um mundo selvagem, o buscador tem papel vital na sociedade Imperial. Aqueles de origem nobre podem usar suas conexões para operar de forma mais sutil, dirigindo forças sob seu comando para manter a ordem. Outros de origem humilde assumem funções mais diretas, patrulhando e investigando pessoalmente. Em mundos pouco povoados, como planetas selvagens ou instalações no espaço, o buscador conta apenas com seus próprios recursos, tornando-se resiliente, conhecedor do ambiente e hábil em sobrevivência. Alguns atuam como exploradores em naves de mercadores nobres ou frotas do mechanicum explorator, frequentemente escapando por pouco após descobertas perigosas. Outros se tornam batedores da guarda imperial ou rastreadores de bruxos no adeptus astra telepathica — todos incansáveis na busca, investigação e perseguição.

                    Exemplo de Buscador – Fari Ge’na Tam:
                    Em desoleum, onde juramentos são sagrados, abandonar dívidas ou adulterar peça-promessa é um dos crimes mais severos. Os “sem juramento” devem ser encontrados, e especialistas como Fari, fazem isso. Uma vez designada, ela era incansável, perseguindo seus alvos pelos níveis mais baixos ou pelos ermos. Seu trabalho para destruir uma seita de falsificação de peças-promessa atraiu aliados que queriam impedir que um culto fora do mundo se infiltrasse na cidade. Impressionando o líder desses aliados (que pagou sua dívida), Fari deixou desoleum para caçar presas ainda mais perigosas.

                    Exemplo de Caminho Modelo (1):
                    Buscador focado em investigação e interpretação de pistas.
                    Recomendado aprimorar as seguintes características: Agilidade, Habilidade Balística, Percepção.
                    Recomendado aprimorar as seguintes perícias: Atenção, Esquiva, Navegação (Superfície), Furtividade, Sobrevivência.
                    Talentos Recomendados: Queda Leve, Vigilância Constante, Alvo Difícil, Tiro em Movimento, Saturado, Intuição Precisa, Pontaria Precisa, Sem Ter Onde Se Esconder, Reação Rápida, Resistente (Medo), Recarga Rápida, Arrancada.

                    Exemplo de Caminho Modelo (2):
                    Buscador focado em interrogatório e interpretação de pessoas.
                    Recomendado aprimorar as seguintes características: Socialização, Inteligência, Percepção.
                    Recomendado aprimorar as seguintes perícias: Atenção, Charme, Enganação, Investigação, Linguística (Gótico Alto), Intuição.
                    Talentos Recomendados: Pistas das Multidões, Encobrir, Rede de Contatos, Um Rosto no Povo, Flash de Intuição, Conhecimento Infundido, Saturado, Intuição Precisa, Resistente (Poderes Psíquicos).
                    `,
        talentosEscolhiveis: ["Intuição Precisa", "Desarmar"],
        aptidoes: {
            fixas: ["Inteligência", "Socialização", "Percepção", "Tecnologia", "Social"],
        },
        bonus: "Nada me Escapa – o personagem pode gastar pontos de destino para ser automaticamente bem-sucedido em testes de Atenção ou Investigação com uma quantidade de graus de sucesso igual ao seu bônus de Percepção.",
    },
    {
        id: "warrior",
        nome: "Guerreiro",
        imagem: "/roles/guerreiro.jpg",
        descricao: `A única constante da vida no 41º Milênio é a guerra. Xenos vorazes e poderes hostis sitiam o Império por todos os lados, e toda a indústria é voltada para o apoio ao combate armado. Um guerreiro é o produto desse conflito constante, vindo das linhas de frente ou de mundos devastados pela violência. Pode ser um membro da astra militarum marcado por anos em um campo de batalha alienígena amaldiçoado, um arbitro endurecido pelas ruas brutais de seu mundo natal, ou um membro de gangue sobrevivendo no submundo de uma cidade. Ele se acostumou à visão de ferimentos sangrentos e ao estalo de tiros. Para o guerreiro, a vida é conflito, e a maioria das soluções se encontra na aplicação direta e brutal da força — geralmente pelas suas próprias mãos. Em todos os casos, ele é um combatente habilidoso com profundo entendimento da natureza da batalha. Também é um sobrevivente, tendo vivido o suficiente para aprender a escapar até das situações mais violentas. Um guerreiro tem talento para o combate, sendo esse seu meio mais eficaz de resolver problemas. Ele deixa o campo de batalha ferido, mas vivo — seus inimigos jazendo em poças de sangue. Como poucos alvos de investigações inquisitoriais evitam confrontos violentos, ele é um acólito inestimável, ainda que raramente possa garantir a sobrevivência de alguém além de si mesmo.
                    
                    Um Inquisidor sempre precisa de força bruta e soldados para impor suas decisões ou proteger sua vida — e qualquer um que ofereça sua arma em serviço nunca ficará sem trabalho. O guerreiro é a lâmina afiada de qualquer encontro de combate, usando habilidade e experiência para eliminar inimigos em uma tempestade de tiros. Um bom combatente também entende de guerra e pode liderar outros em batalha, agindo como comandante e oferecendo liderança tática. Quando decisões difíceis devem ser tomadas — daquelas que custam vidas — é o guerreiro que pode fazê-las. Nesse papel, um Inquisidor pode até se apoiar nele, confiando seus anos de experiência com táticas de combate de unidades pequenas ou domínio de campo. O guerreiro costuma ser um piloto, artilheiro e condutor talentoso, treinado com as armas mais mortais e as máquinas mais potentes do Império. Seja uma nave espacial, veículos de gravidade ou andadores, é provável que o ele saiba como funcionam e como explorar ao máximo seus limites. Mesmo ao pilotar um veículo desconhecido, seus reflexos apurados e confiança natural o tornam hábil no controle de qualquer máquina. Um veterano da guarda imperial pode operar armas pesadas, dirigir tanques de batalha ou disparar peças de artilharia autopropulsadas. Um membro de gangue de mundo-colmeia pode dirigir ou modificar veículos industriais e provavelmente tem experiência com armas pequenas improvisadas e explosivos caseiros. Já um combatente de mundo selvagem pode ter acesso apenas a armas primitivas, mas os princípios da violência são universais — e ele é tão letal quanto qualquer outro.
                    
                    Tendo encarado muitos inimigos cara a cara, um guerreiro também desenvolve um bom julgamento de caráter e comportamento. É quem percebe enganações por olhares desviados ou dedos nervosos no gatilho, e consegue distinguir se um inimigo vai recuar ou resistir. ele vive pela força das armas — e geralmente reconhece outros que também vivem pela violência, mesmo disfarçados. Esse julgamento pode parecer superficial, mas ele vive ou morre em segundos — decisões rápidas moldadas por inúmeras batalhas. Ele também está acostumado à morte. Ninguém sai da astra militarum, do adeptus arbites ou das gangues de cidades sem ver dezenas de companheiros caírem — ou sem pôr muitos inimigos na cova. Ao contrário de um assassino, matar não é uma arte ou expressão de devoção. É uma necessidade para garantir a própria sobrevivência. Quando vê seus inimigos tombarem em jorros de sangue, a única satisfação do guerreiro é saber que sobreviveu para lutar mais um dia.
                    
                    Por baixo da máscara:
                    Cada mundo do Império possui seus próprios tipos de conflito — de duelos pessoais e guerras de gangue em mundos civilizados a batalhas colossais entre exércitos. Um guerreiro é moldado tanto pelo ambiente em que luta quanto por seus talentos e características pessoais. Ao atuar como soldado ou arbitro, ele traz consigo habilidades especializadas — que influenciam seu estilo de luta e sua doutrina de combate, permanecendo com ele apesar de qualquer treinamento posterior. Habitantes de mundos selvagens aprendem a lutar como tribais ou saqueadores nômades. Preferem armas corpo a corpo pela confiabilidade e, às vezes, por questões de honra. Valorizam força e resistência física em vez de astúcia, vindo de sociedades onde os fracos são esmagados e os fortes sobrevivem. Mesmo quando adquirem tecnologia avançada, como armas de energia ou armaduras modernas, geralmente mantêm consigo uma arma de seu mundo natal — um machado coberto de sangue ou um porrete encharcado de tripas — sempre sua forma preferida de matar. Guerreiros de mundos-colmeia e planetas forja são, em contraste, mestres da tecnologia. Os primeiros geralmente se destacam em combate a curta distância, moldados pela vida em túneis apertados. Os segundos tendem a substituir partes do corpo com implantes, seguindo os ensinamentos do Deus-Máquina — trocando membros frágeis por aço e engrenagens. Às vezes, substituem o braço por um rifle las ou bolter, garantindo acesso permanente à arma. Guerreiros nascidos em estações espaciais compartilham essa familiaridade com tecnologia, mas também dominam o combate em gravidade zero, tornando-se peritos em abordagens e lutas espaciais. Os efeitos da gravidade instável são menos sentidos por eles, habituados a viver em condições artificiais. Podem parecer franzinos em comparação a um brutamontes de mundo selvagem, mas, como todos os guerreiros, são definidos pela violência com que vivem — e impõem aos outros.

                    Exemplo de Guerreiro – Karn Weslin:
                    Karn conseguiu sobreviver — e até prosperar — em uma das horríveis subcidades sob Vesuna Regis, em Juno, reunindo um poderoso bando de mutantes e escória através de suas habilidades marciais nas arenas de sangue. Sua fama cresceu, e um senhor da guerra rival emboscou seu assentamento para eliminar a ameaça. Karn mal sobreviveu e jurou vingança. Em sua busca, encontrou um grupo de forasteiros e firmou um acordo: ajudaria em sua missão por uma relíquia tecnológica, e eles o ajudariam a destruir seu inimigo. Com ambas as tarefas cumpridas, Karn não viu motivo para ficar — e seguiu sua nova equipe rumo ao sol, contra inimigos bem piores que qualquer mutante comum.

                    Exemplo de Caminho Modelo (1):
                    Guerreiro focado em combate corpo a corpo.
                    Recomendado aprimorar as seguintes características: Habilidade de Combate, Força, Vontade.
                    Recomendado aprimorar as seguintes perícias: Atletismo, Esquiva, Bloqueio, Interrogatório.
                    Talentos Recomendados: Mestre da Lâmina, Contra-Ataque, Golpe Esmagador, Negar a Feitiçaria, Ataque Certeiro, Mandíbula de Ferro, Constituição Sólida, Ataque Veloz, Resistência Verdadeira, Treinamento com Armas (Arcaica).

                    Exemplo de Caminho Modelo (2):
                    Guerreiro focado em inventividade e uso de tecnologia.
                    Recomendado aprimorar as seguintes características: Habilidade de Combate, Habilidade Balística, Inteligência.
                    Recomendado aprimorar as seguintes perícias: Esquiva, Operação (Superfície), Uso Tecnológico, Negócio (Armas, Tecnologia).
                    Talentos Recomendados: Mestre de Armaduras, Trabalho em Equipe, Tiro Potente, Sem Ter Onde Se Esconder, Reação Rápida, Talento Técnico, Tecnólogo de Armas, Treinamento com Armas (Escolha Um).
                    `,
        talentosEscolhiveis: ["Mandíbula de Ferro", "Recarga Rápida"],
        aptidoes: {
            fixas: ["Habilidade Balística", "Defensiva", "Ofensiva", "Força", "Habilidade de Combate"],
        },
        bonus: "Expert em Violência – após um ataque bem-sucedido, mas antes de determinar número de acertos, o personagem pode gastar um ponto de destino para substituir os graus de sucesso atingidos por graus de sucesso iguais ao bônus de Habilidade de Combate (para ataques corpo a corpo) ou ao bônus de Habilidade Balística (para ataques a distância).",
    },
];
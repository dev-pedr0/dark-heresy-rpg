type Equipamento = {
    nome: string;
    peso: string;
    Quantidade?: number; 
    disponibilidade: string;
    descricao?: string;
};

export const EQUIPAMENTOS: Equipamento[] =[
    {
        nome: "Mochila",
        peso: "2kg",
        disponibilidade: "AB",
        descricao: "Esses itens de transporte pessoal podem variar de simples sacolas de pano grosso a dispositivos elaborados que se ajustam ao corpo com estruturas internas para maior conforto. Todos permitem ao usuário carregar cerca de 30 kg adicionais, mas retirar um objeto da mochila exige uma Ação Completa. Vale notar que apenas uma mochila ou colete de combate pode ser usada por vez.",
    },
    {
        nome: "Manto Camaleônico",
        peso: "0.5kg",
        disponibilidade: "RA",
        descricao: "O material de camaleônico é composto por fibras miméticas que adaptam a coloração do usuário ao ambiente, sendo o traje preferido de atiradores furtivos. O usuário recebe +20 em testes de furtividade. Se permanecer imóvel durante o seu turno, testes de habilidade balística feitos para atingi-lo sofrem –30 de penalidade até o início de seu próximo turno.",
    },
    {
        nome: "Relógio",
        peso: "0kg",
        disponibilidade: "FR",
        descricao: "Relógios são pequenos dispositivos de medição de tempo, essenciais para que os acólitos possam cronometrar suas ações com precisão. Versões básicas apenas indicam a hora local e exigem ajuste manual, enquanto modelos mais sofisticados podem se sincronizar com sistemas de dados externos para garantir máxima exatidão temporal.",
    },
    {
        nome: "Roupas",
        peso: "2kg",
        disponibilidade: "AB",
        descricao: "As vestimentas no Império variam imensamente — algumas são projetadas apenas para proteção básica, sem qualquer preocupação estética, enquanto outras existem unicamente por motivos ornamentais, ignorando fatores como ambiente ou praticidade. Para muitos, o estilo de vestir é determinado ao nascer ou imposto por doutrinas fabris. Outros adotam o visual de sua gangue, seita, casa ou outra afiliação. Roupas simples e comuns ao ambiente local devem ser fáceis de adquirir. Já trajes mais elaborados, seja por indicarem status elevado ou por terem função especializada, devem ser mais difíceis de encontrar.",
    },
    {
        nome: "Colete Utilitário",
        peso: "2kg",
        disponibilidade: "ES",
        descricao: "Embora esse colete externo não ofereça proteção adicional, ele é equipado com diversos bolsos e tiras para manter carregadores extras, pistolas e granadas sempre ao alcance. Os estilos mais comuns incluem pochetes de cintura, coldres, bandoleiras e coletes táticos, capazes de comportar até 15 kg com conforto. Itens guardados no colete de combate podem ser sacados como uma Ação Livre durante o turno do personagem.",
    },
    {
        nome: "Coldre Oculto",
        peso: "1kg",
        disponibilidade: "PD",
        descricao: "Esses coldres furtivos são usados sob roupas largas ou camadas externas e podem ocultar pistolas pequenas. Tentativas de detectar a arma sofrem uma penalidade de –20 nos testes apropriados. No entanto, sacar a arma leva mais tempo: ações de Preparar para essa arma se tornam uma Ação Completa em vez de uma Ação Simples (ou uma Ação Simples em vez de Ação Livre, se aplicável)."
    },
    {
        nome: "Fone Redutor de Ruído",
        peso: "0kg",
        disponibilidade: "MR",
        descricao: "Cada um desses pequenos dispositivos auriculares é projetado para reduzir automaticamente ruídos de alta intensidade, como explosões ou armas sônicas. Ao detectar sons excessivamente altos, o dispositivo os amortece até um nível tolerável, protegendo o usuário. Personagens que estiverem usando este acessório recebem +20 em testes de Resistência contra efeitos sonoros ou contra os efeitos auditivos de armas com a qualidade Concussiva."
    },
    {
        nome: "Colar Explosivo",
        peso: "3kg",
        disponibilidade: "ES",
        descricao: "Esses colares explosivos são usados para incentivar legionários penais a lutarem com fervor e 'expurgarem seus pecados diante do Imperador', além de manter prisioneiros capturados sob controle. Cada colar é pesado e metálico, e acompanha um controle remoto com alcance típico de até 1 km. O controle pode ser usado para liberar ou detonar o colar. Se o colar ficar fora do alcance do controle por mais de 5 minutos, ele explode automaticamente. Quando ativado, o colar explode na altura do pescoço, decapitando instantaneamente o usuário. Essa explosão também conta como se uma granada de fragmentação tivesse sido detonada no local. Remover um colar desses sem o controle remoto exige um Teste de Uso Tecnológico Difícil (–20). Se o personagem falhar por dois ou mais graus de falha, o colar explode imediatamente."
    },
    {
        nome: "Filtro de Ar",
        peso: "1kg",
        disponibilidade: "ES",
        descricao: "Esses dispositivos armazenam e reciclam ar respirável por meio de uma máscara conectada a um tanque externo, tornando o usuário imune a atmosferas tóxicas e permitindo inclusive a sobrevivência debaixo d'água. O cilindro de ar tem duração aproximada de uma hora e, após esse tempo, deve ser substituído, o que exige uma Ação Completa. Modelos de boa qualidade duram duas horas, enquanto versões de baixa qualidade requerem duas Ações Completas para trocar o cilindro. Os cilindros de reposição possuem disponibilidade escassa (ES)."       
    },
    {
        nome: "Filtros Nasais",
        peso: "0kg",
        disponibilidade: "CM",
        descricao: "Usados em cada narina, os tampões de filtração bloqueiam a maioria dos poluentes e gases perigosos. Um personagem usando esses tampões recebe um bônus de +20 em qualquer teste de Resistência feito para resistir aos efeitos de gases nocivos. Modelos de boa manufatura concedem um bônus adicional de +10, enquanto os de baixa qualidade devem ser substituídos após cinco horas de uso, pois o filtro fica obstruído e inutilizável.",
    },
    {
        nome: "Lentes de Visão Noturna",
        peso: "0.5kg",
        disponibilidade: "ES",
        descricao: "Esses dispositivos podem ser usados como lentes de córnea ou como óculos externos, e amplificam qualquer luz de baixo nível, permitindo que o usuário enxergue como se estivesse em condições normais de iluminação. Personagens que os utilizam recebem o traço Visão no Escuridão. Modelos de boa manufatura também reduzem os efeitos de granadas de photon de lzu, tornando o usuário imune a seus efeitos."
    },
    {
        nome: "Máscara de Gás",
        peso: "0.5kg",
        disponibilidade: "PD",
        descricao: "Uma máscara de respiração simples que cobre o nariz e a boca ou o rosto inteiro, oferece muito mais proteção do que os plugs filtrantes. Um personagem usando um respirador ganha um bônus de +30 em testes de Resistência para resistir aos efeitos de gases e pode refazer o teste se falhar. Modelos de boa qualidade adicionam mais +10 de bônus, enquanto modelos de baixa qualidade devem ser substituídos após 10 horas de uso, pois o filtro fica entupido e inutilizável.",
    },
    {
        nome: "Óculos de Visão Noturna",
        peso: "0.5kg",
        disponibilidade: "ES",
        descricao: "Esses dispositivos podem ser usados como lentes de córnea ou como óculos externos, e amplificam qualquer luz de baixo nível, permitindo que o usuário enxergue como se estivesse em condições normais de iluminação. Personagens que os utilizam recebem o traço Visão no Escuridão. Modelos de boa manufatura também reduzem os efeitos de granadas de photon de lzu, tornando o usuário imune a seus efeitos."
    },
    {
        nome: "Redutor de Recuo",
        peso: "0.5kg",
        disponibilidade: "RA",
        descricao: "Esta pesada manopla utiliza placas interligadas com fios de memória que enrijecem em uma empunhadura protetora, absorvendo o recuo de armas manuais. Um personagem usando uma luva de recuo pode disparar uma arma Básica com uma só mão sem sofrer a penalidade normal de –20, e pode empunhar armas de pistola que exigiriam duas mãos com apenas uma mão, sem penalidade. Vale lembrar que o treinamento especializado com a arma ainda é necessário para usá-la corretamente; caso contrário, aplica-se a penalidade de -20 por uso sem treinamento."
    },
    {
        nome: "Respirador",
        peso: "0.5kg",
        disponibilidade: "PD",
        descricao: "Uma máscara de respiração simples que cobre o nariz e a boca ou o rosto inteiro, oferece muito mais proteção do que os plugs filtrantes. Um personagem usando um respirador ganha um bônus de +30 em testes de Resistência para resistir aos efeitos de gases e pode refazer o teste se falhar. Modelos de boa qualidade adicionam mais +10 de bônus, enquanto modelos de baixa qualidade devem ser substituídos após 10 horas de uso, pois o filtro fica entupido e inutilizável."
    },
    {
        nome: "Roupa Invisível",
        peso: "2kg",
        disponibilidade: "MR",
        descricao: "A roupa invisível é uma roupa de corpo inteiro bio-reativa com uma superfície inerte e não reflexiva que se molda à forma do usuário. Ela concede 2 pontos de Armadura a todas as localizações que não estejam previamente protegidas e o usuário recebe um bônus de +10 em testes de Furtividade. Além disso, torna o usuário invisível para o uso de óculos de preysense e para aqueles que possuem o traço Visão no Escuro."
    },
    {
        nome: "Traje de Proteção",
        peso: "0kg",
        disponibilidade: "PD",
        descricao: "Quando se trabalha em condições severas e extremas (especialmente quando não se sabe com antecedência quais serão), trajes de proteção são indispensáveis. Independentemente de estar calor ou frio demais, o traje pode manter a temperatura corporal adequada e garantir hidratação por meio de excelente isolamento térmico. Utilizando a diferença entre a temperatura corporal e a temperatura externa para alimentar células termoelétricas, ele também possui sistemas de recuperação que transformam o suor em água potável. A maioria dos trajes vem com capuz e óculos de proteção para cabeça e rosto. Embora não ofereça proteção indefinida, em emergências de duração média ele pode sustentar a vida até o resgate. O traje concede um bônus de +20 em qualquer teste para resistir aos efeitos de ambientes extremos. Trajes de Boa e Excelente qualidade concedem bônus de +25 e +30, respectivamente, enquanto os de qualidade inferior duram apenas três dias antes que seus mecanismos internos falhem e precisem ser removidos do ambiente extremo para recarregar."
    },
    {
        nome: "Traje Espacial",
        peso: "8kg",
        disponibilidade: "ES",
        descricao: "Esses trajes totalmente selados são essenciais para operar no vácuo do espaço, mas também podem ser úteis em ambientes tóxicos ou hostis. Um traje de vácuo de fabricação comum possui 12 horas de ar e impõe uma penalidade de –10 em testes de Agilidade. Versões de fabricação ruim possuem apenas seis horas de ar, enquanto versões de boa ou excelente fabricação eliminam a penalidade de Agilidade.",
    },
    {
        nome: "Visor Térmico",
        peso: "0.5kg",
        disponibilidade: "MR",
        descricao: "Este dispositivo ocular revela imagens térmicas, permitindo que o usuário detecte coisas que, de outra forma, estariam ocultas por névoas ou sombras. Modelos de baixa manufatura não escondem sua verdadeira natureza, sendo óculos volumosos com lentes brilhantes; modelos de boa ou excelente manufatura são disfarçados como óculos normais (ainda que elaborados). Um personagem usando esses óculos não sofre penalidades devido à escuridão e recebe um bônus de +20 em testes de Percepção baseados em visão durante a noite."
    },
    {
        nome: "Adrenalina",
        peso: "0kg",
        disponibilidade: "PD",
        descricao: "Uma dose de adrenalina é suficiente para energizar o exausto e mascarar a dor com vitalidade de curto prazo, frequentemente o bastante para levar um combate prolongado a uma conclusão bem-sucedida. Cada dose dura 3d10 turnos. Durante esse tempo, o personagem ignora quaisquer efeitos negativos em suas características causados por dano, dano crítico e fadiga, e não pode ser atordoado. Quando o efeito da adrenalina passa, o personagem sofre uma penalidade de –20 em testes de Força, Resistência e Agilidade por uma hora e ganha um nível de Fadiga. Adrenalina é viciante."
    },
    {
        nome: "Café",
        peso: "0kg",
        disponibilidade: "AB",
        descricao: "Essas bebidas comuns oferecem um leve efeito estimulante, além de um sabor agradável. O café quente começa muitos dias por todo o setor, desde os Guardas Imperiais lutando na linha de frente contra a ameaça xenos até os Acólitos que se esforçam para se manter alertas em vigílias noturnas perto de supostas bases de cultos. Consumir café ajuda a aguçar os sentidos embotados pelo cansaço, e uma dose remove um nível de Fadiga do personagem. A penalidade acumulativa para testes de Resistência ao consumir doses adicionais de café é -20, em vez do -10 normal."
    },
    {
        nome: "Cigarro",
        peso: "0kg",
        disponibilidade: "CM",
        descricao: "Um narcótico leve, cada bastão contém folhas de plantas secas e curadas que liberam uma fumaça aromática e estimulante quando acesas e inaladas através de um tubo barato que se consome junto com a droga. Como as folhas variam de planeta para planeta, os cigarros também variam conforme sua origem, o que frequentemente os torna itens úteis para troca."
    },
    {
        nome: "Cogumelos",
        peso: "0kg",
        disponibilidade: "ES",
        descricao: "Um alucinógeno feito a partir de cogumelos narcóticos incomuns que crescem em aquíferos antigos nas profundezas inferiores da Colmeia Desoleum, essa droga tem um efeito desorientador e entorpecente que faz com que os usuários cambaleiem, mesmo mantendo toda a percepção sensorial intacta. Gangues depravadas particularmente gostam de se drogar com ela antes de iniciar longos tiroteios, girando embriagadamente enquanto assistem ao caos causado por seus disparos erráticos. Uma dose dura 1d10 turnos, e o usuário sofre imediatamente 1 ponto de Fadiga, à medida que seu corpo gira descontroladamente. Um personagem sob efeito da droga pode aproveitar a perspectiva distorcida que ela provoca: uma vez durante esse período, ele pode inverter o resultado de qualquer rolagem de 1d100, trocando os dígitos das dezenas pelos das unidades (transformando, por exemplo, um 73 em 37 ou um 91 em 19)."
    },
    {
        nome: "Detox",
        peso: "0kg",
        disponibilidade: "RA",
        descricao: "O detox pode anular a maioria dos efeitos perigosos de outras drogas ou toxinas. Uma dose encerra imediatamente os efeitos — tanto positivos quanto negativos — de quaisquer substâncias que o alvo tenha inalado, ingerido ou injetado, a menos que o item afirme especificamente que o detox não funciona contra ele. No entanto, seu uso é extremamente desagradável, com efeitos colaterais tão severos (vômito excessivo e diarreia sendo os mais leves) que muitos preferem suportar os efeitos da substância original. Usar o detox é doloroso e debilitante, podendo causar efeitos colaterais desagradáveis como vômitos, sangramentos nasais e esvaziamento intestinal intenso. Ao ingerir essa droga, o personagem fica atordoado por um número de turnos igual a 1d10 menos seu bônus de Resistência. Um resultado igual ou menor que 0 significa que o personagem não sofre efeitos adversos."
    },
    {
        nome: "Estilhaço",
        peso: "0kg",
        disponibilidade: "ES",
        descricao: "Essa droga de combate é frequentemente usada para aumentar a consciência e melhorar o tempo de reação. Ela literalmente acelera o usuário, mas causa danos neurais e fisiológicos com o uso prolongado. Ao tomar uma dose, o bônus do usuário em Agilidade e Percepção aumenta em 3 por 2d10 minutos. Note que isso não aumenta os valores reais das características. Quando o efeito da droga passa, o usuário deve passar em um teste desafiador (+0) de Resistência ou sofrer uma penalidade de –20 em testes de Agilidade e Percepção por 1d5 horas. Estilhaço é viciante."
    },
    {
        nome: "Frenzon",
        peso: "0kg",
        disponibilidade: "MR",
        descricao: "Frenzon é um termo usado para designar uma variedade de drogas de combate utilizadas em forças de assalto e unidades de recrutas, especialmente nas legiões penais. Uma dose induz um estado de fanatismo e ausência total de medo, deixando o usuário disposto a enfrentar qualquer inimigo, não importa quão suicida a situação possa parecer. Um personagem sob efeito de frenzon adquire o talento Frenesi e entra imediatamente em Frenesi. Esses efeitos duram enquanto a droga estiver ativa; uma dose tem duração de 1d10 minutos. Frenzon é uma substância viciante.",
    },
    {
        nome: "Obscura",
        peso: "0kg",
        disponibilidade: "RA",
        descricao: "Embora muitas vezes ilegal, a obscura é popular em muitas unidades de combate, onde os soldados buscam alívio do constante estado de batalha, assim como entre civis que procuram escapar da dureza da vida cotidiana. Usuários de obscura entram em um estado onírico por 1d5 horas (caso precisem lutar durante esse período, são considerados sob os efeitos de uma granada alucinógena). Por 1d10 horas após o término dos efeitos, eles entram em uma profunda depressão, a menos que tomem outra dose. Obscura é viciante."
    },
    {
        nome: "Ração",
        peso: "2kg",
        disponibilidade: "FR",
        descricao: "Essas pequenas bolsas contêm alimentos concentrados ou desidratados, suficientes para uma refeição completa, e incluem também suplementos vitamínicos, pastilhas purificadoras de água, uma barra de proteína e cápsulas térmicas para aquecimento. Pacotes bem produzidos podem ser até bastante saborosos, mas mesmo um mestre cozinheiro Ratling teria dificuldade com os ingredientes de baixa qualidade usados nos pacotes mais baratos. Além de prevenir a fome, os pacotes de ração ajudam a manter um acólito funcional em campo. Consumir um ou mais pacotes de ração (ou outras refeições equivalentes) durante um período de descanso de pelo menos duas horas remove um nível adicional de Fadiga."
    },
    {
        nome: "Spook",
        peso: "0kg",
        disponibilidade: "RA",
        descricao: "Uma droga altamente proibida, spook cria e aumenta aquele efeito mais perigoso de todos: habilidades psíquicas. Mesmo a mais breve conexão com o Warp e os Poderes Ruinosos que habitam nele pode permitir incursões demoníacas ou algo pior, mas em situações desesperadas, até esses efeitos horríveis são ignorados. Se um personagem sem nenhuma classificação psíquica tomar uma dose dessa droga, ele deve passar em um teste Desafiador (+0) de Vontade ou ganhar 1d5 pontos de Insanidade, devido à sua mente ser preenchida com visões aterrorizantes do Warp. Se passar no teste, o usuário ganha um poder psíquico da Tabela: Efeitos do. O poder dura por 1d5 horas, e durante esse tempo o usuário realiza todos os testes de Foco em Poder como se tivesse uma classificação psíquica de 1. Se um personagem com classificação psíquica igual ou superior a 1 usar spook, ele deve fazer um teste Desafiador (+0) de Vontade. Se falhar, ganha 1 ponto de Insanidade e a droga não tem mais efeitos. Se passar, ele adiciona 1 à sua classificação psíquica pela próxima hora. No entanto, adiciona +25 nas rolagens feitas na Tabela 6–2: Fenômenos Psíquicos. Spook é viciante e, dependendo do cenário, sua mera posse pode acarretar punições intensas e até letais por parte das autoridades locais."
    },
    {
        nome: "Tranq",
        peso: "1kg",
        disponibilidade: "AB",
        descricao: "A droga tranq abrange uma variedade de quimiodestilados artificiais e alcoólicos produzidos por escória do submundo, criminosos e até Guardas desesperados por um alívio de suas vidas miseráveis. Ela entorpece o corpo e a mente, proporcionando uma sensação bem diferente da embriaguez causada por outras bebidas alcoólicas. Embora o resultado final seja semelhante, os efeitos do tranq são desagradáveis, depressivos e exigem um gosto adquirido."
    },
    {
        nome: "Unguentos Sagrados",
        peso: "0kg",
        disponibilidade: "MR",
        descricao: "Óleos lubrificantes sagrados que receberam as bênçãos do Omnissiah, esses líquidos são muito procurados por seu efeito calmante sobre os espíritos das máquinas teimosos. Se aplicados a uma arma — o que requer uma Ação Completa — a arma se torna imune a travamentos por um número de disparos igual ao tamanho do pente. Se o unguento for aplicado a uma arma já travada, o travamento é imediatamente resolvido, mas não há efeito adicional."
    },
    {
        nome: "Vinho",
        peso: "1kg",
        disponibilidade: "PD",
        descricao: "Essa bebida refrescante é feita a partir de vinho destilado ou outras bebidas fermentadas, sendo popular em muitas regiões do Império. Geralmente é um produto de alta qualidade, com algumas safras envelhecidas sendo renomadas em todo o setor por seu aroma e sabor."
    },
    {
        nome: "Alarme",
        peso: "2kg",
        disponibilidade: "ES"
    },
    {
        nome: "Algemas",
        peso: "1kg",
        disponibilidade: "FR",
        descricao: "Nenhum caçador de recompensas ou Agente da Lei ficaria sem vários conjuntos dessas algemas resistentes, embora muitas vezes sejam usadas para garantir que oferendas sacrificiais não escapem do altar de um culto, ou para outros propósitos ainda mais sombrios."
    },
    {
        nome: "Arpão e Linha",
        peso: "2kg",
        disponibilidade: "CM",
        descricao: "Uma combinação de arnês de segurança e pistola movida a gás, este dispositivo pode disparar um gancho ou presilha magnética preso a um fio fino e resistente contra um alvo elevado a até 100 metros de distância. Uma vez que o gancho se fixa no local desejado, como o topo de um prédio, o usuário pode escalar manualmente a linha ou ativar um guincho motorizado que o eleva a cerca de 5 metros por rodada. Conjuntos de qualidade comum suportam até 150 kg, enquanto os de qualidade Boa ou Superior podem sustentar até 200 kg."
    },
    {
        nome: "Auspex",
        peso: "0.5kg",
        disponibilidade: "ES",
        descricao: "Esses dispositivos padrão de detecção do Império são usados para revelar emissões de energia, movimento, sinais vitais e outras informações. Um personagem usando um auspex recebe +20 em testes de Percepção. Uma vez por rodada, como uma Ação Livre, um personagem com um desses aparelhos pode realizar um teste de Uso Tecnológico para detectar coisas normalmente invisíveis aos sentidos humanos, como gases invisíveis, sinais vitais próximos, radiação não visível ou outras anomalias apropriadas. O alcance padrão é de 50 metros, embora paredes com mais de 50 cm de espessura e certos materiais de blindagem possam bloquear o escâner. Modelos de boa manufatura aumentam o bônus para +30, enquanto os de má qualidade só conseguem penetrar 20 cm de material."
    },
    {
        nome: "Autocópia",
        peso: "0kg",
        disponibilidade: "ES",
        descricao: "Frequentemente elaborados com latão manchado de tinta e penas cultivadas em cubas ou artificiais, esses dispositivos permitem ao usuário copiar textos ou transcrever fala com notável velocidade e precisão. Muitos escribas carregam unidades portáteis, adequadas para registrar sessões de interrogatório ou traduções de xenos. Um personagem com uma perícia de Ofício relevante pode usá-lo para obter +10 em testes relacionados a essa perícia ao registrar dados."
    },
    {
        nome: "Bastão de Luz",
        peso: "0.5kg",
        disponibilidade: "AB",
        descricao: "Assim como a Inquisição atua como uma luz contra a escuridão devoradora de almas, essas pequenas lâmpadas portáteis atuam contra a escuridão física da noite. Globos de luz têm aproximadamente o tamanho de um punho fechado e podem iluminar uma área com cerca de uma dúzia de metros de raio, enquanto as lanternas cilíndricas projetam um feixe cônico mais estreito, porém com o dobro da distância. Ambos funcionam por aproximadamente cinco horas antes que seus pacotes de energia precisem ser recarregados ou substituídos."
    },
    {
        nome: "Bastão Nulo",
        peso: "1kg",
        disponibilidade: "QU"
    },
    {
        nome: "Bloqueador de Sinal",
        peso: "2kg",
        disponibilidade: "RA"
    },
    {
        nome: "Bota Magnética",
        peso: "2kg",
        disponibilidade: "RA",
        descricao: "Pesadas e volumosas, essas botas superdimensionadas contêm eletroímãs. Elas permitem que o usuário se prenda a superfícies metálicas, como o revestimento externo de cascos de naves, e são frequentemente encontradas em armários de emergência de naves espaciais. As botas magnéticas reduzem o bônus de Agilidade do personagem em 2, mas permitem que ele se mova normalmente em áreas de baixa ou zero gravidade, desde que haja uma superfície metálica adequada para caminhar."
    },
    {
        nome: "Comunicador",
        peso: "0kg",
        disponibilidade: "PD",
        descricao: "Estes pequenos dispositivos são usados no ouvido e permitem comunicações de curto alcance de até cerca de 1 quilômetro (dependendo das condições climáticas e do terreno entre os interlocutores). Cada um se encaixa discretamente no ouvido, com modelos de maior qualidade quase indetectáveis em uma inspeção casual."
    },
    {
        nome: "Diagnostor",
        peso: "4kg",
        disponibilidade: "RA",
        descricao: "O diagnostor é um dispositivo médico sofisticado usado em toda a galáxia. Ele pode detectar e diagnosticar praticamente todas as enfermidades conhecidas pelo Império, podendo ser incorporado a kits médicos, servo-crânios e outros servos dedicados. Qualquer indivíduo com treinamento médico na Guarda Imperial compreende seu uso. Um diagnostor concede +20 em testes de Medicina ou Percepção para determinar uma enfermidade; um sucesso indica o tratamento adequado a ser utilizado."
    },
    {
        nome: "Emissor Vox",
        peso: "4kg",
        disponibilidade: "ES"
    },
    {
        nome: "Foco Psíquico",
        peso: "0kg",
        disponibilidade: "PD"
    },
    {
        nome: "Freio de Queda",
        peso: "2kg",
        disponibilidade: "CM",
        descricao: "Uma linha de segurança simples (mas robusta) com um fecho magnético ou com gancho na extremidade, essas ferramentas se prendem ao cinto ou às alças dos ombros do usuário. Quando utilizadas, permitem descer com relativa segurança por superfícies verticais ou evitar quedas de telhados instáveis. Um personagem usando um freio de queda para descer uma superfície vertical recebe +30 em testes de Escalar e não pode cair em caso de falha. Freios de qualidade comum suportam até 150 kg, enquanto os de boa qualidade aguentam até 200 kg."
    },
    {
        nome: "Gerador de Estática",
        peso: "3kg",
        disponibilidade: "MR"
    },
    {
        nome: "Globo de Luz",
        peso: "0.5kg",
        disponibilidade: "AB",
        descricao: "Assim como a Inquisição atua como uma luz contra a escuridão devoradora de almas, essas pequenas lâmpadas portáteis atuam contra a escuridão física da noite. Globos de luz têm aproximadamente o tamanho de um punho fechado e podem iluminar uma área com cerca de uma dúzia de metros de raio, enquanto as lanternas cilíndricas projetam um feixe cônico mais estreito, porém com o dobro da distância. Ambos funcionam por aproximadamente cinco horas antes que seus pacotes de energia precisem ser recarregados ou substituídos."
    },
    {
        nome: "Grav Queda",
        peso: "15kg",
        disponibilidade: "RA",
        descricao: "Usados pela Guarda Imperial para saltos aéreos em zonas de combate, os gravs queda utilizam campos antigravitacionais para desacelerar uma queda rápida, transformando-a em uma descida controlada (e segura), com pequenos propulsores de atitude para frenagem adicional e maior controle direcional. Diferentemente de propulsores de salto, os paraquedas gravitacionais servem apenas para aterrissagens seguras e não podem ser usados para saltos impulsionados ou manobras aéreas. Se o personagem passar em um teste de Agilidade Desafiador (+0) ou em um teste de Operaração (Aeronautica) Rotineiro (+20), o grav queda permite uma queda segura e guiada de qualquer altura. Caso contrário, o personagem conta como tendo caído dois metros para cada grau de falha."
    },
    {
        nome: "Gravador Img",
        peso: "1kg",
        disponibilidade: "PD"
    },
    {
        nome: "Injetor",
        peso: "0.5kg",
        disponibilidade: "CM",
        descricao: "Muitas drogas exigem um dispositivo para administrar uma dose, como uma seringa, injetor em spray ou frasco de gás. Cada um desses dispositivos pode conter uma dose de qualquer droga, que um personagem pode administrar como uma Ação Simples."
    },
    {
        nome: "Kit de Demolição",
        peso: "4kg",
        disponibilidade: "MR",
        descricao: "Algumas investigações terminam com resultados explosivos, e esses kits são essenciais para tal desfecho. Eles contêm as ferramentas necessárias para que um personagem monte com mais facilidade dispositivos de detonação sofisticados e explosivos. Cada kit inclui o seguinte: Cinco cargas de demolição: detonam com o mesmo perfil das granadas krak; 100 metros de cordão detonante: esta corda fina pode ser acesa com qualquer fonte de fogo ou detonador, queimando a uma taxa de 10 segundos por metro. É útil para configurar um atraso na explosão ou ativá-la à distância; Cinco detonadores de liberação por pressão: podem ser usados para acender o cordão detonante ou ativar os explosivos diretamente. Todos os materiais deste kit podem ser reabastecidos até essas quantidades sem necessidade de teste de Requisição, desde que o personagem esteja em um local onde esses recursos estejam disponíveis."
    },
    {
        nome: "Kit de Disfarce",
        peso: "2kg",
        disponibilidade: "MR",
        descricao: "Acólitos frequentemente ocultam sua verdadeira identidade como parte de suas investigações, seja para criar novas personas ou para se passarem por outras pessoas. Esses kits contêm os seguintes itens: Maquiagem básica: Concede +10 em testes de Enganar feitos para disfarçar visualmente o personagem; Aparelhos protéticos: Permitem ao personagem se passar por indivíduos com estruturas faciais diferentes; Corantes de pele: Permitem ao personagem se passar por indivíduos com cores de pele diferentes; Aumentador vocal: Concede +10 em testes de Enganar feitos para imitar outra voz; Lentes de retina: Permitem ao personagem se passar por indivíduos com cores de olhos diferentes. Todos os materiais deste kit podem ser reabastecidos até essas quantidades sem a necessidade de um teste de Requisição, desde que o personagem esteja em um local onde esses itens estejam disponíveis."
    },
    {
        nome: "Kit de Escrita",
        peso: "2kg",
        disponibilidade: "FR"
    },
    {
        nome: "Kit de Tortura",
        peso: "2kg",
        disponibilidade: "MR",
        descricao: "Embora todos esses kits sejam usados para a obtenção de informações de indivíduos relutantes e impenitentes, cada um é tão único quanto seu usuário. A maioria contém uma ampla variedade de lâminas, agulhas, substâncias químicas, drogas, ganchos farpados, sondas neurais, bastões térmicos e outras ferramentas essenciais para extrair a verdade. O uso de um kit de tortura concede ao usuário +20 em testes de Interrogação."
    },
    {
        nome: "Kit Médico",
        peso: "2kg",
        disponibilidade: "CM",
        descricao: "Kits médicos contêm pedaços de pele falsa, antissépticos, bandagens auto-selantes, torniquetes de pressão e outros auxílios médicos. Um kit padrão concede um bônus de +10 em testes de Medicina, desde que o usuário possua a perícia Medicina. Versões avançadas incluem também varinhas anti-tóxicas, sprays, cogitadores diagnósticos e suprimentos adicionais de alta qualidade. Essas versões avançadas concedem um bônus de +20 em testes de Medicina (independentemente de o usuário ter a perícia Medicina ou não), pesam 3 kg a mais e possuem Disponibilidade Rara em vez de Comum."
    },
    {
        nome: "Maçarico de Las",
        peso: "4kg",
        disponibilidade: "PD",
        descricao: "Ideais para abrir portas e anteparos reforçados, os maçaricos de las foram originalmente projetados para mineração, onde seu feixe de corte de curto alcance e alta intensidade podia perfurar até mesmo as rochas mais resistentes. A maioria consegue cortar ou soldar cerca de 10 cm de metal, dependendo da espessura. São grandes e pesados, podendo ser usados apenas como uma arma Pesada (atuando como um rifle melta sem nenhuma qualidade especial de arma contra alvos estacionários a até 2 metros de distância."
    },
    {
        nome: "Magnóculo",
        peso: "0.5kg",
        disponibilidade: "PD",
        descricao: "Esses poderosos auxiliares visuais podem ampliar objetos distantes com nitidez, ajudando a garantir que nenhuma heresia passe despercebida. Magnóculos de alta qualidade e mais avançados também podem fornecer leituras de alcance, detectar fontes de calor, calcular a posição de alvos e capturar imagens para análise posterior."
    },
    {
        nome: "Megafone",
        peso: "4kg",
        disponibilidade: "ES",
        descricao: "Seja bradando ordens sobre o rugido feroz do combate ou discursando para uma multidão de milhares de fiéis, os oficiais do Império frequentemente necessitam de grande volume, e um megafone é a ferramenta ideal. Cada um deles pode amplificar a voz em níveis normais de fala de forma que toda uma multidão consiga ouvir claramente as palavras do orador."
    },
    {
        nome: "Mesa de Regicida",
        peso: "1kg",
        disponibilidade: "FR"
    },
    {
        nome: "Multi-Chave",
        peso: "0kg",
        disponibilidade: "ES"
    },
    {
        nome: "Multi-Compasso",
        peso: "4kg",
        disponibilidade: "QU"
    },
    {
        nome: "Multiferramenta",
        peso: "1kg",
        disponibilidade: "RA",
        descricao: "A maioria das multiferramentas são dispositivos pequenos e compactos, repletos de sondas retráteis, lâminas, ganchos e conectores. São ideais para fazer máquinas teimosas funcionarem, reparar dispositivos danificados e, em geral, dobrar espíritos-máquina relutantes à vontade do usuário. Um personagem usando uma multiferramenta recebe +10 em testes de Uso Tecnológico."
    },
    {
        nome: "Scanner",
        peso: "0.5kg",
        disponibilidade: "ES",
        descricao: "Esses dispositivos padrão de detecção do Império são usados para revelar emissões de energia, movimento, sinais vitais e outras informações. Um personagem usando um auspex recebe +20 em testes de Percepção. Uma vez por rodada, como uma Ação Livre, um personagem com um desses aparelhos pode realizar um teste de Uso Tecnológico para detectar coisas normalmente invisíveis aos sentidos humanos, como gases invisíveis, sinais vitais próximos, radiação não visível ou outras anomalias apropriadas. O alcance padrão é de 50 metros, embora paredes com mais de 50 cm de espessura e certos materiais de blindagem possam bloquear o escâner. Modelos de boa manufatura aumentam o bônus para +30, enquanto os de má qualidade só conseguem penetrar 20 cm de material."
    },
    {
        nome: "Servo Caveira Unitário de Augúrio",
        peso: "2kg",
        disponibilidade: "RA",
        descricao: "Servos caveira representam os restos honrados de valorosos servos Imperiais e Tech-Padres que continuam seu serviço mesmo após a morte. O crânio é cuidadosamente limpo e gravado, depois equipado com um espírito de máquina para guiar suas ações, e pequenas placas gravíticas para sustentá-lo em voo. Modelos unitários são dedicados a uma única função básica e são uma visão comum em muitos mundos. Cada um responde a comandos verbais básicos e, a menos que comandado de outra forma, sempre paira perto de seu mestre. O servo caveira de augúrio carrega um scanner e sistemas vox-data para retransmitir suas descobertas. O personagem ganha os benefícios de um auspex enquanto o servo cranio estiver ativo e a até 10 metros de distância."
    },
    {
        nome: "Servo Caveira Unitário de Iluminação",
        peso: "2kg",
        disponibilidade: "RA",
        descricao: "Servos caveira representam os restos honrados de valorosos servos Imperiais e Tech-Padres que continuam seu serviço mesmo após a morte. O crânio é cuidadosamente limpo e gravado, depois equipado com um espírito de máquina para guiar suas ações, e pequenas placas gravíticas para sustentá-lo em voo. Modelos unitários são dedicados a uma única função básica e são uma visão comum em muitos mundos. Cada um responde a comandos verbais básicos e, a menos que comandado de outra forma, sempre paira perto de seu mestre. O servo caveira de iluminação é equipado com um globo de luz ou braseiro queimando para iluminar uma área com 20 metros de raio."
    },
    {
        nome: "Servo Caveira Unitário Medicinal",
        peso: "2kg",
        disponibilidade: "RA",
        descricao: "Servos caveira representam os restos honrados de valorosos servos Imperiais e Tech-Padres que continuam seu serviço mesmo após a morte. O crânio é cuidadosamente limpo e gravado, depois equipado com um espírito de máquina para guiar suas ações, e pequenas placas gravíticas para sustentá-lo em voo. Modelos unitários são dedicados a uma única função básica e são uma visão comum em muitos mundos. Cada um responde a comandos verbais básicos e, a menos que comandado de outra forma, sempre paira perto de seu mestre. O servo caveira medicinal é equipado com um scanner e ferramentas de medicina. O personagem ganha os benefícios de um kit médico padrão enquanto o servo caveira estiver ativo e a até 2 metros de distância."
    },
    {
        nome: "Servo Caveira Unitário de Megafone",
        peso: "2kg",
        disponibilidade: "RA",
        descricao: "Servos caveira representam os restos honrados de valorosos servos Imperiais e Tech-Padres que continuam seu serviço mesmo após a morte. O crânio é cuidadosamente limpo e gravado, depois equipado com um espírito de máquina para guiar suas ações, e pequenas placas gravíticas para sustentá-lo em voo. Modelos unitários são dedicados a uma única função básica e são uma visão comum em muitos mundos. Cada um responde a comandos verbais básicos e, a menos que comandado de outra forma, sempre paira perto de seu mestre. O servo caveira de megafone incorpora um megafone, que pode reproduzir discursos gravados ou amplificar a fala de seu mestre conforme direcionado."
    },
    {
        nome: "Servo Caveira Unitário de Utilidade",
        peso: "2kg",
        disponibilidade: "RA",
        descricao: "Servos caveira representam os restos honrados de valorosos servos Imperiais e Tech-Padres que continuam seu serviço mesmo após a morte. O crânio é cuidadosamente limpo e gravado, depois equipado com um espírito de máquina para guiar suas ações, e pequenas placas gravíticas para sustentá-lo em voo. Modelos unitários são dedicados a uma única função básica e são uma visão comum em muitos mundos. Cada um responde a comandos verbais básicos e, a menos que comandado de outra forma, sempre paira perto de seu mestre. O servo caveira de utilidade está equipado com sondas, plugs e ferramentas para auxiliar em tarefas técnicas. O personagem ganha os benefícios de uma multiferramenta enquanto o servo caveira estiver próximo e ativo."
    },
    {
        nome: "Sinal Parasita",
        peso: "1kg",
        disponibilidade: "MR",
        descricao: "Um item considerado algo herético aos olhos do Mechanicum, esses dispositivos interceptam sinais de vox ou transmissões de dados. Após um teste bem-sucedido de Uso Tecnológico (com a dificuldade definida pelo Mestre com base na situação e no sinal), o usuário pode utilizá-lo para receber um sinal ou transmissão num raio de até 1 km, por um número de minutos igual aos seus graus de sucesso. Se o personagem falhar por um número de graus de falha maior que seu bônus de Inteligência, tanto o remetente quanto o receptor do sinal percebem que alguém está tentando interceptar a transmissão."
    },
    {
        nome: "Silenciador",
        peso: "2kg",
        disponibilidade: "PD"
    },
    {
        nome: "Suturador",
        peso: "0.5kg",
        disponibilidade: "PD",
        descricao: "Instrumentos comuns encontrados nos campos de batalha por todo o Imperium, os suturadores são usados para fechar rapidamente ferimentos e evitar a perda de sangue. Eles podem variar em forma, desde simples agulha e linha até dispositivos antigos que grampeiam a lesão. Suturadores concedem +30 em testes de Medicina usados para estancar Perda de Sangue."
    },
    {
        nome: "Tablet",
        peso: "0.5kg",
        disponibilidade: "CM",
        descricao: "Esses dispositivos são comuns por todo o Império e constituem o principal meio de armazenar e ler textos impressos, além de outros formatos de dados, como gravações ou áudio. Tablets bem construídos também podem regravar novas informações ou transmitir e receber dados de outros dispositivos."
    },
    {
        nome: "Mira de Mão",
        peso: "0.5kg",
        disponibilidade: "ES",
        descricao: "Um designador de alvos portátil é um pequeno dispositivo utilizado por muitas forças do Império. Ele é capaz de detectar a distância até alvos usando miras ópticas para aproximação, sistemas de previsão para disparos, entre outras funções. É comumente usado por observadores que auxiliam no fogo de artilharia. Um Acólito com um designador de alvos portátil pode gastar uma Ação Simples para conceder a outro personagem um bônus de +20 em seu próximo teste de Habilidade de Balística ao disparar uma arma com a característica Indireta."
    },
];
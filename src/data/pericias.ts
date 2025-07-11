export type NivelPericia = "desconhecida" | "conhecida" | "+10" | "+20" | "+30";

export interface Pericia {
  nome: string;
  descrição: string;
  caracteristicaRelacionada: string;
  apitidao1: string;
  apitidao2?: string;
  Especialista: boolean;
}

export const PERICIAS: Pericia[] = [
    {
        nome: "Acrobacia",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Agilidade",
        apitidao1: "Agilidade",
        apitidao2: "Força",
        Especialista: false,
    },
    {
        nome: "Atletismo",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Força",
        apitidao1: "Força",
        apitidao2: "Resistência",
        Especialista: false,
    },
    {
        nome: "Atenção",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Percepção",
        apitidao1: "Percepção",
        apitidao2: "Inteligência",
        Especialista: false,
    },
    {
        nome: "Charme",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Socialização",
        apitidao1: "Socialização",
        apitidao2: "Influência",
        Especialista: false,
    },
    {
        nome: "Comando",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Socialização",
        apitidao1: "Socialização",
        apitidao2: "Vontade",
        Especialista: false,
    },
    {
        nome: "Comércio",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Inteligência",
        apitidao1: "Inteligência",
        apitidao2: "Socialização",
        Especialista: false,
    },
    {
        nome: "Conhecimento Comum",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Inteligência",
        apitidao1: "Inteligência",
        apitidao2: "Socialização",
        Especialista: true,
    },
    {
        nome: "Enganação",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Socialização",
        apitidao1: "Socialização",
        apitidao2: "Inteligência",
        Especialista: false,
    },
    {
        nome: "Esquiva",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Agilidade",
        apitidao1: "Agilidade",
        Especialista: false,
    },
    {
        nome: "Conhecimento Proibido",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Inteligência",
        apitidao1: "Inteligência",
        apitidao2: "Socialização",
        Especialista: true,
    },
    {
        nome: "Investigação",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Socialização",
        apitidao1: "Socialização",
        apitidao2: "Percepção",
        Especialista: false,
    },
    {
        nome: "Interrogatório",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Vontade",
        apitidao1: "Vontade",
        apitidao2: "Socialização",
        Especialista: false,
    },
    {
        nome: "Intimidação",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Força",
        apitidao1: "Força",
        apitidao2: "Vontade",
        Especialista: false,
    },
    {
        nome: "Linguística",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Inteligência",
        apitidao1: "Inteligência",
        apitidao2: "Socialização",
        Especialista: true,
    },
    {
        nome: "Lógica",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Inteligência",
        apitidao1: "Inteligência",
        apitidao2: "Agilidade",
        Especialista: false,
    },
    {
        nome: "Medicina",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Inteligência",
        apitidao1: "Inteligência",
        apitidao2: "Percepção",
        Especialista: false,
    },
    {
        nome: "Navegação",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Inteligência",
        apitidao1: "Inteligência",
        apitidao2: "Percepção",
        Especialista: true,
    },
    {
        nome: "Operação",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Agilidade",
        apitidao1: "Agilidade",
        apitidao2: "Inteligência",
        Especialista: true,
    },
    {
        nome: "Bloqueio",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Habilidade de Combate",
        apitidao1: "Habilidade de Combate",
        Especialista: false,
    },
    {
        nome: "Senso Psíquico",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Percepção",
        apitidao1: "Percepção",
        apitidao2: "Vontade",
        Especialista: false,
    },
    {
        nome: "Conhecimento Escolástico",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Inteligência",
        apitidao1: "Inteligência",
        apitidao2: "Socialização",
        Especialista: true,
    },
    {
        nome: "Intuição",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Percepção",
        apitidao1: "Percepção",
        apitidao2: "Socialização",
        Especialista: false,
    },
    {
        nome: "Segurança",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Inteligência",
        apitidao1: "Inteligência",
        apitidao2: "Agilidade",
        Especialista: false,
    },
    {
        nome: "Prestidigitação",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Agilidade",
        apitidao1: "Agilidade",
        apitidao2: "Inteligência",
        Especialista: false,
    },
    {
        nome: "Furtividade",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Agilidade",
        apitidao1: "Agilidade",
        apitidao2: "Percepção",
        Especialista: false,
    },
    {
        nome: "Sobrevivência",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Percepção",
        apitidao1: "Percepção",
        apitidao2: "Inteligência",
        Especialista: false,
    },
    {
        nome: "Uso Tecnológico",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Inteligência",
        apitidao1: "Inteligência",
        apitidao2: "Agilidade",
        Especialista: false,
    },
    {
        nome: "Negócio",
        descrição: "Lorem Ipsum",
        caracteristicaRelacionada: "Inteligência",
        apitidao1: "Inteligência",
        apitidao2: "Socialização",
        Especialista: true,
    },
];

export const PERICIAS_COM_ESPECIALIZACOES: Record<string, string[]> = {
    "Conhecimento Comum": [
        "Adepta Sororitas", "Adeptus Arbites", "Adeptus Astartes", "Adeptus Astra Telepathica", "Adeptus Mechanicus",
        "Administratum", "Setor Askellon", "Navios Mercantes", "Collegia Titanicus", "Clero", "Credo Imperial",
        "Guarda Imperial", "Marinha Imperial", "Império", "Navegadores", "Forças de Defesa Planetárias",
        "Mercadores Nobres", "Schola Progenium", "Tecnologia", "Submundo", "Guerra"
    ],

    "Conhecimento Proibido": [
        "Adepta Sororitas", "Adeptus Arbites", "Adeptus Astartes", "Adeptus Astra Telepathica", "Adeptus Mechanicus",
        "Administratum", "Setor Askellon", "Navios Mercantes", "Collegia Titanicus", "Clero", "Credo Imperial",
        "Guarda Imperial", "Marinha Imperial", "Império", "Navegadores", "Forças de Defesa Planetárias",
        "Mercadores Nobres", "Schola Progenium", "Tecnologia", "Submundo", "Guerra",
        "Arqueotech", "Marinha Espacial do Caos", "Cartels Criminosos e Contrabandistas", "Demonologia", "Heresia",
        "Heresia de Horus e a Longa Guerra", "Inquisição", "Mutantes", "Officio Assassinorum", "Piratas", "Psíquicos",
        "Imaterium", "Xenos", "Astromancia", "Animais", "Burocracia", "Química", "Criptologia", "Nobreza",
        "Autorizações Imperiais", "Leis", "História", "Numerologia", "Ocultismo", "Filosofia", "Táticas de Guerra"
    ],

    "Conhecimento Escolástico": [
        "Adepta Sororitas", "Adeptus Arbites", "Adeptus Astartes", "Adeptus Astra Telepathica", "Adeptus Mechanicus",
        "Administratum", "Setor Askellon", "Navios Mercantes", "Collegia Titanicus", "Clero", "Credo Imperial",
        "Guarda Imperial", "Marinha Imperial", "Império", "Navegadores", "Forças de Defesa Planetárias",
        "Mercadores Nobres", "Schola Progenium", "Tecnologia", "Submundo", "Guerra",
        "Astromancia", "Animais", "Burocracia", "Química", "Criptologia", "Nobreza",
        "Autorizações Imperiais", "Leis", "História", "Numerologia", "Ocultismo", "Filosofia", "Táticas de Guerra"
    ],

    "Linguística": [
        "Runas das Legiões", "Marcas do Caos", "Eldar", "Gótico Alto", "Códigos Imperiais", "Gótico Baixo",
        "Cântico Mercenário", "Necrontyr", "Ork", "Techna-Lingua", "Tau", "Submundo", "Marcas Alienígenas"
    ],

    "Navegação": [
        "Superfície", "Estelar", "Imaterium"
    ],

    "Operação": [
        "Superfície", "Aeronáutica", "Naves Espaciais"
    ],

    "Negócio": [
        "Agricultura", "Arqueologia", "Armas", "Astrógrafia", "Química", "Criptografia", "Cozinha", "Exploração",
        "Linguística", "História", "Morticador", "Performance", "Prospecção", "Entalhe", "Escultura", "Construção Naval",
        "Vidência", "Tecnologia", "Manutenção Naval"
    ]
};

export interface PericiaComNivel {
    nome: string;
    nivel: NivelPericia;
    especializacoes?: Especializacao[];
}

export interface Especializacao {
    nome: string;
    nivel: NivelPericia;
}

export const ORDEM_NIVEIS: NivelPericia[] = [
    "+30",
    "+20",
    "+10",
    "conhecida",
    "desconhecida",
];

export function compararNiveis(a: NivelPericia, b: NivelPericia): number {
    return ORDEM_NIVEIS.indexOf(a) - ORDEM_NIVEIS.indexOf(b);
}

export function montarPericiasComNiveis(periciasDaFicha: string[]): PericiaComNivel[] {
  const mapeadas: Record<string, PericiaComNivel> = {};

  // Inicializa todas as perícias como desconhecida
  for (const pericia of PERICIAS) {
    mapeadas[pericia.nome] = {
      nome: pericia.nome,
      nivel: "desconhecida",
      especializacoes: pericia.Especialista ? [] : undefined,
    };
  }

  // Processa as perícias da ficha
  for (const entrada of periciasDaFicha) {
    const match = entrada.match(/^(.+?)\s*\((.+)\)$/); // Ex: "Negócio (Agricultura)"

    if (match) {
      const [_, nome, especializacao] = match;
      const pericia = mapeadas[nome];
      if (pericia?.especializacoes) {
        const existente = pericia.especializacoes.find((e) => e.nome === especializacao);
        if (existente) {
          existente.nivel = "conhecida";
        } else {
          pericia.especializacoes.push({ nome: especializacao, nivel: "conhecida" });
        }

        // Atualiza o nível da perícia mãe para o maior entre atual e conhecida
        if (compararNiveis("conhecida", pericia.nivel) < 0) {
          pericia.nivel = "conhecida";
        }
      }
    } else {
      // Perícia sem especialização
      const pericia = mapeadas[entrada];
      if (pericia) {
        pericia.nivel = "conhecida";
      }
    }
  }

  // Ordena especializações por nível (se existirem) e ajusta nível da perícia mãe
  for (const pericia of Object.values(mapeadas)) {
    if (pericia.especializacoes && pericia.especializacoes.length > 0) {
      pericia.especializacoes.sort((a, b) => compararNiveis(b.nivel, a.nivel));
      const maiorNivel = pericia.especializacoes[0]?.nivel ?? "desconhecida";
      pericia.nivel = maiorNivel;
    }
  }

  return Object.values(mapeadas);
}
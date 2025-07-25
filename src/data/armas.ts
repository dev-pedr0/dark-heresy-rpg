type Arma = {
    nome: string;
    tipo: string;
    classe?: string;
    alcance?: string;
    taxaDeTiro?: string;
    dano: string;
    tipoDeDano: string;
    penetracao: number;
    municao?: number;
    recarga?: string;
    tracosEspeciais: string[];
    peso: string;
    disponibilidade: string;
};

export const ARMAS: Arma[] = [
    {
        nome: "Pistola Bolter",
        tipo: "Bolter",
        classe: "Pistola",
        alcance: "30m",
        taxaDeTiro: "S/2/-",
        dano: "1d10+5",
        tipoDeDano: "Explosivo",
        penetracao: 4,
        municao: 8,
        recarga: "Padrão",
        tracosEspeciais: ["Dilacerante"],
        peso: "3.5kg",
        disponibilidade: "MR"
    },
    {
        nome: "Rifle Bolter",
        tipo: "Bolter",
        classe: "Básica",
        alcance: "100m",
        taxaDeTiro: "S/3/-",
        dano: "1d10+5",
        tipoDeDano: "Explosivo",
        penetracao: 4,
        municao: 24,
        recarga: "Padrão",
        tracosEspeciais: ["Dilacerante"],
        peso: "7kg",
        disponibilidade: "MR"
    },
    {
        nome: "Bolter Pesado",
        tipo: "Bolter",
        classe: "Pesada",
        alcance: "150m",
        taxaDeTiro: "-/-/6",
        dano: "1d10+8",
        tipoDeDano: "Explosivo",
        penetracao: 5,
        municao: 60,
        recarga: "Padrão",
        tracosEspeciais: ["Dilacerante"],
        peso: "40kg",
        disponibilidade: "MR"
    },
    {
        nome: "Bolter Tempestade",
        tipo: "Bolter",
        classe: "Básica",
        alcance: "90m",
        taxaDeTiro: "S/2/4",
        dano: "1d10+5",
        tipoDeDano: "Explosivo",
        penetracao: 4,
        municao: 60,
        recarga: "Padrão",
        tracosEspeciais: ["Dilacerante", "Barragem"],
        peso: "40kg",
        disponibilidade: "MR"
    },
    {
        nome: "Lança Chamas de Mão",
        tipo: "Incendiária",
        classe: "Pistola",
        alcance: "10m",
        taxaDeTiro: "S/-/-",
        dano: "1d10+4",
        tipoDeDano: "Energia",
        penetracao: 2,
        municao: 2,
        recarga: "Padrãox2",
        tracosEspeciais: ["Chama", "Spray"],
        peso: "3.5kg",
        disponibilidade: "RA"
    },
    {
        nome: "Lança Chamas",
        tipo: "Incendiária",
        classe: "Básica",
        alcance: "20m",
        taxaDeTiro: "S/-/-",
        dano: "1d10+4",
        tipoDeDano: "Energia",
        penetracao: 2,
        municao: 6,
        recarga: "Padrãox2",
        tracosEspeciais: ["Chama", "Spray"],
        peso: "6kg",
        disponibilidade: "ES"
    },
    {
        nome: "Lança Chamas Pesado",
        tipo: "Incendiária",
        classe: "Pesada",
        alcance: "30m",
        taxaDeTiro: "S/-/-",
        dano: "1d10+5",
        tipoDeDano: "Energia",
        penetracao: 4,
        municao: 10,
        recarga: "Padrãox2",
        tracosEspeciais: ["Chama", "Spray"],
        peso: "45kg",
        disponibilidade: "RA"
    },
    {
        nome: "Pistola Las",
        tipo: "Las",
        classe: "Pistola",
        alcance: "30m",
        taxaDeTiro: "S/2/-",
        dano: "1d10+2",
        tipoDeDano: "Energia",
        penetracao: 0,
        municao: 30,
        recarga: "Simples",
        tracosEspeciais: ["Confiável"],
        peso: "1.5kg",
        disponibilidade: "CM"
    },
    {
        nome: "Rifle Las",
        tipo: "Las",
        classe: "Básica",
        alcance: "100m",
        taxaDeTiro: "S/3/-",
        dano: "1d10+3",
        tipoDeDano: "Energia",
        penetracao: 0,
        municao: 60,
        recarga: "Padrão",
        tracosEspeciais: ["Confiável"],
        peso: "4kg",
        disponibilidade: "CM"
    },
    {
        nome: "Laslock",
        tipo: "Las",
        classe: "Básica",
        alcance: "70m",
        taxaDeTiro: "S/-/-",
        dano: "1d10+4",
        tipoDeDano: "Energia",
        penetracao: 0,
        municao: 1,
        recarga: "Simples",
        tracosEspeciais: ["Instável"],
        peso: "4kg",
        disponibilidade: "FR"
    },
    {
        nome: "Las Sniper",
        tipo: "Las",
        classe: "Básica",
        alcance: "150m",
        taxaDeTiro: "S/-/-",
        dano: "1d10+3",
        tipoDeDano: "Energia",
        penetracao: 1,
        municao: 40,
        recarga: "Padrão",
        tracosEspeciais: ["Confiável", "Precisa", "Sobrenatural (4)"],
        peso: "4.5kg",
        disponibilidade: "ES"
    },
    {
        nome: "Pistola Las Hot-Shot",
        tipo: "Las",
        classe: "Pistola",
        alcance: "20m",
        taxaDeTiro: "S/2/-",
        dano: "1d10+4",
        tipoDeDano: "Energia",
        penetracao: 7,
        municao: 40,
        recarga: "Padrãox2",
        tracosEspeciais: [],
        peso: "4kg",
        disponibilidade: "RA"
    },
    {
        nome: "Rifle Las Hot-Shot",
        tipo: "Las",
        classe: "Básica",
        alcance: "60m",
        taxaDeTiro: "S/3/-",
        dano: "1d10+4",
        tipoDeDano: "Energia",
        penetracao: 7,
        municao: 30,
        recarga: "Padrãox2",
        tracosEspeciais: [],
        peso: "6kg",
        disponibilidade: "RA"
    },
    {
        nome: "Lança Granadas",
        tipo: "Lançador",
        classe: "Básico",
        alcance: "60m",
        taxaDeTiro: "S/-/-",
        dano: "*",
        tipoDeDano: "*",
        penetracao: 0,
        municao: 6,
        recarga: "Padrãox2",
        tracosEspeciais: ["*"],
        peso: "12kg",
        disponibilidade: "PD"
    },
    {
        nome: "Lança Mísseis",
        tipo: "Lançador",
        classe: "Pesada",
        alcance: "300m",
        taxaDeTiro: "S/-/-",
        dano: "*",
        tipoDeDano: "*",
        penetracao: 0,
        municao: 1,
        recarga: "Padrão",
        tracosEspeciais: ["*"],
        peso: "35kg",
        disponibilidade: "RA"
    },
    {
        nome: "Boleadeiras",
        tipo: "Arcaica",
        classe: "Lançar",
        alcance: "10m",
        taxaDeTiro: "S/-/-",
        dano: "-",
        tipoDeDano: "-",
        penetracao: 0,
        municao: 1,
        recarga: "-",
        tracosEspeciais: ["Imprecisa", "Armadilha (1)"],
        peso: "1.5kg",
        disponibilidade: "CM"
    },
    {
        nome: "Arco",
        tipo: "Arcaica",
        classe: "Básico",
        alcance: "30m",
        taxaDeTiro: "S/-/-",
        dano: "1d10",
        tipoDeDano: "Lacerante",
        penetracao: 0,
        municao: 1,
        recarga: "Simples",
        tracosEspeciais: ["Primitiva (6)", "Confiável"],
        peso: "2kg",
        disponibilidade: "PD"
    },
    {
        nome: "Besta",
        tipo: "Arcaica",
        classe: "Básico",
        alcance: "30m",
        taxaDeTiro: "S/-/-",
        dano: "1d10",
        tipoDeDano: "Lacerante",
        penetracao: 0,
        municao: 1,
        recarga: "Padrãox2",
        tracosEspeciais: ["Primitiva (7)"],
        peso: "3kg",
        disponibilidade: "PD"
    },
    {
        nome: "Pistola Inferno",
        tipo: "Melta",
        classe: "Pistola",
        alcance: "10m",
        taxaDeTiro: "S/-/-",
        dano: "2d10+10",
        tipoDeDano: "Energia",
        penetracao: 12,
        municao: 3,
        recarga: "Padrão",
        tracosEspeciais: ["Melta"],
        peso: "3kg",
        disponibilidade: "QU"
    },
    {
        nome: "Rifle Melta",
        tipo: "Melta",
        classe: "Básico",
        alcance: "20m",
        taxaDeTiro: "S/-/-",
        dano: "2d10+10",
        tipoDeDano: "Energia",
        penetracao: 12,
        municao: 5,
        recarga: "Padrão",
        tracosEspeciais: ["Melta"],
        peso: "15kg",
        disponibilidade: "MR"
    },
    {
        nome: "Pistola de Plasma",
        tipo: "Plasma",
        classe: "Pistola",
        alcance: "30m",
        taxaDeTiro: "S/2/-",
        dano: "1d10+6",
        tipoDeDano: "Energia",
        penetracao: 6,
        municao: 10,
        recarga: "Padrãox3",
        tracosEspeciais: ["Superaque.", "Maximização"],
        peso: "4kg",
        disponibilidade: "MR"
    },
    {
        nome: "Rifle de Plasma",
        tipo: "Plasma",
        classe: "Básico",
        alcance: "90m",
        taxaDeTiro: "S/2/-",
        dano: "1d10+7",
        tipoDeDano: "Energia",
        penetracao: 6,
        municao: 40,
        recarga: "Padrãox5",
        tracosEspeciais: ["Superaque.", "Maximização"],
        peso: "18kg",
        disponibilidade: "MR"
    },
    {
        nome: "Pistola Automática",
        tipo: "Projetil Sólido",
        classe: "Pistola",
        alcance: "30m",
        taxaDeTiro: "S/-/6",
        dano: "1d10+2",
        tipoDeDano: "Impacto",
        penetracao: 0,
        municao: 18,
        recarga: "Padrão",
        tracosEspeciais: [],
        peso: "1.5kg",
        disponibilidade: "PD"
    },
    {
        nome: "Rifle Automático",
        tipo: "Projetil Sólido",
        classe: "Básica",
        alcance: "100m",
        taxaDeTiro: "S/3/10",
        dano: "1d10+3",
        tipoDeDano: "Impacto",
        penetracao: 0,
        municao: 30,
        recarga: "Padrão",
        tracosEspeciais: [],
        peso: "5kg",
        disponibilidade: "PD"
    },
    {
        nome: "Canhão Automático",
        tipo: "Projetil Sólido",
        classe: "Pesada",
        alcance: "300m",
        taxaDeTiro: "S/3/-",
        dano: "3d10+8",
        tipoDeDano: "Impacto",
        penetracao: 6,
        municao: 24,
        recarga: "Padrãox2",
        tracosEspeciais: ["Confiável"],
        peso: "40kg",
        disponibilidade: "MR"
    },
    {
        nome: "Canhão de Mão",
        tipo: "Projetil Sólido",
        classe: "Pistola",
        alcance: "35m",
        taxaDeTiro: "S/-/-",
        dano: "1d10+4",
        tipoDeDano: "Impacto",
        penetracao: 2,
        municao: 5,
        recarga: "Padrãox2",
        tracosEspeciais: [],
        peso: "3kg",
        disponibilidade: "ES"
    },
    {
        nome: "Metralhadora Pesada",
        tipo: "Projetil Sólido",
        classe: "Pesada",
        alcance: "100m",
        taxaDeTiro: "-/-/8",
        dano: "1d10+4",
        tipoDeDano: "Impacto",
        penetracao: 3,
        municao: 80,
        recarga: "Padrãox2",
        tracosEspeciais: [],
        peso: "30kg",
        disponibilidade: "RA"
    },
    {
        nome: "Espingarda",
        tipo: "Projetil Sólido",
        classe: "Básica",
        alcance: "30m",
        taxaDeTiro: "S/-/-",
        dano: "1d10+4",
        tipoDeDano: "Impacto",
        penetracao: 0,
        municao: 8,
        recarga: "Padrãox2",
        tracosEspeciais: ["Dispersar"],
        peso: "5kg",
        disponibilidade: "PD"
    },
    {
        nome: "Escopeta",
        tipo: "Projetil Sólido",
        classe: "Básica",
        alcance: "30m",
        taxaDeTiro: "S/3/-",
        dano: "1d10+4",
        tipoDeDano: "Impacto",
        penetracao: 0,
        municao: 18,
        recarga: "Padrão",
        tracosEspeciais: ["Dispersar"],
        peso: "6.5kg",
        disponibilidade: "ES"
    },
    {
        nome: "Rifle de Precisão",
        tipo: "Projetil Sólido",
        classe: "Básica",
        alcance: "200m",
        taxaDeTiro: "S/-/-",
        dano: "1d10+4",
        tipoDeDano: "Impacto",
        penetracao: 3,
        municao: 20,
        recarga: "Padrão",
        tracosEspeciais: ["Confiável", "Precisa"],
        peso: "5kg",
        disponibilidade: "ES"
    },
    {
        nome: "Metralhadora Automática",
        tipo: "Projetil Sólido",
        classe: "Pistola",
        alcance: "30m",
        taxaDeTiro: "S/3/-",
        dano: "1d10+3",
        tipoDeDano: "Impacto",
        penetracao: 0,
        municao: 9,
        recarga: "Padrão",
        tracosEspeciais: [],
        peso: "1.5kg",
        disponibilidade: "PD"
    },
    {
        nome: "Revolver",
        tipo: "Projetil Sólido",
        classe: "Pistola",
        alcance: "30m",
        taxaDeTiro: "S/-/-",
        dano: "1d10+3",
        tipoDeDano: "Impacto",
        penetracao: 0,
        municao: 6,
        recarga: "Padrãox2",
        tracosEspeciais: ["Confiável"],
        peso: "1.5kg",
        disponibilidade: "FR"
    },
    {
        nome: "Pistola Grav",
        tipo: "Exótica",
        classe: "Pistola",
        alcance: "15m",
        taxaDeTiro: "S/-/-",
        dano: "1d10+3",
        tipoDeDano: "Impacto",
        penetracao: 6,
        municao: 6,
        recarga: "Padrão",
        tracosEspeciais: ["Concussiva (1)", "Graviton"],
        peso: "3kg",
        disponibilidade: "QU"
    },
    {
        nome: "Rifle Grav",
        tipo: "Exótica",
        classe: "Básica",
        alcance: "30m",
        taxaDeTiro: "S/3/-",
        dano: "1d10+6",
        tipoDeDano: "Impacto",
        penetracao: 8,
        municao: 9,
        recarga: "Padrãox2",
        tracosEspeciais: ["Concussiva (2)", "Graviton"],
        peso: "6kg",
        disponibilidade: "ER"
    },
    {
        nome: "Pistola Agulha",
        tipo: "Exótica",
        classe: "Pistola",
        alcance: "30m",
        taxaDeTiro: "S/-/-",
        dano: "1d10",
        tipoDeDano: "Lacerante",
        penetracao: 0,
        municao: 6,
        recarga: "Padrão",
        tracosEspeciais: ["Precisa", "Sobrenatural (1)", "Tóxica (5)"],
        peso: "1.5kg",
        disponibilidade: "MR"
    },
    {
        nome: "Rifle Agulha",
        tipo: "Exótica",
        classe: "Básica",
        alcance: "180m",
        taxaDeTiro: "S/-/-",
        dano: "1d10",
        tipoDeDano: "Lacerante",
        penetracao: 0,
        municao: 6,
        recarga: "Padrãox2",
        tracosEspeciais: ["Precisa", "Sobrenatural (1)", "Tóxica (5)"],
        peso: "2kg",
        disponibilidade: "MR"
    },
    {
        nome: "Pistola de Teia",
        tipo: "Exótica",
        classe: "Pistola",
        alcance: "30m",
        taxaDeTiro: "S/-/-",
        dano: "-",
        tipoDeDano: "-",
        penetracao: 0,
        municao: 1,
        recarga: "Padrão",
        tracosEspeciais: ["Armadilha (0)"],
        peso: "3.5kg",
        disponibilidade: "MR"
    },
    {
        nome: "Lança Teia",
        tipo: "Exótica",
        classe: "Básica",
        alcance: "50m",
        taxaDeTiro: "S/-/-",
        dano: "-",
        tipoDeDano: "-",
        penetracao: 0,
        municao: 1,
        recarga: "Padrão",
        tracosEspeciais: ["Explosiva (5)", "Armadilha (1)"],
        peso: "8kg",
        disponibilidade: "RA"
    },
    {
        nome: "Granada Cegante",
        tipo: "Explosivo",
        classe: "Lançar",
        alcance: "BFx3",
        taxaDeTiro: "S/-/-",
        dano: "-",
        tipoDeDano: "-",
        penetracao: 0,
        municao: 1,
        recarga: "-",
        tracosEspeciais: ["Fumaça (2)"],
        peso: "0.5kg",
        disponibilidade: "ES"
    },
    {
        nome: "Granada de Asfixia",
        tipo: "Explosivo",
        classe: "Lançar",
        alcance: "BFx3",
        taxaDeTiro: "S/-/-",
        dano: "Especial",
        tipoDeDano: "-",
        penetracao: 0,
        municao: 1,
        recarga: "-",
        tracosEspeciais: ["Explosiva (3)"],
        peso: "0.5kg",
        disponibilidade: "ES"
    },
    {
        nome: "Granada de Fragmento",
        tipo: "Explosivo",
        classe: "Lançar",
        alcance: "BFx3",
        taxaDeTiro: "S/-/-",
        dano: "2d10",
        tipoDeDano: "Explosivo",
        penetracao: 0,
        municao: 1,
        recarga: "-",
        tracosEspeciais: ["Explosiva (3)"],
        peso: "0.5kg",
        disponibilidade: "PD"
    },
    {
        nome: "Granada Alucinógenica",
        tipo: "Explosivo",
        classe: "Lançar",
        alcance: "BFx3",
        taxaDeTiro: "S/-/-",
        dano: "-",
        tipoDeDano: "-",
        penetracao: 0,
        municao: 1,
        recarga: "-",
        tracosEspeciais: ["Explosiva (6)", "Alucinógena (2)"],
        peso: "0.5kg",
        disponibilidade: "ES"
    },
    {
        nome: "Granada de Pulso Elétrico",
        tipo: "Explosivo",
        classe: "Lançar",
        alcance: "BFx3",
        taxaDeTiro: "S/-/-",
        dano: "-",
        tipoDeDano: "-",
        penetracao: 0,
        municao: 1,
        recarga: "-",
        tracosEspeciais: ["Pulso Elétrico (2)"],
        peso: "0.5kg",
        disponibilidade: "MR"
    },
    {
        nome: "Granada Krak",
        tipo: "Explosivo",
        classe: "Lançar",
        alcance: "BFx3",
        taxaDeTiro: "S/-/-",
        dano: "2d10+4",
        tipoDeDano: "Explosivo",
        penetracao: 6,
        municao: 1,
        recarga: "-",
        tracosEspeciais: ["Concussiva (0)"],
        peso: "0.5kg",
        disponibilidade: "RA"
    },
    {
        nome: "Granada de Flash de Fóton",
        tipo: "Explosivo",
        classe: "Lançar",
        alcance: "BFx3",
        taxaDeTiro: "S/-/-",
        dano: "-",
        tipoDeDano: "-",
        penetracao: 0,
        municao: 1,
        recarga: "-",
        tracosEspeciais: ["Explosiva (6)"],
        peso: "0.5kg",
        disponibilidade: "RA"
    },
    {
        nome: "Granada de Fumaça",
        tipo: "Explosivo",
        classe: "Lançar",
        alcance: "BFx3",
        taxaDeTiro: "S/-/-",
        dano: "-",
        tipoDeDano: "-",
        penetracao: 0,
        municao: 1,
        recarga: "-",
        tracosEspeciais: ["Fumaça (4)"],
        peso: "0.5kg",
        disponibilidade: "PD"
    },
    {
        nome: "Granada de Atordoamento",
        tipo: "Explosivo",
        classe: "Lançar",
        alcance: "BFx3",
        taxaDeTiro: "S/-/-",
        dano: "-",
        tipoDeDano: "-",
        penetracao: 0,
        municao: 1,
        recarga: "-",
        tracosEspeciais: ["Explosiva (3)", "Concussiva (2)"],
        peso: "0.5kg",
        disponibilidade: "PD"
    },
    {
        nome: "Granada de Teia",
        tipo: "Explosivo",
        classe: "Lançar",
        alcance: "BFx3",
        taxaDeTiro: "S/-/-",
        dano: "-",
        tipoDeDano: "-",
        penetracao: 0,
        municao: 1,
        recarga: "-",
        tracosEspeciais: ["Explosiva (3)", "Armadilha (2)"],
        peso: "0.5kg",
        disponibilidade: "RA"
    },
    {
        nome: "Míssil de Fragmento",
        tipo: "Explosivo",
        dano: "2d10+2",
        tipoDeDano: "Explosivo",
        penetracao: 2,
        tracosEspeciais: ["Explosiva (5)"],
        peso: "1kg",
        disponibilidade: "CM"
    },
    {
        nome: "Míssil Krak",
        tipo: "Explosivo",
        dano: "3d10+8",
        tipoDeDano: "Explosivo",
        penetracao: 8,
        tracosEspeciais: ["Concussiva (3)", "Efetiva (2)"],
        peso: "1kg",
        disponibilidade: "ES"
    },
    {
        nome: "Bomba de Fogo",
        tipo: "Explosivo",
        classe: "Lançar",
        alcance: "BFx3",
        taxaDeTiro: "S/-/-",
        dano: "1d10+2",
        tipoDeDano: "Energia",
        penetracao: 0,
        municao: 1,
        recarga: "-",
        tracosEspeciais: ["Explosiva (2)", "Chama"],
        peso: "0.5kg",
        disponibilidade: "FR"
    },
    {
        nome: "Bomba Melta",
        tipo: "Explosivo",
        dano: "6d10",
        tipoDeDano: "Energia",
        penetracao: 12,
        municao: 1,
        tracosEspeciais: ["Explosiva (2)", "Chama", "Melta"],
        peso: "12kg",
        disponibilidade: "MR"
    },
    {
        nome: "Machado Corrente",
        tipo: "Corrente",
        classe: "Corpo",
        dano: "1d10+4",
        tipoDeDano: "Lacerante",
        penetracao: 2,
        tracosEspeciais: ["Dilacerante"],
        peso: "13kg",
        disponibilidade: "ES"
    },
    {
        nome: "Faca Corrente",
        tipo: "Corrente",
        classe: "Corpo",
        dano: "1d10+1",
        tipoDeDano: "Lacerante",
        penetracao: 1,
        tracosEspeciais: ["Dilacerante"],
        peso: "2kg",
        disponibilidade: "ES"
    },
    {
        nome: "Espada Corrente",
        tipo: "Corrente",
        classe: "Corpo",
        dano: "1d10+2",
        tipoDeDano: "Lacerante",
        penetracao: 2,
        tracosEspeciais: ["Dilacerante", "Balanceada"],
        peso: "6kg",
        disponibilidade: "CM"
    },
    {
        nome: "Esvicerador",
        tipo: "Corrente",
        classe: "Corpo",
        dano: "2d10",
        tipoDeDano: "Lacerante",
        penetracao: 9,
        tracosEspeciais: ["Dilacerante", "Pesada", "Afiada"],
        peso: "15kg",
        disponibilidade: "MR"
    },
    {
        nome: "Espada de Força",
        tipo: "Força",
        classe: "Corpo",
        dano: "1d10+1",
        tipoDeDano: "Lacerante",
        penetracao: 2,
        tracosEspeciais: ["Balanceada", "Energia"],
        peso: "5kg",
        disponibilidade: "QU"
    },
    {
        nome: "Bastão de Força",
        tipo: "Força",
        classe: "Corpo",
        dano: "1d10",
        tipoDeDano: "Lacerante",
        penetracao: 2,
        tracosEspeciais: ["Energia"],
        peso: "2kg",
        disponibilidade: "ER"
    },
    {
        nome: "Arma Grande",
        tipo: "Arcaica",
        classe: "Corpo",
        dano: "2d10",
        tipoDeDano: "Lacerante",
        penetracao: 0,
        tracosEspeciais: ["Desbalanceada"],
        peso: "7kg",
        disponibilidade: "ES"
    },
    {
        nome: "Lança Explosiva",
        tipo: "Arcaica",
        classe: "Corpo",
        dano: "2d10+3",
        tipoDeDano: "Explosivo",
        penetracao: 7,
        tracosEspeciais: ["Concussiva (3)"],
        peso: "4kg",
        disponibilidade: "ES"
    },
    {
        nome: "Arma Improvisada",
        tipo: "Arcaica",
        classe: "Corpo",
        dano: "1d10-2",
        tipoDeDano: "Impacto",
        penetracao: 0,
        tracosEspeciais: ["Primitiva (7)", "Desbalanceada"],
        peso: "-",
        disponibilidade: "-"
    },
    {
        nome: "Faca",
        tipo: "Arcaica",
        classe: "Corpo/Lançar",
        alcance: "5m",
        dano: "1d5",
        tipoDeDano: "Lacerante",
        penetracao: 0,
        tracosEspeciais: [],
        peso: "1kg",
        disponibilidade: "FR"
    },
    {
        nome: "Escudo",
        tipo: "Arcaica",
        classe: "Corpo",
        dano: "1d5",
        tipoDeDano: "Impacto",
        penetracao: 0,
        tracosEspeciais: ["Defensiva"],
        peso: "3kg",
        disponibilidade: "PD"
    },
    {
        nome: "Lança",
        tipo: "Arcaica",
        classe: "Corpo/Lançar",
        alcance: "5m",
        dano: "1d10",
        tipoDeDano: "Lacerante",
        penetracao: 0,
        tracosEspeciais: ["Primitiva (8)"],
        peso: "3kg",
        disponibilidade: "PD"
    },
    {
        nome: "Bastão",
        tipo: "Arcaica",
        classe: "Corpo",
        dano: "1d10",
        tipoDeDano: "Impacto",
        penetracao: 0,
        tracosEspeciais: ["Primitiva (7)", "Balanceada"],
        peso: "3kg",
        disponibilidade: "FR"
    },
    {
        nome: "Espada",
        tipo: "Arcaica",
        classe: "Corpo",
        dano: "1d10",
        tipoDeDano: "Lacerante",
        penetracao: 0,
        tracosEspeciais: ["Balanceada"],
        peso: "3kg",
        disponibilidade: "PD"
    },
    {
        nome: "Cassetete",
        tipo: "Arcaica",
        classe: "Corpo",
        dano: "1d10",
        tipoDeDano: "Impacto",
        penetracao: 0,
        tracosEspeciais: ["Primitiva (7)"],
        peso: "2kg",
        disponibilidade: "FR"
    },
    {
        nome: "Martelo de Guerra",
        tipo: "Arcaica",
        classe: "Corpo",
        dano: "1d10+3",
        tipoDeDano: "Impacto",
        penetracao: 1,
        tracosEspeciais: ["Concussiva (1)", "Primitiva (8)"],
        peso: "4.5kg",
        disponibilidade: "ES"
    },
    {
        nome: "Chicote",
        tipo: "Arcaica",
        classe: "Corpo",
        alcance: "3m",
        dano: "1d10",
        tipoDeDano: "Lacerante",
        penetracao: 0,
        tracosEspeciais: ["Primitiva (6)", "Flexível"],
        peso: "2kg",
        disponibilidade: "CM"
    },
    {
        nome: "Machado do Omnissian",
        tipo: "Energia",
        classe: "Corpo",
        dano: "2d10+4",
        tipoDeDano: "Energia",
        penetracao: 6,
        tracosEspeciais: ["Campo de Força", "Desbalanceada"],
        peso: "8kg",
        disponibilidade: "ER"
    },
    {
        nome: "Punho de Energia",
        tipo: "Energia",
        classe: "Corpo",
        dano: "2d10+BF*2",
        tipoDeDano: "Energia",
        penetracao: 9,
        tracosEspeciais: ["Campo de Força", "Pesada"],
        peso: "13kg",
        disponibilidade: "MR"
    },
    {
        nome: "Espada de Energia",
        tipo: "Energia",
        classe: "Corpo",
        dano: "1d10+5",
        tipoDeDano: "Energia",
        penetracao: 5,
        tracosEspeciais: ["Campo de Força", "Balanceada"],
        peso: "3kg",
        disponibilidade: "MR"
    },
    {
        nome: "Machado de Energia",
        tipo: "Energia",
        classe: "Corpo",
        dano: "1d10+7",
        tipoDeDano: "Energia",
        penetracao: 7,
        tracosEspeciais: ["Campo de Força", "Desbalanceada"],
        peso: "6kg",
        disponibilidade: "MR"
    },
    {
        nome: "Maça de Energia (Forte)",
        tipo: "Energia",
        classe: "Corpo",
        dano: "1d10+5",
        tipoDeDano: "Energia",
        penetracao: 4,
        tracosEspeciais: ["Campo de Força", "Chocante"],
        peso: "3.5kg",
        disponibilidade: "MR"
    },
    {
        nome: "Maça de Choque",
        tipo: "Choque",
        classe: "Corpo",
        dano: "1d10+3",
        tipoDeDano: "Impacto",
        penetracao: 0,
        tracosEspeciais: ["Chocante"],
        peso: "2.5kg",
        disponibilidade: "ES"
    },
    {
        nome: "Chicote de Choque",
        tipo: "Choque",
        classe: "Corpo",
        alcance: "3m",
        dano: "1d10+3",
        tipoDeDano: "Impacto",
        penetracao: 0,
        tracosEspeciais: ["Chocante", "Flexível"],
        peso: "3kg",
        disponibilidade: "RA"
    },
];
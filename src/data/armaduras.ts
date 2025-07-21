type Armadura = {
    nome: string;
    tipo: string;
    locais: string[];
    defesa: number;
    agilidadeMaxima: number;
    peso: string;
    disponibilidade: string;
};

export const ARMADURAS: Armadura[] = [
    {
        nome: "Tecidos Pesados",
        tipo: "Básica",
        locais: ["Braços", "Corpo"],
        defesa: 1,
        agilidadeMaxima: 100,
        peso: "5kg",
        disponibilidade: "CM"
    },
    {
        nome: "Robes Imperiais",
        tipo: "Básica",
        locais: ["Braços", "Corpo", "Pernas"],
        defesa: 1,
        agilidadeMaxima: 100,
        peso: "4kg",
        disponibilidade: "PD"
    },
    {
        nome: "Colete Corporal",
        tipo: "Básica",
        locais: ["Braços", "Corpo", "Pernas"],
        defesa: 2,
        agilidadeMaxima: 100,
        peso: "5kg",
        disponibilidade: "RA"
    },
    {
        nome: "Cota de Malha",
        tipo: "Básica",
        locais: ["Braços", "Corpo", "Pernas"],
        defesa: 3,
        agilidadeMaxima: 35,
        peso: "15kg",
        disponibilidade: "CM"
    },
    {
        nome: "Armadura Feudal",
        tipo: "Básica",
        locais: ["Cabeça", "Braços", "Corpo", "Pernas"],
        defesa: 5,
        agilidadeMaxima: 25,
        peso: "30kg",
        disponibilidade: "ES"
    },
    {
        nome: "Colete de Pele Xenos",
        tipo: "Básica",
        locais: ["Corpo"],
        defesa: 6,
        agilidadeMaxima: 50,
        peso: "20kg",
        disponibilidade: "MR"
    },
    {
        nome: "Capacete Flak",
        tipo: "Flak",
        locais: ["Cabeça"],
        defesa: 2,
        agilidadeMaxima: 100,
        peso: "2kg",
        disponibilidade: "PD"
    },
    {
        nome: "Manoplas Flak",
        tipo: "Flak",
        locais: ["Braços"],
        defesa: 2,
        agilidadeMaxima: 100,
        peso: "1kg",
        disponibilidade: "PD"
    },
    {
        nome: "Manto de Flak Leve",
        tipo: "Flak",
        locais: ["Braços", "Corpo", "Pernas"],
        defesa: 2,
        agilidadeMaxima: 55,
        peso: "4kg",
        disponibilidade: "ES"
    },
    {
        nome: "Colete Flak",
        tipo: "Flak",
        locais: ["Corpo"],
        defesa: 3,
        agilidadeMaxima: 60,
        peso: "5kg",
        disponibilidade: "PD"
    },
    {
        nome: "Manto de Flak",
        tipo: "Flak",
        locais: ["Braços", "Corpo", "Pernas"],
        defesa: 3,
        agilidadeMaxima: 55,
        peso: "8kg",
        disponibilidade: "ES"
    },
    {
        nome: "Casaco Flak",
        tipo: "Flak",
        locais: ["Braços", "Corpo"],
        defesa: 3,
        agilidadeMaxima: 60,
        peso: "5kg",
        disponibilidade: "PD"
    },
    {
        nome: "Armadura Flak da Guarda Imperial",
        tipo: "Flak",
        locais: ["Cabeça", "Braços", "Corpo", "Pernas"],
        defesa: 4,
        agilidadeMaxima: 50,
        peso: "11kg",
        disponibilidade: "ES"
    },
    {
        nome: "Colete Mesh",
        tipo: "Mesh",
        locais: ["Corpo"],
        defesa: 4,
        agilidadeMaxima: 100,
        peso: "2kg",
        disponibilidade: "RA"
    },
    {
        nome: "Manto Mesh",
        tipo: "Mesh",
        locais: ["Braços", "Corpo", "Pernas"],
        defesa: 4,
        agilidadeMaxima: 60,
        peso: "3kg",
        disponibilidade: "MR"
    },
    {
        nome: "Capacete de Carapaça",
        tipo: "Carapaça",
        locais: ["Cabeça"],
        defesa: 4,
        agilidadeMaxima: 100,
        peso: "2kg",
        disponibilidade: "RA"
    },
    {
        nome: "Manoplas de Carapaça",
        tipo: "Carapaça",
        locais: ["Braços"],
        defesa: 5,
        agilidadeMaxima: 100,
        peso: "2kg",
        disponibilidade: "RA"
    },
    {
        nome: "Grevas de Carapaça",
        tipo: "Carapaça",
        locais: ["Pernas"],
        defesa: 5,
        agilidadeMaxima: 100,
        peso: "3kg",
        disponibilidade: "RA"
    },
    {
        nome: "Carapaça Leve de Milicano",
        tipo: "Carapaça",
        locais: ["Cabeça", "Braços", "Corpo", "Pernas"],
        defesa: 5,
        agilidadeMaxima: 45,
        peso: "15kg",
        disponibilidade: "RA"
    },
    {
        nome: "Peitoral de Carapaça",
        tipo: "Carapaça",
        locais: ["Corpo"],
        defesa: 6,
        agilidadeMaxima: 55,
        peso: "7kg",
        disponibilidade: "RA"
    },
    {
        nome: "Carapaça do Militarum Tempestus",
        tipo: "Carapaça",
        locais: ["Cabeça", "Braços", "Corpo", "Pernas"],
        defesa: 6,
        agilidadeMaxima: 45,
        peso: "15kg",
        disponibilidade: "MR"
    },
    {
        nome: "Armadura de Energia Leve",
        tipo: "Energia",
        locais: ["Cabeça", "Braços", "Corpo", "Pernas"],
        defesa: 7,
        agilidadeMaxima: 40,
        peso: "40kg",
        disponibilidade: "MR"
    }
];

type CampoDeForca = {
    nome: string;
    locais: string[];
    defesa: number;
    taxaProtecao: number;
    peso: string;
    disponibilidade: string;
};

export const CAMPOSFORCA: CampoDeForca[] = [
    {
        nome: "Campo Refrator",
        locais: ["Cabeça", "Braços", "Corpo", "Pernas"],
        defesa: 100,
        taxaProtecao: 30,
        peso: "2kg",
        disponibilidade: "MR",
    },
    {
        nome: "Campo Conversor",
        locais: ["Cabeça", "Braços", "Corpo", "Pernas"],
        defesa: 100,
        taxaProtecao: 50,
        peso: "1kg",
        disponibilidade: "ER",
    },
    {
        nome: "Campo Dispersor",
        locais: ["Cabeça", "Braços", "Corpo", "Pernas"],
        defesa: 100,
        taxaProtecao: 55,
        peso: "2kg",
        disponibilidade: "QU",
    },
    {
        nome: "Campo de Força Pessoal",
        locais: ["Cabeça", "Braços", "Corpo", "Pernas"],
        defesa: 100,
        taxaProtecao: 80,
        peso: "50kg",
        disponibilidade: "QU",
    },
    {
        nome: "Campo de Força Veículo/Estrutura",
        locais: ["Cabeça", "Braços", "Corpo", "Pernas"],
        defesa: 100,
        taxaProtecao: 80,
        peso: "500kg",
        disponibilidade: "MR",
    },
];
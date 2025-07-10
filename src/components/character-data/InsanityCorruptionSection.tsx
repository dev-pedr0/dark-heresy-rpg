import { ABREVIACOES_CARACTERISTICAS } from "@/utils/caracteristicas";
import React, { useEffect, useRef, useState } from "react";

interface Props {
    insanidade: number;
    traumas: string;
    corrupcao: number;
    malignancias_mutacao: string;
    corrupcao_marcados: string[];
    onChangeInsanidade: (novaInsanidade: number, novosTraumas: string) => void;
    onChangeCorrupcao: (novaCorrupcao:number, 
        malignancias_mutacao: string, 
        corrupcao_marcados: string[]) => void;
}

const MARCOS_TRAUMA = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const MARCOS_DESORDEM = [40, 60, 80];
const MARCOS_MUTACAO = [30, 60, 90];

export default function InsanityCorruptionSection(
        {insanidade, traumas, corrupcao, malignancias_mutacao, 
        corrupcao_marcados, onChangeCorrupcao, onChangeInsanidade}: Props) {
    
    const [valor, setValor] = useState(insanidade);
    const [texto, setTexto] = useState(traumas);
    const [avisos, setAvisos] = useState<string[]>([]);
    const prevInsanidade = useRef(insanidade);

    const [corrupcaoLocal, setCorrupcaoLocal] = useState(corrupcao);
    const [textoLocal, setTextoLocal] = useState(malignancias_mutacao);
    const [marcacoes, setMarcacoes] = useState<string[]>(corrupcao_marcados);
    const [avisosCorrup, setAvisosCorrup] = useState<string[]>([]);
    const prevValor = useRef(valor);

    useEffect(() => {
        const novosAvisos: string[] = [];

        MARCOS_TRAUMA.forEach((marco) =>{
            if (prevInsanidade.current < marco && valor >= marco) {
               novosAvisos.push(`⚠️ Risco de trauma! Insanidade passou de ${marco}.`); 
            }
        });

        MARCOS_DESORDEM.forEach((marco) => {
            if (prevInsanidade.current < marco && valor >= marco) {
                novosAvisos.push(`🧠 Você adquiriu uma desordem mental!`);
            }
        });

        if (novosAvisos.length > 0) {
            setAvisos(novosAvisos);
            setTimeout(() => setAvisos([]), 7000);
        }

        prevInsanidade.current = valor;
    }, [valor]);

    useEffect(() => {
        const avisosCorrup: string[] = [];

        MARCOS_TRAUMA.forEach((marco) => {
        if (prevValor.current < marco && corrupcaoLocal >= marco) {
            avisosCorrup.push(`⚠️ Risco de trauma! Corrupção passou de ${marco}.`);
        }
        });

        MARCOS_MUTACAO.forEach((marco) => {
        if (prevValor.current < marco && corrupcaoLocal >= marco) {
            avisosCorrup.push(`🧬 Risco de mutação! (${marco}+)`);
        }
        });

        if (avisosCorrup.length > 0) {
        setAvisosCorrup(avisosCorrup);
        setTimeout(() => setAvisosCorrup([]), 7000);
        }

        prevValor.current = corrupcaoLocal;
    }, [corrupcaoLocal]);

    function handleValorChange(e: React.ChangeEvent<HTMLInputElement>) {
        const novo = parseInt(e.target.value) || 0;
        setValor(novo);
        onChangeInsanidade(novo, texto);
    }

    function handleTextoChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const novo =e.target.value;
        setTexto(novo);
        onChangeInsanidade(valor, novo);
    }

     const handleCorrupcaoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const novo = Math.max(0, Math.min(100, parseInt(e.target.value) || 0));
        setCorrupcaoLocal(novo);
        onChangeCorrupcao(novo, textoLocal, marcacoes);
    };

    const handleTextoCorrupChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const novo = e.target.value;
        setTextoLocal(novo);
        onChangeCorrupcao(corrupcaoLocal, novo, marcacoes);
    };

    const toggleMarcacao = (sigla: string) => {
        let novas: string[];
        if (marcacoes.includes(sigla)) {
        novas = marcacoes.filter((m) => m !== sigla);
        } else {
        novas = [...marcacoes, sigla];
        }
        setMarcacoes(novas);
        onChangeCorrupcao(corrupcaoLocal, textoLocal, novas);
    };

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Insanidade</h2>

                    <div className="flex items-center gap-2">
                        <label className="text-sm text-zinc-300">Valor atual:</label>
                        <input
                            type="number"
                            value={valor}
                            onChange={handleValorChange}
                            className="bg-zinc-800 text-white p-1 rounded border border-zinc-600 w-20"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-zinc-300">Traumas / Desordens:</label>
                        <textarea
                            value={texto}
                            onChange={handleTextoChange}
                            rows={6}
                            className="w-full bg-zinc-800 text-white p-2 mt-1 rounded border border-zinc-600"
                            placeholder="Escreva aqui traumas ou desordens mentais..."
                        />
                    </div>

                    {avisos.length > 0 && (
                        <div className="bg-yellow-900 text-yellow-200 p-2 rounded space-y-1 border border-yellow-500 text-sm">
                            {avisos.map((a, i) => (
                                <div key={i}>{a}</div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Corrupção</h2>

                    <div className="flex items-center gap-2">
                        <label className="text-sm text-zinc-300">Valor atual:</label>
                        <input
                        type="number"
                        min={0}
                        max={100}
                        value={corrupcaoLocal}
                        onChange={handleCorrupcaoChange}
                        className="bg-zinc-800 text-white p-1 rounded border border-zinc-600 w-20"
                        />
                    </div>

                    <div className="mb-0">
                        <label className="text-sm text-zinc-300">Malignâncias / Mutações:</label>
                        <textarea
                        value={textoLocal}
                        onChange={handleTextoCorrupChange}
                        rows={6}
                        className="w-full bg-zinc-800 text-white p-2 mt-1 rounded border border-zinc-600"
                        placeholder="Descreva aqui as mutações ou efeitos malignos..."
                        />
                    </div>               

                    <div className="text-xs text-zinc-400">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {Object.values(ABREVIACOES_CARACTERISTICAS).map((sigla) => (
                                <button
                                    key={sigla}
                                    onClick={() => toggleMarcacao(sigla)}
                                    className={`px-1 py-1 rounded-2xl border text-xs cursor-pointer ${
                                        marcacoes.includes(sigla)
                                        ? "bg-red-600 border-red-500 text-white"
                                        : "bg-zinc-800 border-zinc-600 text-zinc-400"
                                    }`}
                                >
                                    {sigla}
                                </button>
                            ))}
                        </div>
                    </div>

                    {avisosCorrup.length > 0 && (
                        <div className="bg-red-900 text-red-200 p-2 rounded space-y-1 border border-red-500 text-sm">
                            {avisosCorrup.map((a, i) => (
                                <div key={i}>{a}</div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}

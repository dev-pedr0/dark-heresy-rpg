"use client";

import { useEffect, useState } from "react";

interface XpFateSectionProps {
  xpDisponivel: number;
  xpGasto: number;
  destinoLimite: number;
  destinoAtual: number;
  onChange: (data: {
    xpDisponivel: number;
    destinoLimite: number;
    destinoAtual: number;
  }) => void;
}

export default function XpFateSection({
    xpDisponivel,
    xpGasto,
    destinoLimite,
    destinoAtual,
    onChange,
}: XpFateSectionProps) {
    const [xp, setXp] = useState(xpDisponivel);
    const [limite, setLimite] = useState(destinoLimite);
    const [atual, setAtual] = useState(destinoAtual);

    useEffect(() => {
        onChange({
        xpDisponivel: xp,
        destinoLimite: limite,
        destinoAtual: atual > limite ? limite : atual,
        });
    }, [xp, limite, atual]);

    return (
        <section className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="bg-zinc-900 p-4 rounded shadow">
                    <h2 className="text-xl font-semibold text-white mb-2">Experiência</h2>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                        <label className="text-white">XP Disponível</label>
                        <input
                            type="number"
                            className="bg-zinc-800 text-white p-1 rounded w-24 text-right"
                            value={xp}
                            min={0}
                            onChange={(e) => setXp(Number(e.target.value))}
                        />
                        </div>

                        <div className="flex justify-between items-center">
                            <label className="text-white">XP Gasto</label>
                            <span className="text-gray-300 mr-4">{xpGasto}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900 p-4 rounded shadow">
                    <h2 className="text-xl font-semibold text-white mb-2">Pontos de Destino</h2>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                        <label className="text-white">Limite</label>
                        <input
                            type="number"
                            className="bg-zinc-800 text-white p-1 rounded w-24 text-right"
                            value={limite}
                            min={0}
                            onChange={(e) => {
                            const novoLimite = Number(e.target.value);
                            setLimite(novoLimite);
                            if (atual > novoLimite) {
                                setAtual(novoLimite);
                            }
                            }}
                        />
                        </div>

                        <div className="flex justify-between items-center">
                            <label className="text-white">Atual</label>
                            <input
                                type="number"
                                className="bg-zinc-800 text-white p-1 rounded w-24 text-right"
                                value={atual}
                                min={0}
                                max={limite}
                                onChange={(e) =>
                                setAtual(Math.min(Number(e.target.value), limite))
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
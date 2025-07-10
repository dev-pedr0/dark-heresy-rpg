"use cliente"

import APTIDOES_LISTA from "@/data/aptidoes";

interface AptidoesSectionProps {
    aptidoesPersonagem: string[];
    onChange: (novasAptidoes: string[]) => void;
}

export default function AptidoesSection({ 
    aptidoesPersonagem,
    onChange, 
}: AptidoesSectionProps) {

    const toggleAptidao = (aptidao: string) => {
        const temAptidao = aptidoesPersonagem.includes(aptidao);
        const novas = temAptidao
        ? aptidoesPersonagem.filter((a) => a !== aptidao)
        : [...aptidoesPersonagem, aptidao];

        onChange(novas);
    };
    return (
        <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-white">Aptidões</h2>
            <div className="grid grid-cols-2 gap-2">
                {APTIDOES_LISTA.map((aptidao) => {
                const temAptidao = aptidoesPersonagem.includes(aptidao);
                return (
                    <label
                        key={aptidao}
                        className={`flex items-center space-x-2 p-2 rounded ${
                            temAptidao ? "bg-green-600 text-white" : "bg-zinc-800 text-gray-400"
                        }`}
                        onClick={() => toggleAptidao(aptidao)}
                    >
                        <input
                            type="checkbox"
                            checked={temAptidao}
                            readOnly
                            className="form-checkbox h-4 w-4 cursor-pointer"
                        />
                        <span>{aptidao}</span>
                    </label>
                );
                })}
            </div>
        </section>
    );
}
import { PlanetaDeOrigem, planetasDeOrigem } from "@/data/planetas";
import Image from "next/image";
import { useState } from "react";

interface Props {
    onSelect: (origin: PlanetaDeOrigem) => void;
}

export default function OriginSelection({ onSelect }: Props) {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl mb-4 font-bold">Escolha seu Planeta de Origem</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {planetasDeOrigem.map((origin) =>(
                    <div
                    key={origin.id}
                    className={`rounded-xl overflow-hidden border-4 cursor-pointer transition duration-300 ${
                    selected === origin.id ? "border-yellow-500 scale-105" : "border-transparent"
                    }`}
                    onClick={() => {
                        if (selected === origin.id) {
                            onSelect(origin);
                        } else {
                            setSelected(origin.id);
                        }
                    }}>
                        <Image
                        src={origin.imagem.replace("/public", "")}
                        alt={origin.nome}
                        width={300}
                        height={180}
                        className="w-40 h-40 object-cover rounded-xl mx-auto"/>
                        <div className="bg-[#835214] p-3 text-center text-white">
                            <h3 className="text-xl font-bold">{origin.nome}</h3>
                            {selected === origin.id && (
                                <p className="mt-2 text-sm">{origin.descricao}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
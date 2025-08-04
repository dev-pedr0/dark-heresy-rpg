import { Arma } from "@/data/armas";
import { useEffect, useState } from "react";

interface Props {
  armas: Arma[];
  setArmas: (armas: Arma[]) => void;
}

export default function WeaponSection({ armas, setArmas }: Props) {
    const handleChange = (index: number, field: keyof Arma, value: any) => {
    const novasArmas = [...armas];
    novasArmas[index] = { ...novasArmas[index], [field]: value };
    setArmas(novasArmas);
  };

  const handleAddArma = () => {
    setArmas([
      ...armas,
      {
        nome: "",
        tipo: "",
        classe: "",
        alcance: "",
        taxaDeTiro: "",
        dano: "",
        tipoDeDano: "",
        penetracao: 0,
        municao: 0,
        recarga: "",
        tracosEspeciais: [],
        peso: "",
        disponibilidade: "",
        descricao: "",
      },
    ]);
  };

  const handleRemoveArma = () => {
    if (armas.length > 0) {
      setArmas(armas.slice(0, -1));
    }
  };

    return (
        <div className="mt-6 space-y-4">
        <h2 className="text-xl font-bold text-yellow-500 border-b border-gray-600 pb-1">
            Armamento
        </h2>

        {armas.map((arma, index) => (
            <div key={index} className="p-3 border border-gray-700 rounded space-y-2">
                <div className="flex flex-wrap gap-4">
                    {/* Nome */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-300 w-28">Nome</label>
                        <input className="bg-gray-900 text-white p-1 w-48" value={arma.nome} onChange={(e) => handleChange(index, "nome", e.target.value)} />
                    </div>

                    {/* Tipo */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-300 w-28">Tipo</label>
                        <input className="bg-gray-900 text-white p-1 w-48" value={arma.tipo} onChange={(e) => handleChange(index, "tipo", e.target.value)} />
                    </div>

                    {/* Classe */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-300 w-28">Classe</label>
                        <input className="bg-gray-900 text-white p-1 w-48" value={arma.classe || ""} onChange={(e) => handleChange(index, "classe", e.target.value)} />
                    </div>

                    {/* Alcance */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-300 w-28">Alcance</label>
                        <input className="bg-gray-900 text-white p-1 w-48" value={arma.alcance || ""} onChange={(e) => handleChange(index, "alcance", e.target.value)} />
                    </div>

                    {/* Taxa de Tiro */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-300 w-28">Taxa de Tiro</label>
                        <input className="bg-gray-900 text-white p-1 w-48" value={arma.taxaDeTiro || ""} onChange={(e) => handleChange(index, "taxaDeTiro", e.target.value)} />
                    </div>

                    {/* Dano */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-300 w-28">Dano</label>
                        <input className="bg-gray-900 text-white p-1 w-48" value={arma.dano} onChange={(e) => handleChange(index, "dano", e.target.value)} />
                    </div>

                    {/* Tipo de Dano */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-300 w-28">Tipo de Dano</label>
                        <input className="bg-gray-900 text-white p-1 w-48" value={arma.tipoDeDano} onChange={(e) => handleChange(index, "tipoDeDano", e.target.value)} />
                    </div>

                    {/* Penetração */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-300 w-28">Penetração</label>
                        <input type="number" className="bg-gray-900 text-white p-1 w-20" value={arma.penetracao} onChange={(e) => handleChange(index, "penetracao", parseInt(e.target.value))} />
                    </div>

                    {/* Munição */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-300 w-28">Munição</label>
                        <input type="number" className="bg-gray-900 text-white p-1 w-20" value={arma.municao || 0} onChange={(e) => handleChange(index, "municao", parseInt(e.target.value))} />
                    </div>

                    {/* Recarga */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-300 w-28">Recarga</label>
                        <input className="bg-gray-900 text-white p-1 w-32" value={arma.recarga || ""} onChange={(e) => handleChange(index, "recarga", e.target.value)} />
                    </div>

                    {/* Traços Especiais */}
                    <div className="flex items-center gap-2 w-full">
                        <label className="text-sm text-gray-300 w-28">Traços</label>
                        <input className="flex-1 bg-gray-900 text-white p-1" value={arma.tracosEspeciais.join(", ")} onChange={(e) => handleChange(index, "tracosEspeciais", e.target.value.split(",").map((t) => t.trim()))} />
                    </div>

                    {/* Peso */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-300 w-28">Peso</label>
                        <input className="bg-gray-900 text-white p-1 w-32" value={arma.peso} onChange={(e) => handleChange(index, "peso", e.target.value)} />
                    </div>

                    {/* Disponibilidade */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-300 w-28">Disponibilidade</label>
                        <input className="bg-gray-900 text-white p-1 w-32" value={arma.disponibilidade} onChange={(e) => handleChange(index, "disponibilidade", e.target.value)} />
                    </div>

                    {/* Descrição (linha separada) */}
                    <div className="flex items-start gap-2 w-full">
                        <label className="text-sm text-gray-300 w-28 mt-1">Descrição</label>
                        <textarea className="flex-1 bg-gray-900 text-white p-1" value={arma.descricao || ""} onChange={(e) => handleChange(index, "descricao", e.target.value)} />
                    </div>
                </div>
            </div>
        ))}

            <div className="flex gap-2">
                <button
                className="bg-green-700 hover:bg-green-600 px-4 py-1 rounded text-white"
                onClick={handleAddArma}
                >
                Adicionar Arma
                </button>
                <button
                className="bg-red-700 hover:bg-red-600 px-4 py-1 rounded text-white"
                onClick={handleRemoveArma}
                >
                Remover Última
                </button>
            </div>
        </div>
    );
}
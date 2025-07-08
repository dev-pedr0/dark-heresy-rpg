import React from "react";

type Props = {
  aliados: string[];
  inimigos: string[];
  onChange: (field: "aliados" | "inimigos", value: string) => void;
};

const AllyEnemySection = ({ aliados, inimigos, onChange }: Props) => {
  return (
    <div className="flex justify-around gap-4 flex-col md:flex-row">
      <div className="text-center w-full">
        <label className="block text-sm font-medium mb-1">Aliados</label>
        <textarea
          value={aliados.join("\n")}
          onChange={(e) => onChange("aliados", e.target.value)}
          className="w-full h-24 p-2 bg-zinc-800 border border-zinc-600 rounded text-white resize-none"
          placeholder="Liste seus aliados, um por linha"
        />
      </div>

      <div className="text-center w-full">
        <label className="block text-sm font-medium mb-1">Inimigos</label>
        <textarea
          value={inimigos.join("\n")}
          onChange={(e) => onChange("inimigos", e.target.value)}
          className="w-full h-24 p-2 bg-zinc-800 border border-zinc-600 rounded text-white resize-none"
          placeholder="Liste seus inimigos, um por linha"
        />
      </div>
    </div>
  );
};

export default AllyEnemySection;
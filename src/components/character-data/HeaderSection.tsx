import React from "react";

type Props = {
  ficha: any;
  onChange: (field: string, value: string) => void;
};

const HeaderSection = ({ ficha, onChange }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div>
        <label className="block text-sm font-medium">Planeta de Origem</label>
        <input
          value={ficha.origem?.nome || ""}
          onChange={(e) => onChange("origem", e.target.value)}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Background</label>
        <input
          value={ficha.background?.nome || ""}
          onChange={(e) => onChange("background", e.target.value)}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Função</label>
        <input
          value={ficha.funcao?.nome || ""}
          onChange={(e) => onChange("funcao", e.target.value)}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Avanço de Elite</label>
        <input
          value={ficha.dadosFinais?.avançoElite || ""}
          onChange={(e) => onChange("avançoElite", e.target.value)}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Profecia da Divinação</label>
        <input
          value={ficha.dadosFinais?.divinacao?.texto || ""}
          onChange={(e) => onChange("profecia", e.target.value)}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Gênero</label>
        <select
          value={ficha.dadosFinais?.genero}
          onChange={(e) => onChange("genero", e.target.value)}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
        >
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Idade</label>
        <input
          type="number"
          value={ficha.dadosFinais?.idade ?? 0}
          onChange={(e) => onChange("idade", e.target.value)}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Nome do Jogador</label>
        <input
          value={ficha.dadosFinais?.nomeJogador}
          onChange={(e) => onChange("nomeJogador", e.target.value)}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
        />
      </div>
    </div>
  );
};

export default HeaderSection;
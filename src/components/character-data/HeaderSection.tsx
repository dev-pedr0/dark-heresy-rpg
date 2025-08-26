import { Ficha } from "@/app/character-sheet/CharacterSheet";
import React from "react";

type Props = {
  ficha: Ficha;
  onChange: (updates: Partial<Ficha>) => void;
};

export default function HeaderSection ({ ficha, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div>
        <label className="block text-sm font-medium">Planeta de Origem</label>
        <input
          value={ficha.origemNome || ""}
          onChange={(e) => onChange({ origemNome: e.target.value })}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Background</label>
        <input
          value={ficha.backgroundNome || ""}
          onChange={(e) => onChange({ backgroundNome: e.target.value })}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Função</label>
        <input
          value={ficha.funcaoNome || ""}
          onChange={(e) => onChange({ funcaoNome: e.target.value })}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Avanço de Elite</label>
        <input
          value={ficha.avancoElite || ""}
          onChange={(e) => onChange({ avancoElite: e.target.value })}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Profecia da Divinação</label>
        <input
          value={ficha.divinacao?.texto || ""}
          onChange={(e) => onChange({ divinacao: { texto: e.target.value, efeito: ficha.divinacao?.efeito || "" } })}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Gênero</label>
        <select
          value={ficha.genero}
          onChange={(e) => onChange({ genero: e.target.value as "masculino" | "feminino" })}
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
          value={ficha.idade ?? 0}
          onChange={(e) => onChange({ idade: Number(e.target.value) })}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Nome do Jogador</label>
        <input
          value={ficha.nomeJogador}
          onChange={(e) => onChange({ nomeJogador: e.target.value })}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded text-white"
        />
      </div>
    </div>
  );
};
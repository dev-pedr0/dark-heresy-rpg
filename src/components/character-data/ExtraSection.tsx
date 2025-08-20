type Props = {
    ficha: any;
    setFicha: (f: any) => void;
};

export default function ExtraSection({ ficha, setFicha }: Props) {
    const valor = ficha.dadosFinais?.outrasHabilidades || "";

    const atualizar = (texto: string) => {
        setFicha((prev: any) => ({
            ...prev,
            dadosFinais: {
                ...prev.dadosFinais,
                outrasHabilidades: texto,
            },
        }));
    };

    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold text-white mb-2">Extras</h2>
            <textarea
                className="w-full h-40 bg-gray-900 text-white p-2 rounded"
                value={valor}
                onChange={(e) => atualizar(e.target.value)}
                placeholder="Anote aqui outras habilidades, talentos, contatos ou informações relevantes..."
            />
        </div>
    );
}
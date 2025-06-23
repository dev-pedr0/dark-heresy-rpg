import CharacterWizard from "@/components/CharacterWizard";

export default function CreateCharacterPage() {
    return (
        <main className="min-h-screen bg-[#140D0B] text-white py-10">
            <h1 className="text-4xl font-bold text-center text-[#FCB02D] mb-8">
                Criação de Personagem
            </h1>
            <CharacterWizard />
        </main>
    )
}
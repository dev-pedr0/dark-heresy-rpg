import CharacterWizard from "@/components/character-creation/CharacterWizard";

export default function CreateCharacterPage() {
    return (
        <main className="min-h-screen py-10" style={{ backgroundColor: "var(--color-darkblack)", color: "var(--color-text)"}}>
            <h1 className="text-4xl font-bold text-center mb-8" style={{ color: "var(--color-mustard)"}}>
                Criação de Personagem
            </h1>
            <CharacterWizard />
        </main>
    )
}
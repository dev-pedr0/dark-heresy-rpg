import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#140D0B] text-white">
      <h1 className="text-4xl font-bold mb-4 text-[#7D0000]">Dark Heresy 2e</h1>
      <p className="mb-6 text-lg text-white">Sistema online para RPG de mesa</p>
      
      <Link
        href="/login"
        className="bg-[#FCB02D] text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition"
      >
        Fazer Login
      </Link>
    </main>
  );
}

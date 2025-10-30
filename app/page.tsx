import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="w-full flex items-center justify-start px-8 py-4 shadow-md gap-2">
        <Image
          src="/logo.png"
          width={42}
          height={42}
          alt="Jokenpô logo"
          title="Logo do Jokenpô"
        />
        <h1 className="text-lg font-bold">JOKENPÔ</h1>
      </header>
      <main className="max-w-4xl mx-auto py-10 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-3xl rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="bg-white text-gray-800 rounded-2xl px-6 py-4 flex flex-col items-center shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src="/player.png"
                  width={32}
                  height={32}
                  alt="Jogador"
                  title="Foto logo dos chapéus de palha"
                />
              </div>
              <div>
                <Image
                  src="/pedra.png"
                  alt="pedra"
                  title="pedra"
                  width={50}
                  height={50}
                />
                <span className="mt-2 font-medium">Pedra</span>
              </div>
            </div>

            <span className="text-3xl font-bold">VS</span>
            <div className="bg-white text-gray-800 rounded-2xl px-6 py-4 flex flex-col items-center shadow-md">
              <div className="relative flex items-center gap-2 mb-2">
                <Image
                  src="/computador.png"
                  width={32}
                  height={32}
                  alt="Computador"
                  title="Foto logo do franky"
                />
              </div>
              <div>
                <Image
                  src="/pedra.png"
                  alt="pedra"
                  title="pedra"
                  width={50}
                  height={50}
                />
                <span className="mt-2 font-medium">Pedra</span>
              </div>
            </div>

            <div className="bg-white text-gray-800 rounded-2xl p-4 text-center shadow-md">
              <h3 className="font-semibold mb-2 text-blue-700">
                Placar do jogo
              </h3>
              <p className="text-blue-600 font-semibold">👤 1</p>
              <p className="text-red-500 font-semibold">💻 1</p>
              <p className="text-gray-600 text-sm mt-1">Empates: 1</p>
            </div>
          </div>

          <div className="text-center mt-6 mb-2">
            <h2 className="text-green-600">
              Você ganhou!{" "}
              <span className="text-red-600">Você perdeu! Super!</span>{" "}
              <span className="text-gray-600">Empate!</span>
            </h2>
          </div>

          <div className="text-center mt-6 mb-2">
            <p className="text-gray-700 mt-1">Faça sua próxima jogada:</p>
          </div>

          <div className="flex justify-center gap-6 mt-4 mb-6 flex-wrap">
            <button className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl px-6 py-4 hover:shadow-lg transition border-4">
              <Image
                src="/pedra.png"
                alt="pedra"
                title="pedra"
                width={50}
                height={50}
              />
              <span className="mt-2 font-medium">Pedra</span>
            </button>
            <button className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl px-6 py-4 hover:shadow-lg transition border-4">
              <Image
                src="/papel.png"
                alt="papel"
                title="papel"
                width={50}
                height={50}
              />
              <span className="mt-2 font-medium">Papel</span>
            </button>
            <button className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl px-6 py-4 hover:shadow-lg transition border-4">
              <Image
                src="/tesoura.png"
                alt="tesoura"
                title="tesoura"
                width={50}
                height={50}
              />
              <span className="mt-2 font-medium">Tesoura</span>
            </button>
          </div>

          <div className="flex justify-center pb-6">
            <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Reiniciar Jogo
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

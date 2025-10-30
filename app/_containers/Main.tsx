import GameSectionComponent from "./GameSection";
import ResultComponent from "../_components/Result";
import NextPlayedComponent from "../_components/NextPlay";
import ResetButton from "../_components/ResetButton";

const Main = () => {
  return (
    <main className="max-w-4xl mx-auto py-10 flex flex-col items-center justify-center px-4">
      <section className="w-full max-w-3xl rounded-3xl shadow-xl overflow-hidden">
        {/* Jogo */}
        <GameSectionComponent />
        {/* Resultado */}
        <ResultComponent result="vitória"/>
        {/* Próxima jogada */}
        <div className="text-center mt-6 mb-2">
          <p className="text-gray-700 mt-1">Faça sua próxima jogada:</p>
        </div>
        {/* Escolha sua próxima jogada */}
        <NextPlayedComponent />
        {/* Botão para reiniciar o jogo */}
        <ResetButton />
      </section>
    </main>
  );
};

export default Main;

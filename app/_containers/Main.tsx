import GameSectionComponent from "./GameSection";
import ResultComponent from "../_components/Result";
import NextPlay from "../_components/NextPlay";
import ResetButton from "../_components/ResetButton";

const Main = () => {
  return (
    <main className="main">
      <section className="main__section">
        <GameSectionComponent />
        <ResultComponent result="empate" />
        <div className="main__section-text">
          <p>Faça sua próxima jogada:</p>
        </div>
        <NextPlay />
        <ResetButton />
      </section>
    </main>
  );
};

export default Main;

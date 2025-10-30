import PlayerGameComponent from "../_components/PlayerGame";
import ScoreBoarComponent from "../_components/ScoreBoard";

const GameSectionComponent = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <PlayerGameComponent choice="tesoura" playerImg="player" />
      <strong className="text-3xl font-bold">VS</strong>
      <PlayerGameComponent choice="pedra" playerImg="computer" />
      {/* Placar */}
      <ScoreBoarComponent win={10} lose={8} draw={5} />
    </section>
  );
};

export default GameSectionComponent;

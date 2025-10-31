import PlayerGame from "../_components/PlayerGame";
import ScoreBoard from "../_components/ScoreBoard";

const GameSectionComponent = () => {
  return (
    <section className="game-section">
      <div className="game-section__content">
        <PlayerGame choice="tesoura" playerImg="player" />
        <strong className="game-section__content-text">VS</strong>
        <PlayerGame choice="pedra" playerImg="computer" />
      </div>
      <ScoreBoard win={10} lose={8} draw={5} />
    </section>
  );
};

export default GameSectionComponent;

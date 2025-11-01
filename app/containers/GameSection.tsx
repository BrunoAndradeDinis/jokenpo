import PlayerGame from "../components/PlayerGame";
import ScoreBoard from "../components/ScoreBoard";

interface GameSectionProps {
  playerChoice: string | null;
  computerChoice: string | null;
  score: { win: number; lose: number; draw: number };
  waiting?: boolean;
}

const GameSectionComponent = ({
  playerChoice,
  computerChoice,
  score,
  waiting = false,
}: GameSectionProps) => {
  return (
    <section className="game-section">
      <div className="game-section__content">
        <PlayerGame choice={playerChoice} playerImg="player" />
        <strong className="game-section__content-text">VS</strong>
        <PlayerGame
          choice={computerChoice}
          playerImg="computer"
          className={
            waiting && !computerChoice ? "computer-wait is-disabled" : ""
          }
        />
      </div>
      <ScoreBoard win={score.win} lose={score.lose} draw={score.draw} />
    </section>
  );
};

export default GameSectionComponent;

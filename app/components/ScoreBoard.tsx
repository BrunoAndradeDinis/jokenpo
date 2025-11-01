import Image from "next/image";

interface ScoreProps {
  win: number;
  lose: number;
  draw: number;
}

const ScoreBoard = ({ win, lose, draw }: ScoreProps) => {
  return (
    <div className="score-board ">
      <h3 className="score-board__title">Placar do jogo </h3>
      <div className="score-board__players-container">
        <div className="score-board__players-container__content">
          <Image
            src={`/player.png`}
            width={30}
            height={30}
            alt="Jogador"
            title="Foto logo dos chapéus de palha"
          />
          <p className="text-blue-600 font">{win}</p>
        </div>
        <div className="score-board__players-container__content-score-win">
          <Image
            src={`/computer.png`}
            width={23}
            height={26}
            alt="Computador"
            title="Foto logo do Franky"
          />
          <p className="score-board__players-container__content-score-lose"> {lose}</p>
        </div>
      </div>
      <p className="score-board__players-container__content-score-draw">
        Empates: {draw}
      </p>
    </div>
  );
};

export default ScoreBoard;

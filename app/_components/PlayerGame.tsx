import Image from "next/image";

interface PlayerProps {
  playerImg: string;
  choice: string;
}

const PlayerGame = ({ playerImg, choice }: PlayerProps) => {
  return (
    <div className="player ">
      {playerImg === "player" ? (
        <Image
          src={`/${playerImg}.png`}
          width={42}
          height={42}
          alt="Jogador"
          title="Foto logo dos chapéus de palha"
          className={"player__avatar-left"}
        />
      ) : (
        <Image
          src={`/${playerImg}.png`}
          width={42}
          height={42}
          alt="Computador"
          title="Foto logo do Franky"
          className="player__avatar-right"
        />
      )}
      <figure>
        <Image
          src={`/${choice}.png`}
          alt={`${choice}`}
          title={`${choice}`}
          width={50}
          height={50}
        />
        <figcaption className="player__caption-text">
          {choice}
        </figcaption>
      </figure>
    </div>
  );
};

export default PlayerGame;

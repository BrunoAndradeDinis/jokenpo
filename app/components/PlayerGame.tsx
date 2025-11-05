import Image from "next/image";

interface PlayerProps {
  playerImg: string;
  choice: string | null;
  className?: string;
}

const PlayerGame = ({ playerImg, choice, className = "" }: PlayerProps) => {
  return (
    <div className={`player ${className}`}>
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
        {choice ? (
          <>
            <Image
              src={`/${className ? "logo" : choice}.png`}
              alt={`${choice}`}
              title={`${choice}`}
              width={50}
              height={50}
            />
            <figcaption className="player__caption-text">{choice}</figcaption>
          </>
        ) : (
          <>
            <Image
              src={`/logo.png`}
              alt={`jokenpo logo`}
              title={`Jokenpô logo`}
              width={50}
              height={50}
            />
            <figcaption className="player__caption-text">- - - - -</figcaption>
          </>
        )}
      </figure>
    </div>
  );
};

export default PlayerGame;

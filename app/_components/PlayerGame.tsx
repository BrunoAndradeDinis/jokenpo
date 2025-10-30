import Image from "next/image";

interface PlayerProps {
  playerImg: string;
  choice: string;
}

const PlayerGameComponent = ({ playerImg, choice }: PlayerProps) => {
  return (
    <div className="bg-white text-gray-800 rounded-2xl px-6 py-4 flex flex-col items-center shadow-md relative">
      {playerImg === "player" ? (
        <Image
          src={`/${playerImg}.png`}
          width={42}
          height={42}
          alt="Jogador"
          title="Foto logo dos chapéus de palha"
          className={"absolute -top-3 -left-2"}
        />
      ) : (
        <Image
          src={`/${playerImg}.png`}
          width={42}
          height={42}
          alt="Computador"
          title="Foto logo do Franky"
          className="absolute -top-5 -right-2"
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
        <figcaption className="mt-2 font-medium">{choice}</figcaption>
      </figure>
    </div>
  );
};

export default PlayerGameComponent;

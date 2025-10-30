import Image from "next/image";

interface ScoreProps {
  win: number;
  lose: number;
  draw: number;
}

const ScoreBoarComponent = ({ win, lose, draw }: ScoreProps) => {
  return (
    <div className="bg-white text-gray-800 rounded-2xl p-4 text-center shadow-md">
      <h3 className="font-semibold mb-2 text-blue-700">Placar do jogo </h3>
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <Image
            src={`/player.png`}
            width={30}
            height={30}
            alt="Jogador"
            title="Foto logo dos chapéus de palha"
          />
          <p className="text-blue-600 font-semibold">{win}</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={`/computer.png`}
            width={23}
            height={26}
            alt="Computador"
            title="Foto logo do Franky"
          />
          <p className="text-red-500 font-semibold"> {lose}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm mt-1 font-semibold">Empates: {draw}</p>
    </div>
  );
};

export default ScoreBoarComponent;

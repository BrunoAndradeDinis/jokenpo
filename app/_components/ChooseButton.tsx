import Image from "next/image";

interface ChooseProps{
  choose: string
}

const ChooseButton = ({choose}: ChooseProps) => {
  return (
    <button className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl px-6 py-4 hover:shadow-lg transition border-4">
      <Image
        src={`/${choose}.png`}
        alt={choose}
        title={choose}
        width={50}
        height={50}
      />
      <span className="mt-2 font-medium">{choose}</span>
    </button>
  );
};

export default ChooseButton;

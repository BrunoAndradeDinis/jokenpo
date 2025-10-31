import Image from "next/image";

interface ChooseProps {
  choose: string;
}

const ChoiseButton = ({ choose }: ChooseProps) => {
  return (
    <button className="btn-choice">
      <Image
        src={`/${choose}.png`}
        alt={choose}
        title={choose}
        width={50}
        height={50}
      />
      <span className="btn-choice__label">{choose}</span>
    </button>
  );
};

export default ChoiseButton;

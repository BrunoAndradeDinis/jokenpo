import Image from "next/image";

interface ChooseProps {
  choose: string;
  onChoose?: (value: string) => void;
  status?: "win" | "lose" | "draw" | null;
  active?: boolean;
  waiting?: boolean;
}

const ChoiseButton = ({
  choose,
  onChoose,
  status = null,
  active = false,
  waiting = false,
}: ChooseProps) => {
  const statusClass = active
    ? status === "win"
      ? "btn-win"
      : status === "lose"
      ? "btn-lose"
      : status === "draw"
      ? "btn-draw"
      : ""
    : "";
  return (
    <button
      className={`btn-choice ${statusClass}`}
      onClick={() => onChoose?.(choose.toLowerCase())}
      aria-label={`Escolher ${choose}`}
      aria-disabled={waiting}
    >
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

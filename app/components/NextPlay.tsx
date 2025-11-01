import ChoiseButton from "./ChoiceButton";

interface NextPlayProps {
  onChoose: (value: string) => void;
  currentChoice?: string | null;
  result?: "vitória" | "derrota" | "empate" | null;
  waiting?: boolean;
}
type ButtonStatus = "win" | "lose" | "draw" | null;

const NextPlay = ({
  onChoose,
  currentChoice = null,
  result = null,
  waiting = false,
}: NextPlayProps) => {
  const choice = ["pedra", "papel", "tesoura"];
  return (
    <section
      className={`next-play ${waiting ? "is-disabled" : ""}`}
      aria-busy={waiting}
      aria-live="polite"
    >
      {choice.map((choose) => {
        const isActive = currentChoice === choose;
        let status: ButtonStatus = null;
        if (isActive) {
          status =
            result === "vitória"
              ? "win"
              : result === "derrota"
              ? "lose"
              : result === "empate"
              ? "draw"
              : (null as ButtonStatus);
        }
        return (
          <ChoiseButton
            choose={choose}
            key={choose}
            onChoose={onChoose}
            status={status}
            active={isActive}
            waiting={waiting}
          />
        );
      })}
    </section>
  );
};

export default NextPlay;

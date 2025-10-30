
import ChooseButton from "./ChooseButton";

const NextPlayedComponent = () => {
  const choice = ["pedra", "papel", "Tesoura"];
  return (
    <section className="flex justify-center gap-6 mt-4 mb-6 flex-wrap">
      {choice.map((choose) => (
        <ChooseButton choose={choose} key={choose} />
      ))}
    </section>
  );
};

export default NextPlayedComponent;

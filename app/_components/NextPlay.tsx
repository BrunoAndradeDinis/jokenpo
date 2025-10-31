import ChoiseButton from "./ChoiceButton";

const NextPlay = () => {
  const choice = ["pedra", "papel", "Tesoura"];
  return (
    <section className="next-play">
      {choice.map((choose) => (
        <ChoiseButton choose={choose} key={choose} />
      ))}
    </section>
  );
};

export default NextPlay;

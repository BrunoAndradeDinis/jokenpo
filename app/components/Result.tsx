interface ResultProps {
  result: string;
}
const ResultComponent = ({ result }: ResultProps) => {
  return (
    <div className="result">
      <h2
        className={`${
          result === "vitória"
            ? "result__text--win"
            : result === "derrota"
            ? "result__text--lose"
            : "result__text--draw"
        } result__text`}
      >
        {result === "vitória"
          ? "Você ganhou!"
          : result === "derrota"
          ? "Você perdeu!"
          : "Empate!"}
      </h2>
    </div>
  );
};

export default ResultComponent;

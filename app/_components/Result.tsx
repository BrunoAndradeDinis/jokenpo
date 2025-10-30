interface ResultProps {
  result: string;
}
const ResultComponent = ({ result }: ResultProps) => {
  return (
    <div className="text-center mt-6 mb-2">
      <h2
        // className="text-green-600"
        className={
          result === "vitória"
            ? "text-green-600"
            : result === "derrota"
            ? "text-red-600"
            : "text-gray-600"
        }
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

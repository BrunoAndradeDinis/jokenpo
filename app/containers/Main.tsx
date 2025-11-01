"use client";

import GameSectionComponent from "./GameSection";
import ResultComponent from "../components/Result";
import NextPlay from "../components/NextPlay";
import ResetButton from "../components/ResetButton";
import { useCallback, useState, useMemo } from "react";

type Choice = "pedra" | "papel" | "tesoura";
type Result = "vitória" | "derrota" | "empate" | null;
const choices: Choice[] = ["pedra", "papel", "tesoura"];

const Main = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [score, setScore] = useState({ win: 0, lose: 0, draw: 0 });
  const [result, setResult] = useState<Result>(null);
  const [isWaiting, setIsWaiting] = useState(false);

  const getComputerChoice = useCallback((): Choice => {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }, []);

  const decideWinner = useCallback(
    (player: Choice, computer: Choice): Result => {
      if (player === computer) return "empate";
      if (
        (player === "pedra" && computer === "tesoura") ||
        (player === "tesoura" && computer === "papel") ||
        (player === "papel" && computer === "pedra")
      ) {
        return "vitória";
      }
      return "derrota";
    },
    []
  );

  const handleChoose = useCallback(
    (value: string) => {
      const normalized = value.toLowerCase() as Choice;
      if (!choices.includes(normalized)) return;

      const computer = getComputerChoice();
      const decideResult = decideWinner(normalized, computer);

      setPlayerChoice(normalized);
      setIsWaiting(true);
      setTimeout(() => {
        setComputerChoice(computer);
        setResult(decideResult);
        setIsWaiting(false);
      }, 1000);

      setScore((prev) => ({
        win: prev.win + (decideResult === "vitória" ? 1 : 0),
        lose: prev.lose + (decideResult === "derrota" ? 1 : 0),
        draw: prev.draw + (decideResult === "empate" ? 1 : 0),
      }));
    },
    [decideWinner, getComputerChoice]
  );

  const handleReset = useCallback(() => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setScore({ win: 0, lose: 0, draw: 0 });
  }, []);

  const resultText = useMemo<Result>(() => result, [result]);

  return (
    <main className="main">
      <section className="main__section">
        <GameSectionComponent
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          score={score}
          waiting={isWaiting}
        />
        <ResultComponent result={resultText ?? "empate"} />
        <div className="main__section-text">
          <p>Faça sua próxima jogada:</p>
        </div>
        <NextPlay
          onChoose={handleChoose}
          currentChoice={playerChoice}
          result={resultText}
          waiting={isWaiting}
        />
        <ResetButton onReset={handleReset} />
      </section>
    </main>
  );
};

export default Main;

import { useContext } from "react";
import Button from "./Button.jsx";
import { GameContext } from "../store/game-context.jsx";

export default function Menu() {
  const { mistakes, isRunning, difficulty, changeDifficulty, resetBoard } =
    useContext(GameContext);
  const score = 100 / 1.02 ** mistakes;

  return (
    <section className="mt-8">
      <div className="flex justify-center gap-4">
        <Button
          type="easy"
          onClick={() => {
            changeDifficulty("easy");
          }}
          selected={difficulty === "easy"}
        >
          Easy
        </Button>
        <Button
          type="medium"
          onClick={() => {
            changeDifficulty("medium");
          }}
          selected={difficulty === "medium"}
        >
          Medium
        </Button>
        <Button
          type="hard"
          onClick={() => {
            changeDifficulty("hard");
          }}
          selected={difficulty === "hard"}
        >
          Hard
        </Button>
        <Button type="reset" onClick={resetBoard}>
          Reset
        </Button>
      </div>
      {isRunning === 0 && (
        <h1 className="mt-4 font-bold text-stone-50 text-xl animate-pulse">
          Tap on any tile to start...
        </h1>
      )}
      {isRunning === 1 && (
        <h1 className="mt-4 font-bold text-stone-50 text-xl animate-pulse uppercase">
          Memorize the tiles!
        </h1>
      )}
      {isRunning === 2 && (
        <h1 className="mt-4 font-bold text-stone-50 text-xl">
          Match the tiles!
        </h1>
      )}
      {isRunning === 3 && (
        <h1 className="mt-4 font-bold text-stone-50 text-2xl">
          <span className="animate-pulse">YOU WIN!</span>{" "}
          <div className="mt-2">
            <span className="px-2 py-1 rounded-xl bg-green-600">
              Score: {score.toFixed(2)}
            </span>{" "}
            <span className="px-2 py-1 rounded-xl bg-red-500">
              Mistakes: {mistakes}
            </span>
          </div>
        </h1>
      )}
    </section>
  );
}

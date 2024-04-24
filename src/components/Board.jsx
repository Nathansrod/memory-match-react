import { useContext } from "react";
import { GameContext } from "../store/game-context";
import Card from "./Card.jsx";

export default function Board({}) {
  const { history, board, difficulty, checkPair } = useContext(GameContext);
  const lockButtons = history.length >= 2;
  var boardClass =
    "grid md:gap-2 mt-4 p-2 md:p-8 bg-orange-300 border-orange-800 border-2 shadow-md rounded-xl";

  if (difficulty === "easy") {
    boardClass += " grid-cols-3 md:grid-cols-4";
  }
  if (difficulty === "medium") {
    boardClass += " grid-cols-4 md:grid-cols-5";
  }
  if (difficulty === "hard") {
    boardClass += " grid-cols-4 md:grid-cols-6";
  }

  if (history.length >= 2) {
    setTimeout(() => checkPair(), 1000);
  }

  return (
    <section className="flex justify-center">
      <div className={boardClass}>
        {board.map((card) => (
          <Card key={card.id} card={card} lock={lockButtons}/>
        ))}
      </div>
    </section>
  );
}

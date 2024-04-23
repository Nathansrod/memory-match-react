import { useContext } from "react";
import { GameContext } from "../store/game-context";
import Card from "./Card.jsx";

export default function Board({}) {
  const { history, board, difficulty } = useContext(GameContext);
  const lock = history.length === 2;
  var boardClass =
    "grid gap-2 mt-4 p-8 w-fit bg-orange-300 border-orange-800 border-2 shadow-md rounded-xl";

  if (difficulty === "easy") {
    boardClass += " grid-cols-4";
  }
  if (difficulty === "medium") {
    boardClass += " grid-cols-5";
  }
  if (difficulty === "hard") {
    boardClass += " grid-cols-6";
  }

  return (
    <section className="flex justify-center relative">
      <div className={boardClass}>
        {board.map((card) => (
          <Card key={card.id} card={card} disable={lock}/>
        ))}
      </div>
    </section>
  );
}

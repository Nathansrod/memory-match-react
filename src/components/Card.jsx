import { useContext } from "react";
import { GameContext } from "../store/game-context";
import { imgPaths } from "../gameUtils";

export default function Card({card, lock}) {
    const {value, visible} = card;
    const {isRunning, difficulty, flipCard, startGame} = useContext(GameContext);
    const img = imgPaths[value];

    var cardSizeClass = "border-2 border-stone-500 rounded-md bg-stone-50 shadow-md p-1 hover:border-blue-500 hover:border-2 hover:bg-blue-100 select-none";
    if (difficulty == "easy") {
        cardSizeClass += " w-28 h-28 ";
    }
    if (difficulty == "medium") {
        cardSizeClass += " w-24 h-24";
    }
    if (difficulty == "hard") {
        cardSizeClass += " w-20 h-20";
    }
    
    function handleCardClick() {
        if (!lock && !visible && isRunning) {
            flipCard(card);
        }
        if (!isRunning) {
            startGame();
        }
    }

    return <div className={cardSizeClass} onClick={handleCardClick}>
        {visible && <img className="z-0" draggable="false" src={img}/>}
    </div>;
}
import apple from "./assets/apple.jpg";
import avocado from "./assets/avocado.jpg";
import banana from "./assets/banana.jpg";
import blueberry from "./assets/blueberry.jpg";
import cherry from "./assets/cherry.jpg";
import coconut from "./assets/coconut.jpg";
import dragonfruit from "./assets/dragonfruit.jpg";
import grape from "./assets/grape.jpg";
import guava from "./assets/guava.jpg";
import jackfruit from "./assets/jackfruit.jpg";
import kiwi from "./assets/kiwi.jpg";
import lemon from "./assets/lemon.jpg";
import lime from "./assets/lime.jpg";
import mango from "./assets/mango.jpg";
import melon from "./assets/melon.jpg";
import orange from "./assets/orange.jpg";
import papaya from "./assets/papaya.jpg";
import peach from "./assets/peach.jpg";
import pear from "./assets/pear.jpg";
import pineapple from "./assets/pineapple.jpg";
import plum from "./assets/plum.jpg";
import raspberry from "./assets/raspberry.jpg";
import starfruit from "./assets/starfruit.jpg";
import strawberry from "./assets/strawberry.jpg";
import watermelon from "./assets/watermelon.jpg";

export const imgPaths = [
  apple,
  avocado,
  banana,
  blueberry,
  cherry,
  coconut,
  dragonfruit,
  grape,
  guava,
  jackfruit,
  kiwi,
  lemon,
  lime,
  mango,
  melon,
  orange,
  papaya,
  peach,
  pear,
  pineapple,
  plum,
  raspberry,
  starfruit,
  strawberry,
  watermelon,
];

export function checkBoardForWin(board) {
  var isWin = true;

  board.forEach((card) => {
    if (card.visible == false) {
      isWin = false;
    }
  });

  return isWin;
}

export function generateGameBoard(difficulty) {
  var pairs = 0;
  if (difficulty === "easy") {
    pairs = 6;
  }
  if (difficulty === "medium") {
    pairs = 10;
  }
  if (difficulty === "hard") {
    pairs = 18;
  }

  const board = [];
  const cards = [];
  var index = 0;

  while (cards.length < pairs) {
    var newValue = Math.floor(Math.random() * 24);
    while (cards.includes(newValue)) {
      newValue = Math.floor(Math.random() * 24);
    }
    cards.push(newValue);
  }

  cards.forEach((card) => {
    board.push({
      id: index,
      value: card,
      visible: false,
    });
    index++;
    board.push({
      id: index,
      value: card,
      visible: false,
    });
    index++;
  });

  board.sort(() => Math.random() - Math.random());
  return board;
}

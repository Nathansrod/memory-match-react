import { createContext, useReducer } from "react";
import { checkBoardForWin, generateGameBoard } from "../gameUtils";

export const GameContext = createContext({
  board: [],
  history: [],
  isRunning: 0,
  mistakes: 0,
  difficulty: "",
  startGame: () => {},
  changeDifficulty: () => {},
  resetBoard: () => {},
  flipCard: () => {},
  checkPair: () => {},
});

function gameReducer(state, action) {
  if (action.type === "PREP_GAME") {
    return {
      ...state,
      board: state.board.map((card) => {
        return {
          id: card.id,
          value: card.value,
          visible: !card.visible,
          mistakes: 0,
        };
      }),
      isRunning: 1,
    };
  }

  if (action.type === "START_GAME") {
    return {
      ...state,
      board: state.board.map((card) => {
        return {
          id: card.id,
          value: card.value,
          visible: !card.visible,
        };
      }),
      isRunning: 2,
    };
  }

  if (action.type === "CHANGE_DIFFICULTY") {
    const board = generateGameBoard(action.payload);
    return {
      board: [...board],
      isRunning: 0,
      mistakes: 0,
      history: [],
      difficulty: action.payload,
    };
  }

  if (action.type === "RESET") {
    const board = generateGameBoard(state.difficulty);
    return {
      ...state,
      isRunning: 0,
      mistakes: 0,
      history: [],
      board: [...board],
    };
  }

  if (action.type === "FLIP_CARD") {
    const { id, value } = action.payload;
    if (state.history.length === 1) {
      const cardA = state.history[0];
      const cardB = action.payload;
      if (cardA.value === cardB.value) {
        const isWin = checkBoardForWin(state.board);
        if (isWin) {
          return {
            ...state,
            board: state.board.map((card) => {
              if (card.id === id) {
                return {
                  id: card.id,
                  value: card.value,
                  visible: !card.visible,
                };
              } else {
                return card;
              }
            }),
            isRunning: 3,
            history: [],
          };
        }
        return {
          ...state,
          board: state.board.map((card) => {
            if (card.id === id) {
              return {
                id: card.id,
                value: card.value,
                visible: !card.visible,
              };
            } else {
              return card;
            }
          }),
          history: [],
        };
      }
    }
    return {
      ...state,
      history: [...state.history, { id, value }],
      board: state.board.map((card) => {
        if (card.id === id) {
          return {
            id: card.id,
            value: card.value,
            visible: !card.visible,
          };
        } else {
          return card;
        }
      }),
    };
  }

  if (action.type === "UNFLIP_WRONG_PAIR") {
    if (state.history.length === 2) {
      const cardA = state.history[0];
      const cardB = state.history[1];
      const newBoard = state.board.map((card) => {
        if (card.id === cardA.id || card.id === cardB.id) {
          return {
            id: card.id,
            value: card.value,
            visible: !card.visible,
          };
        } else {
          return card;
        }
      });
      return {
        ...state,
        history: [],
        board: newBoard,
        mistakes: state.mistakes + 1,
      };
    }
  }

  return state;
}

export default function GameContextProvider({ children }) {
  const [gameState, setGameDispatch] = useReducer(gameReducer, {
    board: [...generateGameBoard("easy")],
    history: [],
    isRunning: 0,
    mistakes: 0,
    difficulty: "easy",
  });

  function handleChangeGameDifficulty(difficulty) {
    setGameDispatch({
      type: "CHANGE_DIFFICULTY",
      payload: difficulty,
    });
  }

  function handleResetBoard() {
    setGameDispatch({
      type: "RESET",
    });
  }

  function handleFlipCard(card) {
    setGameDispatch({
      type: "FLIP_CARD",
      payload: card,
    });
  }

  function handlePairCheck() {
    setGameDispatch({
      type: "UNFLIP_WRONG_PAIR",
    });
  }

  function handleGameStart() {
    setGameDispatch({
      type: "PREP_GAME",
    });
    setTimeout(
      () =>
        setGameDispatch({
          type: "START_GAME",
        }),
      5000
    );
  }

  const context = {
    board: gameState.board,
    isRunning: gameState.isRunning,
    difficulty: gameState.difficulty,
    history: gameState.history,
    mistakes: gameState.mistakes,
    startGame: handleGameStart,
    changeDifficulty: handleChangeGameDifficulty,
    resetBoard: handleResetBoard,
    flipCard: handleFlipCard,
    checkPair: handlePairCheck,
  };

  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
}

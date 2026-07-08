import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { holder, players } from "../global";
import newGame from "../logic/newGame";
import counter from "../logic/counter";

type GameContextOptions = {
  squares: holder[];
  currPlayer: players;
  xCounter: number;
  oCounter: number;
  winner: winner;
  isGameFinished: boolean;
};

type winner = players | "tie" | undefined;

type GameActionsContextOptions = {
  setSquares: (s: holder[]) => void;
  changeCurrPlayer: () => void;
  xIncrement: () => void;
  oIncrement: () => void;
  setWinner: (w: winner) => void;
  setIsGameFinished: (f: boolean) => void;
};

const intialGameContext: GameContextOptions = {
  squares: Array(9).fill(null),
  currPlayer: "x",
  xCounter: 0,
  oCounter: 0,
  winner: undefined,
  isGameFinished: false,
};

const GameContext = createContext<GameContextOptions | null>(null);

const GameActionsContext = createContext<GameActionsContextOptions | null>(
  null,
);

function GameProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState(intialGameContext);
  const actions: GameActionsContextOptions = useMemo(
    () => ({
      setSquares(s) {
        setValue((g) => ({ ...g, squares: s }));
      },
      changeCurrPlayer() {
        setValue((g) => ({
          ...g,
          currPlayer: g.currPlayer === "x" ? "o" : "x",
        }));
      },
      xIncrement() {
        setValue((g) => ({ ...g, xCounter: ++g.xCounter }));
      },
      oIncrement() {
        setValue((g) => ({ ...g, oCounter: ++g.oCounter }));
      },
      setWinner(w) {
        setValue((g) => ({ ...g, winner: w }));
      },
      setIsGameFinished(f) {
        setValue((g) => ({ ...g, isGameFinished: f }));
      },
    }),
    [],
  );

  if (value.isGameFinished) {
    const {
      setSquares,
      changeCurrPlayer,
      setWinner,
      xIncrement,
      oIncrement,
      setIsGameFinished,
    } = actions;
    newGame({ setSquares, changeCurrPlayer, setWinner, setIsGameFinished });

    if (value.winner && value.winner != "tie")
      counter({ winner: value.winner, xIncrement, oIncrement });
  }

  return (
    <GameContext.Provider value={value}>
      <GameActionsContext.Provider value={actions}>
        {children}
      </GameActionsContext.Provider>
    </GameContext.Provider>
  );
}

const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === null) throw new Error("useGameContext is 'null'");
  return context;
};

const useGameActionsContext = () => {
  const context = useContext(GameActionsContext);
  if (context === null) throw new Error("useGameActionsContext is 'null'");
  return context;
};

export {
  GameContext,
  useGameContext,
  GameProvider,
  GameActionsContext,
  useGameActionsContext,
};

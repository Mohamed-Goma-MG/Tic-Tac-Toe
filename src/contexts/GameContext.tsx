import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { holder, players } from "../global";

type GameContextOptions = {
  squares: holder[];
  currPlayer: players;
  xCounter: number;
  oCounter: number;
  winner: players | undefined;
};

type GameActionsContextOptions = {
  setSquares: (s: holder[]) => void;
  changeCurrPlayer: () => void;
  xIncrement: (n: number) => void;
  oIncrement: (n: number) => void;
  setWinner: (w: players) => void;
};

const intialGameContext: GameContextOptions = {
  squares: Array(9).fill(null),
  currPlayer: "x",
  xCounter: 0,
  oCounter: 0,
  winner: undefined,
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
    }),
    [],
  );

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

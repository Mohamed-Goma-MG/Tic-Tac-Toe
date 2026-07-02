import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { holder, players } from "../global";

type GameContextOptions = {
  currPlayer: holder;
  xCounter: number;
  oCounter: number;
  winner: players | undefined;
};

type GameDispatchContextOptions = {
  setCurrPlayer: (player: players) => void;
  xIncreament: (n: number) => void;
  oIncreament: (n: number) => void;
};

const GameContext = createContext<GameContextOptions>({
  currPlayer: undefined,
  xCounter: 0,
  oCounter: 0,
  winner: undefined,
});

const GameDispatchContext = createContext<GameDispatchContextOptions | null>(
  null,
);

function GameProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState(useGameContext());
  const dispatch: GameDispatchContextOptions = useMemo(
    () => ({
      setCurrPlayer(player) {
        setValue((g) => ({ ...g, currPlayer: player }));
      },
      xIncreament(n) {
        setValue((g) => ({ ...g, xCounter: n }));
      },
      oIncreament(n) {
        setValue((g) => ({ ...g, xCounter: n }));
      },
    }),
    [],
  );

  return (
    <GameContext.Provider value={value}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}

const useGameContext = () => useContext(GameContext);
const useGameDispatchContext = () => useContext(GameDispatchContext);

export {
  GameContext,
  GameProvider,
  useGameContext,
  GameDispatchContext,
  useGameDispatchContext,
};

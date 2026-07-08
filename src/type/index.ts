// === Global === //
export type players = "x" | "o";
export type holder = players | null;
export type winner = players | "tie" | undefined;

// === Game === //
export type gameProps = {
  isGameFinished: boolean;
};
export type gameActions = {
  setIsGameFinished: (f: boolean) => void;
};

// === Squares === //
export type squaresObject = squaresProps & squaresActions;
export type squaresProps = {
  squares: holder[];
};
export type squaresActions = {
  setSquares: (s: holder[]) => void;
};

// === Players === //
export type playersObject = playersProps & playersActions;
export type playersProps = {
  currPlayer: players;
  winner: winner;
};
export type playersActions = {
  setWinner: (w: winner) => void;
  changeCurrPlayer: () => void;
};

// === Counters === //
export type countersObject = countersProps & countersActions;
export type countersProps = {
  xCounter: number;
  oCounter: number;
};
export type countersActions = {
  xIncrement: () => void;
  oIncrement: () => void;
};

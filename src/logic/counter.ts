import type { players } from "../global";

type counter = {
  winner: players;
  xIncrement: () => void;
  oIncrement: () => void;
};

export default function counter({ winner, xIncrement, oIncrement }: counter) {
  if (winner == "x") xIncrement();
  if (winner == "o") oIncrement();
}

import type { holder, players } from "../global";
import calcWinner from "./calcWinner";

type squareClickProps = {
  i: number;
  squares: holder[];
  currPlayer: players;
  winner: players | undefined;
  setSquares: (s: holder[]) => void;
  changeCurrPlayer: () => void;
  setWinner: (w: players) => void;
  setIsGameFinished: (f: boolean) => void;
};

export default function squareClick({
  i,
  squares,
  currPlayer,
  winner,
  setSquares,
  changeCurrPlayer,
  setWinner,
  setIsGameFinished,
}: squareClickProps) {
  if (squares[i] || winner) return;

  // Set Squares
  const newArr = squares.slice();
  newArr[i] = currPlayer;
  setSquares(newArr);

  // Calculate the winner
  const theWinner = calcWinner(newArr);
  if (theWinner) {
    console.log("winner is", theWinner);
    setWinner(theWinner);
    setIsGameFinished(true);
    return;
  }

  // Switch Player
  changeCurrPlayer();
}

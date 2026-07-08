import type { holder, players } from "../global";
import calcWinner from "./calcWinner";
import isNoSquares from "./isNoSquares";

type squareClickProps = {
  i: number;
  squares: holder[];
  currPlayer: players;
  winner: players | undefined;
  setSquares: (s: holder[]) => void;
  changeCurrPlayer: () => void;
  setWinner: (w: players | "tie") => void;
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
  let newArr = squares.slice();
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

  // On Tie
  if (isNoSquares(newArr)) {
    newArr = Array(9).fill(undefined);
    setWinner("tie");
    setIsGameFinished(true);
    return;
  }

  // Switch Player
  changeCurrPlayer();
}

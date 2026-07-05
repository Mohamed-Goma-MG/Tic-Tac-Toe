import { waitingTime, type holder } from "../global";

type newGameProps = {
  changeCurrPlayer: () => void;
  setWinner: (w: holder) => void;
  setSquares: (s: holder[]) => void;
};

export default function newGame({
  setSquares,
  changeCurrPlayer,
  setWinner,
}: newGameProps) {
  setTimeout(() => {
    setSquares(Array(9).fill(null));
    setWinner(undefined);
    changeCurrPlayer();
  }, waitingTime);
}

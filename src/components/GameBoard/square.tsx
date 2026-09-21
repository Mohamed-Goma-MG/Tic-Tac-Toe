import type { holder } from "../../type";
import {
  useGameActionsContext,
  useGameContext,
} from "../../contexts/GameContext";
import squareClick from "../../logic/squareClick";

type squareProps = {
  index: number;
  value: holder;
};

export default function Square({ index, value }: squareProps) {
  const { squares, currPlayer, winner } = useGameContext();
  const { setSquares, changeCurrPlayer, setWinner, setIsGameFinished } =
    useGameActionsContext();

  function handleClick() {
    squareClick({
      i: index,
      squares,
      currPlayer,
      winner,
      setSquares,
      changeCurrPlayer,
      setWinner,
      setIsGameFinished,
    });
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

import Square from "./square";
import style from "./style.module.css";
import {
  useGameActionsContext,
  useGameContext,
} from "../../contexts/GameContext";
import squareClick from "../../logic/squareClick";

export default function GameBoard() {
  const { squares, currPlayer, winner } = useGameContext();
  const { setSquares, changeCurrPlayer, setWinner, setIsGameFinished } =
    useGameActionsContext();

  function handleClick(i: number) {
    squareClick({
      i: i,
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
    <div className={style.board}>
      {squares.map((v, i) => {
        return <Square key={i} value={v} handleClick={() => handleClick(i)} />;
      })}
    </div>
  );
}

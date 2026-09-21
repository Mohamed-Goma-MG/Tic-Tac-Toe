import Square from "./square";
import style from "./style.module.css";
import { useGameContext } from "../../contexts/GameContext";

export default function GameBoard() {
  const { squares } = useGameContext();

  return (
    <div className={style.board}>
      {squares.map((v, i) => {
        return <Square key={i} index={i} value={v} />;
      })}
    </div>
  );
}

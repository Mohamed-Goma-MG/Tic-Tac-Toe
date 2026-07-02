import { useGameContext } from "../../contexts/GameContext";
import zeroBased from "../../utils/zeroBased";
import style from "./style.module.css";

export default function Head() {
  const { xCounter, oCounter } = useGameContext();

  return (
    <div className={style.head}>
      <div className={`${style.player} ${style.playerX}`}>
        <span className="logo">X</span>
        <span className={style.counter}>{zeroBased(xCounter)}</span>
      </div>

      <div className={`${style.player} ${style.playerO}`}>
        <span className="logo">O</span>
        <span className={style.counter}>{zeroBased(oCounter)}</span>
      </div>
    </div>
  );
}

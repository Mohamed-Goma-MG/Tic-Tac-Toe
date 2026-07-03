import clsx from "clsx";
import style from "./style.module.css";
import type { players } from "../../global";

export default function CurrPlayer({ player }: { player: players }) {
  return (
    <h3 className={style.currPlayer}>
      current player
      <span
        className={clsx(style.curr, player === "x" ? style.currX : style.currO)}
      >
        {player}
      </span>
    </h3>
  );
}

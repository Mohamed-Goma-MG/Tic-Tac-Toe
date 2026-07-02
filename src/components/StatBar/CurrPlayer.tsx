import clsx from "clsx";
import style from "./style.module.css";
import type { options } from "../../global";

export default function CurrPlayer() {
  const current: options = "x";
  return (
    <h3 className={style.currPlayer}>
      current player
      <span
        className={clsx(
          style.curr,
          current === "x" ? style.currX : style.currO,
        )}
      >
        {current}
      </span>
    </h3>
  );
}

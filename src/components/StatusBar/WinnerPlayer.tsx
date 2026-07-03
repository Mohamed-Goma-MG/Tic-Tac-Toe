import { useEffect, useRef } from "react";
import type { players } from "../../global";
import style from "./style.module.css";

export default function WinnerPlayer({ player }: { player: players }) {
  let headRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let interval = setInterval(() => {
      if (!headRef.current) return;
      headRef.current.textContent += ".";
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h2
      ref={headRef}
      className={`${style.winner} ${player === "x" ? style.winnerX : style.winnerO}`}
    >
      {player} is winner
    </h2>
  );
}

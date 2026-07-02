import { type ReactNode, useMemo } from "react";
import { numberOfSquares } from "../../global";
import Square from "./square";
import style from "./style.module.css";

export default function GameBoard() {
  const squares: ReactNode[] = useMemo(() => {
    const elements: ReactNode[] = [];
    for (let i = 0; i < numberOfSquares; i++) {
      elements.push(<Square key={i} holder="x" />);
    }
    return elements;
  }, []);

  return <div className={style.board}>{squares}</div>;
}

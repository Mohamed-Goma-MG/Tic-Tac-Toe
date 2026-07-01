import { useMemo, type ReactNode } from "react";
import { numberOfSquares } from "../../global";
import Square from "./square";

export default function GameBoard() {
  const squares: ReactNode[] = useMemo(() => {
    const elements: ReactNode[] = [];
    for (let i = 0; i < numberOfSquares; i++) {
      elements.push(<Square key={i} holder="X" />);
    }
    return elements;
  }, []);

  return <div className="game-board">{squares}</div>;
}

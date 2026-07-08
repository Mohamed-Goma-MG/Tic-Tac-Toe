import { useEffect, useRef } from "react";
import type { players } from "../../global";
import theStyle from "./style.module.css";

export default function WinnerPlayer({ player }: { player: players | "tie" }) {
  let headRef = useRef<HTMLHeadingElement>(null);

  const winningText = " is winner";

  let { text: myText, style: mystyle } =
    player == "x"
      ? { text: player + winningText, style: theStyle.winnerX }
      : player == "o"
        ? { text: player + winningText, style: theStyle.winnerO }
        : { text: "tie", style: theStyle.tie };

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
    <h2 ref={headRef} className={mystyle}>
      {myText}
    </h2>
  );
}

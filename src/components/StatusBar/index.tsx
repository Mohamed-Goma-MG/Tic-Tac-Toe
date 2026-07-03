import { useGameContext } from "../../contexts/GameContext";
import CurrPlayer from "./CurrPlayer";
import WinnerPlayer from "./WinnerPlayer";
import style from "./style.module.css";

export default function StatusBar() {
  const { winner, currPlayer } = useGameContext();
  return (
    <div className={style.statusBar}>
      {winner ? (
        <WinnerPlayer player={winner} />
      ) : (
        <CurrPlayer player={currPlayer} />
      )}
    </div>
  );
}

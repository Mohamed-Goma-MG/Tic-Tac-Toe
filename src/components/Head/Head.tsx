import style from "./style.module.css";

export default function Head() {
  return (
    <div className={style.head}>
      <div className={`${style.player} ${style.playerX}`}>
        <span className="logo">X</span>
        <span className={style.counter}>00</span>
      </div>

      <div className={`${style.player} ${style.playerO}`}>
        <span className="logo">O</span>
        <span className={style.counter}>00</span>
      </div>
    </div>
  );
}

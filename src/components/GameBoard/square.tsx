import type { holder } from "../../global";

type squareProps = {
  holder?: holder;
};

export default function Square({ holder }: squareProps) {
  return <div className="square">{holder}</div>;
}

import type { holder } from "../../global";

type squareProps = {
  value: holder;
  handleClick: () => void;
};

export default function Square({ value, handleClick }: squareProps) {
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

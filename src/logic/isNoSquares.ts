import type { holder } from "../global";

export default function isNoSquares(squares: holder[]) {
  let isThereNoSquares = true;
  const size = squares.length;

  for (let i = 0; i < size; i++) {
    if (!squares[i]) {
      isThereNoSquares = false;
    }
  }

  return isThereNoSquares;
}

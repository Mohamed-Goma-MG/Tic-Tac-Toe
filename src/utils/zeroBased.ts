export default function zeroBased(n: number) {
  const string = n.toString();
  return "0".repeat(string.length) + string;
}

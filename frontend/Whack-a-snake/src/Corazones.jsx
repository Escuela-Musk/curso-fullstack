export default function Corazones({ maxCorazones, numCorazones }) {
  const corazones = Array.from({ length: maxCorazones }, (_, index) => (
    <span>{index < numCorazones ? "❤️" : "🖤"}</span>
  ));
  return <div className="flex">{corazones}</div>;
}

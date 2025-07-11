export default function Snake({ onclick, whackable = false }) {
  return (
    <div
      className={`bg-green-300 border-green-400 border-2 rounded-xl p-8 w-3 h-3 flex items-center justify-center`}
      onClick={onclick}
    >
      <span className={`${!whackable ? "invisible" : "visible"} text-2xl`}>
        🐍
      </span>
    </div>
  );
}

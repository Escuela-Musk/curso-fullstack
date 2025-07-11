import { useEffect, useMemo, useState } from "react";
import Snake from "./Snake";

export default function Grid({
  rows = 3,
  cols = 3,
  onSuccessfulWhack = () => {},
  onFailure = () => {},
}) {
  const snakes = Array.from({ length: rows * cols }, (_, index) => index + 1);

  const [snakeRoja, setSnakeRoja] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let snake;
      do {
        snake = Math.floor(Math.random() * snakes.length + 1);
      } while (snake === snakeRoja);
      setSnakeRoja(snake);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const colClass = useMemo(() => `grid-cols-${cols}`, [cols]);

  return (
    <div className="flex items-center justify-center min-h-fit">
      <div className={`grid ${colClass} gap-2 place-items-center`}>
        {snakes.map((snake) => (
          <Snake
            key={snake}
            whackable={snake === snakeRoja}
            onclick={() => {
              console.log("CLICK");
              if (snake === snakeRoja) {
                console.log("BIEN");
                onSuccessfulWhack();
              } else {
                console.log("FALLO");

                onFailure();
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

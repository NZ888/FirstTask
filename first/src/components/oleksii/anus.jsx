import { useState } from "react";

export default function Hello() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Привет!</h2>
      <p>Нажатий: {count}</p>
      <button onClick={() => setCount(count + 1)}>Нажми</button>
    </div>
  );
}
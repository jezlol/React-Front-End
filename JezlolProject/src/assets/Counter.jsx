import { useState } from 'react';
import './Counter.css'; // Import the CSS file

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="counter-container">
      <h1 className="counter-heading">Count value is: {count}</h1>
      <button onClick={increment} className="fancy-button">Increment</button>
      <button onClick={decrement} className="fancy-button">Decrement</button>
    </div>
  );
}

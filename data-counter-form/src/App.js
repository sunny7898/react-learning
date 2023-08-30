import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("15 Aug 2023");
  date.setDate(date.getDate() + count);

  return (
    <>
      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(event) => setStep(Number(event.target.value))}
      />
      <span>{step}</span>
      <div>
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(event) => setCount(Number(event.target.value))}
        />
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>
      <div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
        {step !== 1 || count != 0 ? (
          <button
            onClick={() => {
              setStep(1);
              setCount(0);
            }}
          >
            Reset
          </button>
        ) : null}
      </div>
    </>
  );
}

export default App;

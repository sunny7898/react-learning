import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    getAdvice();
  }, []);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }

  return (
    <div>
      <h3>{advice}</h3>
      <button onClick={getAdvice}>Click me</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read count <strong>{props.count}</strong> pieces of advice{" "}
    </p>
  );
}

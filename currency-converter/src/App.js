import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [inputCurrency, setInputCurrency] = useState("USD");
  const [outputCurrency, setOutputCurrency] = useState("EUR");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function converter() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${inputCurrency}&to=${outputCurrency}`
          );
          const data = await res.json();
          setResult(data.rates[outputCurrency]);
          setIsLoading(false);
        } catch (err) {
          console.log(err.message);
        }
      }
      if (inputCurrency === outputCurrency) return setResult(amount);
      converter();
    },
    [amount, inputCurrency, outputCurrency]
  );

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setAmount(Number(event.target.value))}
        value={amount}
        disabled={isLoading}
      />
      <select
        value={inputCurrency}
        onChange={(event) => setInputCurrency(event.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={outputCurrency}
        onChange={(event) => setOutputCurrency(event.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{result ? `${result} ${outputCurrency}` : "OUTPUT"}</p>
    </div>
  );
}

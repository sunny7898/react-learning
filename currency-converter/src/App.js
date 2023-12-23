import { useEffect, useState } from "react";

export default function App() {
  const [inputCurrency, setInputCurrency] = useState("");
  const [outputCurrency, setOutputCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  useEffect(
    function () {
      async function converter() {
        try {
          if (amount && inputCurrency !== outputCurrency) {
            const res = await fetch(
              `https://api.frankfurter.app/latest?amount=${Number(
                amount
              )}&from=${inputCurrency}&to=${outputCurrency}`
            );
            const data = await res.json();
            setResult(data.rates[`${outputCurrency}`]);
            console.log(data.rates[`${outputCurrency}`]);
            console.log(amount);
          }
        } catch (err) {
          console.log(err.message);
        }
      }
      converter();
    },
    [inputCurrency, outputCurrency, amount]
  );

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setAmount(event.target.value)}
        value={amount}
      />
      <select
        onChange={(event) => setInputCurrency(event.target.value)}
        value={inputCurrency}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        onChange={(event) => setOutputCurrency(event.target.value)}
        value={outputCurrency}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{result ? result : "OUTPUT"}</p>
    </div>
  );
}

import { useState } from "react";
import { BillInput } from "./components/BillInput";
import { SelectPercentage } from "./components/SelectPercentage";
import { OutputBill } from "./components/OutputBill";
import { Reset } from "./components/Reset";

export default function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [friendTipPercentage, setFriendTipPercentage] = useState(0);

  function handleBillAmountChange(newBillAmount) {
    setBillAmount(newBillAmount);
  }
  function handleTipPercentage(newTipPercentage) {
    setTipPercentage(newTipPercentage);
  }

  function handleFriendTipPercentage(newTipPercentage) {
    setFriendTipPercentage(newTipPercentage);
  }

  const totalTip = billAmount * ((tipPercentage + friendTipPercentage) / 100);
  const totalBill = billAmount + totalTip;

  function handleReset() {
    setBillAmount(0);
    setTipPercentage(0);
    setFriendTipPercentage(0);
  }

  return (
    <div>
      <BillInput billAmount={billAmount} onInput={handleBillAmountChange} />
      <SelectPercentage
        tipPercentage={tipPercentage}
        onSelect={handleTipPercentage}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        tipPercentage={friendTipPercentage}
        onSelect={handleFriendTipPercentage}
      >
        How did your friend like the service?
      </SelectPercentage>
      <OutputBill totalBill={totalBill} totalTip={totalTip} />
      <Reset onReset={handleReset} />
    </div>
  );
}

export function BillInput({ billAmount, onInput }) {
  return (
    <div>
      <span>How much was the bill ?</span>
      <input
        type="number"
        onkeypress="return event.charCode >= 48"
        placeholder="Enter bill amount"
        min="0"
        value={billAmount}
        onChange={(e) => onInput(Number(e.target.value))}
      />
    </div>
  );
}

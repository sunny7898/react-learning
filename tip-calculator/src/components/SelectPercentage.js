export function SelectPercentage({ children, tipPercentage, onSelect }) {
  return (
    <div>
      <span>{children}</span>
      <select
        value={tipPercentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option key={1} value={0}>
          Dissatisfied (0%)
        </option>
        <option key={2} value={10}>
          It was okay (10%)
        </option>
        <option key={3} value={15}>
          It was amazing (15%)
        </option>
        <option key={3} value={20}>
          Outstanding (20%)
        </option>
      </select>
    </div>
  );
}

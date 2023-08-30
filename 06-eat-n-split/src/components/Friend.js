import { Button } from "./Button";

export function Friend({ name, image, balance, currOpen, onSetCurrOpen }) {
  const isOpen = name === currOpen;

  return (
    <li>
      <img src={image} alt="User profile" />
      <h3>{name}</h3>
      <p className={balance === 0 ? "" : balance > 0 ? "green" : "red"}>
        {balance === 0
          ? `You and ${name} are even`
          : balance > 0
          ? `${name} ows you ₹${Math.abs(Number(balance))}`
          : `You owe ${name} ₹${Math.abs(Number(balance))}`}
      </p>
      <Button onClick={() => onSetCurrOpen(name)}>
        {isOpen ? "Close" : "Select"}
      </Button>
    </li>
  );
}

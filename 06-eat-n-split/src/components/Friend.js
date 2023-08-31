import { Button } from "./Button";

export function Friend({ friend, selectedFriend, onSetSelectedFriend }) {
  const { name, image, balance } = friend;
  const isSelected = selectedFriend?.id === friend.id;

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
      <Button onClick={() => onSetSelectedFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

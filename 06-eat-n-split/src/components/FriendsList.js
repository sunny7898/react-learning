import { Friend } from "./Friend";

export function FriendsList({ friendsList, currOpen, onSetCurrOpen }) {
  return (
    <ul>
      {friendsList.map((friend) => (
        <Friend
          key={friend.id}
          name={friend.name}
          image={friend.image}
          balance={friend.balance}
          currOpen={currOpen}
          onSetCurrOpen={onSetCurrOpen}
        />
      ))}
    </ul>
  );
}

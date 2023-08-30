import { Friend } from "./Friend";

export function FriendsList({ friendsList }) {
  return (
    <ul>
      {friendsList.map((friend) => (
        <Friend
          key={friend.id}
          name={friend.name}
          image={friend.image}
          balance={friend.balance}
        />
      ))}
    </ul>
  );
}

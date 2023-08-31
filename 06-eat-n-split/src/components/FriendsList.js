import { Friend } from "./Friend";

export function FriendsList({
  friendsList,
  selectedFriend,
  onSetSelectedFriend,
}) {
  return (
    <ul>
      {friendsList.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSetSelectedFriend={onSetSelectedFriend}
        />
      ))}
    </ul>
  );
}

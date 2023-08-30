const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendsList() {
  return (
    <ul>
      {initialFriends.map((friend) => (
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

function Friend({ name, image, balance }) {
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
      <Button>Select</Button>
    </li>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👯Friend name</label>
      <input type="text" />
      <label>🖼️Image URL </label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH X</h2>
      <label>💰 Bill value</label>
      <input type="number" min="1" />
      <label>🕴️ Your expense</label>
      <input type="number" min="1" />
      <label>🧑‍🤝‍🧑 X's expense</label>
      <input type="text" disabled />
      <label>.🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="X">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

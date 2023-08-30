import { Button } from "./Button";

export function FormSplitBill() {
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

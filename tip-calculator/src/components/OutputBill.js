export function OutputBill({ totalBill, totalTip }) {
  return (
    <div>
      <p>
        You pay ₹{totalBill} (₹{Number(totalBill - totalTip)} + ₹{totalTip} tip)
      </p>
    </div>
  );
}

import { memo } from "react";

const Buttons = memo(({ onIncNumber, onDecNumber  }) => {
  console.log(`render button`);
  return (
    <div className="Buttons">
      <button onClick={onIncNumber}>Add Number</button> <br /><br />
      <button onClick={onDecNumber}>Dec Number</button> <br />
    </div>
  )
});

export default Buttons
 
 import { useState } from "react";
 
 export default function CheckBox(){
    const items = [
      {
        subscriberId: 1001,
        amount: 100,
      },
      {
        subscriberId: 1002,
        amount: 300,
      },
      {
        subscriberId: 1003,
        amount: 500,
      },
    ];
    const [checked, setChecked] = useState([]);
    const handleChange = (item, checked) =>
      checked
        ? setChecked((prev) => [...prev, item])
        : setChecked((prev) =>
            prev.filter((c) => c.subscriberId !== item.subscriberId && c.amount !== item.amount)
          );
  
    return (
      <div>
        {items.map((c) => {
          return (
            <div>
              <input type="checkbox" onChange={(e) => handleChange(c, e.target.checked)} />
              {`subscriber ${c.subscriberId}, amount ${c.amount}`}
            </div>
          );
        })}
        <p>Total {checked.reduce((sum, { amount }) => sum + amount, 0)}</p>
      </div>
    );
  };
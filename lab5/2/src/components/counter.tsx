import React from "react";

function Counter() {
  const v = JSON.parse(
    localStorage.getItem("counter") || JSON.stringify({ c: 0 })
  )["c"];
  const [c, setC] = React.useState(v);
  function increment() {
    localStorage.setItem("counter", JSON.stringify({ c: c + 1 }));
    console.log("Counter increased to", c + 1);
    setC(c + 1);
  }
  return (
    <div>
      <span>{c}</span>
      <button onClick={increment}>Add</button>
    </div>
  );
}

export default Counter;

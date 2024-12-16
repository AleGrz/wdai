import React from "react";
import styles from "./counter.module.css";

function Counter() {
  const [c, setC] = React.useState(0);
  function increment() {
    console.log("Counter increased to", c + 1);
    setC(c + 1);
  }
  return (
    <div className={styles.counter}>
      <span>{c}</span>
      <button onClick={increment}>Add</button>
    </div>
  );
}

export default Counter;

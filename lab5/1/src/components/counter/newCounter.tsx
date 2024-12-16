import React from "react";
import Button from "./button";
import styles from "./counter.module.css";

function NewCounter() {
  const [c, setC] = React.useState(0);
  function increment() {
    console.log("Counter increased to", c + 1);
    setC(c + 1);
  }
  return (
    <div className={styles.counter}>
      <h3>{c}</h3>
      <Button onClick={increment} />
    </div>
  );
}

export default NewCounter;

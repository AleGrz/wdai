import React from "react";
import styles from "./counter.module.css";

function Countdown() {
  const [count, setCount] = React.useState(150);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (active && count > 0) {
      const timer = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 100);
      return () => clearInterval(timer);
    } else if (count <= 0) {
      setActive(false);
    }
  }, [active, count]);

  function handleButton() {
    if (count <= 0) return;
    setActive((prev) => !prev);
  }

  const buttonText =
    count <= 0 ? "Countdown finished" : active ? "Stop" : "Start";

  return (
    <div className={styles.counter}>
      <h3>{(count / 10).toFixed(1)}s</h3>
      <button onClick={handleButton} disabled={count <= 0}>
        {buttonText}
      </button>
    </div>
  );
}

export default Countdown;

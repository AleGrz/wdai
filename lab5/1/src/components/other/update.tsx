import React from "react";
import styles from "./other.module.css";

function Update() {
  const [state, setState] = React.useState({ name: "Tomato", price: 50 });

  return (
    <div className={styles.container}>
      <h3>
        {state.name} costs {state.price}
      </h3>
      <button
        onClick={() => setState((prevState) => ({ ...prevState, price: 100 }))}
      >
        Update
      </button>
    </div>
  );
}

export default Update;

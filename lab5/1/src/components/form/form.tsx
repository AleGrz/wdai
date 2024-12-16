import React from "react";
import styles from "./form.module.css";

function Form() {
  const [v, setV] = React.useState("");

  function change(e: React.ChangeEvent<HTMLInputElement>) {
    setV(e.target.value);
  }

  return (
    <form className={styles.f}>
      <input type="text" onInput={change} />
      <h3>{v}</h3>
    </form>
  );
}

export default Form;

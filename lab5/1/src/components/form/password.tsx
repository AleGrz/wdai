import React from "react";
import styles from "./form.module.css";

function Password() {
  const [status, setStatus] = React.useState("Enter password");
  const p1 = React.createRef<HTMLInputElement>();
  const p2 = React.createRef<HTMLInputElement>();
  function onChange(_: any) {
    if (p1.current!.value === "" && p2.current!.value === "") {
      setStatus("Enter password");
    } else if (p1.current!.value === p2.current!.value) {
      setStatus("");
    } else {
      setStatus("Password mismatch");
    }
  }
  return (
    <div className={styles.f}>
      <span>Password</span>
      <input type="password" ref={p1} onInput={onChange} />
      <span>Repeat Password</span>
      <input type="password" ref={p2} onInput={onChange} />
      <h3>{status}</h3>
    </div>
  );
}

export default Password;
